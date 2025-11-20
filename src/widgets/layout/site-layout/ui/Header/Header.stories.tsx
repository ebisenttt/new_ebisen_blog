import type { Meta, StoryObj } from '@storybook/nextjs'

import { Header } from './Header'

const meta = {
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
} satisfies Meta<typeof Header>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
