import { PostPreview } from '@/entities/post/ui/PostPreview'

import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
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
} satisfies Meta<typeof PostPreview>

export default meta

type Story = StoryObj<typeof meta>

export const InternalLink: Story = {
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
}

export const ExternalLink: Story = {
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
}

export const WithCodeInTitle: Story = {
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
}

export const ManyTags: Story = {
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
}

export const NoTags: Story = {
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
}
