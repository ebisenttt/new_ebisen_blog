---
date: '2023-11-15'
title: 'remark-embedderでMarkdownに外部サイトのツールを埋め込む'
tag:
  - 'markdown'
---

## 動機

このサイトの記事はMarkdownで書いています．Markdownで記事を書きつつも，技術記事としてJSのAPIの挙動を例示したり，コンポーネントを埋め込んだりしたくなりました．

この要望を叶えることができるようなライブラリがないかなーと思ったのが記事を書くきっかけになりました．

## 技術調査

### そもそもMarkdownがHTMLになるまでなにが起きているのか

埋め込みの前になんで現状の環境でMarkdownで記事をかけているのか整理しました．
ざっくりですがこんな感じです．

1. Markdownファイルのパス`path`を取得
2. [fs](https://www.npmjs.com/package/fs)（ファイル処理をする）の`readFileSync(path)`に渡して`file`を受け取る
3. [gray-matter](https://www.npmjs.com/package/gray-matter)（ファイルをパースする）の`matter(file)`に渡してパースしたファイルデータ`data`を受け取る
4. [remark](https://www.npmjs.com/package/remark)（Markdownファイルを書き出したり読み込んだり）と[remark-html](https://www.npmjs.com/package/remark-html)（remarkでHTMLファイルを扱う）の`remark().use(html).process(data)`でHTMLファイルを受け取る

ちなみにこの処理はNext.jsのテンプレートである[Blog Starter Kit](https://vercel.com/templates/next.js/blog-starter-kit)をほとんどそのまま使っています．

### ではremarkとはなんなのか

remarkのソースコードを読み始めると沼にハマりそうなので，やめておきます．

remarkは[unified](https://github.com/unifiedjs/unified)のプロセッサの1つ．このunifiedまわりはパッケージが充実しており，気をつけないと非推奨になっているものも使ってしまいそうになるくらい技術記事も転がっています．

なので，unifiedやremark周りでパッケージを見つけて更新状況を確認すればよいって感じっぽくなりました．

### 候補に上がったプラグイン

#### mdx

[mdx](https://mdxjs.com/)は，MarkdownファイルにJSXを埋め込めるプラグイン．しかも，Next.jsであれば，pages配下にmdxファイルを置いておけばそのままルーティングしてくれるらしい．こんなものまであるのかと驚愕でした...

今回のJSXを埋め込みたいという要件は満たしますが，技術記事としてソースと挙動の例示をしたいということであれば，既存のサービスを埋め込めればいい．スクラッチから作るのは大変．また，pages配下にファイルを移すなど，ディレクトリ構成も変わる．ということで今回はスルー．いつか使いたくなる気がしています．

#### @remark-embedder/core

今回採用することにした[@remark-embedder/core](https://www.npmjs.com/package/@remark-embedder/core)です．コード量は増えますが，勉強目的で書いているので問題なし．[README.md](https://github.com/remark-embedder/core)にあるように，埋め込みたいサービスごとにperceする関数を定義しておく．外部サービスを埋め込むためのプラグインなので，要件を過不足なく満たしています．

## できたのがこんな感じ

https://codepen.io/ebisenttt/pen/gOqXMrR

内容はCodePenのチュートリアルのままです．

### つまったところ

remark-htmlはXSS（クロスサイトスクリプティング）等のセキュリティ上の懸念から，Markdownファイルに直接HTMLを書くことができないようになっています（もしHTMLの要素があったら無視されて消えます）．なので，せっかくremark-embedderで`iframe`要素を挿入しても，消されてしまいます．

この事実は[remark-htmlのREADME.md](https://github.com/remarkjs/remark-html#options)に書いてあります．

よって，remark-htmlとremark-embedderを併用するには，このHTMLを消す機能をOFFにしてやる必要があります．これはremark-htmlに下記のようにoptionを指定してやることで可能です．

#### 修正前

```javascript
export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkEmbedder, {
      transformers: [CodePenTransformer],
    })
    .use(html) // ここを
    .process(markdown)
  return result.toString()
}
```

#### 修正後

```javascript
export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(remarkEmbedder, {
      transformers: [CodePenTransformer],
    })
    .use(html, { sanitize: false }) // こうする
    .process(markdown)
  return result.toString()
}
```

## 最後に

以上でMarkdownにCodepenを埋め込むことができました．セキュリティ上の懸念はあるので，よりよい方法があればアップデートしたいと思います．
