---
title: '『初めての自動テスト』（The Way of the Test Master）を読んだ感想'
date: '2024-04-10'

tag:
  - '読書メモ'
  - '自動テスト'
---

『初めての自動テスト Webシステムのための自動テスト基礎』（著：Jonathan Rasmusson ，訳：玉川紘子，出版：オライリー・ジャパン）を読みました．内容を簡単にまとめ，感想を書きます．

注意：内容のまとめには，私の解釈が多分に含まれています．また，書籍の内容を無断で公開してしまうことを避けるために，あまりに詳細な記述は避けています．

## 1章

- UIを持つソフトウェアの構造とテストの種類が対応する

| ソフトウェアの構造 | テスト         |
| ------------------ | -------------- |
| UI                 | UIテスト       |
| サービス           | 統合テスト     |
| ロジック           | ユニットテスト |

- UIテストはユーザーの使用時に近い環境でテストが可能だが，保守と実行に時間がかかる．ユニットテストは保守と実行にかかる時間は比較的短いが，ユーザーの環境とは異なりモジュール単体でのテストになる．基本的にユニットテストを増やしてUIテストは少ないほうが変更時の開発に強いアプリケーションになる（テストピラミッド）．
- 開発チームはテストに時間を割くよりも，失敗を許容して新しい機能を作るなどの挑戦をしていきたい．テストチームはテストを確実にしてバグがないアプリを作りたい．どちらの思いも間違いではないので，コミュニケーションをとってバランスを取ることが重要．

### 感想

- 「UI」はわかる．「サービス」と「ロジック」ってなんだ？
- 「UI」と「サービス」と「ロジック」って本当に切り分けられる？
- チーム間の意向の違いに関して触れているのは，理想ばかりを語るのではなく実務的な問題にも触れているという点で好印象．

## 2章 ユーザーインターフェイステストに触れる

- UIテストはE2Eのスモークテストとしても有用
  - E2E = エンド・トゥー・エンド
  - スモークテスト = システムが基本的なレベルで稼働するか確認するテスト（電気機器が稼働時に煙を出さないことを確認することに由来する）
- ユーザーの操作を再現するスクリプトで実行し，実行中の画面を録画するテストを「キャプチャーリプレイテスト」と呼ぶ．
- キャプチャーリプレイテストは脆い（変更に弱い）．実運用時は足かせになるので避けるべき．

### 感想

- 「キャプチャーリプレイテストは脆い」は，ある程度正しそうだが，注釈が入りそう
  - UIの選択方法がタグの順序や構造に依存すると，変更にかなり弱い．一意な値での指定（idとか）にすれば緩和できる．
  - キャプチャー結果が変わった = 壊れた → エラー というテストだと変更に弱い．エラーとするのではなく，変更があったことを開発者にわかりやすい形で伝えることに留めるのであれば，意図しない変更を防ぐためのツールとして十分存在価値がありそう．

## 3章 レガシーシステムにUIテストを追加する

- UIに密結合にするほど，壊れやすいテストになってしまう．緩く保ち，緩くしすぎないことが大事．

### 感想

- テスト対象になるUIにid振れば楽だよ，ということが言及されてた．
- RailsとjQueryが例として挙げれており，2017年に初版の書籍なので状況は今とはかなり異なるので，注意しながら読んでいる．（どっちが正しいという話ではなく）Testing Libraryはユーザーが感知できる情報でテストを書こう（idとかじゃなくて）という方針を謳っている．

## 4章 統合テストで点と点を結ぶ

（HTTPのメソッド，URLの構造についてのまとめがメインの章だったので省略）

## 5章 RESTfulなWebサービスの統合テスト

(RESTfulAPIとHTTPメソッドの説明がメインだったので省略)

## 6章 ユニットテストで基礎を固める

- この章で語られているユニットテストはサーバーサイドの話
- ユニットテストの意味とモックの使い方の説明だったので詳細は省略

## 7章 JavaScriptを使ったブラウザ上のユニットテスト

- クライアントサイドで実行されるJavaScriptに限定して話をする
- UIテストは必ずしもE2Eである必要はない

### 感想

- 「UIテストはUIを対象としたE2Eテスト」という言葉の定義をしていたと思っていたけど，この章でその前提が崩れた
  - 言葉の定義を変えるのはいいけど，「UIテスト」という名前が不適切になった気がするのと，アプリケーション構造とテスト対象が1対1に対応するという話が嘘にならないかな...？

#### この本を読んだ時点での自分が理解しているテスト対象とテスト手法の区分

|                | フロントエンド                                                                        | バックエンド |
| -------------- | ------------------------------------------------------------------------------------- | ------------ |
| ユニットテスト | 下記のユニットをそれぞれ単独でテスト                                                  | ???          |
| 統合テスト     | バックエンドのモックを使用してデータをfetchするコンポーネント単位・ページ単位でテスト | ???          |
| E2Eテスト      | テスト用のバックエンドを使用してアプリケーション全体（ページ遷移を含む導線）をテスト  | ???          |

Reactの文脈でのユニット

- hooks
- UIコンポーネントが持つロジック
- UIコンポーネントのマークアップされた部分
- hooks, UI以外の補助的な関数

バックエンドのユニット

- ???

## 8章 ピラミッドを登る

- ユニットテストは「壊れうるものをすべてテストする」が理想だが，「本当にすべてのテストはできないことを知っておく」こと．
- 統合テストはユニットテストでカバーしきれなかった各ユニットのつながりをテストする
- UIテストはコストが高いので，できればユニットテストと統合テストを充実させること．UIの変更がある程度落ち着いてから導入すること．
- 一般的にはピラミッド型が推奨され，アイスクリームコーン型は推奨されない．ただし，状況によってはアイスクリームコーン型で得られるメリットが大きいときもある．例えばレガシーなシステムにテストを導入し始めるときや，全く新しいサービスのテストには，コストに対して得られるリターンが大きいことがある．

## 9章 プログラミング初級講座

- （テストに限らず一般的なコーディングの話だったので省略）

## 10章 テストを整理する〜混沌の中から法則を見つけ出す〜

- 可読性をあげるために，データは，そのデータが必要なテストの近くに書く
- 可読性と管理しやすさを上げるために，コンテキストごとにまとめてテストを書く

## 11章 効果的なモックの活用

- 可能であれば，モックではなく本物を使うこと
- モックはテストダブルの一種
- モックを使用したテストが通ったとしても，本物を使ったサニティチェック（基本的な動作確認）を必ずすること
- テスト対象・テスト・テストデータの結合度（例えばUIが変わったときにテストやテストデータも変えなければいけない度合い）は低いほうが望ましいが，結合度を0にすることは現実的には難しい．

### 感想

- モックとスタブの違いについて触れつつ，あまり明確に区別されずに使われていることがあることも指摘していた
  - スタブはハードコードされたデータ
  - モックはデータを返すだけでなく，操作・監視される対象にもなる（擬似的に簡単なロジックを持つなど）
  - 関連する記事：[テストダブルをなんとなく理解する | Qiita](https://qiita.com/kaleidot725/items/075934e8e6be902a7fe1)

## 12章 テストファースト

- （TDDに関する説明は省略）
- YAGNI（You Ain't Gonna Need It）： 必要になるまでは機能を追加しないという，エクストリームプログラミングの原則
- UIは初期段階では変更が多いので，UIテストにTDDはおすすめできない．

### 感想

- TDDについては，『テスト駆動開発』（著：Kent Beck，訳：和田卓人）で読んだことがあった．
- UIテストにTDDはおすすめできないとあるが，フロントエンドのテストでTDDやってみたという記事は散見される．業務で実際に運用した例はあるのだろうか...？

## 全体を通しての感想

- テストコードの書き方だけではなく，チーム間での責務・方針の調整にも触れられている点で，より実務的な視点で書かれた書籍でよい感じ
- 1回目読み終わった時点で，テスト手法とアプリケーション構造が対応するという話がわからなくなった（課題としてTODOに書いた）
- どちらかというとバックエンド寄りのタッチで書かれている文章である印象（フロントエンド寄りのテストだとUIテストを細分化する気がする）
- TDDはUIテストに向かないと書かれているが，フロントエンド用のテストツールが増えた2024年現在もこの状況が変わっていないのか？については考えたい（TODOに書いた）

## TODO

この本を再度読んだり，他の本・記事を読んだりして解決したい疑問

- [ ] ユニットテストと統合テストの違いを整理する
- [ ] バックエンドのユニットにはどんなものがあるか，一例を追加
- [ ] フロントエンドでのTDDの可能性はある？