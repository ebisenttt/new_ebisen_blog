# Storybook Stories 実装ガイド（AI向け）

このガイドは AI エージェントが `*.stories.tsx` を作成・改修するときに従うべき手順のまとめです。実装の詳細ルールは人間向けドキュメント `docs/guides/storybook-stories.md` に記載されています。作業前に必ずそちらを参照してください。

## 基本ポリシー

- Feature Sliced Design (FSD) のレイヤ境界を厳守し、公開 API (`index.ts`) を経由してコンポーネントを import します。
- Story ファイルは対象コンポーネントと同じディレクトリに `ComponentName.stories.tsx` という名前で配置します。
- Story はオブジェクト形式（CSF v3）で定義し、`args` / `render` を活用して重複を最小化します。
- `play` 関数を利用してインタラクションテストを記述する場合は `storybook/test` のユーティリティを用い、内部で完結させます。
- ネットワークモックに `msw` は使用しません。必要な場合は props や mock 関数 (`fn`) で代替します。

## TODO リスト（作業前チェック）

1. `docs/guides/storybook-stories.md` を読み、対象レイヤに関する注意点を確認する。
2. 対象コンポーネントのディレクトリ構成がガイドライン（`Component/Component.tsx`, `Component.test.tsx`, `index.ts`）に沿っているか確認する。
3. Storybook の `title` に適切な FSD パス（例: `Shared/UI/Button`）を設定できるよう情報を整理する。
4. テストデータとして扱う `args` の初期値を設計し、Story を追加する準備をする。
5. インタラクションが必要な場合は実施内容を洗い出し、`play` 関数で検証する操作と期待値を明文化する。
6. 対象コンポーネントが複数レイヤにまたがる場合は FSD の低レイヤ（`shared` → `entities` → `features` → `widgets` → `pages` → `processes` → `app`）順で実装計画を立てる。
7. Story 作成後に実行するコマンド（`pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm prettier -c .`）を確認し、完了条件と報告内容を把握する。
8. 複数コンポーネントの stories を扱う場合は **1 コンポーネントずつ作業→レビュー依頼→承認後に次へ進む** フローを計画する。

## レイヤー優先ルール（複数コンポーネント対応時）

- 作業対象が複数レイヤに分散する場合は、必ず低レイヤから順に stories を実装する（`shared` → `entities` → `features` → `widgets` → `pages` → `processes` → `app`）。
- あるレイヤの stories 実装に着手する前に、そのレイヤおよびそれより下位レイヤのコンポーネント stories が完了・承認済みであることを確認する。
- 進捗報告では「どのレイヤが完了済みか」「次に着手予定のレイヤは何か」を明示し、未完了レイヤを残したまま上位レイヤの作業を始めない。

## 実装ステップ

1. **Story ファイルの作成/更新**
   - 既存の Story がない場合は新規に `ComponentName.stories.tsx` を作成。
   - すでに存在する場合はガイドラインに沿って修正する。
2. **Metadata の定義**
   - `Meta` / `StoryObj` 型を用い、`title`・`component`・`tags`（必要に応じて）を設定。
3. **Story の追加**
   - 最低でも主要な UI 状態を表す Story を定義。
   - `args` を用意し、UI の状態が変わる場合は追加 Story で差分化する。
   - `play` 関数が必要な場合はインタラクション手順と検証を実装。
4. **Docs / Controls の整備**
   - `parameters.docs.description` や `argTypes` を必要に応じて設定。
   - Stories を非公開にしたい場合は `docs.disable` などのフラグを使用。
5. **長期運用への反映**
   - 依存する Provider や設定を追加した場合は `.storybook/preview.tsx` を更新し、ガイドラインに追記。

## 承認フロー（複数コンポーネント対応時）

- 一度に複数のコンポーネント stories を実装することは禁止。必ず 1 コンポーネント単位で以下を繰り返す。
  1.  stories を実装し、テスト・整形・lint を実行する。
  2.  実装内容と確認結果を報告し、ユーザーに承認を依頼する。
  3.  承認が得られるまで指摘事項を修正し、再報告する。
  4.  承認後にのみ次のコンポーネントの stories 作業へ進む。
- 未承認の状態で別コンポーネントの stories に着手しないこと。

## 作業後に必ず行うこと

- 変更内容と影響範囲を要約し、追加した Story とテスト手順を報告する。
- `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm prettier -c .` を実行し、結果を明記する。
- Story やテストで利用するダミーデータが実際のユースケースと乖離していないか確認する。
- Storybook 設定を変更した場合は関連ドキュメントを更新し、PR で共有する。

---

最終更新: 2025-11-06
