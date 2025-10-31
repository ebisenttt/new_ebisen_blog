# 開発プロンプト: note.com 記事を取得しローカル posts とマージする

この文書は本開発タスクのための AI 向けプロンプト（仕様メモ）です。実装時は本ファイルの要件に従ってください。

## 目的

- note.com のユーザー `ebisen_ttt` が公開した記事一覧を API で取得し、ローカル `_posts` の記事一覧とマージする。
- 表示順は既存と同じ `date` 降順。
- キャッシュは 1 日（24 時間）。
- note 記事は外部リンクとして開く（タイトル横に外部リンクアイコンを表示）。
- Post 型は拡張しない（既存の型を維持）。

## 制約・仕様

- 取得対象: 公開記事のみ。
- 件数上限: 指定しない（取得できる範囲すべて）。
- 取得方法: API を使用する（RSS/HTML スクレイピングは使用しない）。
- 重複判定: URL を使用する。
- Post 型: 既存の `Post` 型（title/date/content/filename/tags）を維持。
  - ただし、外部記事（note）は本文をローカルに持たないため、`content` は空文字でも可。
  - `filename` には URL を base64url でエンコードし、接頭辞 `note__` を付けた文字列（例: `note__<base64url(url)>`）を使用する。
- マージ: ローカルと note の記事を結合し、`date` 降順でソートする。
- 取得タイミング: `/posts` ページ表示時にサーバー側で API フェッチしてマージする（ビルド時にローカルへ取り込まない）。
- フィールド形式: note API は camelCase フィールドを前提とし、snake_case は扱わない。

## 実装ガイド

1. `src/features/posts/fetch-note/api/fetchNote.ts` に note API から一覧を取得する `fetchNotePosts()` を実装する。
   - ユーザー ID: `ebisen_ttt`
   - エンドポイント（例）: `https://note.com/api/v2/creators/ebisen_ttt/contents?kind=note&page=1`
   - 公開記事のみ。
   - タイムアウトや失敗時はエラーを投げずに空配列を返す。
   - 1 日のキャッシュを付与（Next.js の fetch 再検証を使用）。
2. 取得データを `Post` 型へマッピングする（実装は `fetchNotePosts()` 内で完結させる）。
   - title: 記事タイトル
   - date: 公開日時（ISO 文字列）
   - content: 空文字（note本文を取り込まないため）
   - filename: `note__<base64url(url)>`
   - tags: `hashtags[].hashtag.name` から `#` を外して配列化（なければ `[]`）
3. `src/entities/post/model/api/queries.ts` に `getAllPostsMerged()` を実装する。
   - 既存の `getAllPosts()` と `fetchNotePosts()` を呼び、結合 → 重複除去（URL基準） → `date` 降順ソート。
   - 取得失敗時はローカルのみで返す。
4. UI 側（`src/entities/post/ui/PostPreview/PostPreview.tsx`）で note の外部記事を外部リンクで開く必要があるため、`Post` 型拡張無しの範囲で外部リンク判別が必要。
   - 判別には `filename` の接頭辞 `note__` を利用。
   - 外部リンクの場合は `<a href target="_blank" rel="noopener noreferrer">` を用いる。
   - 外部リンクであることを示すアイコン（`ExternalLinkIcon`）をタイトル横に表示する（共通コンポーネント: `src/shared/ui/external-link-icon`）。

## テスト

- 単体テスト: `fetchNotePosts()` のマッピングと `getAllPostsMerged()` のマージ/ソート/重複除去。
- 失敗時（APIダウン時）のフォールバックでローカルのみ返ること。

## 補足

- API 仕様により必要なヘッダ等があれば適宜追加する。
- API レスポンスの型は軽量な `type` をローカル定義して対応する。

## ドキュメント保守ルール

- 以降、本機能に関する指示・仕様変更は本ファイルに追記・更新すること。
- 追加で与えられたAPIパラメータ・フィールド、マージルール変更、UI方針変更などは、当節に履歴として残す。
- 実装着手前に本ファイルの最新内容を必ず確認すること。
