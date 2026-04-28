import { expect, within } from 'storybook/test'

import type { Meta, StoryObj } from '@storybook/nextjs-vite'

import { Intro } from './Intro'

const meta = {
  title: 'Widgets/Layout/SiteLayout/Intro',
  component: Intro,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ホームページのイントロセクション。ブログタイトル「ebisen blog」とサブタイトル「ひよっこエンジニアの備忘録」を表示します。',
      },
    },
  },
} satisfies Meta<typeof Intro>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'ebisen blog' })).toBeInTheDocument()
    expect(canvas.getByText('ひよっこエンジニアの備忘録')).toBeInTheDocument()
  },
}
