# 開発プロンプト: posts/filter-by-tag feature

このドキュメントはタグで記事を絞り込む feature の設計仕様です。実装に先立ち、本書の要件を必ず確認し準拠してください。

## 目的

- 投稿一覧 (`Post` エンティティ) からタグ情報を集計し、人気順（タグ出現回数の降順）で並べ替えたタグリストを提供する。
- ユーザーがタグを選択すると、そのタグに紐づく投稿のみを表示する。
- UI はエンティティの一覧 (`Posts` コンポーネント) を再利用しつつ、状態管理とフィルタリングロジックは feature 層で担保する。

## 責務分担

- **model**
  - `collectTagStats(posts: Post[]): TagStats` : 投稿配列からタグごとの出現回数を収集する。
  - `sortTagsByCount(stats: TagStats): string[]` : 集計済みのタグを出現回数の降順で並び替え、同数の場合はタグ名の昇順で決定する。
  - `filterPostsByTag(posts: Post[], tag: string): Post[]` : 指定タグを含む投稿のみを返す。
  - `selectInitialTag(sortedTags: string[]): string` : 最初に表示するタグ（通常は最上位）を決定する。タグが空の場合は空文字を返す。
- **ui**
  - `TagFilter` コンポーネントがユーザーのタグ選択状態を管理する。
  - タグの描画には `@shared/ui` の `Badge` を使用し、選択状態に応じてクラスを切り替える。
  - 投稿の描画には `@entities/post` の `Posts` を利用し、外部リンク用の props は `@features/posts/open-external` の `createPostLinkProps` で補完する。

## 公開 API

```ts
// src/features/posts/filter-by-tag/index.ts
export type TagStats = Record<string, number>
export {
  collectTagStats,
  sortTagsByCount,
  filterPostsByTag,
  selectInitialTag,
} from './model'
export { TagFilter } from './ui'
```

ページ層 (`src/app/page.tsx`) では以下の流れで利用する:

1. `getAllPostsMerged()` で取得した投稿を `collectTagStats` に渡し、タグ集計を得る。
2. `sortTagsByCount` でタグの並びを得て `selectInitialTag` で初期選択タグを決定する。
3. `TagFilter` に `posts`, `tags`, `initialTag`, `tagStats` を渡し、UI 上での選択・絞り込みを委譲する。

## UI 仕様

- タグ一覧はフレックスレイアウトで表示し、選択中以外のタグはクラス `opacity-50` を適用する。
- ボタンクリックでタグを選択し、そのタグに紐づく投稿一覧に差し替わる。
- タグが空の場合は投稿一覧を表示しない（feature 側で空配列を渡す）。
- SSR で初期タグを決定し、クライアント側で `useState` により選択状態を管理する。

## テスト観点

- model 関数の単体テストを `model` 配下に追加する。
- `TagFilter` の UI テストでは初期表示・タグ切替時の投稿件数変化を確認する。
- タグが空配列のケースや、タグに紐づく投稿が複数存在するケースを網羅する。

## ドキュメント保守

- 仕様変更や追加要件が生じた場合、本ドキュメントを更新してから実装に着手すること。
