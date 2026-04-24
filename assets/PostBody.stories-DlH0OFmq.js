import{P as x}from"./PostBody-B-iTB6yZ.js";import"./jsx-runtime-Big8sbBF.js";import"./iframe-DP25XCWT.js";import"./preload-helper-Dhgqe2qg.js";var a,i,l,p,c,d,m,u,h,g,_,v,W,y,k,L,f,H;const C={title:"Entities/Post/PostBody",component:x,tags:["autodocs"],argTypes:{content:{control:"text",description:"記事本文のHTMLコンテンツ。"}},parameters:{docs:{description:{component:"記事本文を表示するコンポーネント。MarkdownからHTMLに変換されたコンテンツをレンダリングし、適切なスタイリングを適用します。"}}}},e={args:{content:"<p>これは記事本文のサンプルテキストです。</p>"}},n={args:{content:`
      <h2>見出し2</h2>
      <p>見出し2の下の段落テキストです。</p>
      <h3>見出し3</h3>
      <p>見出し3の下の段落テキストです。</p>
    `},parameters:{docs:{description:{story:"見出しを含む記事本文の例。"}}}},r={args:{content:`
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
    `},parameters:{docs:{description:{story:"箇条書きリストと番号付きリストの例。"}}}},o={args:{content:`
      <p>リンクのテスト: <a href="https://example.com">外部リンク</a>です。</p>
    `},parameters:{docs:{description:{story:"リンクのスタイリング例。"}}}},t={args:{content:`
      <p>コードブロックの例:</p>
      <pre><code class="language-javascript">const greeting = 'Hello, World!';
console.log(greeting);</code></pre>
    `},parameters:{docs:{description:{story:"コードブロックの表示例。"}}}},s={args:{content:`
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
    `},parameters:{docs:{description:{story:"実際の記事本文に近い総合的な例。"}}}};e.parameters={...e.parameters,docs:{...(a=e.parameters)===null||a===void 0?void 0:a.docs,source:{originalSource:`{
  args: {
    content: '<p>これは記事本文のサンプルテキストです。</p>'
  }
}`,...(l=e.parameters)===null||l===void 0||(i=l.docs)===null||i===void 0?void 0:i.source}}};n.parameters={...n.parameters,docs:{...(p=n.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
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
}`,...(d=n.parameters)===null||d===void 0||(c=d.docs)===null||c===void 0?void 0:c.source}}};r.parameters={...r.parameters,docs:{...(m=r.parameters)===null||m===void 0?void 0:m.docs,source:{originalSource:`{
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
}`,...(h=r.parameters)===null||h===void 0||(u=h.docs)===null||u===void 0?void 0:u.source}}};o.parameters={...o.parameters,docs:{...(g=o.parameters)===null||g===void 0?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=o.parameters)===null||v===void 0||(_=v.docs)===null||_===void 0?void 0:_.source}}};t.parameters={...t.parameters,docs:{...(W=t.parameters)===null||W===void 0?void 0:W.docs,source:{originalSource:`{
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
}`,...(k=t.parameters)===null||k===void 0||(y=k.docs)===null||y===void 0?void 0:y.source}}};s.parameters={...s.parameters,docs:{...(L=s.parameters)===null||L===void 0?void 0:L.docs,source:{originalSource:`{
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
}`,...(H=s.parameters)===null||H===void 0||(f=H.docs)===null||f===void 0?void 0:f.source}}};const D=["Default","WithHeadings","WithList","WithLink","WithCodeBlock","FullArticle"];export{e as Default,s as FullArticle,t as WithCodeBlock,n as WithHeadings,o as WithLink,r as WithList,D as __namedExportsOrder,C as default};
