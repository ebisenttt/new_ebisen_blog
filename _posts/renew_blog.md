---
title: 'ブログをリニューアルした話'
date: '2023-09-17T10:57:13+09:00'
draft: false
tag:
  - 'blog'
  - 'markdown'
---

## ブログリニューアルの動機

- 個人開発を通して技術の学習をする
- Github PagesとHugoを組み合わせていたので，自由度が低い

## 参考

- [Next.js + Tailwind UI を使うとたった6時間で技術ブログのプロトタイプを作れる - Panda Program](https://panda-program.com/posts/from-gatsby-to-nextjs)

## 作業ログ

### 9/17

- packageが軽いと聞いたことがあるpnpmを使いたい
  - brew install pnpm
- vercelにdevelopブランチで一旦デプロイ．productionはデフォルトでmainブランチになっていた．
- [Favicon Generator](https://realfavicongenerator.net/)なる，画像をアップロードすると，あるゆるブラウザ用のfaviconの画像ファイルやらXMLファイルを生成してくれるWebサイト．背景色やらborder-radiusやらをブラウザ上で設定できるのでスゴい．

### 9/18

- トップページ，記事のプレビューをシンプルにする
- 日付の表示形式を変更．元からテンプレートに入っていたdate-fnsが便利．日付データは扱いづらい印象だったので，助かった．

### 9/21

- ダークテーマを適用．色の設定は奥が深い．共通化が課題．

### 9/23

- スタイルを変更．
  - tailwindcss/typographyを使った
  - **TODO** syntax highlightが効かない．原因調べて試行錯誤してみたが，remark用のライブラリが非推奨になっている．react-markdownに乗り換えたほうが周辺のライブラリが充実してるのでいいかも．

## 9/24

- eslint, prettierを設定
  - プラグインの導入，configファイル，vscodeの設定のそれぞれでいろんな方法があるのでちょっと詰まった．vscodeの設定を見直したら解決した．
- 記事のタグを設定
  - frontmatterに書いたtagが記事に表示されるようにした．色をtailwind cssのクラスで追加し，絵文字と[DEVICON](https://devicon.dev/)でロゴも追加した．DEVICONめちゃ便利．

## 9/29

- issuesを立てた．
  - todoリスト的な感じで思いついたときにissueを立てて，やりたいときに実装するという運用が良さそう．しばらくこれでやってみる．

## 10/10

- 記事の中央揃え
- フッターをカスタマイズ
- タグ一覧の画面実装
- プロフィール画面実装
