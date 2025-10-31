# ウィジェット仕様: widgets/posts/posts-feed

## 目的

- ホーム画面の「Posts」タブに表示する投稿一覧セクションを widget 化し、ページ層からの責務を軽くする。
- 事前に加工された投稿配列を受け取り、`@entities/post/Posts` を用いて表示する。

## 責務

- `HomePostsViewModel` から渡される `posts` 配列をそのまま描画する。
- レイアウト（セクションタイトル、余白など）を widget 側で統一する。
- 将来的にページネーションやソート切り替えが追加された際も widget 内で完結できるよう、拡張ポイントを残す。

## props

```ts
export type PostsFeedProps = {
  posts: HomePostsViewModel['posts']
}
```

## UI 指針

- セクションタイトルは `HOME_POSTS_SECTION_TITLE`（`@shared/config`）から取得し、`h2` に `id="home-posts-heading"` を設定する。
- `section` 要素には `aria-labelledby="home-posts-heading"` を付与し、スクリーンリーダーでもセクション名が伝わるようにする。
- 内部では `@entities/post/Posts` を利用してカードリストを描画する。
- 投稿が 0 件の場合は `HOME_POSTS_EMPTY_MESSAGE` を表示する。
- 将来的に並び替えやページネーションが入ることを想定し、セクション内で拡張できる余白 (`space-y-6` など) を確保する。

## テスト観点

- 投稿が存在する場合に `PostPreview` が期待通りレンダリングされること。
- 投稿が 0 件の場合に `HOME_POSTS_EMPTY_MESSAGE` が表示されること。
- heading と `aria-labelledby` が破壊されないこと（スナップショットもしくは `getByRole('heading', { name: HOME_POSTS_SECTION_TITLE })` の形で担保）。

## 保守ルール

- widget に新たな操作要素（例: ソートメニュー）を追加する際は、本ドキュメントに UI/props の仕様を追記する。
- 見出し文言やプレースホルダーを変更する際は `@shared/config` の定数と本ドキュメントの UI 指針をセットで更新する。
