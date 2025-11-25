import type { Meta, StoryObj } from '@storybook/nextjs'
import type { PostsFeedPost } from './PostsFeed'

import { PostsFeed } from './PostsFeed'

const meta = {
  title: 'Widgets/Posts/PostsFeed',
  component: PostsFeed,
  tags: ['autodocs'],
  argTypes: {
    posts: {
      control: false,
      description: '表示する記事の配列。hrefとexternalUrlを含む。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'ホームページの記事フィードセクション。セクションタイトルと記事のグリッドを表示します。',
      },
    },
  },
} satisfies Meta<typeof PostsFeed>

export default meta

type Story = StoryObj<typeof meta>

const createPost = (overrides: Partial<PostsFeedPost> = {}): PostsFeedPost => ({
  title: 'Sample Post',
  date: '2024-11-21',
  content: '',
  filename: 'sample',
  tags: ['Sample'],
  href: '/posts/sample',
  externalUrl: null,
  ...overrides,
})

export const Default: Story = {
  args: {
    posts: [
      createPost({
        title: 'Next.jsで始めるブログ開発',
        date: '2024-11-21',
        tags: ['Next.js', 'React', 'TypeScript'],
        filename: 'nextjs-blog',
        href: '/posts/nextjs-blog',
      }),
      createPost({
        title: 'Reactの基礎を学ぶ',
        date: '2024-11-20',
        tags: ['React', 'JavaScript'],
        filename: 'react-basics',
        href: '/posts/react-basics',
      }),
      createPost({
        title: 'React公式ドキュメント',
        date: '2024-11-19',
        tags: ['React', 'Documentation'],
        filename: 'react-docs',
        href: 'https://react.dev',
        externalUrl: 'https://react.dev',
      }),
      createPost({
        title: 'TypeScriptの型システム入門',
        date: '2024-11-18',
        tags: ['TypeScript'],
        filename: 'typescript-types',
        href: '/posts/typescript-types',
      }),
    ],
  },
  parameters: {
    docs: {
      description: {
        story: '内部記事と外部リンクが混在する記事フィードの例。',
      },
    },
  },
}

export const Empty: Story = {
  args: {
    posts: [],
  },
  parameters: {
    docs: {
      description: {
        story: '記事が存在しない場合、空のメッセージが表示されます。',
      },
    },
  },
}
