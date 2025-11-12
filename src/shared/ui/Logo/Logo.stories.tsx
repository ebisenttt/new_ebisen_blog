import { Logo } from '@/shared/ui/Logo'

import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
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
} satisfies Meta<typeof Logo>

export default meta

type Story = StoryObj<typeof meta>

export const Small: Story = {
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
}

export const Medium: Story = {
  args: {
    width: 64,
    height: 64,
  },
}

export const Large: Story = {
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
}
