import type { Meta, StoryObj } from '@storybook/nextjs'

import { PostTitle } from './PostTitle'

const meta = {
  title: 'entities/post/PostTitle',
  component: PostTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof PostTitle>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Next.jsを実務で使用した感想と反省',
  },
}

export const WithBackQuotes: Story = {
  args: {
    title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点',
  },
}

export const LongTitle: Story = {
  args: {
    title:
      'はじめに | 初学者によるRuby on Rails Tutorial学習記録 - 長いタイトルの表示確認',
  },
}

export const ShortTitle: Story = {
  args: {
    title: '200902',
  },
}
