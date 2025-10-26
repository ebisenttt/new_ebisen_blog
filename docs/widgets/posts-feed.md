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

- セクションタイトルとして "Latest Posts"（暫定）を表示する。文言は `shared/config` に移管予定。
- 内部では `@entities/post/Posts` を利用してカードリストを描画する。
- 投稿が 0 件の場合は "記事がありません" といったプレースホルダーを表示する。

## テスト観点

- 投稿が存在する場合に `PostPreview` が期待通りレンダリングされること。
- 投稿が 0 件の場合にプレースホルダーテキストが表示されること。

## 保守ルール

- widget に新たな操作要素（例: ソートメニュー）を追加する際は、本ドキュメントに UI/props の仕様を追記する。
