# Jest ベースライン（移行前）

計測日: 2026-04-26

## 設定ファイル

| ファイル | 用途 |
|---|---|
| `jest.config.ts` | Jest メイン設定（`next/jest.js` ベース） |

## 設定項目

```ts
// jest.config.ts の主要設定
{
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],

  // パスエイリアス
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@shared/ui$': '<rootDir>/src/shared/ui/index.ts',
    '^@shared/ui/(.*)$': '<rootDir>/src/shared/ui/$1',
    '^@shared/(.*)$': '<rootDir>/src/shared/$1',
    '^@entities/(.*)$': '<rootDir>/src/entities/$1',
    '^@features/(.*)$': '<rootDir>/src/features/$1',
    '^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
    '^@processes/(.*)$': '<rootDir>/src/processes/$1',
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@app-providers/(.*)$': '<rootDir>/src/app-providers/$1',
    '\\.(css|less|sass|scss)$': '<rootDir>/tests/__mocks__/styleMock.js',
    '^devicon$': '<rootDir>/tests/__mocks__/styleMock.js',
  },

  // ESM未対応パッケージをCJSにトランスパイルするための設定（ESM対応の複雑さの主因）
  transformIgnorePatterns: [
    '/node_modules/(?!.pnpm|unified|bail|devlop|is-plain-obj|trough|vfile|unist-.*|remark-.*|mdast-.*|hast-util-.*|property-information|html-void-element|zwitch|stringify-entities|character-entities-.*|ccount|comma-separated-token|space-separated-token|micromark-.*|trim-lines|)',
  ],
}
```

### ESM対応のために必要になった設定項目

- **`transformIgnorePatterns`**: デフォルトでは `node_modules` 全体をトランスパイル対象外にするが、unified エコシステム（`unified`, `remark-*`, `hast-util-*`, `micromark-*` 等）は ESM only のため、例外として CJS へのトランスパイル対象に含める必要がある
- **`next/jest.js` ラッパー**: Next.js の SWC トランスフォームを有効化し、JSX や TypeScript を処理するために必要

## 依存パッケージ

| パッケージ | バージョン |
|---|---|
| `jest` | ^30.3.0 |
| `jest-environment-jsdom` | ^30.3.0 |
| `ts-jest` | ^29.4.9 |
| `@types/jest` | ^30.0.0 |
| `@testing-library/jest-dom` | ^6.9.1 |

## テストファイル数

31ファイル（`src/` 配下、`tests/example.spec.ts` は Playwright 用のため対象外）

## テスト実行時間（`jest --no-cache` 10回計測）

| Run | 実行時間 |
|---|---|
| 1 | 8003ms |
| 2 | 7695ms |
| 3 | 7895ms |
| 4 | 8553ms |
| 5 | 21836ms ※外れ値 |
| 6 | 8868ms |
| 7 | 9265ms |
| 8 | 11222ms |
| 9 | 10767ms |
| 10 | 10351ms |

| 統計 | 値 |
|---|---|
| 最小値 | 7695ms |
| 最大値 | 21836ms |
| 中央値 | 9066.5ms |
| 平均値 | 10445.5ms |
| 標準偏差 | 4189.4ms |

※ Run 5 が外れ値（21836ms）のため標準偏差が大きい。
