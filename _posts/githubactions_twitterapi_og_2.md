---
title: 'Github Actionsの設定 - 記事投稿時にGithub ActionsからTwitter APIでXにポストしていい感じにOGPを表示するまでの奮闘記 その2'
date: '2023-11-24'
tag:
  - 'Twitter API'
  - 'OGP'
  - 'Vercel'
  - 'Github Actions'
  - 'Next.js'
---

「記事投稿時にGithub ActionsからTwitter APIでXにポストしていい感じにOGPを表示するまでの奮闘記」シリーズで記事を書いています．
今回はPythonスクリプト編です．

## pythonのスクリプトを書く

Github Actionsの`yaml`ファイルで`tweet.py`というファイルを指定したのでルートディレクトリに`tweet.py`というファイルを作成して，次のコードを書いておきます．

```python
import os
import tweepy
import sys
import datetime

BASE_URL = 'https://www.ebisen.com/posts' # 自分のサイトの記事用のURL

def twitter_authorize():
  # 環境変数を取得（Githubで設定した変数名で）
  consumer_key = os.environ.get('TWITTER_API_KEY')
  consumer_secret = os.environ.get('TWITTER_API_SECRET')
  bearer_token = os.environ.get('TWITTER_BEARER_TOKEN')
  access_token = os.environ.get('TWITTER_ACCESS_TOKEN')
  access_token_secret = os.environ.get('TWITTER_ACCESS_TOKEN_SECRET')

  # TwitterAPIの認証
  client = tweepy.Client(
    consumer_key = consumer_key,
    consumer_secret = consumer_secret,
    bearer_token = bearer_token,
    access_token = access_token,
    access_token_secret = access_token_secret
  )

  return client

def tweet():
  # yamlファイル書いたシェルスクリプトからファイルパスを受け取る
  filename = sys.argv[1]
  # ファイル名からディレクトリ名と拡張子を取り除く
  path = filename.replace('_posts/','').replace('.md','')
  url = f"{BASE_URL}/{path}"
  # ポストするテキスト
  tweet_text = f"記事を投稿しました\n"\
    + f"{datetime.datetime.now().strftime('%Y/%m/%d %H:%M:%S')}\n"\
    + url

  client = twitter_authorize()
  # ポスト
  result = client.create_tweet(text = tweet_text)
  print(result)

def main():
  tweet()

if __name__ == '__main__':
  main()
```
