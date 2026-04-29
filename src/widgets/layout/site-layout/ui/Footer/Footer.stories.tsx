import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { Footer } from './Footer'

const meta = preview.meta({
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
})

export const Default = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByRole('heading', { name: 'ebisen blog.' }),
    ).toBeInTheDocument()
    expect(canvas.getByAltText('github')).toBeInTheDocument()
    expect(canvas.getByAltText('x-twitter')).toBeInTheDocument()
    expect(canvas.getByAltText('note')).toBeInTheDocument()
  },
})
