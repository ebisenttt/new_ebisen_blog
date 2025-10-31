# プロセス仕様: processes/view-posts

## 目的

- ホーム画面で必要となる投稿データとタグ集計情報を一括で取得し、ページや widgets から扱いやすいビューモデルを提供する。
- posts/filter-by-tag や posts/open-external などの feature を呼び出し、UI 層は純粋な表示に専念できるようにする。

## 責務

- Markdown / note 混在の投稿を `@/lib/api#getAllPostsMerged` で取得する。
- `@features/posts/open-external` を用いて各投稿に `href` と `externalUrl` を付与する。
- `@features/posts/filter-by-tag` を用いてタグ統計 (`TagStats`)、人気順タグ配列、初期選択タグを計算する。
- 上記の結果をまとめて返すビューモデル (`HomePostsViewModel`) を構築する。

## 公開 API

```ts
// src/processes/view-posts/index.ts
export type HomePostsViewModel = {
  posts: Array<Post & { href: string; externalUrl: string | null }>
  rawPosts: Post[]
  tagStats: TagStats
  sortedTags: string[]
  initialTag: string
}

export async function getHomePostsViewModel(): Promise<HomePostsViewModel>
```

## アルゴリズム

1. `getAllPostsMerged()` を実行し、`null` が混在する可能性を考慮して除去する。
2. 投稿配列を `createPostLinkProps` でマッピングし、`href` / `externalUrl` を持つ形に整形する（`posts`）。
3. 同じ投稿配列を `collectTagStats` に渡してタグ出現回数を収集し、`rawPosts` として元配列も併せて返す。
4. `sortTagsByCount` でタグ名の並び順を決定し、`selectInitialTag` で初期選択タグを求める。
5. 上記の情報をまとめて返す。

## 例外 / エラーハンドリング

- `getAllPostsMerged()` が例外を投げた場合は呼び出し側（ページ層）で捕捉する。プロセス内では try-catch を設けず伝播させる。
- 取得結果が空配列の場合は `tagStats` を空オブジェクト、`sortedTags` と `initialTag` を空に設定する。

## テスト観点

- 投稿が存在しない場合でも空のビューモデルが得られること。
- タグが複数あるケースで `sortedTags` の並び順が feature の仕様通りであること。
- 外部リンクを含む投稿が `externalUrl` を保持すること。

## 保守ルール

- feature 側の公開 API が変更された場合は、本ドキュメントを更新してから実装を修正する。
- 新しいホーム画面の要件（例: ページネーション）が追加された場合は、まず本書にアルゴリズムを追記してから対応する。
