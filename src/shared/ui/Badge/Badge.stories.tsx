import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { Badge } from '@/shared/ui/Badge'

const meta = preview.meta({
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
})

export const Default = meta.story({
  args: {
    text: 'Custom Badge',
  },
})

export const Ruby = meta.story({
  args: {
    text: 'ruby',
  },
})

export const TypeScript = meta.story({
  args: {
    text: 'typescript',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('typescript')).toBeInTheDocument()
    expect(
      canvasElement.querySelector('.devicon-typescript-plain'),
    ).not.toBeNull()
  },
})

export const HTML = meta.story({
  args: {
    text: 'HTML',
  },
})

export const Rails = meta.story({
  args: {
    text: 'rails',
  },
})

export const ESLint = meta.story({
  args: {
    text: 'eslint',
  },
})

export const Markdown = meta.story({
  args: {
    text: 'markdown',
  },
})

export const UoPeople = meta.story({
  args: {
    text: 'UoPeople',
  },
})
