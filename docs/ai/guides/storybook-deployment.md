# Storybook GitHub Pages デプロイ - AI 実装ガイド

## このドキュメントの目的

AI が Storybook の GitHub Pages デプロイを実装する際の手順とチェックリストを提供する。

## 前提条件の確認

実装前に以下を確認すること:

- [ ] `/docs/features/storybook-github-pages.md` の要件定義を読んだ
- [ ] 現在のブランチが `chore/publish-storybook` である
- [ ] Storybook が正常に動作している（`pnpm storybook` で確認）
- [ ] リポジトリ名とオーナー名を確認した
  - Owner: `ebisenttt`
  - Repository: `new_ebisen_blog`
  - 公開 URL: `https://ebisenttt.github.io/new_ebisen_blog/`

## 実装手順

### ステップ 1: ベースパス設定の追加

`.storybook/main.ts` に GitHub Pages 用のベースパス設定を追加する。

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/nextjs-vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  // GitHub Pages 用のベースパス設定を追加
  viteFinal: async (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.base = '/new_ebisen_blog/'
    }
    return config
  },
}
export default config
```

**検証方法**:

```bash
NODE_ENV=production pnpm build-storybook
# storybook-static/ フォルダが生成されることを確認
# index.html 内のパスが /new_ebisen_blog/ で始まっていることを確認
```

### ステップ 2: GitHub Actions ワークフローの作成

`.github/workflows/deploy-storybook.yml` を作成する。

**ワークフローの要件**:

- トリガー: develop ブランチへの push
- 使用するパッケージマネージャー: pnpm
- Node.js バージョン: package.json の engines フィールドを確認（未指定の場合は 20.x を使用）
- ビルドコマンド: `pnpm build-storybook`
- 出力ディレクトリ: `storybook-static`
- デプロイ先: `gh-pages` ブランチ

**推奨アクション**:

- `actions/checkout@v4`
- `pnpm/action-setup@v2`
- `actions/setup-node@v4`
- `peaceiris/actions-gh-pages@v4`

**必須の設定**:

- `GITHUB_TOKEN` を使用（リポジトリのシークレット、自動的に利用可能）
- `publish_dir: ./storybook-static`（ビルド成果物のディレクトリ）
- `publish_branch: gh-pages`（デプロイ先のブランチ）
- キャッシュの有効化（pnpm store）

**gh-pages ブランチについて**:

- ソースコードと成果物を分離するための専用ブランチ
- GitHub Pages はこのブランチから静的ファイルを公開
- `peaceiris/actions-gh-pages` が自動的に作成・更新
- メインブランチの Git 履歴を肥大化させない

**セキュリティ考慮事項**:

- 環境変数に機密情報を含めない
- デフォルトの `GITHUB_TOKEN` のみ使用（追加のシークレットは不要）
- 外部スクリプトの実行は避ける

### ステップ 3: ローカルでのビルド検証

ワークフローを作成する前に、ローカルで完全なビルドを実行し、問題がないことを確認する。

```bash
# クリーンビルド
rm -rf storybook-static
NODE_ENV=production pnpm build-storybook

# 出力の確認
ls -la storybook-static/
# index.html, iframe.html, その他のアセットが存在することを確認

# ローカルサーバーで確認（オプション）
npx http-server storybook-static -p 8080
# http://localhost:8080 にアクセスして動作確認
```

**確認項目**:

- [ ] ビルドがエラーなく完了する
- [ ] `storybook-static/` ディレクトリが生成される
- [ ] 全ストーリーが含まれている
- [ ] 静的ファイル（public/ の内容）が含まれている

### ステップ 4: プルリクエストの作成とテスト

1. ブランチに変更をコミット
2. GitHub にプッシュ
3. プルリクエストを作成
4. ワークフローが実行されることを確認（ただし develop ブランチではないので、実際のデプロイは行われない）

### ステップ 5: develop ブランチへのマージとデプロイ

1. PR をマージ
2. GitHub Actions の実行を監視
3. デプロイ完了後、`https://ebisenttt.github.io/new_ebisen_blog/` にアクセス
4. 全ストーリーの表示を確認

### ステップ 6: ドキュメントの更新

以下のファイルを更新する:

**README.md**:

```markdown
## Storybook

コンポーネントカタログは以下の URL で公開しています:
https://ebisenttt.github.io/new_ebisen_blog/

ローカルで開発する場合:
\`\`\`bash
pnpm storybook
\`\`\`
```

## トラブルシューティング

### 問題: ビルドが失敗する

**原因候補**:

1. 依存関係の不足
2. TypeScript のエラー
3. メモリ不足

**対処法**:

1. ローカルで `pnpm build-storybook` を実行し、エラーを確認
2. `pnpm install` で依存関係を再インストール
3. `pnpm typecheck` で TypeScript エラーを確認
4. GitHub Actions のログを詳細に確認

### 問題: デプロイは成功するが、ページが表示されない

**原因候補**:

1. ベースパスの設定ミス
2. GitHub Pages の設定が有効になっていない
3. 404 エラー

**対処法**:

1. `.storybook/main.ts` の `base` 設定を確認
2. リポジトリの Settings > Pages で GitHub Pages が有効か確認
3. ブラウザの開発者ツールでエラーを確認
4. `storybook-static/index.html` のパスを確認

### 問題: 一部のストーリーが表示されない

**原因候補**:

1. Next.js の機能が静的ビルドで動作しない
2. 環境変数の不足
3. 相対パスの問題

**対処法**:

1. 該当コンポーネントのストーリーファイルを確認
2. モック化が必要な Next.js 機能を特定
3. `.storybook/preview.ts` でグローバルなモックを追加

### 問題: 画像が表示されない

**原因候補**:

1. public/ ディレクトリの静的ファイルが含まれていない
2. 画像パスの問題

**対処法**:

1. `.storybook/main.ts` の `staticDirs` 設定を確認
2. 画像パスが絶対パスになっているか確認
3. `storybook-static/` に画像ファイルが含まれているか確認

## チェックリスト

実装完了前に以下を確認すること:

### コード

- [x] `.storybook/main.ts` にベースパス設定を追加した
- [x] `.github/workflows/deploy-storybook.yml` を作成した
- [x] ワークフローファイルの構文が正しい（YAML lint）
- [x] 必要な権限が設定されている

### ビルド

- [x] ローカルで `pnpm build-storybook` が成功する
- [x] `storybook-static/` ディレクトリが生成される
- [x] ビルド時間が 5分以内

### デプロイ

- [ ] GitHub Actions ワークフローが成功する（develop へのマージ後に確認）
- [ ] `gh-pages` ブランチが作成される（デプロイ後に確認）
- [ ] `https://ebisenttt.github.io/new_ebisen_blog/` にアクセスできる（デプロイ後に確認）

### 動作確認

- [ ] トップページが表示される（デプロイ後に確認）
- [ ] 全ストーリーが表示される（デプロイ後に確認）
- [ ] ナビゲーションが動作する（デプロイ後に確認）
- [ ] 静的ファイル（画像等）が表示される（デプロイ後に確認）
- [ ] モバイル表示が正常（デプロイ後に確認）

### ドキュメント

- [x] README.md に Storybook の URL を追加した
- [x] 変更履歴を更新した

## 参考情報

### GitHub Pages の設定確認

リポジトリの Settings > Pages で以下を確認:

- Source: Deploy from a branch
- Branch: gh-pages / (root)

### デバッグコマンド

```bash
# ビルド成果物の確認
ls -R storybook-static/

# HTML ファイル内のパス確認
grep -r "base" storybook-static/index.html

# GitHub Actions のログ確認
# GitHub のウェブ UI で Actions タブを確認
```

## 保守・運用

### 定期的な確認事項

- Storybook のバージョン更新時は再デプロイして動作確認
- 新しいストーリー追加時はデプロイ後に表示確認
- 月次でアクセス可能性を確認

### 更新手順

通常は develop ブランチへの push で自動デプロイされるため、手動操作は不要。

手動でデプロイが必要な場合:

1. GitHub の Actions タブを開く
2. "Deploy Storybook" ワークフローを選択
3. "Run workflow" ボタンをクリック（develop ブランチを選択）

## 変更履歴

- 2025-11-29: 初版作成
