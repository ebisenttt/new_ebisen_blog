import{p as c}from"./iframe-Bd5CrwUb.js";import{P as l}from"./PostBody-B2dab3Yv.js";import"./preload-helper-Dhgqe2qg.js";const{expect:u,within:d}=__STORYBOOK_MODULE_TEST__,n=c.meta({title:"Entities/Post/PostBody",component:l,tags:["autodocs"],argTypes:{content:{control:"text",description:"記事本文のHTMLコンテンツ。"}},parameters:{docs:{description:{component:"記事本文を表示するコンポーネント。MarkdownからHTMLに変換されたコンテンツをレンダリングし、適切なスタイリングを適用します。"}}}}),t=n.story({args:{content:"<p>これは記事本文のサンプルテキストです。</p>"},play:async({canvasElement:p})=>{const i=d(p);u(i.getByText("これは記事本文のサンプルテキストです。")).toBeInTheDocument()}}),e=n.story({args:{content:`
      <h2>見出し2</h2>
      <p>見出し2の下の段落テキストです。</p>
      <h3>見出し3</h3>
      <p>見出し3の下の段落テキストです。</p>
    `},parameters:{docs:{description:{story:"見出しを含む記事本文の例。"}}}}),r=n.story({args:{content:`
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
    `},parameters:{docs:{description:{story:"箇条書きリストと番号付きリストの例。"}}}}),s=n.story({args:{content:`
      <p>リンクのテスト: <a href="https://example.com">外部リンク</a>です。</p>
    `},parameters:{docs:{description:{story:"リンクのスタイリング例。"}}}}),o=n.story({args:{content:`
      <p>コードブロックの例:</p>
      <pre><code class="language-javascript">const greeting = 'Hello, World!';
console.log(greeting);</code></pre>
    `},parameters:{docs:{description:{story:"コードブロックの表示例。"}}}}),a=n.story({args:{content:`
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
    `},parameters:{docs:{description:{story:"実際の記事本文に近い総合的な例。"}}}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    content: '<p>これは記事本文のサンプルテキストです。</p>'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('これは記事本文のサンプルテキストです。')).toBeInTheDocument();
  }
})`,...t.input.parameters?.docs?.source}}};e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    content: \`
      <h2>見出し2</h2>
      <p>見出し2の下の段落テキストです。</p>
      <h3>見出し3</h3>
      <p>見出し3の下の段落テキストです。</p>
    \`
  },
  parameters: {
    docs: {
      description: {
        story: '見出しを含む記事本文の例。'
      }
    }
  }
})`,...e.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    content: \`
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
    \`
  },
  parameters: {
    docs: {
      description: {
        story: '箇条書きリストと番号付きリストの例。'
      }
    }
  }
})`,...r.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    content: \`
      <p>リンクのテスト: <a href="https://example.com">外部リンク</a>です。</p>
    \`
  },
  parameters: {
    docs: {
      description: {
        story: 'リンクのスタイリング例。'
      }
    }
  }
})`,...s.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    content: \`
      <p>コードブロックの例:</p>
      <pre><code class="language-javascript">const greeting = 'Hello, World!';
console.log(greeting);</code></pre>
    \`
  },
  parameters: {
    docs: {
      description: {
        story: 'コードブロックの表示例。'
      }
    }
  }
})`,...o.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    content: \`
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
    \`
  },
  parameters: {
    docs: {
      description: {
        story: '実際の記事本文に近い総合的な例。'
      }
    }
  }
})`,...a.input.parameters?.docs?.source}}};const y=["Default","WithHeadings","WithList","WithLink","WithCodeBlock","FullArticle"];export{t as Default,a as FullArticle,o as WithCodeBlock,e as WithHeadings,s as WithLink,r as WithList,y as __namedExportsOrder};
