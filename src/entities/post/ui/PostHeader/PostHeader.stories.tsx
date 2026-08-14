import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { PostHeader } from './PostHeader'

const meta = preview.meta({
  title: 'entities/post/PostHeader',
  component: PostHeader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
})

export const Default = meta.story({
  args: {
    title: 'Next.jsを実務で使用した感想と反省',
    date: '2024-01-15',
    tag: ['Next.js', 'React', 'フロントエンド'],
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByText('Next.jsを実務で使用した感想と反省'),
    ).toBeInTheDocument()
    expect(canvas.getByText('2024-01-15')).toBeInTheDocument()
  },
})

export const WithBackQuotesInTitle = meta.story({
  args: {
    title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点',
    date: '2024-01-15T16:20:47+09:00',
    tag: ['Jest', 'pnpm', 'テスト'],
  },
})

export const SingleTag = meta.story({
  args: {
    title: '基本情報技術者試験に合格した',
    date: '2024-08-25',
    tag: ['資格'],
  },
})

export const NoTags = meta.story({
  args: {
    title: 'ブログをリニューアルした話',
    date: '2023-09-17T10:57:13+09:00',
    tag: [],
  },
})

export const ManyTags = meta.story({
  args: {
    title: 'TypeScriptのルールをstrictにしたときにつまずいたこと',
    date: '2023-11-20',
    tag: ['TypeScript', 'ESLint', 'JavaScript', 'フロントエンド', '開発環境'],
  },
})
