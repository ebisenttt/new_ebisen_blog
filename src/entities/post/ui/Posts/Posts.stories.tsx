import type { Meta, StoryObj } from '@storybook/nextjs'
import type { Post } from '@/shared/types/post'

import { Posts } from './Posts'

const meta = {
  title: 'entities/post/Posts',
  component: Posts,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Posts>

export default meta
type Story = StoryObj<typeof meta>

type PostWithLink = Post & {
  href?: string
  externalUrl?: string | null
}

const createPost = (overrides: Partial<PostWithLink> = {}): PostWithLink => ({
  title: 'サンプル記事',
  date: '2024-01-15',
  filename: 'sample',
  content: '',
  tags: ['タグ1', 'タグ2'],
  href: '/posts/sample',
  ...overrides,
})

export const Default: Story = {
  args: {
    posts: [
      createPost({
        filename: 'nextjs-blog',
        title: 'Next.jsで始めるブログ開発',
        date: '2024-11-21',
        tags: ['Next.js', 'TypeScript', 'React'],
        href: '/posts/nextjs-blog',
      }),
      createPost({
        filename: 'array-map',
        title: '`Array.prototype.map()`の使い方',
        date: '2024-11-19',
        tags: ['JavaScript'],
        href: '/posts/array-map',
      }),
      createPost({
        filename: 'fullstack',
        title: 'フルスタック開発の始め方',
        date: '2024-11-18',
        tags: ['Next.js', 'TypeScript', 'React', 'Node.js'],
        href: '/posts/fullstack',
      }),
      createPost({
        filename: 'no-tags',
        title: 'タグのない記事',
        date: '2024-11-17',
        tags: [],
        href: '/posts/no-tags',
      }),
    ],
  },
}

export const WithExternalLinks: Story = {
  args: {
    posts: [
      createPost({
        filename: 'react-docs',
        title: 'React公式ドキュメント',
        date: '2024-11-20',
        tags: ['React', 'Documentation'],
        href: 'https://react.dev',
        externalUrl: 'https://react.dev',
      }),
      createPost({
        filename: 'internal',
        title: 'Next.jsで始めるブログ開発',
        date: '2024-11-21',
        tags: ['Next.js'],
        href: '/posts/nextjs-blog',
      }),
    ],
  },
}

export const SinglePost: Story = {
  args: {
    posts: [
      createPost({
        filename: 'single',
        title: '単一の記事',
        date: '2024-11-21',
        tags: ['タグ'],
        href: '/posts/single',
      }),
    ],
  },
}

export const ManyPosts: Story = {
  args: {
    posts: Array.from({ length: 6 }, (_, i) =>
      createPost({
        filename: `post-${i + 1}`,
        title: `記事タイトル ${i + 1}`,
        date: `2024-11-${String(21 - i).padStart(2, '0')}`,
        tags: [`タグ${i + 1}`],
        href: `/posts/post-${i + 1}`,
      }),
    ),
  },
}

export const Empty: Story = {
  args: {
    posts: [],
  },
}
