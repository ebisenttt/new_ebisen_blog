import os
import tweepy
import sys
# from dotenv import load_dotenv テスト用

BASE_URL = 'https://ebisenttt.net/posts'

def twitter_authorize():
  # load_dotenv('.env.local') # テスト用

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
  filename = sys.argv[1]
  path = filename.replace('.md','')
  url = f"{BASE_URL}/{path}"
  tweet_text = f"記事を投稿しました\n"\
    + url

  client = twitter_authorize()
  result = client.create_tweet(text = tweet_text)
  print(result)

def main():
  tweet()

if __name__ == '__main__':
  main()