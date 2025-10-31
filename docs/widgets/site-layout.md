# ウィジェット仕様: widgets/layout/site-layout

## 目的

- ブログ全体の共通レイアウト（ヘッダー、メイン、フッター）を widget 層に集約し、ページからは組み立て済みの UI を再利用できるようにする。
- 既存の `components/layout` にあった `Layout` / `Header` / `Intro` / `Footer` を widget 構成に再配置し、Feature-Sliced Design のポリシーに従う。

## 責務

- `Layout` : ページ全体を包むコンテナ。メインコンテンツ領域をラップし、末尾に `Footer` を表示する。
- `Header` : 記事詳細ページなどで利用する共通ヘッダー。サイトタイトルをルートリンクとして表示する。
- `Intro` : ホームページのヒーローセクション。タイトルとサブタイトルを表示する。
- `Footer` : ブランドリンク（GitHub / X / note）を表示するフッター。共通 UI で `Container` を利用し、外部リンクには `target="_blank"` と `rel="noopener noreferrer"` を付与する。

## 公開 API

```ts
// src/widgets/layout/site-layout/index.ts
export * from './ui'
```

- `Layout` の props:
  ```ts
  type LayoutProps = {
    children: React.ReactNode
  }
  ```
- `Layout` は `children` をそのまま `<main>` 内に描画し、直後に `Footer` を表示する。

## UI 指針

- `Header` のタイトルは `@shared/config` の `TITLE` を参照し、`<Link>` でトップページへ遷移できるようにする。
- `Intro` は従来のクラス名・文言を維持し、ホームページのヒーローセクションとして利用する。
- `Footer` はロゴ画像を `next/image` の `<Image>` で表示する。ダークテーマ対応として GitHub アイコンには `invert` クラスを保持する。

## テスト観点

- 現時点では既存 UI の移設のみで振る舞いは変わらないため、追加テストは不要。今後動的ロジックを追加する場合は widget 配下にテストを追加する。

## 保守ルール

- レイアウト全体に影響する変更（リンク追加、配色変更など）は本ドキュメントを更新してから実装に着手する。
- 他ページ専用のセクションが増えた場合は別 widget として切り出し、本ドキュメントでは共通レイアウトのみを扱う。
