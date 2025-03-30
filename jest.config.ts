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
  },
  testEnvironment: 'jsdom',
}

const config = async () => ({
  ...(await createJestConfig(configBase)()),
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!.pnpm|unified|bail|devlop|is-plain-obj|trough|vfile|unist-.*|remark-.*|mdast-.*|hast-util-.*|property-information|html-void-element|zwitch|stringify-entities|character-entities-.*|ccount|comma-separated-token|space-separated-token|micromark-.*|trim-lines|)',
  ],
})

export default config
