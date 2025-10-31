````markdown
# ページ仕様: pages/post-details

## 目的

- 投稿詳細ルート (`/posts/[name]`) で利用する Server Component を pages レイヤに集約し、App Router 層からの委譲先とする。
- processes/view-post-detail が提供するビューモデルを受け取り、widgets / entities を組み合わせてページ UI を構築する。
- App 層の責務をルーティングとメタデータ設定のみに抑えつつ、ページ固有のレイアウト構成を一箇所にまとめる。

## 責務

- `@processes/view-post-detail#getPostDetailViewModel` を呼び出し、取得したビューモデルを用いて投稿詳細の UI を組み立てる。
- 投稿が存在しない場合は `notFound()` を呼び出し、404 レンダリングへ遷移させる。
- `@widgets/layout/site-layout` と `@shared/ui/Container` を利用してレイアウトを構成する。
- 投稿ヘッダーと本文の表示には `@entities/post` の公開 UI コンポーネントを利用する。
- クライアント専用の振る舞い（スクロール制御など）が必要な場合は、App 層から提供されるクライアントコンポーネントを受け取り描画する。

## 公開 API

```ts
// src/pages/post-details/index.tsx
export type PostDetailsPageProps = {
  name: string
  clientSlot?: React.ReactNode
}

export async function PostDetailsPage({
  name,
  clientSlot,
}: PostDetailsPageProps): Promise<JSX.Element | null>
```

- ページ関数は `name` パラメータを受け取り、Next.js の Server Component として振る舞う。
- クライアント専用コンポーネントを追加したい場合は `clientSlot` に渡す。
- 呼び出し元（App Router）は Promise で解決した `params` から `name` を抽出し、この関数に委譲する。

## レンダリング構成

1. pages レイヤで `getPostDetailViewModel(name)` を await する。
2. 戻り値が `null` の場合は `notFound()` を実行し、処理を終了する。
3. ビューモデルから `post` と `contentHtml` を取得し、以下の順序で描画する。

- `<Layout>` → `<Container>` → `<Header>` を表示。
- `<article>` 要素内で `<PostHeader>` と `<PostBody>` を配置。
- App 層から渡される `clientSlot`（例: `PageClient`）を末尾に描画する。

## テスト観点

- `getPostDetailViewModel` が `null` を返した場合に `notFound()` が呼ばれること。
- 正常系で `PostHeader` / `PostBody` が期待どおりの props で呼び出されること。
- クライアントコンポーネントを描画する場合は、適切にラップされていること。

## 保守ルール

- ページに新たな widget や feature を追加する場合は、本ドキュメントの責務・レンダリング構成を更新してから実装する。
- App Router で利用するメタデータや静的パス生成の仕様が変わった場合は、`processes/view-post-detail` のドキュメントと併せて更新する。
- レイアウト構造を変更する際は、`@widgets/layout/site-layout` の仕様との整合性を確認する。
````
