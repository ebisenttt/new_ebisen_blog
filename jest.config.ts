import nextJest from 'next/jest.js'

import type { Config } from 'jest'

const createJestConfig = nextJest({
  dir: './',
})

const configBase: Config = {
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
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
  },
  testEnvironment: 'jsdom',
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
}

const config = async () => {
  const nextConfig = await createJestConfig(configBase)()

  return {
    ...nextConfig,
    moduleNameMapper: {
      ...configBase.moduleNameMapper,
      ...nextConfig.moduleNameMapper,
      '^@/(.*)$': '<rootDir>/src/$1',
      '^@shared/ui$': '<rootDir>/src/shared/ui/index.ts',
      '^@shared/ui/(.*)$': '<rootDir>/src/shared/ui/$1',
      '\\.(css|less|sass|scss)$': '<rootDir>/tests/__mocks__/styleMock.js',
      '^devicon$': '<rootDir>/tests/__mocks__/styleMock.js',
    },
    transformIgnorePatterns: [
      '/node_modules/(?!.pnpm|unified|bail|devlop|is-plain-obj|trough|vfile|unist-.*|remark-.*|mdast-.*|hast-util-.*|property-information|html-void-element|zwitch|stringify-entities|character-entities-.*|ccount|comma-separated-token|space-separated-token|micromark-.*|trim-lines|)',
    ],
  }
}

export default config
