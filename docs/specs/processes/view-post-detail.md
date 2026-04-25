````markdown
# プロセス仕様: processes/view-post-detail

## 目的

- 記事詳細ページで必要となる投稿データを取得し、UI レイヤーが利用しやすい形のビューモデルを提供する。
- Markdown で保存された本文を HTML に変換し、ページ側では描画に専念できるようにする。

## 責務

- ファイル名 (`filename`) を受け取り、`@/lib/api#getPostByFilename` で投稿を取得する。
- 投稿が存在しない場合は `null` を返し、ページ側で `notFound()` を呼び出せるようにする。
- 投稿本文 (`content`) を `@/lib/markdownToHtml` で HTML 文字列に変換する。
- 変換後の HTML と元の投稿データをまとめたビューモデルを返す。
- 投稿一覧をもとに静的パス生成用のファイル名リストを返す。
- メタデータ生成で利用するタイトル情報を提供する。

## 公開 API

```ts
// src/processes/view-post-detail/index.ts
import type { Post } from '@entities/post'

export type PostDetailViewModel = {
  post: Post
  contentHtml: string
}

export async function getPostDetailViewModel(
  filename: string,
): Promise<PostDetailViewModel | null>

export async function listPostFilenames(): Promise<string[]>

export async function getPostDetailMetadata(
  filename: string,
): Promise<{ title: string } | null>
```
````

## アルゴリズム

1. `getPostByFilename(filename)` を呼び出す。
2. 取得結果が `null` の場合は `null` を返す。
3. 投稿が存在する場合は `markdownToHtml(post.content)` を実行し、HTML 文字列を生成する。
4. 元の `post` と `contentHtml` をまとめて返す。
5. `listPostFilenames` は `getAllPosts()` を呼び出し、`filename` のみを配列で返す。
6. `getPostDetailMetadata` は `getPostByFilename` を呼び出し、存在する場合は `{ title: post.title }` を返す。

## エラーハンドリング

- `getPostByFilename` や `markdownToHtml` が投げた例外は呼び出し側へ伝播させる。ページ層で try-catch を設ける場合は別途考慮する。
- API レイヤーの変更で `post` が `null` を返しうる場合に備え、`null` 返却パスを維持する。

## テスト観点

- 投稿が見つからない場合に `null` が返り、Markdown 変換が呼ばれないこと。
- 投稿が見つかった場合に `markdownToHtml` が呼ばれ、期待したビューモデルが返ること。
- Markdown 変換が失敗した場合に例外がそのまま上位へ伝播すること。
- `listPostFilenames` が `filename` 配列のみを返すこと。
- `getPostDetailMetadata` が投稿存在時にタイトルを返し、存在しない場合は `null` を返すこと。

## 保守ルール

- 取得する項目（関連記事、外部リンクなど）が増えた場合はビューモデル定義と本ドキュメントを更新してから実装を修正する。
- Markdown 変換のパイプラインを変更する際は、変換結果の型や例外仕様を明記する。
- 静的パスやメタデータに追加情報が必要になった場合は、公開 API を更新し本書に反映する。

```

```
