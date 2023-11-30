---
title: 'はじめてのChrome拡張開発 - マークダウン用にリンクをコピーしたい'
date: '2023-11-26'
tag:
  - 'Chrome拡張'
  - 'Markdown'
---

## はじめてのChrome拡張開発

ちょっとした作業なんだけど何度も繰り返していると面倒な作業を効率化するためにChrome拡張がほしい場面が多々あるので，いっそ作ってみようとなりました．

今回は， Google Chromeで表示しているサイトのタイトルとURLを，マークダウン用に`[title](https://hoge.com)`の形式でクリップボードにコピーする拡張機能を作りました．

拡張機能としてまだ公開してませんが，ソースは[Github](https://github.com/ebisenttt/url_copy_for_md)に挙げてあります

以下，作業ログを残します．

## 作業ログ

### 公式ドキュメントを確認

ひとまず次の公式ドキュメントを読みました．

- https://developer.chrome.com/docs/extensions/mv3/getstarted/
- https://developer.chrome.com/docs/extensions/mv3/getstarted/extensions-101/
- https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/

とりあえずこれを参考にコードを書き始めました．

### Refused to execute inline event handler because it violates the following Content Security Policy directive

上記のエラーが出ました．次の記事で解決しました．

- https://qiita.com/yushimizu/items/96cfb24b048337c04679

ポップアップのhtmlファイルにインラインでJavaScriptのscriptを書くことは許されていないというエラーでした．`.js`ファイルに切り出してhtml側で`<srcript src='hoge.js'>`と読み込めばOKでした．

### `addEventListener('DOMContentLoaded')`を追加

先程のJavaScriptのファイル内に`onClick`を指定しましたが，エラーになりました．原因は，DOMが読み込まれる前にスクリプトが走った結果，イベントを紐付けるDOMがないことが原因でした．

タイトルの通り，`'DOMContentLoaded`イベント時に`onClick`を紐付けることでDOMがある状態でスクリプトが走ってくれました．

### 表示中のタブの情報ではなくpopupの情報がコピーされる

表示中のタブのタイトルやURLをコピーしたいのに，ポップアップのタイトルとURLがコピーされてしまうということが置きました．以下の記事で解決しました．

- https://developer.chrome.com/docs/extensions/mv3/getstarted/tut-tabs-manager/
- https://qiita.com/plumfield56/items/99f5cfc1bf5fd03e8040

ポップアップのhtmlファイル側にscriptを読み込んでいたことが原因でした．表示しているサイト内ではなく，ブラウザでスクリプトを走らせなきゃ行けないので，Service Worker側でスクリプトを走らせる必要がありました．

`manifest.json`の設定を変更し，スクリプトを修正して対応しました．

### ショートカットキーが効かない

ショートカットキーを設定しましたが，スクリプトが動きませんでした．下記の記事で解決しました．

- https://zenn.dev/k41531/articles/3ce99a991b3098

原因としては，一つ前のものと同じで，Service Worker側で走らせなければいけませんでした．

### エンドポイントがない

Service Workerがメッセージを送ったのに，エンドポイントがないというエラーを吐きました．下記の記事で解決しました．

- https://qiita.com/Sukhwinder_Singh/items/a916f6e0a5d599b80d9b
- https://developer.chrome.com/docs/extensions/reference/tabs/

`manifest.json`で`content_scripts`を指定する必要がありました．

```js
  "content_scripts":[
    {
      "matches": ["<all_urls>"],
      "js":["script.js"],
      "run_at":"document_start"
    }
  ]
```

これでメッセージを受け取る側のエンドポイントがサイト表示時に立ち上がります．
