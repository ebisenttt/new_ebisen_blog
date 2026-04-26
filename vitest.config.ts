import path from 'path'

import { defineConfig } from 'vitest/config'

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  test: {
    environment: 'jsdom',
    globals: true,
    include: ['src/**/*.test.{ts,tsx}'],
    css: false,
    coverage: {
      provider: 'v8',
      reportsDirectory: 'coverage',
    },
  },
  resolve: {
    alias: [
      { find: '@shared/ui', replacement: path.resolve(__dirname, './src/shared/ui') },
      { find: '@shared', replacement: path.resolve(__dirname, './src/shared') },
      { find: '@entities', replacement: path.resolve(__dirname, './src/entities') },
      { find: '@features', replacement: path.resolve(__dirname, './src/features') },
      { find: '@widgets', replacement: path.resolve(__dirname, './src/widgets') },
      { find: '@processes', replacement: path.resolve(__dirname, './src/processes') },
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages') },
      { find: '@app-providers', replacement: path.resolve(__dirname, './src/app-providers') },
      { find: '@/', replacement: path.resolve(__dirname, './src') + '/' },
    ],
  },
})
