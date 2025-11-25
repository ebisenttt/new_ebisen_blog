import { ExternalLinkIcon } from '@/shared/ui/ExternalLinkIcon'

import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Shared/UI/ExternalLinkIcon',
  component: ExternalLinkIcon,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'アイコンのタイトル(アクセシビリティ用)。',
    },
    className: {
      control: 'text',
      description: 'サイズや色などのカスタムクラス。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '外部リンクを示すSVGアイコン。外部サイトへのリンクに使用され、視覚的にリンクが外部であることを示します。',
      },
    },
  },
} satisfies Meta<typeof ExternalLinkIcon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: '外部リンク',
  },
}

export const InText: Story = {
  args: {
    title: '外部リンク',
  },
  render: (args) => (
    <span className="flex items-center gap-2">
      <span>外部サイトへのリンク</span>
      <ExternalLinkIcon {...args} />
    </span>
  ),
  parameters: {
    docs: {
      description: {
        story: 'テキストと一緒に表示する例。',
      },
    },
  },
}

export const WithGrayColor: Story = {
  args: {
    title: '外部リンク',
    className: 'h-4 w-4 text-gray-500',
  },
  render: (args) => (
    <span className="ml-2">
      <ExternalLinkIcon {...args} />
    </span>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'PostPreviewで使用されている実際の例。グレー色で控えめに表示されます。',
      },
    },
  },
}
