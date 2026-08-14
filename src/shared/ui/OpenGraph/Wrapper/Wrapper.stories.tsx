import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { Wrapper } from '@/shared/ui/OpenGraph/Wrapper'

const meta = preview.meta({
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
})

export const Default = meta.story({
  args: {
    children: <p style={{ fontSize: 64 }}>OGイメージのコンテンツ</p>,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('OGイメージのコンテンツ')).toBeInTheDocument()
  },
})

export const WithCustomStyle = meta.story({
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
})
