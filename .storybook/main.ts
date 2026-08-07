import { defineMain } from '@storybook/nextjs-vite/node'
export default defineMain({
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    '@storybook/addon-vitest',
  ],
  framework: {
    name: '@storybook/nextjs-vite',
    options: {},
  },
  staticDirs: ['../public'],
  viteFinal: async (config) => {
    // GitHub Pages 用のベースパス設定
    if (process.env.NODE_ENV === 'production') {
      config.base = '/new_ebisen_blog/'
    }
    return config
  },
})
