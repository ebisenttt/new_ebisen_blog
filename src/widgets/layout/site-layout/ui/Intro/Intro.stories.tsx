import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { Intro } from './Intro'

const meta = preview.meta({
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
})

export const Default = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(
      canvas.getByRole('heading', { name: 'ebisen blog' }),
    ).toBeInTheDocument()
    expect(canvas.getByText('ひよっこエンジニアの備忘録')).toBeInTheDocument()
  },
})
