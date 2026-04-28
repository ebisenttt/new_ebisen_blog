import { expect, within } from 'storybook/test'

import { Badge } from '@/shared/ui/Badge'

import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Shared/UI/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: {
      control: 'text',
      description:
        'バッジに表示する文字列。特定のテキスト（ruby, typescript, HTML など）はアイコンと専用配色が適用されます。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'テキストに応じてアイコンと配色を自動選択するバッジコンポーネント。技術スタックやカテゴリの表示に利用します。',
      },
    },
  },
} satisfies Meta<typeof Badge>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    text: 'Custom Badge',
  },
}

export const Ruby: Story = {
  args: {
    text: 'ruby',
  },
}

export const TypeScript: Story = {
  args: {
    text: 'typescript',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('typescript')).toBeInTheDocument()
    expect(canvasElement.querySelector('.devicon-typescript-plain')).not.toBeNull()
  },
}

export const HTML: Story = {
  args: {
    text: 'HTML',
  },
}

export const Rails: Story = {
  args: {
    text: 'rails',
  },
}

export const ESLint: Story = {
  args: {
    text: 'eslint',
  },
}

export const Markdown: Story = {
  args: {
    text: 'markdown',
  },
}

export const UoPeople: Story = {
  args: {
    text: 'UoPeople',
  },
}
