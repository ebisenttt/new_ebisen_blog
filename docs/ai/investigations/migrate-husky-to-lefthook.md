# huskyからlefthookへの移行調査

## 概要

git hooksの管理ツールをhuskyからlefthookへ移行した。huskyはコマンドを逐次実行するのに対し、lefthookは並列実行が可能なため、hookの実行時間短縮を目的とした。

## 環境

- husky: 9.1.7
- lefthook: 2.1.6
- oxlint: 1.61.0 (lintツール)
- TypeScript: 6.0.3 (typecheckツール)

## hookの設定

### 移行前（husky・逐次実行）

```sh
# pre-commit
pnpm lint-staged && pnpm typecheck

# pre-push
pnpm lint && pnpm typecheck
```

### 移行後（lefthook・並列実行）

```yaml
# lefthook.yml
pre-commit:
  parallel: true
  commands:
    lint-staged:
      run: pnpm lint-staged
    typecheck:
      run: pnpm typecheck

pre-push:
  parallel: true
  commands:
    lint:
      run: pnpm lint
    typecheck:
      run: pnpm typecheck
```

## 実行時間の計測結果

計測はTSCのインクリメンタルキャッシュが安定した状態で実施。

### pre-commit

| ツール | 実行方式 | lint-staged | typecheck | 合計（wall time） |
|--------|----------|-------------|-----------|-------------------|
| husky  | 逐次     | ~0.5s       | ~2.8s     | ~3.3s             |
| lefthook | 並列   | 1.04s       | 1.82s     | **2.5s**          |

### pre-push

| ツール | 実行方式 | lint   | typecheck | 合計（wall time） |
|--------|----------|--------|-----------|-------------------|
| husky  | 逐次     | 1.2s   | 3.2s      | **4.5s**          |
| lefthook | 並列   | 1.82s  | 1.54s     | **2.3s**          |

## 考察

- **pre-push**: 4.5s → 2.3s で約49%の短縮。lintとtypecheckが同時実行されることで最も効果が大きかった。
- **pre-commit**: 3.3s → 2.5s で約24%の短縮。lint-stagedとtypecheckが同時実行されるが、lint-stagedはstaged filesのみを対象とするため効果はpre-pushより小さい。
- 並列実行時は各コマンドの実行時間が若干長くなる（CPU競合）が、wall timeでは大幅に短縮される。
- TSCの初回実行（キャッシュなし）は10〜15秒程度かかるが、これはhuskyでも同様のため差異なし。

## 注意事項

lefthookのpre-pushフックは、実際の`git push`時にはgit stdinからpushされるファイル情報を読み取り、変更がない場合はコマンドをスキップする動作がある（"no matching push files"）。ただし実際にコミットをpushする通常のケースでは正常に動作する。

## 結論

lefthookへの移行により、pre-commitで約24%、pre-pushで約49%の実行時間短縮が確認できた。移行のメリットは十分にあると判断し、huskyからlefthookへ移行する。
