# new_ebisen_blog

備忘録を兼ねた技術ブログ

## Storybook

コンポーネントカタログは以下の URL で公開しています:

**https://ebisenttt.github.io/new_ebisen_blog/**

ローカルで開発する場合:

```bash
pnpm storybook
```

## ブランチ構成

- **main**: 本番環境のブランチ（ブログサイト公開用）
- **develop**: 開発用のメインブランチ（Storybook のデプロイトリガー）
- **gh-pages**: Storybook の静的ファイル公開用（自動生成・更新）

develop ブランチに push すると、GitHub Actions が自動的に Storybook をビルドして gh-pages ブランチにデプロイします。

## ディレクトリ構成

- \_drafts
  - 下書きを保存するためのディレクトリ．この中のファイルの記事は公開されない．
- \_posts
  - 公開する記事を保存するためのディレクトリ．
- public, src
  - Next.jsの仕様に従う．

## 運用方法

-
