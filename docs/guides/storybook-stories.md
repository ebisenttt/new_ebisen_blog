# Storybook Stories ガイドライン

このガイドラインは Feature Sliced Design (FSD) を採用した本リポジトリで Storybook の stories ファイル (`*.stories.tsx`) を作成する際の共通ルールです。新しいコンポーネントを追加するときや既存コンポーネントに stories を追加するときは、作成前に必ず本ドキュメントを確認してください。

## 1. 配置場所と命名規約

- stories ファイルは **対象コンポーネントと同じディレクトリ** に配置し、`ComponentName.stories.tsx` という PascalCase + `.stories.tsx` のファイル名を付けます。
  - 例: `src/shared/ui/Button/Button.stories.tsx`
- Storybook の `default export` で指定する `title` は FSD レイヤー／カテゴリを含めたパス表現にします。
  - 例: `title: 'Shared/UI/Button'`
- Story 名 (named export) は PascalCase を用い、表示意図がわかるようにします。
  - 例: `export const Primary: Story = { ... }`

## 2. FSD レイヤと公開 API

- stories からはコンポーネントの **公開 API (`index.ts`) を経由したインポート** を基本とします。
  - 例: `import { Button } from '@/shared/ui/Button'`
- 内部実装のみをテストしたい場合でも、FSD のレイヤ境界を崩さないこと。やむを得ず内部実装を参照する場合は、理由と TODO をコメントで明記し、最終的には公開 API で完結するようリファクタリングしてください。

## 3. Template パターンと Story 形式

- Storybook v7 以降の **オブジェクト形式** (`export const Variant: Story = { args: { ... } }`) を推奨します。
- 同一コンポーネント内で複数 story を定義する場合は `args` / `render` を使って差分だけを記述し、重複コードを避けます。
- Story 内でコンポーネントをラップする補助関数が必要なときは `render` に関数を渡し、追加の装飾や Provider を設定します。
- FSD の責務に応じて、以下の観点を考慮してください。
  - `shared/ui`: ビジュアルのバリエーションを中心に。色・サイズなど Props の差分を網羅。
  - `entities` / `features`: 実データに近いダミーを `args` で与える。UI とロジックが組み合わさる場合は状態値を Story 側で管理。
  - `widgets` / `processes`: コンポーネントが依存する下位レイヤーをモックし、最小限のダミーデータでセクション全体のレイアウトを確認。

## 4. Controls / Docs / Playground

- 基本的な Props には Controls を設定し、Storybook UI から調整できるようにします。
- `argTypes` を用いてコントロール対象の型・説明・defaultValue を設定してください。
- `parameters.docs.description` を利用して、コンポーネントの責務や利用シナリオを簡潔に記述します。
- コンポーネントが非公開 (内部専用) の場合は `parameters: { docs: { disable: true } }` などで Storybook に公開しない対応も検討してください。

## 5. 依存とセットアップ

- Stories で外部依存 (context, Provider, router など) が必要な場合は、可能であればコンポーネント側で DI できるようにし、Story 側ではシンプルなモックを渡します。
- グローバルな Provider が不可欠な場合は `.storybook/preview.tsx` を更新し、全 Story に影響する形で設定します。その際はドキュメントに追記してください。
- CSS や Tailwind のユーティリティを stories 専用に追加することは避け、アプリ本体と同じ設定から読み込まれるようにします。

## 6. Storybook を活用したテスト

- Story はそのまま **レンダリングテスト（Smoke Test）** として動作します。破損した UI を早期に検知できるよう、主要な状態を Story で網羅してください。
- ユーザー操作を伴うシナリオは `play` 関数で記述し、`storybook/test` の `expect` / `userEvent` / `within` 等を利用した **インタラクションテスト** を追加します。副作用のモックや spy は `fn` を使い、story 内で完結させます。
- アクセシビリティチェックは `@storybook/addon-a11y` を有効化し、Testing ウィジェットの Accessibility オプションを利用します。検知された違反は修正が完了するまで Story 側に TODO を残してください。
- ビジュアル回帰テストが必要な場合は Chromatic 等のクラウドサービスを活用します（ローカルでの比較は任意）。
- Code Coverage や Watch Mode が必要な場合は Storybook Test（Vitest アドオン）導入を検討します。現時点で導入しない場合でも、導入方針が決まったら本ドキュメントを更新してください。
- 当プロダクトではネットワークモックに `msw` を利用しません。必要な場合は props や Mock 関数で代替します。

## 7. Story の再利用とテスト連携

- Jest 等のユニットテストで stories を再利用する場合は `@storybook/testing-react`（または同等のテストユーティリティ）を使用し、Storybook と同じ `args` を読み込んで一貫性を保ちます。
- E2E テストで UI 状態を再現したい場合は Story から props を取得して Playwright/Test などに組み込みます。
- `*.stories.tsx` に追加した `args` はテストデータのソース・オブ・トゥルースです。コンポーネントの API 変更時は Story とテストの両方を更新し、差分が残らないようにします。
- コンポーネント追加時は **最短ループ** を意識し、`*.test.tsx` と `*.stories.tsx` をセットで整備したうえで PR を提出してください。

## 8. 運用ルール

- stories を追加したら `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm prettier -c .` を実行し、既存ルールに違反していないことを確認します。
- Storybook の設定 (`.storybook` 配下) を変更した場合は、このガイドラインや関連ドキュメント (`docs/architecture/feature-sliced-design.md` 等) にも反映させてください。
- stories に関する疑問点やガイドラインの改善案があれば、まずこのファイルを更新し、Pull Request で議論してください。

---

最終更新: 2025-11-06
