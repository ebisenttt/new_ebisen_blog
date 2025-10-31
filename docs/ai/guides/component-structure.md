# コンポーネントのディレクトリ構成ガイド

## 適用範囲

- `src/**/ui/**` 配下に置かれる UI コンポーネント全般。
- Feature-Sliced Design のレイヤ（`shared` / `entities` / `features` / `widgets` / `processes` など）に共通で適用する。

## 基本構成

各コンポーネントは必ず PascalCase のディレクトリを持ち、その直下に以下の 3 ファイルを配置する。

```
ComponentName/
  ├─ index.ts
  ├─ ComponentName.tsx
  └─ ComponentName.test.tsx
```

### それぞれの役割

- `ComponentName.tsx`
  - React コンポーネント本体を記述する実装ファイル。
  - `export const ComponentName = ...` の形式で名前付きエクスポートを提供する。
- `index.ts`
  - 同ディレクトリのコンポーネントを名前付き再エクスポートするバレルファイル。
  - 複数コンポーネントを公開する場合はエクスポートを列挙する。
- `ComponentName.test.tsx`
  - Jest + React Testing Library によるユニットテスト。
  - コンポーネントの主要な表示内容や振る舞いを最低 1 ケース以上検証する。
  - どうしてもテストを用意できない場合は、テストを追加できない理由をコメントで明記し、代替の検証手段をドキュメント化する。

## 補足ルール

- 実装ファイルとして `index.tsx` を使用しないこと。既存の `index.tsx` は `ComponentName.tsx` へリネームした上で `index.ts` から再エクスポートする。
- スタイルや定数などの補助ファイル（例: `*.module.css`, `constants.ts` など）は同ディレクトリに追加で配置してよい。
  - ただし命名と責務が不明瞭にならないよう、役割ごとにファイルを分ける。
- Storybook など追加ツールを導入する場合も、同階層に `ComponentName.stories.tsx` のように配置する。
- ディレクトリ単位の public API は親ディレクトリ（例: `src/shared/ui/index.ts`）から適切に再エクスポートする。

## 例: `Logo` コンポーネント

```
src/shared/ui/Logo/
  ├─ Logo.tsx
  ├─ Logo.test.tsx
  └─ index.ts
```

- `Logo.tsx` で SVG ロゴを出力し、`Logo.test.tsx` で高さ・幅プロップを検証。
- `index.ts` から `export { Logo } from './Logo'` として公開する。

## 実装時の手順

1. 新規コンポーネントを追加するときは、ディレクトリと 3 ファイルをテンプレートとして先に作成する。
2. 既存コンポーネントを移行する際は、`git mv` を用いて履歴を保ったままリネームする。
3. 依存先にある `import` 文を `@layer/.../ComponentName` 形式に更新し、ビルド／テストが通ることを確認する。
4. 変更後は `pnpm lint` と `pnpm test` を実行し、結果を記録する。

## 保守ノート

- 2025-10-29: 全 UI ディレクトリを本ガイドに従う構成へ移行。以後の追加・改修時もこの構成を必須とする。
