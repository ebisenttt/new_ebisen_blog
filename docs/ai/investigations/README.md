# AI 調査成果物

AI エージェントが行った調査・計測の成果物を蓄積するディレクトリ。
再現性と参照性を確保するため、スクリプトと結果をセットで保管する。

## ディレクトリ構成ルール

```
investigations/
  <調査名-kebab-case>/
    <スクリプト>.sh  または  <スクリプト>.ts
    results/
      <タイムスタンプ>-<識別子>.<拡張子>
```

- 調査名は内容がわかる `kebab-case` にする（例: `typescript-6-migration`）
- スクリプトはそのまま再実行できる状態で保管する
- 結果ファイルはタイムスタンプを含めて上書きせず蓄積する

## 調査一覧

| 調査名                                              | 目的                                      | スクリプト        |
| --------------------------------------------------- | ----------------------------------------- | ----------------- |
| [typescript-6-migration](./typescript-6-migration/) | TS 5.8.3 → 6.0.3 移行前後のビルド速度比較 | `benchmark-ts.sh` |

## benchmark-ts.sh の使い方

TypeScript バージョンアップ時のビルド・型チェック速度を計測するスクリプト。
プロジェクトルートから実行する。

```bash
# 全ベンチマーク実行（~25分）
bash docs/ai/investigations/typescript-6-migration/benchmark-ts.sh

# next build を省略（~10分）
bash docs/ai/investigations/typescript-6-migration/benchmark-ts.sh --skip-build

# typecheck のみ（~5分、動作確認向け）
bash docs/ai/investigations/typescript-6-migration/benchmark-ts.sh --only-typecheck
```

結果は `docs/ai/investigations/typescript-6-migration/results/` に JSON で保存される。
