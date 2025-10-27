# Feature-Sliced Design 移行計画

最終更新: 2025-10-24

## 1. ゴールと制約

- Next.js App Router の構造を維持しつつ、責務ごとに分離された Feature-Sliced Design (FSD) を導入する。
- note.com 連携や Markdown ポストなど既存ドメインを壊さずに、段階的に再配置できる移行パスを提供する。
- ESLint の import 制約（components 直下は相対 import など）や Storybook/Tailwind 設定を破壊しない。
- 既存のテスト (Jest) とビルド/型チェックワークフローを継続利用する。

## 2. 現状アーキテクチャの整理

| 種別                                       | 主な内容                                                     | 備考                                                                |
| ------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------------- |
| `src/app`                                  | ルーティング (`page.tsx`, `posts/[name]/page.tsx` など)      | Server Component 主体、レンダリング直前で `components` を組み立て。 |
| `src/components`                           | `common`, `layout`, `post`, `profile`, `open-graph`, `image` | コンポーネントの粒度が混在。 UI キットとドメイン UI が同居。        |
| `src/lib`                                  | `api.ts`, `note.ts`, Markdown 変換など                       | ドメインロジックと共通処理が同居。                                  |
| `src/utils`                                | DOM 変換・ファイル読み込みなど                               | shared lib 相当。                                                   |
| `src/constants`, `src/styles`, `src/types` | 定数、グローバルスタイル、型定義                             | 役割は明確だが shared レイヤに寄せたい。                            |

課題: レイヤ境界が曖昧で、UI とモデル/API が同じディレクトリに存在。ドメイン機能 (例: note 記事の取得) が `lib/` 直下にあり、依存方向が見えにくい。

## 3. FSD レイヤーポリシー

| レイヤ        | 役割                                                                                | 本プロジェクトでの例                                                   |
| ------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| **app**       | Next.js のルート定義・メタデータ・グローバル Providers                              | `src/app/layout.tsx`, `page.tsx`, `posts/[name]/page.tsx`              |
| **pages**     | ルート単位のビルド済み UI。必要な widgets/processes を組み立てる Server Component。 | `src/pages/home`, `src/pages/post-details`                             |
| **processes** | ユースケース全体をまとめるオーケストレーション。複数 feature の組み合わせを管理。   | `src/processes/view-posts`, `src/processes/view-post-detail`           |
| **widgets**   | ページ単位のセクション。複数 feature / entities を束ねる UI。                       | Posts フィード、Tag Cloud、Profile、Footer、Header など                |
| **features**  | 1 つのユーザーストーリーを完結させる機能。複数 entities を横断可。                  | Tag 絞り込み、外部記事オープン、Note 記事フェッチ、Tab 切替            |
| **entities**  | ドメインオブジェクトを表現。型・API・最小構成 UI を含む。                           | Post, Tag, Author(Profile)                                             |
| **shared**    | レイヤに依存しない共通資産。UI キット、lib、config、styles、types。                 | `Container`, `Card`, `backQuoteToCodeElement`, `constants`, global CSS |

依存ルール: `shared → entities → features → widgets → processes → pages → app` のみ。下位から上位への参照は禁止。

## 4. 提案ディレクトリ構成

```
src/
  app/
    layout.tsx
    page.tsx              # ページ本体は pages/home から再利用
    posts/
      [name]/page.tsx     # pages/post-details を呼び出す
      sitemap.ts
    (その他静的ファイル)

  pages/
    home/
      index.tsx           # Server Component。processes/widgets を組み合わせる
    post-details/
      index.tsx

  processes/
    view-posts/
      index.ts            # fetch + ページ固有処理のオーケストレーション
      model/
        selectors.ts
    view-post-detail/
      index.ts

  widgets/
    layout/
      site-layout/
        ui/
          Layout.tsx
          Header.tsx
          Footer.tsx
    navigation/
      tab-layout/
    posts/
      posts-feed/
        ui/PostsFeed.tsx
    tags/
      tag-cloud/
    profile/
      about-card/

  features/
    posts/
      filter-by-tag/
        model/
        ui/TagFilter.tsx
      open-external/
        model/
        ui/ExternalPostLink.tsx
      fetch-note/
        api/fetchNote.ts   # 現在の lib/note.ts を移設
    layout/
      switch-tab/
    posts/
      format-content/

  entities/
    post/
      model/
        types.ts          # 旧 src/types/post.ts
        api/
          markdown.ts     # 旧 lib/api.ts の Markdown 部分
          note.ts         # 旧 lib/note.ts の encode/decode
        helpers.ts
      ui/
        PostPreview/
          index.tsx
          formatting.ts
        PostHeader/
      lib/
        mappers.ts
    tag/
      model/
        selectors.ts
      ui/
        TagBadge.tsx
    author/
      model/
      ui/ProfileCard/

  shared/
    ui/
      card/
      badge/
      container/
      icons/
    lib/
      backQuoteToCodeElement.ts
      file/
        getPostFiles.ts
      markdown/
    api/
      client.ts
    config/
      metadata.ts
      routes.ts
    styles/
      index.css
    types/
      markdown.d.ts

  app-providers/
    theme.tsx (必要なら)
```

> メモ: `app-providers/` は optional。`app/layout.tsx` から GraphQL Auth などの Provider を切り出す用途。

## 5. 既存モジュールのマッピング案

| 現行パス                               | 移行先レイヤ                                                                  | 新ファイル例                                                    | メモ                                                |
| -------------------------------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------- | --------------------------------------------------- |
| `src/components/common/*`              | `shared/ui`                                                                   | `shared/ui/card/Card.tsx` など                                  | index.ts を `shared/ui/index.ts` で再エクスポート。 |
| `src/components/layout/layout.tsx`     | `widgets/layout/site-layout/ui/Layout.tsx`                                    | Header/Footer と同じ widget に集約。                            |
| `src/components/layout/footer.tsx`     | `widgets/layout/site-layout/ui/Footer.tsx`                                    | note ロゴなど widget に含める。                                 |
| `src/components/layout/tabLayout.tsx`  | `features/layout/switch-tab/ui/TabLayout/TabLayout.tsx`                       | タブ切替という feature として分離。                             |
| `src/components/post/post-preview.tsx` | `entities/post/ui/PostPreview/PostPreview.tsx`                                | decodeExternalUrl は entity のヘルパ経由で注入。                |
| `src/components/post/posts.tsx`        | `widgets/posts/posts-feed/ui/PostsFeed.tsx`                                   | PostPreview を使う widget。                                     |
| `src/components/profile/profile.tsx`   | `widgets/profile/about-card/ui/ProfileAbout.tsx`                              | 作者情報 widget。                                               |
| `src/components/open-graph/*`          | `shared/ui/open-graph/*`                                                      | 共通 OG Helper。                                                |
| `src/lib/api.ts`                       | 分割: `entities/post/model/api/markdown.ts`, `entities/post/model/queries.ts` | Markdown 変換と getAllPosts を entity に集約。                  |
| `src/lib/note.ts`                      | `features/posts/fetch-note/api/fetchNote.ts` (encode 等は entity)             | 外部 API 呼び出しは feature or entity で管理。                  |
| `src/utils/backQuoteToCodeElement.ts`  | `shared/lib/backQuoteToCodeElement.ts`                                        | name も camelCase 維持。                                        |
| `src/utils/file.ts`, `readFile.ts`     | `shared/lib/file-system/`                                                     | Node サイドのユーティリティ。                                   |
| `src/constants/*`                      | `shared/config/*`                                                             | メタデータやルーティング。                                      |
| `src/types/post.ts`                    | `entities/post/model/types.ts`                                                | 他 entity に展開予定なら `.d.ts` を shared/types に分離。       |
| `docs/ai-prompts/*`                    | 変更なし                                                                      | ただしアーキテクチャドキュメントは `docs/architecture` に集約。 |

## 6. エイリアス & Lint 更新

1. `tsconfig.json`
   ```jsonc
   {
     "compilerOptions": {
       "paths": {
         "@/*": ["src/*"],
         "@shared/*": ["src/shared/*"],
         "@entities/*": ["src/entities/*"],
         "@features/*": ["src/features/*"],
         "@widgets/*": ["src/widgets/*"],
         "@processes/*": ["src/processes/*"],
         "@pages/*": ["src/pages/*"],
       },
     },
   }
   ```
2. ESLint (`eslint.config.mjs`)
   - import order に新エイリアスを追加。
   - `components` 限定ルールを撤廃し、新しいレイヤごとのポリシーへ更新。
   - 例: widgets からは features 以下への import 禁止 (no-restricted-imports / eslint-plugin-boundaries 等を活用)。

## 7. テストガードライン

ディレクトリを移動・再構成する前に、必ずテストで現状の振る舞いをロックします。以下の手順を各フェーズで繰り返してください。

1. **既存テストの有無を確認**

- 対象ドメイン（例: `lib/note.ts` や `components/post`）に対応するテストファイルが存在するか探します。
- 見つからない場合は、まずテストを追加して現行仕様を固定化してください。

2. **現状のテストを実行**

- `pnpm test -- <対象パターン>` などで関連テストを先に実行し、グリーンであることを確認します。
- 落ちる場合はディレクトリ変更に入る前に修正してください。

3. **ファイル移動・リファクタリングを実施**

- テストがある状態でのみ、ディレクトリ構成の変更を行います。

4. **移動後にテストを再実行**

- 変更後すぐに同じテストを実行し、再びグリーンであることを確認します。
- もしテストが失敗した場合は、原因を調査したうえで「実装の修正」や「テスト観点の追加」をユーザー（レビュアー）に提案し、了承を得てから修正を反映してください。

> **Tip**: ディレクトリ移動による import パス変更でテストが落ちるケースが多いため、`jest --watch` や TS の `--traceResolution` を活用しながら進めると効率的です。

## 8. 段階的移行ステップ

1. **Phase 0: 基盤準備**

   - 新ディレクトリ (`shared`, `entities` など) を空で作成。
   - `tsconfig` と ESLint の alias/ルールを変更。
   - Storybook の `stories` パス・Tailwind `content` 設定を新パスに対応。

2. **Phase 1: shared レイヤ移設**

   - `components/common` -> `shared/ui` へ移動し、再エクスポートを整理。
   - `utils/`, `constants/`, `styles/`, `types/remark-html.d.ts` を `shared/lib`, `shared/config`, `shared/styles`, `shared/types` へ移管。
   - ビルド・Storybook・テスト確認。

3. **Phase 2: entities/post の切り出し**

   - `types/post.ts`, `lib/api.ts` (Markdown 変換含む) を `entities/post/model` に統合。
   - `lib/note.ts` の `encode/decode` を entity の helper へ、フェッチは `features/posts/fetch-note` に委譲。
   - `components/post` のうち純粋 UI (PostPreview, Header, Body, Title) を `entities/post/ui` へ移動。
   - Jest テスト (`api.test.ts` etc) を新パスに合わせて整理。過去に削除された note テストも再追加予定。

4. **Phase 3: features の定義**

- Tag 集計・ソート・Tab 切替など、ユーザー操作を伴うロジックを features に移す。
- `src/components/common/tags.tsx` は `features/posts/filter-by-tag/ui/TagFilter/TagFilter.tsx` へ移し、仕様は `docs/features/posts-filter-by-tag.md` を参照。投稿一覧 (`Posts`) の表示は entity を再利用するが、タグの収集・並び替え・選択状態の管理は feature の model で担保する。
- `src/app/page.tsx` で行っているタグ集計を `features/posts/filter-by-tag/model` の関数 (`collectTags` / `filterPostsByTag` など) に置き換え、ページ側は feature の公開 API から計算済みデータを受け取るだけにする。
- 外部リンク判定 (`decodeExternalUrl`) とリンク生成の責務は `features/posts/open-external` に移す。仕様は `docs/features/posts-open-external.md` を参照し、feature から `href` / `externalUrl` を渡して entity の UI (`PostPreview`) がリンク種別を切り替える構成にする。
- タブ切替 UI (`src/components/layout/tabLayout.tsx`) は `features/layout/switch-tab` に移し、仕様は `docs/features/layout-switch-tab.md` を参照。タブの状態管理は feature 内で完結させ、widget からは props を渡すだけにする。

5. **Phase 4: widgets と processes**

- `src/components/layout` のレイアウト群 (`Layout`, `Intro`, `Header`, `Footer`) を `widgets/layout/site-layout` 配下に移設し、仕様は `docs/widgets/site-layout.md` を参照。タブ切替は `features/layout/switch-tab` を利用して組み立てる。
- 投稿一覧タブで利用しているセクションを `widgets/posts/posts-feed` として切り出し、`TagFilter` や `Posts` など feature/entity を注入する UI を提供する（仕様は `docs/widgets/posts-feed.md` を参照）。クライアント状態（選択中タブ）を内部で保持し、ページ層からは初期化済みデータを受け取るだけにする。
- プロフィールセクションを `widgets/profile/about-card` として再配置し、widget 側では UI のみに専念する。
- `src/app/page.tsx` からは直接 feature / entity を扱わず、`@pages/home` へ委譲する。`src/pages/home/index.tsx` は Server Component として widgets を組み合わせる。
- データ取得と feature 呼び出しを担う `processes/view-posts` を新設し、`getHomePostsViewModel()`（仮）で以下をまとめて返す: 投稿一覧（リンク props 付与済み）、タグ並び順、初期選択タグ、タグ統計（仕様は `docs/processes/view-posts.md` を参照）。
- 投稿詳細ページ向けに `processes/view-post-detail` を定義し、記事本文・関連リンク・note API などのドメイン呼び出しをここで集約する。

6. **Phase 5: pages / app の仕上げ**
   - `src/app/page.tsx` は `export { HomePage as default } from '@/pages/home'` のように委譲。
   - `generateStaticParams` 等は entity/process から import。
   - すべての import パスを更新し、テスト + lint + storybook + build を実行。

## 9. 追加タスク & 推奨事項

- note 連携に関する Jest テスト (エンコード/デコード、ページング、フォールバック) を `entities` / `features` の適切な場所で復活。
- ESLint に `eslint-plugin-boundaries` を導入するとレイヤ違反の検出が自動化される。
- Storybook のストーリーファイルは widget / feature / entity の `ui` ディレクトリに配置し、命名規則 (`*.stories.tsx`) を統一。
- ドキュメント `docs/architecture/feature-sliced-design.md` を常に最新化し、PR テンプレートに参照を追加すると運用が楽。
- 将来的に API クライアントや CMS 連携が増える場合、`shared/api` に HTTP クライアントを集約し、entities の `model/api` から利用する方針とする。

## 10. オープンな質問

- process レイヤをどこまで採用するか: 現状は単純なブログなので `pages` から直接 features/widget を呼んでも十分だが、将来ユースケースが増えるなら process を導入。
- `profile` を entity とみなすか widget とみなすか: 現時点では静的セクションなので widget 扱いとしたが、コンテンツが動的化するなら `entities/author` に昇格させる。
- マルチ言語対応やダークモード切替など cross-cutting concern の導入予定があるか。need に応じて `shared/config/theme`, `features/theme/toggle` を追加。

---

このプランを元に段階的にリファクタリングを進め、対応フェーズごとにテスト・コードレビューを挟むことで安全に FSD へ移行できます。
