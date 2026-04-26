# knip 技術調査

## 背景・導入理由

これまで未使用依存パッケージの検出に `depcheck` を使用してきたが、プロジェクトがアーカイブ化されメンテナンスが終了している。後継として `knip` を採用する。

## knip とは

JavaScript/TypeScript プロジェクトの「使われていないもの」を包括的に検出する静的解析ツール。

depcheck が未使用の dependencies/devDependencies のみを対象にするのに対し、knip は以下を一括検出する：

- 未使用ファイル
- 未使用の exports / 型エクスポート
- 未使用の dependencies / devDependencies
- 未解決のインポート

150以上のプラグインを内蔵しており、Next.js・Vitest・Playwright などは設定なしで自動認識する。

## 基本的な使い方

### インストール

```bash
pnpm add -D knip
```

### package.json にスクリプトを追加

```json
"scripts": {
  "knip": "knip"
}
```

### 実行コマンド

| コマンド | 説明 |
|---|---|
| `pnpm knip` | すべての問題を検出 |
| `pnpm knip --dependencies` | 未使用の dependencies / devDependencies のみ表示 |

### 終了コード

| コード | 意味 |
|---|---|
| `0` | 問題なし |
| `1` | 未使用の依存や exports を検出 |
| `2` | 内部エラー / 無効な引数 |

CI では終了コード `1` でジョブが失敗するため、そのまま使用可能。

## CI での使用

```bash
pnpm knip --dependencies
```

`--no-progress` は CI 環境で自動的に有効になるため、指定不要。

## 設定ファイル（knip.json）

プラグイン自動検出がうまく機能しない場合に作成する。

```json
{
  "entry": ["src/index.ts"],
  "project": ["src/**/*.{ts,tsx}"],
  "ignore": ["**/some-special-file.ts"]
}
```

Next.js / Vitest / Playwright などは自動認識のため、通常は設定不要。

## depcheck との比較

| 比較軸 | depcheck | knip |
|---|---|---|
| メンテ状況 | アーカイブ（終了） | 活発 |
| 検出スコープ | dependencies のみ | ファイル・exports・dependencies |
| モダンフレームワーク対応 | 弱い | プラグインで強力対応 |
| 設定の手間 | 少ない（誤検知も多い） | プラグイン自動認識でほぼ不要 |

## 参考

- [公式サイト](https://knip.dev)
- [Getting Started](https://knip.dev/overview/getting-started)
- [CLI リファレンス](https://knip.dev/reference/cli)
- [CI での使用ガイド](https://knip.dev/guides/using-knip-in-ci)
