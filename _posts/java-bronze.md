---
title: 'Oracle Certified Java Programmer, Bronze SEを取得した'
date: '2024-08-19'
tag:
  - 'java'
  - '資格'
---

## Oracle Certified Java Programmer, Bronze SEについて

[Oracle Certified Java Programmer, Bronze SE](https://education.oracle.com/ja/oracle-certified-java-programmer-bronze-se-available-only-in-japan/trackp_818)は，Oracleが認定する資格．
Java SE Bronze (1Z0-818-JPN) に合格すると取得できる．

## Java SE Bronze (1Z0-818-JPN) について

### 試験形式

- 65分の制限時間中に60問出題される．
- 合格基準は正答率が60%以上であること．
- テストセンターでの受験，オンライン（監督あり），オンライン（監督なし）の3種類．
- Person Vueで受験申し込みと支払いを一括で行うか，Oracle Universityでテストバウチャーを購入してPerson Vueで受験申し込みをするかのどちらか．

### 申込みの際の注意事項

#### 試験が2種類ある

Person Vueで受験申込をする際に，該当する試験が2種類あった．

- Java SE Bronze (1Z0-818-JPN)
- Java SE Bronze (1Z0-818-JPN-ONLINE)

前者はテストセンターでの受験とオンライン（監督あり），後者はオンライン（監督なし）での受験に対応している．この試験は監督なしでも受験可能なので，特別な事情がない限り後者の「Java SE Bronze (1Z0-818-JPN-ONLINE)」を選択してオンライン（監督なし）で受験すればいい．

#### Person Vueでの受験料支払いとテストバウチャー購入の違い

Person Vueで受験料支払ってオンライン（監督なし）を申し込むと

- 48時間以内に受験する必要がある
- 申込みが完了した時点から受験可能になる

テストバウチャーを購入してPerson Vueで受験申込みをすると

- テストバウチャーは**購入数日後**にメールで受信する
- テストバウチャーは1ヶ月間有効
- 受験申込後48時間以内に受験する

テストバウチャーを購入する受取りまでに時間がかかるので，特別な事情がない限り前者のPerson Vueで完結されるほうが速い．

#### アカウント作成がちょっと複雑

受験申込までにいくつかアカウント作成が必要．

1. Oracle Universityでのアカウント作成
2. Oracle Certviewでのアカウント作成（Oracle Universityでのアカウントが引き継がれる）
3. Oracle Certview経由でPerson Vueにアクセスして申し込み

3の手順が複雑？なので，Oracle Universityで[手順書](https://www.oracle.com/jp/education/certification/migration-to-certview.html#Process)が提供されている．複数のサイトを経由しなければいけないため，ちゃんと手順通りに手続きすること．

### 受験記

#### 事前知識

- Javaを勉強として書いたことはあるが業務で使用した経験はない
- 業務で使用しているのはJavaScript

#### 勉強方法

定番の通称「黒本」と呼ばれる[徹底攻略Java SE Bronze問題集［1Z0-818］対応](https://book.impress.co.jp/books/1119101075)を使用した．

1. 1周目はわからないことだらけだけど，とりあえず解いてみて答え合わせ（8章の模擬試験を除く）
2. 2周目は1周目で正解した問題も含めて解き直し（8章を除く）
3. 3周目は2周目で間違った問題だけ
4. 8章の模擬試験
5. 8章の模擬試験解き直し
6. 付録のHTML版模擬試験
7. 付録のHTML版模擬試験を解き直し

#### 結果

83%で合格しました

#### 苦労したこと

- 抽象クラスとインスタンスができること・できないことが整理しきれていなかった
- アップキャストされたときに参照される変数，実行されるメソッドがあいまい
- 文字列リテラルとStringオブジェクト（コンスタントプールがいつ使われるか）
