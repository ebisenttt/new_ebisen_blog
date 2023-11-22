import os
import tweepy
import sys
import datetime
from dotenv import load_dotenv

def twitter_authorize():
  load_dotenv('.env.local') # テスト用

  consumer_key = os.environ.get('TWITTER_CONSUMER_KEY')
  consumer_secret = os.environ.get('TWITTER_CONSUMER_SECRET')
  bearer_token = os.environ.get('TWITTER_BEARER_TOKEN')
  access_token = os.environ.get('TWITTER_ACCESS_TOKEN')
  access_token_secret = os.environ.get('TWITTER_ACCESS_TOKEN_SECRET')

  client = tweepy.Client(
    consumer_key = consumer_key,
    consumer_secret = consumer_secret,
    bearer_token = bearer_token,
    access_token = access_token,
    access_token_secret = access_token_secret
  )

  return client

def tweet():
  # filename = sys.argv[1]
  client = twitter_authorize()

  tweet_text = "テスト投稿です" + datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')
  result = client.create_tweet(text = tweet_text)
  print(result)

def main():
  tweet()

if __name__ == '__main__':
  main()