import { Wrapper } from '@/shared/ui/OpenGraph/Wrapper'

import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Shared/UI/OpenGraph/Wrapper',
  component: Wrapper,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'OGイメージ用の共通ラッパー。中央揃えレイアウトと明るい背景色を提供します。',
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
} satisfies Meta<typeof Wrapper>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <p style={{ fontSize: 64 }}>OGイメージのコンテンツ</p>,
  },
}

export const WithCustomStyle: Story = {
  args: {
    style: { position: 'relative' },
    children: (
      <>
        <p style={{ fontSize: 36 }}>記事タイトル</p>
        <div
          style={{
            position: 'absolute',
            right: 48,
            bottom: 24,
            fontSize: 24,
          }}
        >
          ブログ名
        </div>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: '記事OGイメージで使用されている実際のレイアウト例。',
      },
    },
  },
}
