import preview from '#.storybook/preview'
import { expect } from 'storybook/test'

import { Logo } from '@/shared/ui/Logo'

const meta = preview.meta({
  title: 'Shared/UI/Logo',
  component: Logo,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="inline-block bg-white p-2">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    width: {
      control: 'number',
      description: 'ロゴの幅(px)。',
    },
    height: {
      control: 'number',
      description: 'ロゴの高さ(px)。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'ブログのロゴ(エビのシルエット)。プロフィールカードやOGイメージで使用されます。',
      },
    },
  },
})

export const Small = meta.story({
  args: {
    width: 32,
    height: 32,
  },
  parameters: {
    docs: {
      description: {
        story: 'OGイメージで使用されているサイズ。',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const svg = canvasElement.querySelector('svg')
    expect(svg).toBeInstanceOf(SVGElement)
    expect(svg).toHaveAttribute('width', '32')
    expect(svg).toHaveAttribute('height', '32')
  },
})

export const Medium = meta.story({
  args: {
    width: 64,
    height: 64,
  },
})

export const Large = meta.story({
  args: {
    width: 128,
    height: 128,
  },
  parameters: {
    docs: {
      description: {
        story: 'ProfileAboutCardで使用されているサイズ。',
      },
    },
  },
})
