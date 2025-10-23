# Feature-Sliced Design とは

最終更新: 2025-10-24

> **想定読者**: React / Next.js で開発経験はあるが、Feature-Sliced Design (FSD) の名前を初めて聞いた人。

## 1. FSD の概要

Feature-Sliced Design は、フロントエンドアプリケーションを「機能 (feature) ごと」に分割して整理するための設計手法です。従来の「コンポーネント階層」や「ディレクトリごとの役割」で構成したプロジェクトで起こりがちな以下の問題を解決することを狙っています。

- 画面単位でファイルがバラバラに散らばり、依存関係が追いづらい
- 複数の機能が同じファイルに詰め込まれて再利用が難しい
- UI とビジネスロジックが混在してテストしづらい

FSD は、ソフトウェアアーキテクチャの考え方 (DDD やレイヤードアーキテクチャ) をフロントエンド開発に取り入れたものです。Rails の MVC や Clean Architecture のように、責務の分離と依存方向を明確にします。

## 2. 主要な考え方

1. **レイヤー**: `shared → entities → features → widgets → pages → app` のように、下位から上位へ責務を積み上げます。上位レイヤーは下位レイヤーを使えますが、その逆は不可です。
2. **スライス (slice)**: ドメインや機能単位でフォルダを切り、関連ファイル (UI/ロジック/テストなど) をまとめます。例: `entities/post`, `features/posts/filter-by-tag`。
3. **セグメント (segment)**: 各スライス内で `model/`, `ui/`, `lib/`, `api/` など役割ごとに分割し、責務を明確にします。
4. **公開 API の定義**: スライス直下の `index.ts` などを使い、外部に公開するモジュールを限定します。依存範囲が明確になりリファクタリングしやすくなります。

## 3. レイヤーのイメージ

| レイヤ   | どんな責務か                                                                     | 例                                                 |
| -------- | -------------------------------------------------------------------------------- | -------------------------------------------------- |
| shared   | プロジェクト共通の基盤。UI キットやユーティリティ、設定など。                    | `Button`, `apiClient`, `config/routes`             |
| entities | ドメインの「もの (エンティティ)」を表現。型、API、簡単な UI を含む。             | 投稿 (Post), タグ (Tag)                            |
| features | 1 つのユーザー操作・ユースケースを実現する機能。複数エンティティを組み合わせる。 | 「タグで記事を絞り込む」「記事をブックマークする」 |
| widgets  | ページ内の大きなセクション。複数 feature / entity を組み合わせる UI。            | 記事一覧セクション、プロフィールカード             |
| pages    | ルーティング単位のページ構成。必要な widget や feature を組み立てる。            | `/posts` ページ                                    |
| app      | Next.js のルート定義やメタ情報などアプリ全体のエントリーポイント。               | `app/layout.tsx`, `app/page.tsx`                   |

## 4. ミニ例: ブログ一覧ページ

従来: `components/Posts.tsx` が API 呼び出し、データ整形、UI を全て担当していた。

FSD: 以下のように分割できます。

```
entities/post/model/api/markdown.ts   # Markdown を HTML に変換
entities/post/ui/PostPreview.tsx      # 記事カードの UI
features/posts/filter-by-tag/model.ts # タグでのフィルタ条件とテスト
widgets/posts/posts-feed/ui.tsx       # 一覧 UI。feature と entity を組み立て
pages/home/index.tsx                  # ページ全体。widgets を並べる
```

こうすることで、タグフィルタだけを別ページでも再利用でき、記事カード UI を他の箇所でも流用しやすくなります。

## 5. 導入のメリット

- **責務の明確化**: 「この機能のロジックはどこ？」がすぐ分かる。
- **再利用性の向上**: feature や entity を組み換えて新機能を作りやすい。
- **テストしやすい構造**: model単位・feature単位でテストを書きやすくなる。
- **段階的移行が可能**: 既存プロジェクトでも、1 ドメインずつ FSD に寄せていける。

## 6. いつ使うべき？

- 中〜大規模の React/Next.js プロジェクト
- 機能追加や改修が頻繁に行われるプロダクト
- チーム開発で責務分担を明確にしたい場合

小規模な個人プロジェクトでも、将来の拡張を見越して採用する価値があります。ただし、最初から厳格にすべてのレイヤを作る必要はありません。必要なところから導入し、徐々にレイヤを増やすアプローチが推奨されます。

## 7. よくある質問

### Q1. すべてのプロジェクトで FSD を使うべき？

必ずしもそうではありません。小さなツールや短期開発ではコストが大きすぎるケースもあります。将来的に機能が増える予定がある、チームで開発する、ロジックが複雑になる見込みがある場合に効果が高いです。

### Q2. Redux や Zustand などの状態管理とどう組み合わせる？

状態管理ライブラリは features や entities の `model` セグメントから利用します。グローバル状態が複数の feature にまたがるなら、processes でまとめる設計もあります。

### Q3. Storybook やテストはどこに置く？

Storybook の stories は `ui` セグメントに `.stories.tsx` として置きます。単体テストは `model` や `lib` セグメントの隣に配置し、対象モジュールだけを検証できるようにします。

## 8. 次に読むと良い資料

- [公式ドキュメント](https://feature-sliced.design/) — 英語だが概念・ガイドライン・サンプルが詳しい
- [FSD Methodology Explained](https://feature-sliced.design/docs/get-started/motivation) — なぜこの設計が必要かの背景
- [Awesome Feature-Sliced Design](https://github.com/feature-sliced/awesome) — 事例やツールのリンク集

---

上記の考え方を把握したうえで、`feature-sliced-design.md` の移行計画を読むと「どの機能がどのレイヤに移るのか」が理解しやすくなります。
