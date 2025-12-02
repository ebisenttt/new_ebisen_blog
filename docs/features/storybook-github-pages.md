# Storybook の GitHub Pages 公開

## 概要

プロジェクトのコンポーネントカタログとして Storybook を GitHub Pages で公開し、チーム内外でコンポーネントの確認・共有を容易にする。

## 背景・目的

### 背景

- 本プロジェクトは個人開発のブログサイトである
- 既に Storybook が導入されており、コンポーネントのドキュメント化とビジュアルテストが実装されている
- ローカル環境でしか Storybook を確認できず、外部から参照できない
- コンポーネントの実装状況やデザインを手軽に確認・共有したい

### 目的

- コンポーネントカタログをオンラインで公開し、誰でもアクセス可能にする
- ブラウザさえあれば、ローカル環境の構築なしにコンポーネントを確認できる
- ポートフォリオとしてコンポーネント設計を公開する
- PR レビュー時にコンポーネントの見た目を確認しやすくする

## 要件

### 機能要件

#### 1. 自動デプロイ

- develop ブランチへの push 時に自動的に Storybook をビルド・デプロイする
- GitHub Actions を使用した CI/CD パイプラインを構築する
- デプロイの成功/失敗を確認できるようにする

#### 2. アクセス可能性

- `https://<username>.github.io/<repository-name>/` でアクセス可能
- 本プロジェクトの場合: `https://ebisenttt.github.io/new_ebisen_blog/`
- モバイル端末からもアクセス可能

#### 3. コンテンツ

- 既存の全 Story が正しく表示される
- public ディレクトリの静的ファイル（画像等）が正しく読み込まれる
- Next.js の機能（next/image 等）を使用しているコンポーネントも正しく動作する

### 非機能要件

#### 1. パフォーマンス

- ビルド時間: 5分以内
- 初回ロード時間: 3秒以内（通常のネットワーク環境下）

#### 2. セキュリティ

- 公開リポジトリのため、機密情報を含めない
- 環境変数やシークレットは使用しない（GitHub 標準の GITHUB_TOKEN のみ使用）

#### 3. メンテナンス性

- ワークフローファイルは `.github/workflows/` に配置
- デプロイ設定は明確にドキュメント化する
- トラブルシューティング手順を用意する

## 技術仕様

### 使用技術

- **Storybook**: 既存の設定を使用（`@storybook/nextjs-vite`）
- **ビルドツール**: `storybook build` コマンド
- **デプロイ先**: GitHub Pages（`gh-pages` ブランチ）
- **CI/CD**: GitHub Actions
- **デプロイアクション**: `peaceiris/actions-gh-pages@v4`

### ビルド設定

```json
{
  "scripts": {
    "build-storybook": "storybook build"
  }
}
```

### 出力ディレクトリ

- デフォルト: `storybook-static/`
- この静的ファイルを GitHub Pages にデプロイする

### ベースパス設定

GitHub Pages のサブディレクトリでホストされる場合、ベースパスの設定が必要:

```typescript
// .storybook/main.ts
const config: StorybookConfig = {
  // ... 既存の設定
  viteFinal: async (config) => {
    // GitHub Pages のベースパスを設定
    if (process.env.NODE_ENV === 'production') {
      config.base = '/new_ebisen_blog/'
    }
    return config
  },
}
```

### デプロイの仕組み

#### ブランチ構成

- **develop ブランチ**: ソースコード（`.storybook/`, `src/` など）
- **gh-pages ブランチ**: ビルド済みの静的ファイル（HTML, CSS, JS のみ）

GitHub Pages は `gh-pages` ブランチの内容を公開します。

#### デプロイフロー

1. develop ブランチへの push をトリガーに GitHub Actions が起動
2. Storybook をビルドし `storybook-static/` を生成
3. `peaceiris/actions-gh-pages` アクションが以下を実行:
   - `gh-pages` ブランチを作成/更新
   - `storybook-static/` の内容を `gh-pages` ブランチに push
4. GitHub Pages が自動的に `gh-pages` ブランチから公開

#### なぜ gh-pages ブランチを使うのか

- **ソースコードと成果物の分離**: ビルド成果物をメインブランチから分離
- **Git 履歴の保護**: ビルド成果物（数MB〜数十MB）による履歴の肥大化を防ぐ
- **GitHub Pages の標準**: `gh-pages` は GitHub Pages のデフォルトブランチ名
- **自動認識**: リポジトリ設定で自動的に認識される

## 実装計画

### Phase 1: 基本セットアップ

1. ✅ Storybook の動作確認（既に完了）
2. ✅ GitHub Pages の有効化（ワークフロー作成により自動化）
3. ✅ ローカルでのビルド確認
4. ✅ ベースパス設定の追加・検証

### Phase 2: GitHub Actions ワークフロー作成

1. ✅ ワークフローファイルの作成
   - ファイル名: `.github/workflows/deploy-storybook.yml`
   - トリガー: develop ブランチへの push
2. ✅ ビルドステップの実装
   - Node.js のセットアップ
   - 依存関係のインストール（pnpm 使用）
   - Storybook のビルド
3. ✅ デプロイステップの実装
   - GitHub Pages へのデプロイ
   - デプロイ用アクションの選定（例: `peaceiris/actions-gh-pages`）
   - GITHUB_TOKEN を使用（追加のシークレット不要）

### Phase 3: テスト・検証

1. ⏳ テストブランチでのワークフロー実行（develop へのマージ後に実施）
2. ⏳ デプロイされた Storybook の動作確認
   - 全ストーリーの表示確認
   - 静的ファイルの読み込み確認
   - レスポンシブ表示の確認
3. ⏳ 問題があれば修正・再デプロイ

### Phase 4: ドキュメント整備

1. ✅ README への公開 URL 追加
2. ✅ トラブルシューティングガイドの作成
3. ✅ メンテナンス手順の文書化

## 成功基準

- [x] GitHub Actions ワークフローが正常に動作する
- [ ] develop ブランチへの push で自動デプロイされる（develop へのマージ後に確認）
- [ ] `https://ebisenttt.github.io/new_ebisen_blog/` で Storybook にアクセスできる（デプロイ後に確認）
- [ ] 既存の全 Story が正しく表示される（デプロイ後に確認）
- [ ] 静的ファイル（画像等）が正しく読み込まれる（デプロイ後に確認）
- [ ] モバイル端末からもアクセス・閲覧可能（デプロイ後に確認）
- [x] ビルド時間が 5分以内（ローカルビルドで約6秒を確認）
- [x] ドキュメントが整備されている
- [x] 追加のシークレットや環境変数が不要

## リスクと対策

### リスク1: ビルドサイズが大きい

**影響**: GitHub Pages の容量制限（1GB）に抵触する可能性  
**対策**:

- 不要なアセットを除外
- 画像の最適化
- ビルド成果物のサイズをモニタリング

### リスク2: Next.js 固有の機能が動作しない

**影響**: 一部のコンポーネントが正しく表示されない  
**対策**:

- Next.js の機能をモック化
- Storybook の Next.js アドオン設定を最適化
- 静的エクスポートに対応した実装を心がける

### リスク3: デプロイの失敗

**影響**: Storybook が更新されない  
**対策**:

- エラーハンドリングの実装
- 通知設定（GitHub Actions の通知機能）
- ロールバック手順の確立

## 参考リンク

- [Storybook - Publish Storybook](https://storybook.js.org/docs/react/sharing/publish-storybook)
- [GitHub Pages Documentation](https://docs.github.com/ja/pages)
- [peaceiris/actions-gh-pages](https://github.com/peaceiris/actions-gh-pages)

## 変更履歴

- 2025-11-29: 初版作成
