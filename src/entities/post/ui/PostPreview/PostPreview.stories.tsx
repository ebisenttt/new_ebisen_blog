import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { PostPreview } from '@/entities/post/ui/PostPreview'

import type { StoryObj } from '@storybook/nextjs-vite'

const meta = preview.meta({
  title: 'Entities/Post/PostPreview',
  component: PostPreview,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: '記事のタイトル。バッククォートは<code>要素に変換されます。',
    },
    date: {
      control: 'text',
      description: '記事の公開日(YYYY-MM-DD形式)。',
    },
    tags: {
      control: 'object',
      description: '記事のタグ配列。',
    },
    href: {
      control: 'text',
      description: 'リンク先のURL。',
    },
    externalUrl: {
      control: 'text',
      description:
        '外部リンクのURL。指定すると外部リンクアイコンが表示され、target="_blank"で開きます。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '記事のプレビューカードを表示するコンポーネント。タイトル、日付、タグを含み、内部リンクと外部リンクの両方に対応しています。',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
})

type Story = StoryObj<typeof meta>

export const InternalLink = meta.story({
  args: {
    title: 'Next.jsで始めるブログ開発',
    date: '2024-11-21',
    tags: ['Next.js', 'TypeScript', 'React'],
    href: '/posts/nextjs-blog',
  },
  parameters: {
    docs: {
      description: {
        story: '内部記事へのリンク例。Next.js Linkを使用します。',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('Next.js')).toBeInTheDocument()
    const link = canvasElement.querySelector('a[href="/posts/nextjs-blog"]')
    expect(link).toBeInTheDocument()
    expect(link).not.toHaveAttribute('target')
  },
})

export const ExternalLink = meta.story({
  args: {
    title: 'React公式ドキュメント',
    date: '2024-11-20',
    tags: ['React', 'Documentation'],
    href: 'https://react.dev',
    externalUrl: 'https://react.dev',
  },
  parameters: {
    docs: {
      description: {
        story:
          '外部リンクの例。外部リンクアイコンが表示され、新しいタブで開きます。',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const link = canvasElement.querySelector('a[href="https://react.dev"]')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  },
})

export const WithCodeInTitle = meta.story({
  args: {
    title: '`Array.prototype.map()`の使い方',
    date: '2024-11-19',
    tags: ['JavaScript'],
    href: '/posts/array-map',
  },
  parameters: {
    docs: {
      description: {
        story:
          'タイトルにバッククォートを含む例。バッククォート部分は<code>要素に変換されます。',
      },
    },
  },
})

export const ManyTags = meta.story({
  args: {
    title: 'フルスタック開発の始め方',
    date: '2024-11-18',
    tags: [
      'Next.js',
      'TypeScript',
      'React',
      'Node.js',
      'PostgreSQL',
      'Tailwind CSS',
    ],
    href: '/posts/fullstack-development',
  },
  parameters: {
    docs: {
      description: {
        story: '多数のタグを含む例。',
      },
    },
  },
})

export const NoTags = meta.story({
  args: {
    title: 'タグのない記事',
    date: '2024-11-17',
    tags: [],
    href: '/posts/no-tags',
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが設定されていない記事の例。',
      },
    },
  },
})
