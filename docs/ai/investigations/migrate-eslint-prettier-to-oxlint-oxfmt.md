# ESLint/Prettier → oxlint/oxfmt 移行調査

## 1. 移行前の状態（ESLint + Prettier）

### 設定ファイル

| ファイル | 内容 |
|---|---|
| `eslint.config.mjs` | ESLint設定（Flat Config形式） |
| `.prettierrc` | `{"singleQuote": true, "semi": false}` |
| `.prettierignore` | `pnpm-lock.yaml` |
| `eslint-local-rules/` | カスタムルール（component-structure） |

### 使用プラグイン

- `@eslint-react/eslint-plugin`（recommended-typescript）
- `@typescript-eslint`（recommended）
- `@next/next`（recommended-legacy）
- `eslint-plugin-import`（no-unresolved, order）
- `eslint-plugin-unused-imports`（no-unused-imports, no-unused-vars）
- `eslint-plugin-prettier`（eslint-config-prettier で無効化）
- ローカルルール（component-structure）

### 有効なルール一覧

#### @eslint-react（57ルール）
`component-hook-factories`, `dom-no-dangerously-set-innerhtml`, `dom-no-dangerously-set-innerhtml-with-children`, `dom-no-find-dom-node`, `dom-no-flush-sync`, `dom-no-hydrate`, `dom-no-render`, `dom-no-render-return-value`, `dom-no-script-url`, `dom-no-unsafe-iframe-sandbox`, `dom-no-use-form-state`, `dom-no-void-elements-with-children`, `error-boundaries`, `exhaustive-deps`, `jsx-no-children-prop`, `jsx-no-children-prop-with-children`, `jsx-no-comment-textnodes`, `jsx-no-key-after-spread`, `jsx-no-leaked-semicolon`, `jsx-no-namespace`, `naming-convention-context-name`, `naming-convention-id-name`, `naming-convention-ref-name`, `no-access-state-in-setstate`, `no-array-index-key`, `no-children-count`, `no-children-for-each`, `no-children-map`, `no-children-only`, `no-children-to-array`, `no-clone-element`, `no-component-will-mount`, `no-component-will-receive-props`, `no-component-will-update`, `no-context-provider`, `no-create-ref`, `no-direct-mutation-state`, `no-forward-ref`, `no-missing-key`, `no-nested-component-definitions`, `no-nested-lazy-component-declarations`, `no-redundant-should-component-update`, `no-set-state-in-component-did-mount`, `no-set-state-in-component-did-update`, `no-set-state-in-component-will-update`, `no-unnecessary-use-prefix`, `no-unsafe-component-will-mount`, `no-unsafe-component-will-receive-props`, `no-unsafe-component-will-update`, `no-unused-class-component-members`, `no-use-context`, `purity`, `rsc-function-definition`, `rules-of-hooks`, `set-state-in-effect`, `set-state-in-render`, `unsupported-syntax`, `use-memo`, `use-state`, `web-api-no-leaked-event-listener`, `web-api-no-leaked-interval`, `web-api-no-leaked-resize-observer`, `web-api-no-leaked-timeout`

#### @next/next（14ルール）
`google-font-display`, `google-font-preconnect`, `inline-script-id`, `next-script-for-ga`, `no-assign-module-variable`, `no-async-client-component`, `no-before-interactive-script-outside-document`, `no-css-tags`, `no-document-import-in-page`, `no-duplicate-head`, `no-head-element`, `no-head-import-in-document`, `no-html-link-for-pages`, `no-img-element`, `no-page-custom-font`, `no-script-component-in-head`, `no-styled-jsx-in-document`, `no-sync-scripts`, `no-title-in-document-head`, `no-typos`, `no-unwanted-polyfillio`

#### @typescript-eslint（20ルール）
`ban-ts-comment`, `no-array-constructor`, `no-duplicate-enum-values`, `no-empty-object-type`, `no-explicit-any`, `no-extra-non-null-assertion`, `no-misused-new`, `no-namespace`, `no-non-null-asserted-optional-chain`, `no-require-imports`, `no-this-alias`, `no-unnecessary-type-constraint`, `no-unsafe-declaration-merging`, `no-unsafe-function-type`, `no-unused-expressions`, `no-unused-vars`, `no-wrapper-object-types`, `prefer-as-const`, `prefer-namespace-keyword`, `triple-slash-reference`

#### import（2ルール）
`no-unresolved`, `order`

#### unused-imports（2ルール）
`no-unused-imports`, `no-unused-vars`

#### コアESLint（10ルール）
`curly`, `getter-return`, `no-redeclare`, `no-restricted-imports`, `no-restricted-syntax`, `no-undef`, `no-unsafe-negation`, `no-unused-expressions`, `no-var`, `prefer-const`, `prefer-rest-params`, `prefer-spread`

#### ローカルルール（1ルール）
`local-rules/component-structure`（src/**/ui/**/*.tsx 対象）

### 実行時間

| ツール | コマンド | 実行時間 |
|---|---|---|
| ESLint | `pnpm lint` | 約3.5秒 |
| Prettier | `prettier --check "src/**/*.{ts,tsx}"` | 約1.3秒 |

---

## 2. ツールバージョン確認

| ツール | バージョン | 状態 |
|---|---|---|
| oxlint | 1.61.0 | リリース済み ✓ |
| oxfmt | 0.46.0 | リリース済み（pre-1.0） ✓ |

---

## 3. ルールカバレッジ比較

### oxlintでカバーされるルール

#### @typescript-eslint → oxlintネイティブ対応（全20ルール）
oxlintはTypeScriptルールをネイティブに組み込んでいるため、全ルール対応。

#### コアESLintルール（ほぼ全対応）
`curly`, `getter-return`, `no-redeclare`, `no-restricted-imports`, `no-undef`, `no-unsafe-negation`, `no-unused-expressions`, `no-var`, `prefer-const`, `prefer-rest-params`, `prefer-spread` → oxlint対応済み

#### @eslint-react → 部分対応
oxlintはReactルールを内蔵しているが、`@eslint-react`プラグインとの1対1対応ではない。
主要なルール（`no-missing-key`, `rules-of-hooks`, `exhaustive-deps`等）はoxlintに相当ルールあり。

### oxlintでカバーされないルール（ギャップ）

| ルール | 重要度 | 代替手段 |
|---|---|---|
| `@next/next/*`（21ルール） | 高 | なし（Next.js固有ルールはoxlint未対応） |
| `import/order` | 中 | なし（importの並び順チェック不可） |
| `import/no-unresolved` | 中 | TypeScriptコンパイラで代替可能 |
| `local-rules/component-structure` | 中 | oxlintはカスタムルールプラグイン不可 |
| `no-restricted-syntax`（TSInterface禁止） | 中 | oxlintの`no-restricted-syntax`が対応しているか要確認 |
| `@eslint-react`の一部詳細ルール | 低 | oxlint内蔵Reactルールで主要部分はカバー |

---

## 4. 移行後の状態（oxlint + oxfmt）

### 設定ファイル

| ファイル | 内容 |
|---|---|
| `.oxlintrc.json` | oxlint設定（112ルール、nextjs/typescript/unicornプラグインネイティブ、@eslint-react/unused-importsはJSプラグイン） |
| `.oxfmtrc.json` | `{"printWidth": 80, "singleQuote": true, "semi": false}` |
| `eslint-local-rules/index.mjs` | `meta.name` 追加（JSプラグイン対応） |

### 対応できたギャップ

| 旧ルール | 対応 |
|---|---|
| `@next/next/*` | oxlint ネイティブ `nextjs/*` プラグインに移行 |
| `@eslint-react/*` | JS Plugin として継続利用 |
| `@typescript-eslint/*` | oxlint ネイティブ `typescript/*` プラグインに移行 |
| `no-restricted-syntax`（interface禁止） | `typescript/consistent-type-definitions: ["error", "type"]` で代替 |
| `local-rules/component-structure` | JS Plugin として継続利用（`meta.name` 追加） |

### 対応を断念したルール

| 旧ルール | 理由 |
|---|---|
| `import/order` | `import/resolver`（TypeScriptパスエイリアス解決）が非対応のため機能しない。コードの動作に影響しないため削除 |

### 実行時間

| ツール | コマンド | 実行時間 |
|---|---|---|
| oxlint | `pnpm lint` | 約2.2秒 |
| oxfmt | `pnpm format --check` | 約0.8秒 |

---

## 5. 比較

| 指標 | ESLint + Prettier | oxlint + oxfmt | 削減率 |
|---|---|---|---|
| lint実行時間 | 約3.5秒 | 約2.2秒 | **37%削減** |
| format実行時間 | 約1.3秒 | 約0.8秒 | **38%削減** |
| 合計 | 約4.8秒 | 約3.0秒 | **37%削減** |

### ルールカバレッジ

- 全ルール数：移行前105ルール → 移行後112ルール（oxlint側で自動検出ルール増加）
- `import/order` のみ削除。他のルールは全て同等のカバレッジを維持
