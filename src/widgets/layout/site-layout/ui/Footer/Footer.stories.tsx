import { expect, within } from 'storybook/test'

import type { Meta, StoryObj } from '@storybook/nextjs'

import { Footer } from './Footer'

const meta = {
  title: 'Widgets/Layout/SiteLayout/Footer',
  component: Footer,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'サイトフッター。ブログタイトルとソーシャルメディアリンク(GitHub, X/Twitter, note)を表示します。',
      },
    },
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Footer>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'ebisen blog.' })).toBeInTheDocument()
    expect(canvas.getByAltText('github')).toBeInTheDocument()
    expect(canvas.getByAltText('x-twitter')).toBeInTheDocument()
    expect(canvas.getByAltText('note')).toBeInTheDocument()
  },
}
