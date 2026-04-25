# ドキュメント

## ディレクトリ構成

| ディレクトリ | 責務 |
|---|---|
| [`ai/`](ai/README.md) | AIエージェント向けガイド・チェックリスト・調査成果物 |
| [`architecture/`](architecture/) | アーキテクチャ設計決定・移行計画 |
| [`conventions/`](conventions/README.md) | 開発規約・運用ルール（人間・AI共通の参照元） |
| [`specs/`](specs/) | FSD各レイヤーの実装仕様 |

## specs/ の構成

FSD（Feature Sliced Design）の各レイヤーに対応する実装仕様書を格納する。

| ディレクトリ | FSDレイヤー |
|---|---|
| `specs/features/` | features レイヤー（ユーザーストーリー単位の機能） |
| `specs/pages/` | pages レイヤー（ルート単位のビルド済みUI） |
| `specs/processes/` | processes レイヤー（ユースケースのオーケストレーション） |
| `specs/widgets/` | widgets レイヤー（ページ単位のセクション） |

FSDの概念・レイヤーポリシーは [`architecture/feature-sliced-design-intro.md`](architecture/feature-sliced-design-intro.md) を参照。
