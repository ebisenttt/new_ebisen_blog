import type { Meta, StoryObj } from '@storybook/nextjs'

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

export const Default: Story = {}
