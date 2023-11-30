---
title: 'Twitter APIの設定 - 記事投稿時にGithub ActionsからTwitter APIでXにポストしていい感じにOGPを表示するまでの奮闘記 その1'
date: '2023-11-23'
tag:
  - 'Twitter API'
  - 'OGP'
  - 'Vercel'
  - 'Github Actions'
  - 'Next.js'
---

記事のタイトルのとおり，「ブログ記事を投稿したときにGithub ActionsからTwitter APIを叩き，OGP画像がいい感じに表示してX（旧Twitter）に投稿したことをポストしたい！」という要望を叶えるまでの作業ログを残します．

- なにをしたのか
- なにを使ったのか
- なににつまずいたのか
- どう解決したのか

ということをシリーズ形式で書いていきます．

1. Twitter APIの設定
2. Github Actionsの設定
3. Twitter APIを呼ぶPythonスクリプト
4. Next.jsでの動的なOGP

今回は，Twitter APIの設定の作業ログです．

## Xのアカウント作成

まずは，記事投稿の通知をポストしたいXのアカウントを作成します．アカウント作成方法は今回は省略します．特に特別な設定は不要です．

:warning: アカウントをBotとして設定する必要があるという記事も見かけましたが，この記事を書いている時点ではBotとしての設定は不要でした．

## Twitter Developerのアカウント作成

[Twitter Developer Portal](https://developer.twitter.com/en/portal)は，X（旧ツイッター）の開発者向けのツールを提供している公式サービスです．ここで先程作成しておいたアカウントを登録します．

アカウントの登録には審査がありますが，普通に申請すれば通ります．登録方法は下記の記事が参考になるかと．

[Twitter Developerの登録手順](https://zenn.dev/harumin/articles/753e755fc245ae)

## Twitter Developerの設定

「Setting」タブの「User authentication settings」の「Edit」ボタンを押すと，諸々の設定ができます．いくつか重要な点があるので書いておきます．
![Settingタブ](/public/posts/githubactions_twitterapi_og_0/twitter_dev.png)

### APP Permission

APP Permissionは **Read and write** にしておきます．デフォルトの Read だとポストができません．もしDMも使いたいという場合は Read and write and Direct message にします．

基本的にOAuth 2.0を使うので，このOAuth1.0の設定は不要かも．ただAPIの仕様がコロコロ変わるので，できるだけポストできる状態にしておきたく，このような設定をしています．

### Type of APP

**Web APP, Automated APP or Bot** にします．Github ActionsからポストしたいのでBotに該当するためです．

### APP Info

なんでもいいです．外部公開したWebアプリならこの辺の設定により，ユーザーの導線が変わりますが，今回は自分でポストするだけなので，必須項目が埋まっていればいいです．

![Edit画面](/public/posts/githubactions_twitterapi_og_0/twitter_dev_edit.png)

## Tokenの取得

認証情報に使われるTokenを取得します．**外部に公開すると他人にポストされてしまうので，絶対に公開しないように**．また，忘れたらTokenを再生成しなければいけなくなって面倒なので，メモを残しておきましょう．パスワード管理ツールで管理するとか．

Key and Tokenタブで各ボタンを押し，すべての値をメモしておきます

- API Key and Secret
- Bearer Token
- Access Token and Secret

Twitter側での作業はこれで終わり．

## 最後に

Twitterでの作業はこれで終わりです．そこまで難しい手順はなかったという印象です．次回はGithub Actionsの設定を行います．
