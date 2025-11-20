import type { Meta, StoryObj } from '@storybook/nextjs'
import type { Post } from '@/shared/types/post'

import { TagFilter } from './TagFilter'

const meta = {
  title: 'Features/Posts/TagFilter',
  component: TagFilter,
  tags: ['autodocs'],
  argTypes: {
    posts: {
      control: false,
      description: 'フィルタリング対象の記事配列。',
    },
    tags: {
      control: 'object',
      description: '表示するタグの配列。',
    },
    initialTag: {
      control: 'text',
      description: '初期選択されるタグ。',
    },
    tagStats: {
      control: 'object',
      description: '各タグの記事数を示すオブジェクト。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'タグで記事をフィルタリングする機能を提供するコンポーネント。タグをクリックすると、そのタグを持つ記事のみが表示されます。',
      },
    },
  },
} satisfies Meta<typeof TagFilter>

export default meta

type Story = StoryObj<typeof meta>

const samplePosts: Post[] = [
  {
    title: 'Next.jsで始めるブログ開発',
    date: '2024-11-21',
    content: '',
    filename: 'nextjs-blog',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    title: 'Reactの基礎を学ぶ',
    date: '2024-11-20',
    content: '',
    filename: 'react-basics',
    tags: ['React', 'JavaScript'],
  },
  {
    title: 'TypeScriptの型システム入門',
    date: '2024-11-19',
    content: '',
    filename: 'typescript-types',
    tags: ['TypeScript'],
  },
  {
    title: 'Tailwind CSSでスタイリング',
    date: '2024-11-18',
    content: '',
    filename: 'tailwind-styling',
    tags: ['Tailwind CSS', 'CSS'],
  },
  {
    title: 'フルスタック開発の始め方',
    date: '2024-11-17',
    content: '',
    filename: 'fullstack-dev',
    tags: ['Next.js', 'TypeScript', 'React'],
  },
]

export const Default: Story = {
  args: {
    posts: samplePosts,
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    initialTag: 'React',
    tagStats: {
      'Next.js': 2,
      React: 3,
      TypeScript: 3,
      JavaScript: 1,
      'Tailwind CSS': 1,
      CSS: 1,
    },
  },
  parameters: {
    docs: {
      description: {
        story: '複数のタグと記事を含む基本的な例。初期タグは"React"。',
      },
    },
  },
}

export const SingleTag: Story = {
  args: {
    posts: samplePosts.filter((p) => p.tags?.includes('TypeScript')),
    tags: ['TypeScript'],
    initialTag: 'TypeScript',
    tagStats: {
      TypeScript: 3,
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが1つだけの場合の例。',
      },
    },
  },
}

export const ManyTags: Story = {
  args: {
    posts: samplePosts,
    tags: [
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'CSS',
      'Node.js',
      'PostgreSQL',
      'Docker',
      'AWS',
    ],
    initialTag: 'Next.js',
    tagStats: {
      'Next.js': 2,
      React: 3,
      TypeScript: 3,
      JavaScript: 1,
      'Tailwind CSS': 1,
      CSS: 1,
      'Node.js': 0,
      PostgreSQL: 0,
      Docker: 0,
      AWS: 0,
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          '多数のタグがある場合の例。フレックスラップで複数行に表示されます。',
      },
    },
  },
}

export const NoTags: Story = {
  args: {
    posts: [],
    tags: [],
    initialTag: '',
    tagStats: {},
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが存在しない場合、メッセージが表示されます。',
      },
    },
  },
}
