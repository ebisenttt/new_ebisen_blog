# jestからvitestへの移行

現在自動テストをjestで行なっている。jestはesm対応が遅れておりcjsにトランスパイルするための設定が必要であること、vitestよりも実行時間が長いことから自動テストをvitestへ移行する

## 事前調査結果

- テストファイル数: 32ファイル（`src/` 配下31ファイル + `tests/example.spec.ts` はPlaywright用のため対象外）
- Jest設定ファイル: `jest.config.ts`（`next/jest.js` 使用、ESM対応のため `transformIgnorePatterns` が複雑）
- Vitestはすでに `vitest ^4.1.5` としてインストール済み（Storybookの `@storybook/addon-vitest` 用）
- `vitest.config.*` は未存在（単体テスト用の設定がまだない）

## 注意事項
以下の手順通りに進めること。途中で手順通りに進められないことがわかったときなど、意思決定が必要な状況になった場合はユーザーに確認を求める。

## 手順

### 1. jestを使用している状態の記録を残す
比較のためにjestを使用している現在の姿を記録として残しておく。
- 設定ファイル一覧
- 設定項目一覧
  - 特にesm未対応であることから必要になった設定項目を列挙する
- テスト実行時間
  - `jest --no-cache` で10回実行したときの最大値、最小値、中央値、標準偏差を集計する
  - 有意差がない場合は回数を増やす。最大30回まで増やしても有意差がない場合は次のステップへ進む。

### 2. jestからvitestへ移行
- jestを依存から削除（`jest`, `jest-environment-jsdom`, `ts-jest`, `@types/jest`）
- `vitest.config.ts` を新規作成（`jest.config.ts` の設定を移植）
  - `moduleNameMapper` → `resolve.alias`
  - `testEnvironment: 'jsdom'` → `environment: 'jsdom'`
  - `testMatch` → `include`
  - `transformIgnorePatterns` → `server.deps.inline`
- `jest.config.ts` を削除
- 変更が必要なテストコードを修正（`@jest/globals` → `vitest` など）
- lint, build, typecheckが通ることを確認する
- testが成功することを確認する

### 3. vitestのテストを測定
1でjestに関して記録・集計した内容をvitestに対しても記録・集計する
- `vitest run --reporter=verbose` 相当で `--no-cache`（キャッシュなし）で10回実行

### 4. jestとvitestを比較し結果をまとめる
jestとvitestについて記録・集計した情報を比較し改善された項目、改善されなかった項目をまとめ、`docs/ai/investigations/jest-to-vitest-migration/` 配下にドキュメントとして作成する

---

## 実施済み（2026-04-26 完了）

調査結果: `docs/ai/investigations/jest-to-vitest-migration/` を参照
