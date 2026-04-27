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

## knip の制限: Babel プラグインの短縮名を解決できない

knip には Babel プラグインがあり `.babelrc.js` を認識するが、Babel の短縮名規則（`'prismjs'` → `babel-plugin-prismjs` への自動展開）を理解しない。フルネーム（`'babel-plugin-prismjs'`）に変えても同様に検出されなかった。

### 回避策: `.babelrc.js` を削除して直接インポートに置き換える

`babel-plugin-prismjs` が担っていた「言語・プラグインの自動登録」を、ソースコードの直接インポートに置き換えることで解決できる。

**Before: `.babelrc.js`（削除）**

```js
module.exports = {
  presets: ['next/babel'],
  plugins: [
    ['prismjs', { languages: ['js', 'css', 'html', 'bash', 'json'], plugins: ['line-numbers', 'show-language'] }],
  ],
}
```

**After: `page-client.tsx`（直接インポートに変更）**

```tsx
import Prism from 'prismjs'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markup'
import 'prismjs/plugins/line-numbers/prism-line-numbers'
import 'prismjs/plugins/show-language/prism-show-language'
```

**After: `page.tsx`（プラグインCSS追加）**

```tsx
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'
```

### 副作用: ビルドが高速化する

`.babelrc.js` が存在すると Next.js は Babel に fallback してトランスパイルを行う。このファイルを削除することで SWC（Next.js の標準トランスパイラ）が使われるようになり、ビルドが速くなる。

## knip の制限: oxlint の jsPlugins を認識できない

knip は `.oxlintrc.json` の `jsPlugins` フィールドを認識しない（knip に oxlint プラグインが存在しない）。そのため、oxlint の JS プラグインとして使っているパッケージが「未使用」と誤検知される。

### 該当パッケージ

| パッケージ | `.oxlintrc.json` での参照先 |
|---|---|
| `@eslint-react/eslint-plugin` | `"jsPlugins": ["@eslint-react/eslint-plugin", ...]` |
| `eslint-plugin-unused-imports` | `"jsPlugins": [..., "eslint-plugin-unused-imports"]` |

### 回避策: `knip.json` の `ignoreDependencies`

babel の場合と異なり、oxlint の設定フォーマット上コードレベルでの回避手段がないため、`ignoreDependencies` で除外するのが唯一の対応。

```json
{
  "ignoreDependencies": [
    "@eslint-react/eslint-plugin",
    "eslint-plugin-unused-imports"
  ]
}
```

## 参考

- [公式サイト](https://knip.dev)
- [Getting Started](https://knip.dev/overview/getting-started)
- [CLI リファレンス](https://knip.dev/reference/cli)
- [CI での使用ガイド](https://knip.dev/guides/using-knip-in-ci)
