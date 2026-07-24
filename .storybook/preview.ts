import addonA11y from "@storybook/addon-a11y";
import addonDocs from "@storybook/addon-docs";
import { definePreview } from '@storybook/nextjs-vite'
import 'devicon'
import '../src/shared/styles/index.css'

import { withThemeByClassName } from '@storybook/addon-themes'

export default definePreview({
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'dark',
    }),
  ],

  addons: [addonDocs(), addonA11y()]
})
