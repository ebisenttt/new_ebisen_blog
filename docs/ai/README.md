# AI 開発プロンプト インデックス

このフォルダにあるマークダウンは、AIが実装・修正の前に必ず参照する仕様のソースです。新しい指示は必ず該当ドキュメントに追記してください。

## 参照順序

1. グローバル方針・インデックス（このファイル）
2. 変更後の検証チェックリスト（AI向け） `/docs/ai/checklists/verify-after-changes.md`
3. アーキテクチャ設計 `/docs/architecture/feature-sliced-design.md`
4. 開発規約・運用ルール `/docs/conventions/`
5. コンポーネントのディレクトリ構成ガイド `/docs/ai/guides/component-structure.md`
6. 個別機能の仕様書 `/docs/specs/features/*.md`、`/docs/specs/widgets/*.md`、`/docs/specs/pages/*.md`、`/docs/specs/processes/*.md`

## 作業計画書

ユーザーがAIエージェントへの作業を依頼するための計画書は `/docs/ai/plans/` に置く。
草案は `tmp.md` で作成し、AIエージェントが適切なファイル名（`{type}-{description}.md`）に変更する。
詳細は `/docs/ai/plans/README.md` を参照。

## 調査成果物

AI エージェントが行った調査・計測の成果物は `/docs/ai/investigations/` に蓄積する。
詳細は `/docs/ai/investigations/README.md` を参照。

## 運用ルール

- すべてのコミュニケーションを日本語で行うこと。
- 仕様や指示を受けたら、まず該当ドキュメントを更新する。
- 実装はドキュメント更新後に着手する。
- 変更履歴は各ドキュメント末尾の保守ルールセクションに簡潔に記す。
- ドキュメントにない仕様は実装しない。必ず追記してから着手する。
