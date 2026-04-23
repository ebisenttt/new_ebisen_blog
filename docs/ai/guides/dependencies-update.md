# 依存パッケージ週次アップデート手順

## 概要

週次で依存パッケージを最新バージョンに更新する手順です。

## ブランチ命名規則

```
chore/update-deps-YYYYMMDD
```

例: `chore/update-deps-20260423`

## 手順

### 1. アップデート前の状態確認

```bash
pnpm outdated
```

- 現在バージョン、最新バージョン、package.json の指定バージョンを記録する。

### 2. パッケージのアップデート

```bash
pnpm update --latest
```

- `--latest` を付けることで semver 範囲を超えた最新バージョンにも更新する。
- pnpm-lock.yaml と package.json が更新される。

### 3. 検証チェックリストの実行

`/docs/ai/checklists/verify-after-changes.md` に従い、以下を順番に実行する。

```bash
pnpm typecheck
pnpm test
pnpm lint
pnpm prettier -c .
```

すべて exit code 0 で終了することを確認する。

### 4. 失敗した場合の対応

- **typecheck / lint のエラー**: 型定義・APIの変更が原因の場合が多い。エラー内容を確認して修正する。
- **test の失敗**: スナップショットの更新や API 変更への追従が必要な場合がある。
- **修正が困難なパッケージ**: そのパッケージだけ元のバージョンに戻し、PR 説明に「アップデートできなかったパッケージ」として記載する。

元のバージョンに戻す方法:

```bash
pnpm add <パッケージ名>@<元のバージョン>
```

### 5. コミット

```bash
git checkout -b chore/update-deps-YYYYMMDD
git add package.json pnpm-lock.yaml
git commit -m "chore: update dependencies (YYYY-MM-DD)"
```

### 6. PR 作成

PR タイトル: `chore: update dependencies (YYYY-MM-DD)`

PR 説明に以下を記載する:

- 更新したパッケージの一覧（`pnpm outdated` の結果）
- アップデートできなかったパッケージとその理由（あれば）
- 検証結果（typecheck / test / lint / prettier の結果）

---

## 保守履歴

- 2026-04-23: 初版作成
