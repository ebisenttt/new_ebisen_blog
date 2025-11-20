import { PostBody } from '@/entities/post/ui/PostBody'

import type { Meta, StoryObj } from '@storybook/nextjs'

const meta = {
  title: 'Entities/Post/PostBody',
  component: PostBody,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: '記事本文のHTMLコンテンツ。',
    },
  },
  parameters: {
    docs: {
      description: {
        component:
          '記事本文を表示するコンポーネント。MarkdownからHTMLに変換されたコンテンツをレンダリングし、適切なスタイリングを適用します。',
      },
    },
  },
} satisfies Meta<typeof PostBody>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: '<p>これは記事本文のサンプルテキストです。</p>',
  },
}

export const WithHeadings: Story = {
  args: {
    content: `
      <h2>見出し2</h2>
      <p>見出し2の下の段落テキストです。</p>
      <h3>見出し3</h3>
      <p>見出し3の下の段落テキストです。</p>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: '見出しを含む記事本文の例。',
      },
    },
  },
}

export const WithList: Story = {
  args: {
    content: `
      <p>箇条書きリストの例:</p>
      <ul>
        <li>リスト項目1</li>
        <li>リスト項目2
          <ul>
            <li>ネストされた項目2-1</li>
            <li>ネストされた項目2-2</li>
          </ul>
        </li>
        <li>リスト項目3</li>
      </ul>
      <p>番号付きリストの例:</p>
      <ol>
        <li>最初の項目</li>
        <li>2番目の項目</li>
        <li>3番目の項目</li>
      </ol>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: '箇条書きリストと番号付きリストの例。',
      },
    },
  },
}

export const WithLink: Story = {
  args: {
    content: `
      <p>リンクのテスト: <a href="https://example.com">外部リンク</a>です。</p>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: 'リンクのスタイリング例。',
      },
    },
  },
}

export const WithCodeBlock: Story = {
  args: {
    content: `
      <p>コードブロックの例:</p>
      <pre><code class="language-javascript">const greeting = 'Hello, World!';
console.log(greeting);</code></pre>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: 'コードブロックの表示例。',
      },
    },
  },
}

export const FullArticle: Story = {
  args: {
    content: `
      <h2>記事の概要</h2>
      <p>この記事では、様々なMarkdown要素を含む本文の表示例を示します。</p>
      
      <h3>主要なポイント</h3>
      <ul>
        <li>見出しの階層構造</li>
        <li>段落とテキストの装飾</li>
        <li>リストとコードブロック</li>
      </ul>
      
      <h3>コード例</h3>
      <pre><code class="language-typescript">type Props = {
  content: string
}</code></pre>
      
      <p>詳細は<a href="https://example.com">公式ドキュメント</a>を参照してください。</p>
    `,
  },
  parameters: {
    docs: {
      description: {
        story: '実際の記事本文に近い総合的な例。',
      },
    },
  },
}
