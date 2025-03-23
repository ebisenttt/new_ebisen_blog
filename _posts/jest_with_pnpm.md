---
title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点'
date: '2025-03-23'
tag:
  - 'pnpm'
  - 'Jest'
  - '正規表現'
---

このブログの開発のパッケージ管理には`pnpm`を使用しています。テストコードを導入するにあたり、単体テストには`Jest`を使用することにしました。このとき`pnpm`の仕様で`transformIgnorePatterns`に設定に手間取ったので、ログを残します。

## TLDR

pnpmを使用している場合、Jestの`transformIgnorePatterns`を以下のように設定することで、ESMパッケージを正しくトランスパイルできます：

```ts
// some-esm-packageをトランスパイルの対象にしたい
transformIgnorePatterns: ['/node_modules/(?!.pnpm|some-esm-package)']
```

## `pnpm`の仕様

npmで依存するパッケージを追加すると、`node_modules`直下にパッケージのディレクトリが追加されます。このとき、依存するパッケージがさらに依存しているパッケージも`node_modules`直下に追加されます。

```
node_modules
   ├─ package_a // 追加したいパッケージ
   └─ package_b // package_aが依存しているから自動的に追加されたパッケージ
```

このとき開発対象のプロジェクトでは、package_aからだけでなくpackage_bからもモジュールをimportできてしまいます。[pnpmはこれを問題として指摘しており](https://pnpm.io/ja/motivation#%E3%83%95%E3%83%A9%E3%83%83%E3%83%88%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%84-node_modules-%E3%83%87%E3%82%A3%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AA%E3%81%AE%E4%BD%9C%E6%88%90)、`pnpm`では、依存パッケージを`node_modules/.pnpm`に配置し、必要に応じてエイリアスを作成します。この仕組みにより、依存関係が明確になり、パッケージの重複を防ぐことができます。また、ディスク使用量を削減し、インストール速度を向上させる利点があります。

```
node_modules
   ├─ .pnpm
   │     ├─ package_a
   │     │     └─ node_modules
   │     │           └─ package_b // .pnpm/package_bを参照する
   │     └─ package_b
   └─ package_a // .pnpm/package_aを参照する
```

## `Jest`の`transformIgnorePatterns`

JestはCommonJSで書かれており、ESMAScriptで書かれたコードをテストする際にはCommonJSにトランスパイルされます。ただし、デフォルトで`node_modules`配下はトランスパイルの対象から除外されています。つまり、`node_modules`配下にECMAScriptで書かれたモジュールが存在する場合はエラーが起きます。これを回避するために設定ファイルでトランスパイルの対象から除外するリスト`transformIgnorePatterns`を上書きする必要があります。Jestはこのリストの文字列を`RegExp`オブジェクトの`test`メソッドを使用してパスが一致するか判定し、一致する場合はトランスパイルしません。

```ts
// /node_modules/some-esm-package はトランスパイルして欲しい
// /node_modules配下の他のディレクトリはトランスパイルしないで欲しい
transformIgnorePatterns: ['/node_modules/(?!some-esm-package)']
```

## `pnpm`の仕様を加味した`Jest`の`transformIgnorePatterns`

pnpmを使用してESMで書かれたパッケージ`some-esm-package`を追加したとき、Jestでトランスパイルして欲しいディレクトリのパスは`node_modules/.pnpm/some-esm-package@1.2.3/node_modules/some-esm-package`です。`node_modules`配下をトランスパイルの対象から除外しながら、このディレクトリだけはトランスパイルするような設定が必要です。

### 間違った設定

次のパスでは`some-esm-package`がトランスパイルされずエラーが起きます

```ts
const pathToIgnore = '/node_modules/(?!.pnpm/some-esm-package)'
const regex = new RegExp(pathToIgnore)
const dirPath =
  '/node_modules/.pnpm/some-esm-package@1.2.3/node_modules/some-esm-package'
// ------------------------------------      ------------------------------
//            ここはfalseだが                         ここでtrueになる

regex.test(dirPath) // true
```

### 正しい設定

次のパスでは`some-esm-package`がトランスパイルされます。

```ts
const pathToIgnore = '/node_modules/(?!.pnpm|some-esm-package)'
const regex = new RegExp(pathToIgnore)
const dirPath =
  '/node_modules/.pnpm/some-esm-package@1.2.3/node_modules/some-esm-package'
// ------------------------------------      ------------------------------
//            ここはfalse                         　　　  ここもfalse

regex.test(dirPath) // false
```

## 参考

- [pnpmのメリット | pnpm](https://pnpm.io/ja/motivation)
  - `pnpm`の設計思想や利点について解説している公式ドキュメント
- [transformIgnorePatterns - Jestの設定 - Jest](https://jestjs.io/ja/docs/configuration#transformignorepatterns-arraystring)
  - `transformIgnorePatterns`の設定方法に関する公式ドキュメント。`pnpm`での設定方法にも触れられている。
- [Josh Bickley-Wallace - Jest Transforms With PNPM](https://jaybeeuu.dev/blog/jest-transforms)
  - 同じエラーにハマったというブログ
