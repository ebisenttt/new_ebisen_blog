import type { Meta, StoryObj } from '@storybook/nextjs'

import { Layout } from './Layout'

const meta = {
  title: 'Widgets/Layout/SiteLayout/Layout',
  component: Layout,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: false,
      description: 'メインコンテンツ領域に表示する子要素。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'サイト全体のレイアウトコンポーネント。メインコンテンツ領域とフッターを含みます。',
      },
    },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Layout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">ページタイトル</h1>
        <p className="mb-4">
          これはLayoutコンポーネント内に配置されるメインコンテンツの例です。
        </p>
        <p>
          Layoutコンポーネントは最小高さ(min-h-screen)を確保し、下部にフッターを配置します。
        </p>
      </div>
    ),
  },
}

export const WithArticle: Story = {
  args: {
    children: (
      <article className="mx-auto max-w-2xl p-8 prose dark:prose-invert">
        <h1>記事タイトル</h1>
        <p>記事本文のコンテンツがここに入ります。</p>
        <h2>セクション見出し</h2>
        <p>Layoutコンポーネントで記事をラップした場合の表示例です。</p>
      </article>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '記事コンテンツをラップする例。',
      },
    },
  },
}

export const MinimalContent: Story = {
  args: {
    children: (
      <div className="p-8">
        <p>最小限のコンテンツ</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '少量のコンテンツでも、min-h-screenによりフッターが画面下部に配置されます。',
      },
    },
  },
}
