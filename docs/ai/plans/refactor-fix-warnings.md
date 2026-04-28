# warning解消

ログにwarningがいくつか出ているため対応する。
ログを出さないようにすることが目的ではなく、警告されている内容に適切に対応してよりよい開発環境を整備することが目的である。

## 対応一覧

### V1: vercel in dependencies（Vercel ビルドログ）

`package.json` の `dependencies` に `vercel` CLI パッケージが含まれており、Vercel がビルド時に無視していた。
`vercel` はデプロイ時には不要な CLI ツールなので `devDependencies` に移動した。

```diff
- "dependencies": { "vercel": "^52.0.0" }
+ "devDependencies": { "vercel": "^52.0.0" }
```

### V2: Turbopack NFT warning（`pnpm build`）

`src/shared/lib/file.ts` の `process.cwd()` を起点にプロジェクト全体がトレースされると Turbopack が誤認していた。
インポート経路: `sitemap.ts` → `queries.ts` → `file.ts` → `process.cwd()`

`/*turbopackIgnore: true*/` コメントを追加してトレース対象から除外した。

```diff
- export const postsDirectory = join(process.cwd(), POSTS_DIRECTORY_NAME)
+ export const postsDirectory = join(/*turbopackIgnore: true*/ process.cwd(), POSTS_DIRECTORY_NAME)
```

### L1〜L3: dangerouslySetInnerHTML（`pnpm lint` / `@eslint-react/dom-no-dangerously-set-innerhtml`）

以下3ファイルで `dangerouslySetInnerHTML` を使用しており ESLint が警告していた。
コンテンツはマークダウン変換済みのサニタイズ済み HTML であるためセキュリティリスクはなく、
`eslint-disable-next-line` コメントで意図的な使用であることを明示した。

- `src/entities/post/ui/PostBody/PostBody.tsx` — マークダウン本文の HTML
- `src/entities/post/ui/PostTitle/PostTitle.tsx` — タイトルのバッククォートを `<code>` に変換した HTML
- `src/entities/post/ui/PostPreview/PostPreview.tsx` — 一覧カードのタイトル（同上）

### L4〜L5: array index as key（`pnpm lint` / `@eslint-react/no-array-index-key`）

以下2ファイルでタグのリストを `${i}_${t}` という key でレンダーしており、インデックスが key に含まれていた。
1投稿内でタグは重複しないためタグ名文字列 `t` のみを key に変更した。

- `src/entities/post/ui/PostHeader/PostHeader.tsx`
- `src/entities/post/ui/PostPreview/PostPreview.tsx`

```diff
- {tag.map((t, i) => <Badge key={`${i}_${t}`} text={t} />)}
+ {tag.map((t) => <Badge key={t} text={t} />)}
```

### L6〜L7: set-state-in-effect（`pnpm lint` / `@eslint-react/set-state-in-effect`）

以下2ファイルで `useEffect` 内で同期的に `setState` しており、不要な再レンダーが発生する可能性があった。
`useEffect` を削除し、React 公式推奨の derived state パターン（レンダー中 setState）に変更した。
前回の prop 値を `useState` で保持し、変化があった場合のみレンダー中に state を更新する。

- `src/features/layout/switch-tab/ui/TabLayout/TabLayout.tsx`
- `src/features/posts/filter-by-tag/ui/TagFilter/TagFilter.tsx`

```diff
- import { useEffect, useState, type ReactElement } from 'react'
+ import { useState, type ReactElement } from 'react'

- const [selectedIndex, setSelectedIndex] = useState(...)
- useEffect(() => {
-   setSelectedIndex(clampIndex(initialIndex ?? 0, tabCount))
- }, [initialIndex, tabCount])
+ const [selectedIndex, setSelectedIndex] = useState(...)
+ const [prevInitialIndex, setPrevInitialIndex] = useState(initialIndex)
+ if (prevInitialIndex !== initialIndex) {
+   setPrevInitialIndex(initialIndex)
+   setSelectedIndex(clampIndex(initialIndex ?? 0, tabCount))
+ }
```
