# 開発プロンプト: posts/open-external feature

外部サービス上の投稿 (note.com) をブログ記事一覧に混在させる際、外部リンクであることを UI 上で明示し、適切にリンクを開くための feature 仕様です。

## 目的

- `Post` エンティティの `filename` にエンコードされた外部 URL を判別し、UI へ `externalUrl` / `linkProps` として提供する。
- `entities/post/ui/PostPreview` などのエンティティ UI には外部リンクの判定ロジックを持たせず、feature から props 経由で渡す。
- 外部リンクの場合は `target="_blank"` `rel="noopener noreferrer"` を付与したアンカーで開き、アイコン表示やツールチップで利用者に周知する。

## 責務

- **model**
  - `resolveExternalUrl(post: Post): string | null`
    - `@entities/post/model` の `decodeExternalUrl` を用いて外部 URL を取得。
    - デコードに失敗した場合やローカル記事の場合は `null` を返す。
  - `createPostLinkProps(post: Post): { href: string; externalUrl: string | null }`
    - ローカル記事の場合は `href: '/posts/${post.filename}'`, `externalUrl: null` を返す。
    - 外部記事の場合は `href: externalUrl` を含み、後段の UI で `<a>` の属性 (`target`, `rel`) を付与できるようにする。
- **ui**
  - UI レイヤーは `createPostLinkProps` の戻り値を利用して `PostPreview` に `externalUrl` を渡す。
  - `PostPreview` は `externalUrl` がある場合のみ外部リンクアイコンを表示し、`href` と `externalUrl` に基づいて `<Link>` または `<a>` を使い分ける。

## 公開 API

```ts
// src/features/posts/open-external/index.ts
export { resolveExternalUrl, createPostLinkProps } from './model'
```

利用例:

```tsx
import { createPostLinkProps } from '@features/posts/open-external'

const { href, externalUrl } = createPostLinkProps(post)

return <PostPreview {...post} href={href} externalUrl={externalUrl} />
```

## UI 仕様

- 外部リンクのとき、`ExternalLinkIcon` に `title="外部リンク"` を設定してアクセシビリティを確保する。
- 内部リンクのときは従来通り Next.js の `<Link>` を利用する。
- `createPostLinkProps` は UI 側で必要となる `href` を必ず返すこと。

## テスト

- `resolveExternalUrl` の単体テストで、正常系・失敗系 (不正なエンコード、空文字) をカバーする。
- `PostPreview` のテストで、`externalUrl` を渡した場合は `<a>` が生成され `target` 等が付与されること、`externalUrl` が `null` の場合は `<Link>` が利用されることを確認する。

## ドキュメント保守

- 外部リンク方針が変わる場合 (アイコン変更、リンク属性変更など) は本ドキュメントを更新してから実装すること。
