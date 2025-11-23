import { Basic } from '@/shared/ui/OpenGraph/Basic'

import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Shared/UI/OpenGraph/Basic',
  component: Basic,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '基本的なOGイメージ。記事タイトルが取得できない場合のフォールバックとして使用されます。',
      },
    },
    layout: 'fullscreen',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 1200, height: 630 }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Basic>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
