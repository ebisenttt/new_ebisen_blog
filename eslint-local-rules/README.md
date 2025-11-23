# ESLint カスタムルール

このディレクトリには、プロジェクト固有のESLintカスタムルールが含まれています。

## component-structure

UIコンポーネントのディレクトリ構成を自動的に検証するルールです。

### 検証内容

`src/**/ui/**` 配下のすべてのUIコンポーネントについて、以下の4ファイル構成を強制します:

```
ComponentName/
  ├─ ComponentName.tsx
  ├─ ComponentName.test.tsx
  ├─ ComponentName.stories.tsx
  └─ index.ts
```

### 対象レイヤー

- `src/shared/**`
- `src/entities/**`
- `src/features/**`
- `src/widgets/**`
- `src/processes/**`
- `src/pages/**`

### エラーメッセージ

以下のいずれかのファイルが欠けている場合、ESLintエラーが表示されます:

- `Missing {ComponentName}.test.tsx file. All components must have a test file`
- `Missing {ComponentName}.stories.tsx file. All components must have a stories file`
- `Missing index.ts file. Component directory must have an index.ts`

### 使用例

```bash
# すべてのコンポーネント構成をチェック
pnpm lint

# 自動修正可能なエラーを修正（このルールは自動修正非対応）
pnpm lint --fix
```

### 設定

`eslint.config.mjs` で有効化されています:

```javascript
{
  files: ['src/**/ui/**/*.tsx'],
  rules: {
    'local-rules/component-structure': 'error',
  },
}
```

### 関連ドキュメント

- [コンポーネント構成ガイド](../docs/ai/guides/component-structure.md)
- [Storybook Stories 実装ガイド](../docs/ai/guides/storybook-stories.md)

## カスタムルールの追加方法

1. `eslint-local-rules/` 配下に新しいルールファイルを作成
2. `eslint-local-rules/index.js` でエクスポート
3. `eslint.config.mjs` でルールを有効化

詳細は [ESLint Custom Rules](https://eslint.org/docs/latest/extend/custom-rules) を参照してください。
