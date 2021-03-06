import numpy as np
import re
import pyodbc

from transformers import BertTokenizer
from transformers import BertModel

import torch
import torch.nn as nn

import requests
import json
import datetime

### config ###
checkpoint_path = '../Webapp/static/model/emotion_model.bin'
BERT_PATH = 'bert-base-uncased'
MAX_LEN = 80

server = 'twwet.database.windows.net'
database = 'tweetemotion'
username = 'uttgeorge'
password = 'Jinqi-19920302'

TOKENIZER = BertTokenizer.from_pretrained(
    BERT_PATH,
    do_lower_case=True
)

if torch.cuda.is_available():
    device = torch.device('cuda')
else:
    device = torch.device('cpu')


### Preprocessing ###

def text_preprocessing(text):
    # Remove '@name:'
    text = re.sub(r'.@.\w+[:]', '', text)
    # Remove '@name'
    text = re.sub(r'([@])\w*', '', text)
    # Remove '&#'
    text = re.sub(r'[\&]#\w+;', '', text)
    # Remove '!RT'
    text = re.sub(r'!+\sRT', '', text)
    # Remove 'RT' re-tweet
    text = re.sub(r'RT', '', text)
    # Replace '&amp;' with '&'
    text = re.sub(r'&amp;', '&', text)
    # Remove trailing whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    # Remove url
    text = re.sub(r'http\S+', '', text).strip()

    return text


### Model ###

class BERTBaseUncased(nn.Module):
    def __init__(self):
        super(BERTBaseUncased, self).__init__()
        self.bert = BertModel.from_pretrained(BERT_PATH)
        self.bert_drop = nn.Dropout(0.3)
        self.out = nn.Linear(768, 6)

    def forward(self, ids, mask, token_type_ids):
        _, o2 = self.bert(ids, attention_mask=mask, token_type_ids=token_type_ids)
        bo = self.bert_drop(o2)
        output = self.out(bo)
        return output


### Predict ###
def sentence_prediction(text):
    tokenizer = TOKENIZER
    max_len = MAX_LEN
    text = text_preprocessing(text)

    if text == '':
        zeors = np.array([[0.0, 0.0, 0.0, 0.0, 0.0, 0.0]])
        return 'Unknown', zeors
    else:
        inputs = tokenizer.encode_plus(
            text,  # Preprocess sentence
            text_pair=None,
            add_special_tokens=True,  # Add '[CLS]' and '[SEP]'
            truncation=True,
            max_length=max_len,  # Note: The max length of charaters in Tweet is 280
            return_token_type_ids=True,  # Return Token_type_ids, here should be 0
            pad_to_max_length=True,  # Pad sentence to max
            return_attention_mask=True,  # Return attention mask
            # return_tensors = 'pt',               # Return PyTorch tensors
        )

        ids = inputs["input_ids"]
        mask = inputs["attention_mask"]
        token_type_ids = inputs["token_type_ids"]

        ids = torch.tensor(ids, dtype=torch.long).unsqueeze(0)
        mask = torch.tensor(mask, dtype=torch.long).unsqueeze(0)
        token_type_ids = torch.tensor(token_type_ids, dtype=torch.long).unsqueeze(0)

        ids = ids.to(device, dtype=torch.long)
        token_type_ids = token_type_ids.to(device, dtype=torch.long)
        mask = mask.to(device, dtype=torch.long)

        mymodel = BERTBaseUncased()
        mymodel.load_state_dict(
            {k.replace('module.', ''): v for k, v in torch.load(checkpoint_path, map_location=device).items()})
        mymodel.to(device)
        outputs = mymodel(ids=ids, mask=mask, token_type_ids=token_type_ids)

        outputs = torch.softmax(outputs, dim=1).cpu().detach().numpy()

        return ['anger', 'fear', 'joy', 'love', 'sadness', 'surprise'][np.argmax(outputs)], outputs.tolist()





### Insert into the table ###
def insert_table(cursor, data):
    tsql = r"""
    INSERT INTO dbo.Tweets (id, tweets,username,posttime,postdate,emotion,angry,fear,joy,love,sadness,suprise)
    VALUES ?--(?,?,?,?,?,?,?,?,?,?,?,?)
    """
    cursor.execute(tsql, data)

### Read table ###
def read_table(cursor):
    tsql = "SELECT * FROM dbo.Tweets;"
    with cursor.execute(tsql):
        rows = cursor.fetchall()
    return rows



def trump_api_request():
    url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=200&tweet_mode=extended"
    payload = {}
    headers = {
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAMknFAEAAAAAxaBHA%2FDqf4YHQF%2BVgLsNErI7hN4%3DCt4Ko75Oil6q1ri3iWkf0wGGYohUBeI9fGonq95cEbHDMrPTR3',
      'Cookie': 'personalization_id="v1_qa+fPt8X2YHZT+uHm+1ggQ=="; guest_id=v1%3A159626840395183820'
    }

    response = requests.request("GET", url, headers=headers, data = payload)
    res = response.text.encode('utf8')
    res = json.loads(res)
    return res

def biden_api_request():
    url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=JoeBiden&count=200&tweet_mode=extended"
    payload = {}
    headers = {
      'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAMknFAEAAAAAxaBHA%2FDqf4YHQF%2BVgLsNErI7hN4%3DCt4Ko75Oil6q1ri3iWkf0wGGYohUBeI9fGonq95cEbHDMrPTR3',
      'Cookie': 'personalization_id="v1_qa+fPt8X2YHZT+uHm+1ggQ=="; guest_id=v1%3A159626840395183820'
    }

    response = requests.request("GET", url, headers=headers, data = payload)
    res = response.text.encode('utf8')
    res = json.loads(res)
    return res

def write_emotion_to_table(cursor, res):
    for row in res:
        id = int(row['id'])
        print(f'id: {id}')
        tweets = row['full_text']
        print(f'tweets: {tweets}')
        username = row['user']['name']
        print(f'username: {username}')
        x = row['created_at']
        print(f'x: {x}')
        posttime = datetime.datetime.strptime(x, '%a %b %d %H:%M:%S %z %Y').strftime('%H:%M:%S %Z')
        postdate = datetime.datetime.strptime(x, '%a %b %d %H:%M:%S %z %Y').strftime('%d/%m/%Y')
        emotion, probabilities = sentence_prediction(tweets)
        print(f'emotion: {emotion}')
        print(f'probabilities: {probabilities}')
        angry = probabilities[0][0]
        fear = probabilities[0][1]
        joy = probabilities[0][2]
        love = probabilities[0][3]
        sadness = probabilities[0][4]
        suprise = probabilities[0][5]
        tsql = r"""
            INSERT INTO dbo.Tweets (id, tweets,username,posttime,postdate,emotion,angry,fear,joy,love,sadness,suprise)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?)
            """
        with cursor.execute(tsql, id, tweets,username,posttime,postdate,emotion,angry,fear,joy,love,sadness,suprise):
            print('ok')

if __name__ == '__main__':
    ### Access Database ###

    conn = pyodbc.connect(
        'DRIVER={ODBC Driver 17 for SQL Server};SERVER=' + server + ';DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
    cursor = conn.cursor()
    res = trump_api_request()
    write_emotion_to_table(cursor, res)
    # res = biden_api_request()
    # write_emotion_to_table(cursor, res)
