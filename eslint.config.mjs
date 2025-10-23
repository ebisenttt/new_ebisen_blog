import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { defineConfig, globalIgnores } from 'eslint/config'
import unusedImports from 'eslint-plugin-unused-imports'
import _import from 'eslint-plugin-import'
import globals from 'globals'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default defineConfig([
  globalIgnores([
    'node_modules',
    '.next',
    '.vercel',
    'public',
    '_drafts',
    '_posts',
    'tailwind.config.js',
    'coverage',
  ]),
  {
    extends: compat.extends(
      'plugin:react/recommended',
      'prettier',
      'plugin:@typescript-eslint/recommended',
      'plugin:@next/next/recommended',
    ),
    plugins: {
      'unused-imports': unusedImports,
      import: _import,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {
          project: './tsconfig.json',
        },
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],
      'import/no-unresolved': 'error',
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'index', 'type'],
          'newlines-between': 'always',
          pathGroups: [
            {
              pattern: 'react',
              group: 'external',
              position: 'before',
            },
            {
              pattern: 'next/*',
              group: 'external',
              position: 'before',
            },
            {
              pattern: '@shared/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@entities/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@features/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@widgets/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@processes/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@pages/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '@app-providers/**',
              group: 'internal',
              position: 'after',
            },
          ],
          pathGroupsExcludedImportTypes: ['react', 'next'],
          alphabetize: {
            orderImportKind: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
  {
    ignores: ['src/lib/date/index.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['date-fns*', '@date-fns*'],
              message: '@lib/dateからimportしてください',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/components/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@/components', '@/components/*'],
              message: 'components内では相対パスを使用してください',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'no-restricted-syntax': [
        'error',
        {
          selector: 'TSInterfaceDeclaration',
          message:
            'interfaceの使用は禁止です。typeエイリアスを使ってください。',
        },
      ],
    },
  },
])
