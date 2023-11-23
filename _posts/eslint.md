---
title: 'TypeScriptのルールをstrictにしたときにつまずいたこと'
date: '2023-11-20'
tag:
  - 'eslint'
  - 'typescript'
---

## eslintをstrictにした

このブログはTypeScriptで開発しています．型定義が弱いところがあり，eslintのルールを見直してみようと思ったのがきっかけ．一つ一つ検討していくのは骨が折れるので，一旦strict系のルールを有効にしようとなりました．

strictにするには`tsconfig.json`の`compilerOptions`の`strict`フラグを`true`にします．

```json
// tsconfig.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

この結果，めちゃくちゃeslintに怒られたので，その作業ログを残します．

## `strict-boolean-expressions`

これは，booleanでない値を暗黙的にbooleanのように評価することを規制するルール．

例えばこんなコード．

```js
const apple = {
  color?: string
}

// Unexpected nullable string value in conditional. Please handle the nullish/empty cases explicitly.
if (apple.color) {
  // なんかの処理
}
```

`apple`オブジェクトの`color`プロパティは`string | undefined`という状況で，`truthy`のときだけなにかの処理をしたいという分岐を書いています．

これのなにが問題かというと，`color`プロパティが`undefined`や空文字のとき（つまり`falsy`とのき）に暗黙的な型変換が行われ，`if`ブロックの中が評価されるということ．いつ`true`としたくて，いつ`false`としたいかを`boolean`で明確に書きなさいというルールが`strict-boolean-expresiions`だと理解しています．

ではどう書けばいいかというと，次のような感じ．

```js
const apple = {
  color?: string
}

if (apple.color !== undefined) {
  // なんかの処理
}
```

`undefined`でないときのみ，`if`ブロックの中が評価されるという分岐にしました．これでエラーは消えます．空文字の場合も`if`ブロック内を評価してほしいときは，さらに条件を追加する必要があります．

多少コード量が増えますが，型安全性は増しました．

参考：[Falsy値を比較せずにそのまま判定に使うことはやめよう](https://zenn.dev/okunokentaro/articles/01fynkwmrkrbyzxgexvhv0hnez)

### 補足：`truthy`と`falsy`

ちょっとここで`truthy`と`falsy`についてまとめておきます．

#### `falsy`な値

- `string`型の空文字`''`
- `number`型の`0`
- `number`型のマイナスゼロ`-0`
- `number`型の`NaN`
- `bigint`型の`0n`
- `boolean`型の`false`
- `object`型の`document.all`
- `null`
- `undefined`

参考：[Falsy (偽値) - MDN Web Docs 用語集: ウェブ関連用語の定義 | MDN](https://developer.mozilla.org/ja/docs/Glossary/Falsy)

## `filter`と`sort`

文字列の配列からundefinedを取り除き，ソートしたいという処理でエラーがでました．

```js
const array = ['hoge', undefined, 'fuga', undefined]

const newArray = array
  .filter((el) => el) // ここでundefinedを消したかった
  .sort((a, b) => a > b) // ここで降順に並べたかった
```

### `filter`メソッドのコールバック関数の返り値は`boolean`

`'hoge'`や`'fuga'`は`truthy`で，`undefined`は`falsy`なので，これで行けると思いましたが，上の`strict-boolean-expression`で怒られました．

### `sort`メソッドのコールバック関数の返り値は`number`

「`a`や`b`が`undefined`のことがあるよ」と怒られました．一つ前のプロトタイプチェーンで`filter`をしているので，`undefined`はないはずなのに...．また，「`boolean`である`a > b`ではなく，`number`を返しなさい」と怒られました．

### 修正方法

以下のように修正しました．

```js
const array = ['hoge', undefined, 'fuga', undefined]

const newArray = array
  .filter((el): el is string => typeof el === 'string')
  .sort((a,b) => b.localeCompare(a))
```

- `is`演算子を使って，`filter`メソッド適用後は`string`型のみになることを明示しました．
- `String`オブジェクトの組み込みメソッドである`localeCompare`で`number`を返すように変更しました．

## その他の参考資料

- [うわっ...私の.eslintrc、無駄が多すぎ...？](https://zenn.dev/kimromi/articles/b7cf98005f3193)
- [String.prototype.localeCompare() - JavaScript | MDN](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare)
