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
今回はGithub Actionsの設定編です．

## 環境変数を設定

このシリーズの前回でTwitter APIのTokenを取得したので，これをGithubに設定します．

1. Githubのリポジトリのページへ
2. Settingタブへ
3. サイドバーのCode and automationセクションのEnvironmentsボタン
4. New environmentボタン
5. 任意の環境名を入力（例えば`Production`など）

これで環境ができました．次に環境をブランチに紐づけます．

1. Deplyment branches and tagsのプルダウン（No restrictionと書いてあるところ）
2. Selected branches and tagsに設定
3. Add deployment branch or tag rule
4. Ref typeプルダウンでbranchを選択
5. 本番環境用のブランチを選択（例えば`main`）

これで環境がブランチに紐付きました．

次にTokenを設定します．

1. Environment secretsのAdd secretボタン
2. 任意のToken名とメモしておいたTokenの値を登録

今回は例として次のToken名で登録したという前提で進めます．

- `TWITTER_API_TOKEN`
- `TWITTER_API_TOKEN_SECRET`
- `TWITTER_BEARER_TOKEN`
- `TWITTER_ACCESS_TOKEN`
- `TWITTER_ACCESS_TOKEN_SECRET`

## yamlファイルを作成

Github Actionsが実行するスクリプトは，`.github/actions/workflow/`内に`.yaml`ファイルで置いておきます．

ちょっと長いですが，執筆時点でのスクリプトはこんな感じです．

```yaml
name: Tweet New Posts # 適当な名前

on: # いつ走らせるか
  pull_request: # プルリクが
    types:
      - closed # クローズされたとき
    branches:
      - main # mainブランチで
    paths:
      - '_posts/**' # _postsディレクトリ内で変更があったとき

jobs: # 何をするか
  tweet: # 適当な名前
    runs-on: ubuntu-latest # ホストランナー
    environment: Production # 実行環境（TwitterのTokenが設定されている環境を指定する）

    steps: # ステップ（具体的に何をするかを小分けにしたもの）
      # pythonをインストールする
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.x'

      # pythonパッケージのtweepy（後述）をインストール
      - name: Install dependencies
        run: |
          pip install tweepy

      # プルリク先のブランチにcheckout
      - name: Checkout base branch
        uses: actions/checkout@v3
        with:
          ref: ${{ github.event.pull_request.base.sha }}

      # プルリク元のブランチにcheckout
      - name: Checkout PR branch
        uses: actions/checkout@v3

      # TwitterAPIを叩く
      - name: Tweet
        env: # 環境変数を指定．事前に設定したTokenを参照してくれる．
          TWITTER_CONSUMER_KEY: ${{ secrets.TWITTER_API_KEY }}
          TWITTER_CONSUMER_SECRET: ${{ secrets.TWITTER_API_SECRET }}
          TWITTER_BEARER_TOKEN: ${{ secrets.TWITTER_BEARER_TOKEN }}
          TWITTER_ACCESS_TOKEN: ${{ secrets.TWITTER_ACCESS_TOKEN }}
          TWITTER_ACCESS_TOKEN_SECRET: ${{ secrets.TWITTER_ACCESS_TOKEN_SECRET }}
        # プルリク先と元を比較して差分があるファイルを取得して，ファイル名を変数としてpythonのスクリプトに渡す
        run: |
          diff_files=$(git diff --name-only --diff-filter=A ${{ github.event.pull_request.base.sha }}.. -- '*.md')
          echo $diff_files
          for filename in ${diff_files} ; do
            python tweet.py $filename
          done
```

補足です．

- 「いつ走らせるか」については，現在の自分の需要に合わせています（まだブラッシュアップできる気はしている）．
- 今回はAPIを実際に叩く際にpythonを使います．理由はtweepyというメジャーなパッケージがあるからです．もちろんpythonでない言語でも実行可能です．
- Github Actionsの文法はこちらの[公式ドキュメント](https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions)を参照

## 最後に

とりあえずGithub Actionsの設定はここまで．次回はpythonのスクリプトの書き方を見ていきます．
