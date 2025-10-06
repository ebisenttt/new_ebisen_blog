---
title: 'Next.jsを実務で使用した感想と反省'
date: '2025-09-18'
tag:
  - 'Next.js'
  - 'React'
---

## なんで書こうとしたのか

約1年半にわたってNext.jsを使う案件でフロントエンドアプリを書いてきた。2025年9月末で離任することになったので、この経験を今後に活かすためにも感想と反省を言語化しておこうと思う。

## Next.js App Routerについて

この案件では初めてNext.jsのApp Routerを使用した。全案件ではPage Routerを使用したので初めての経験だった。特にCache機構に大幅な変更が入っておりキャッチアップコストが高かった印象。キャッチアップとは言っても最初にインプットした上で設計・実装というわけではなく、ある程度理解したら実際に書いて動かして違和感に気づき仕様・バグを調べるということを繰り返した。

### Router Cacheはopt-outできない

Next.jsは表示した画面を30秒キャッシュする。これによってスムーズな画面遷移、ブラウザバック、ブラウザフォワードをスムーズを実現している。このRouter Cacheはv14でopt-outできず30秒固定、v15だとDynamic Routeでデフォルト0秒、Static Routeでデフォルト5分（ただしブラウザバック・ブラウザフォワードではこの限りではない）となっている（参考：[next.config.js: staleTimes | Next.js](https://nextjs.org/docs/app/api-reference/config/next-config-js/staleTimes)）。この仕様によって次のようなことが起きる：

1. 画面Aを表示する。ユーザー名が表示されている。
2. 画面Bを表示する。ユーザー名を編集する機能を持つ。
3. 画面Bでユーザー名を編集する。
4. ブラウザバックする。
5. 画面Aで古いユーザー名が表示される。

開発者からしたら「ブラウザバックしたら不整合起きることもあるよねー。リロードすればよいのでは？」という感覚かもしれないが、テスターがバグ起票してエンジニアが仕様確認して...というフローになることがあるだろう。自分はなった。

対策として、不整合が起きうる操作をしたときは`revalidatePath`を使ってcacheを捨てるということができる（`revalidatePath`にバグがあることは後述）。

### `revalidate Path`のバグ

`revalidate Path`はNext.jsのサーバー側、クライアント側のpage,layoutのキャッシュをパージする（参考：[Functions: revalidatePath | Next.js](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)）。

画面のパスを指定すればその画面のキャッシュがパージされるという関数だが

```tsx
revalidatePath('/page-path')
```

他のページのキャッシュもパージされるバグがあることがドキュメントにも書かれている。

> Server Functions: Updates the UI immediately (if viewing the revalidated path). Currently, it also causes all previously visited pages to refresh when navigated to again. This behavior is temporary and will be updated in the future to apply only to the specific path.

引用元:[Functions: revalidatePath | Next.js](https://nextjs.org/docs/app/api-reference/functions/revalidatePath)

ただでさえ複雑なキャッシュ機構にバグが潜んでおり、デバッグ中に混乱するということがあった。

### `layout.tsx`の役割

`layout.tsx`は同一ディレクトリのページと配下ディレクトリのページに影響する。ロジックを書けばそれらのページを表示したときにロジックが走るし、　DOMをreturnすればそれらのページのwrapperのように表示される。

```
.
├── layout.tsx // layout1
├── page.tsx   // layout1のロジックが走り、layout1にwrapされて表示される
└── hoge/
    ├── layout.tsx // layout2
    ├── page.tsx  // layout1とlayout2のロジックが走り、layout1にwrapされたlayout2にwrapされて表示される
    └── fuga/
        └── page.tsx  // layout1とlayout2のロジックが走り、layout1にwrapされたlayout2にwrapされて表示される
```

```tsx
// /にアクセスしたときの構造
<Layout1>
  <Page />
</Layout1>

// /hogeにアクセスしたときの構造
<Layout1>
  <Layout2>
    <Hoge />
  </Layout2>
</Layout1>

// /hoge/fugaにアクセスしたときの構造
<Layout1>
  <Layout2>
    <Fuga />
  </Layout2>
</Layout1>
```

また、`layout.tsx`のレンダリングはサーバー側で初回アクセス時の1回のみ行われ、その後はキャッシュされたレンダリング結果を使い回す。

1. `/`にアクセス
   1. `/layout.tsx`が走る
2. `/hoge`にアクセス
   1. `/hoge/layout.tsx`が走る。`/layout.tsx`は走らない。
3. `/hoge/fuga`にアクセス
   1. `/layout.tsx`も`/hoge/layout.tsx`も走らない。

`layout.tsx`はパスの構造共通に強く結びついたロジック、画面のレイアウトを提供することになる。Next.jsの仕様に完全に乗っかってデザイン、要件定義できれば強い味方になるが、各画面でロジックやデザインを柔軟にしようとすると一度実装した`layout.tsx`は足枷になり得る。

## featuresディレクトリ

Reactを使用したフロントエンドアプリケーションのディレクトリ構成戦略は長い期間にわたって議論が続いている。脱Atomicデザインが叫ばれ、次は何がくるかという段階だった開発開始当時はfeaturesディレクトリが話題になっていた。[bulletproof-react](https://github.com/alan2207/bulletproof-react)で紹介されている手法で、簡単に言えばfeature（日本語だと機能と訳されることが多い印象）ごとにディレクトリを分けるディレクトリ戦略だ。

このプロジェクトでもfeaturesディレクトリを採用してみようということになったが、結果的にはうまくディレクトリの分割をすることができず、時には循環参照が起きることもあった。この原因は単純に設計不足だったということやプロジェクトを取り巻く環境にあったと思う。

### ECサイトにおけるfeatureとは

featuresディレクトリの設計をするにあたり、このアプリケーションに登場するfeatureってなんだろうという点が重要だった。ドメイン駆動開発のように「カート」「商品」をfeatureとするのか、ユーザーの操作に近い形で「カートに商品を追加・削除」をfeatureとするのかなど、十分に設計を揉んだ上でディレクトリを設計し、開発を始めるべきだった。このプロジェクトではこれが十分にはできず、見切り発車になってしまった。

### 既存アプリケーションのリプレイスの設計の難しさ

このプロジェクトは既存のアプリケーションをリプレイスするというところから始まった。既存のDB、APIを使用するという制約があったため、フロントエンドアプリケーションの開発時に頑張ってfeatureを定義しディレクトリを構成したとしても、既存のアプリケーションのUIやAPIが複数機能の責任を持っていることがあり、featureごとに綺麗に分割できないという状況になった。

このような状況もあり、featureごとに分割するモチベーションが低下し、結果としてディレクトリ構造の設計に使う工数は少なくなった。
