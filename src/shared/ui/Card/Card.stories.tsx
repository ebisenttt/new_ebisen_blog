import { Card } from '@/shared/ui/Card'

import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Shared/UI/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'カード内に表示する任意のコンテンツ。',
    },
    className: {
      control: 'text',
      description:
        '追加の Tailwind クラス。ベーススタイルに上書き適用されます。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '汎用カードレイアウト。ダークテーマ対応の背景、角丸、パディングを提供します。',
      },
    },
  },
} satisfies Meta<typeof Card>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'カードのデフォルト表示です。',
  },
}

export const WithFlexLayout: Story = {
  args: {
    children: (
      <div className="flex h-full flex-col">
        <h3 className="flex-1 text-xl leading-snug">記事タイトル</h3>
        <div className="mt-auto pt-4 text-base text-gray-400">2025-11-12</div>
      </div>
    ),
    className: 'flex h-full flex-col',
  },
  parameters: {
    docs: {
      description: {
        story: 'PostPreview で使用されている実際のレイアウト例。',
      },
    },
  },
}
