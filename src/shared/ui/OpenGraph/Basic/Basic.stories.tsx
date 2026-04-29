import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { Basic } from '@/shared/ui/OpenGraph/Basic'

const meta = preview.meta({
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
})

export const Default = meta.story({
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText('ebisen blog.')).toBeInTheDocument()
  },
})
