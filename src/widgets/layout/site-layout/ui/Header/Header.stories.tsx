import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { TITLE } from '@/shared/config'

import { Header } from './Header'

const meta = preview.meta({
  title: 'Widgets/Layout/SiteLayout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'サイトヘッダー。ブログタイトルへのホームリンクを表示します。記事詳細ページで使用されます。',
      },
    },
  },
})

export const Default = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const link = canvas.getByRole('link', { name: TITLE })
    expect(link).toHaveAttribute('href', '/')
  },
})
