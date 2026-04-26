# Vitest 計測結果（移行後）

計測日: 2026-04-26

## 設定ファイル

| ファイル | 用途 |
|---|---|
| `vitest.config.ts` | Vitest メイン設定 |

## 設定項目

```ts
// vitest.config.ts
{
  esbuild: {
    jsx: 'automatic',  // esbuild の JSX 変換（@vitejs/plugin-react 不要）
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    css: false,         // CSS インポートを空モックとして扱う（devicon 含む）
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
    },
  },
  resolve: {
    alias: [/* パスエイリアス */],
  },
}
```

### ESM 対応のための設定

- **不要**: Vitest は Vite ベースのため ESM を native でサポート。Jest で必要だった `transformIgnorePatterns` は一切不要。
- **`css: false`**: CSS インポート（`devicon` の main entry `devicon.min.css` 含む）を空モジュールとして扱う。Jest の `styleMock.js` を使った `moduleNameMapper` の代替。
- **`esbuild.jsx: 'automatic'`**: `@vitejs/plugin-react` なしで React JSX を変換。

## 依存パッケージ（削除したもの）

| パッケージ | バージョン | 削除理由 |
|---|---|---|
| `jest` | ^30.3.0 | Vitest に置き換え |
| `jest-environment-jsdom` | ^30.3.0 | Vitest の `environment: 'jsdom'` に置き換え |
| `ts-jest` | ^29.4.9 | Vitest は TypeScript を直接サポート |
| `@types/jest` | ^30.0.0 | `vitest/globals` に置き換え |

## テストコードの変更点

| 変更前 | 変更後 |
|---|---|
| `import '@testing-library/jest-dom'` | `import '@testing-library/jest-dom/vitest'` |
| `jest.fn()` | `vi.fn()` |
| `jest.mock()` | `vi.mock()` |
| `jest.spyOn()` | `vi.spyOn()` |
| `jest.clearAllMocks()` | `vi.clearAllMocks()` |
| `jest.Mock` (型) | `vi.mocked()` または `MockedFunction<T>` |

## テスト実行時間（`vitest run` 10回計測）

| Run | 実行時間 |
|---|---|
| 1 | 7070ms |
| 2 | 7337ms |
| 3 | 6346ms |
| 4 | 7011ms |
| 5 | 7245ms |
| 6 | 13740ms ※外れ値 |
| 7 | 8680ms |
| 8 | 8560ms |
| 9 | 7946ms |
| 10 | 8229ms |

| 統計 | 値 |
|---|---|
| 最小値 | 6346ms |
| 最大値 | 13740ms |
| 中央値 | 7641.5ms |
| 平均値 | 8216.4ms |
| 標準偏差 | 2079.0ms |

※ Run 6 が外れ値（13740ms）。
