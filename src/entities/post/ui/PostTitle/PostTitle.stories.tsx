import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { PostTitle } from './PostTitle'

const meta = preview.meta({
  title: 'entities/post/PostTitle',
  component: PostTitle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
})

export const Default = meta.story({
  args: {
    title: 'Next.jsを実務で使用した感想と反省',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText('Next.jsを実務で使用した感想と反省'),
    ).toBeInTheDocument()
  },
})

export const WithBackQuotes = meta.story({
  args: {
    title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点',
  },
})

export const LongTitle = meta.story({
  args: {
    title:
      'はじめに | 初学者によるRuby on Rails Tutorial学習記録 - 長いタイトルの表示確認',
  },
})

export const ShortTitle = meta.story({
  args: {
    title: '200902',
  },
})
