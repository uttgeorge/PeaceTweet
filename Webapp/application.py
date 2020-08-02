from flask import Flask, redirect, url_for, request, render_template, jsonify, Markup
from utils import *

app = Flask(__name__)


### HOMEPAGE ###
@app.route('/', methods=['GET', 'POST'])
def index():
    return render_template('index.html')

### ABOUT ###
@app.route('/about/', methods=['GET', 'POST'])
def about():
    return render_template('about.html')


## TWEET ###
@app.route('/tweet/', methods=['GET', 'POST'])
def tweet():
    return render_template('tweet.html')


@app.route('/tweet/predict/', methods=['GET', 'POST'])
def predict():
    """
	Takes input from the TweetRater form box and returns a prediction JSON consisting of:
	 	1) a string stating the predicted classification rating and the model's confidence
	  	2) an integer representing the predicted rating
	This JSON is used by the page's associated javascript to append new elements to the page.
	"""

    tweet = request.args.get('tweet')
    prediction, rating = sentence_prediction(tweet)
    return jsonify(prediction=prediction, rating=rating)


if __name__ == '__main__':
    app.run()
