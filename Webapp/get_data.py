from utils import *

# insert_table(id, tweets,username,posttime,postdate,emotion,angry,fear,joy,love,sadness,suprise)
import requests
import json
import datetime


server = 'twwet.database.windows.net'
database = 'tweetemotion'
username = 'uttgeorge'
password = 'Jinqi-19920302'

url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=realDonaldTrump&count=10&tweet_mode=extended"
payload = {}
headers = {
  'Authorization': 'Bearer AAAAAAAAAAAAAAAAAAAAAMknFAEAAAAAxaBHA%2FDqf4YHQF%2BVgLsNErI7hN4%3DCt4Ko75Oil6q1ri3iWkf0wGGYohUBeI9fGonq95cEbHDMrPTR3',
  'Cookie': 'personalization_id="v1_qa+fPt8X2YHZT+uHm+1ggQ=="; guest_id=v1%3A159626840395183820'
}

conn = pyodbc.connect(
    'DRIVER={ODBC Driver 17 for SQL Server};SERVER=' + server + ';DATABASE=' + database + ';UID=' + username + ';PWD=' + password)
cursor = conn.cursor()

response = requests.request("GET", url, headers=headers, data = payload)
res = response.text.encode('utf8')
res = json.loads(res)
data = []
for row in res:
    id = int(row['id'])
    print(id)
    tweets = row['full_text']
    print(tweets)
    username = row['user']['name']
    x = row['created_at']
    posttime = datetime.datetime.strptime(x, '%a %b %d %H:%M:%S %z %Y').strftime('%H:%M:%S %Z')
    postdate = datetime.datetime.strptime(x, '%a %b %d %H:%M:%S %z %Y').strftime('%d/%m/%Y')
    emotion, probabilities = sentence_prediction(tweets)
    print(emotion)
    print(probabilities)
    angry = probabilities[0][0]
    fear = probabilities[0][1]
    joy = probabilities[0][2]
    love = probabilities[0][3]
    sadness = probabilities[0][4]
    suprise = probabilities[0][5]
    print('flag')
    # with insert_table(cursor, id, tweets, username, posttime, postdate, emotion, angry, fear, joy, love, sadness, suprise):
    #     print('good')
    data.append([id, tweets, username, posttime, postdate, emotion, angry, fear, joy, love, sadness, suprise])
print(data)

# if __name__=='__main__':
#     res = api_request()
#     write_emotion_to_table(res)