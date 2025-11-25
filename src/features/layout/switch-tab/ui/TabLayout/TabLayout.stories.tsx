import type { Meta, StoryObj } from '@storybook/nextjs'

import { TabLayout } from './TabLayout'

const meta = {
  title: 'Features/Layout/TabLayout',
  component: TabLayout,
  tags: ['autodocs'],
  argTypes: {
    menuTitles: {
      control: 'object',
      description: 'タブメニューのタイトル配列。',
    },
    bodies: {
      control: false,
      description: '各タブに対応する本文コンテンツ配列(ReactElement)。',
    },
    initialIndex: {
      control: 'number',
      description: '初期表示するタブのインデックス(0始まり)。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          'タブ切り替え機能を提供するレイアウトコンポーネント。クリックでタブを切り替え、対応するコンテンツを表示します。',
      },
    },
  },
} satisfies Meta<typeof TabLayout>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    menuTitles: ['Posts', 'Tags', 'Me'],
    bodies: [
      <div key="posts">
        <p>記事一覧のコンテンツがここに表示されます。</p>
      </div>,
      <div key="tags">
        <p>タグ一覧のコンテンツがここに表示されます。</p>
      </div>,
      <div key="me">
        <p>プロフィールのコンテンツがここに表示されます。</p>
      </div>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'ホームページで使用されている実際のタブ構成。',
      },
    },
  },
}

export const TwoTabs: Story = {
  args: {
    menuTitles: ['Overview', 'Details'],
    bodies: [
      <div key="overview">
        <h3 className="text-xl mb-4">概要</h3>
        <p>プロジェクトの概要説明がここに入ります。</p>
      </div>,
      <div key="details">
        <h3 className="text-xl mb-4">詳細</h3>
        <p>詳細な説明や技術スタックなどがここに入ります。</p>
      </div>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: '2つのタブを使用する例。',
      },
    },
  },
}

export const WithInitialIndex: Story = {
  args: {
    menuTitles: ['Tab 1', 'Tab 2', 'Tab 3'],
    bodies: [
      <div key="1">タブ1のコンテンツ</div>,
      <div key="2">タブ2のコンテンツ</div>,
      <div key="3">タブ3のコンテンツ</div>,
    ],
    initialIndex: 2,
  },
  parameters: {
    docs: {
      description: {
        story: '初期表示を3番目のタブに設定した例。',
      },
    },
  },
}

export const WithRichContent: Story = {
  args: {
    menuTitles: ['Articles', 'Gallery'],
    bodies: [
      <div key="articles" className="space-y-4">
        <article className="p-4 border border-gray-700 rounded">
          <h3 className="text-lg font-bold mb-2">記事タイトル1</h3>
          <p className="text-sm text-gray-400">2024-11-21</p>
        </article>
        <article className="p-4 border border-gray-700 rounded">
          <h3 className="text-lg font-bold mb-2">記事タイトル2</h3>
          <p className="text-sm text-gray-400">2024-11-20</p>
        </article>
      </div>,
      <div key="gallery" className="grid grid-cols-3 gap-4">
        <div className="h-24 bg-gray-700 rounded" />
        <div className="h-24 bg-gray-700 rounded" />
        <div className="h-24 bg-gray-700 rounded" />
      </div>,
    ],
  },
  parameters: {
    docs: {
      description: {
        story: 'リッチなコンテンツを含むタブの例。',
      },
    },
  },
}
