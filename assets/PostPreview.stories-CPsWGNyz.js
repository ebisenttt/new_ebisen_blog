import{j as p}from"./jsx-runtime-ByRWct7B.js";import{P as d}from"./PostPreview-CCNIZyAN.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./link-_QTOc7RR.js";import"./use-merged-ref-E0-5uso8.js";import"./backQuoteToCodeElement-JvVutd65.js";import"./Badge-4GiHobYd.js";import"./Card-5vqJtSYk.js";import"./Container-CjY-ocGB.js";import"./ExternalLinkIcon-BHX7rbid.js";import"./Logo-DiI8eS99.js";import"./Basic-CtvcpFe3.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-yOxfQxMN.js";import"./DateFormatter-BXF0u73M.js";const{expect:e,within:l}=__STORYBOOK_MODULE_TEST__,E={title:"Entities/Post/PostPreview",component:d,tags:["autodocs"],argTypes:{title:{control:"text",description:"記事のタイトル。バッククォートは<code>要素に変換されます。"},date:{control:"text",description:"記事の公開日(YYYY-MM-DD形式)。"},tags:{control:"object",description:"記事のタグ配列。"},href:{control:"text",description:"リンク先のURL。"},externalUrl:{control:"text",description:'外部リンクのURL。指定すると外部リンクアイコンが表示され、target="_blank"で開きます。'}},parameters:{docs:{description:{component:"記事のプレビューカードを表示するコンポーネント。タイトル、日付、タグを含み、内部リンクと外部リンクの両方に対応しています。"}}},decorators:[t=>p.jsx("div",{style:{maxWidth:"400px"},children:p.jsx(t,{})})]},s={args:{title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","TypeScript","React"],href:"/posts/nextjs-blog"},parameters:{docs:{description:{story:"内部記事へのリンク例。Next.js Linkを使用します。"}}},play:async({canvasElement:t})=>{const r=l(t);e(r.getByText("Next.js")).toBeInTheDocument();const i=t.querySelector('a[href="/posts/nextjs-blog"]');e(i).toBeInTheDocument(),e(i).not.toHaveAttribute("target")}},a={args:{title:"React公式ドキュメント",date:"2024-11-20",tags:["React","Documentation"],href:"https://react.dev",externalUrl:"https://react.dev"},parameters:{docs:{description:{story:"外部リンクの例。外部リンクアイコンが表示され、新しいタブで開きます。"}}},play:async({canvasElement:t})=>{const r=t.querySelector('a[href="https://react.dev"]');e(r).toBeInTheDocument(),e(r).toHaveAttribute("target","_blank"),e(r).toHaveAttribute("rel","noopener noreferrer")}},o={args:{title:"`Array.prototype.map()`の使い方",date:"2024-11-19",tags:["JavaScript"],href:"/posts/array-map"},parameters:{docs:{description:{story:"タイトルにバッククォートを含む例。バッククォート部分は<code>要素に変換されます。"}}}},n={args:{title:"フルスタック開発の始め方",date:"2024-11-18",tags:["Next.js","TypeScript","React","Node.js","PostgreSQL","Tailwind CSS"],href:"/posts/fullstack-development"},parameters:{docs:{description:{story:"多数のタグを含む例。"}}}},c={args:{title:"タグのない記事",date:"2024-11-17",tags:[],href:"/posts/no-tags"},parameters:{docs:{description:{story:"タグが設定されていない記事の例。"}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Next.jsで始めるブログ開発',
    date: '2024-11-21',
    tags: ['Next.js', 'TypeScript', 'React'],
    href: '/posts/nextjs-blog'
  },
  parameters: {
    docs: {
      description: {
        story: '内部記事へのリンク例。Next.js Linkを使用します。'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Next.js')).toBeInTheDocument();
    const link = canvasElement.querySelector('a[href="/posts/nextjs-blog"]');
    expect(link).toBeInTheDocument();
    expect(link).not.toHaveAttribute('target');
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'React公式ドキュメント',
    date: '2024-11-20',
    tags: ['React', 'Documentation'],
    href: 'https://react.dev',
    externalUrl: 'https://react.dev'
  },
  parameters: {
    docs: {
      description: {
        story: '外部リンクの例。外部リンクアイコンが表示され、新しいタブで開きます。'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const link = canvasElement.querySelector('a[href="https://react.dev"]');
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    title: '\`Array.prototype.map()\`の使い方',
    date: '2024-11-19',
    tags: ['JavaScript'],
    href: '/posts/array-map'
  },
  parameters: {
    docs: {
      description: {
        story: 'タイトルにバッククォートを含む例。バッククォート部分は<code>要素に変換されます。'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'フルスタック開発の始め方',
    date: '2024-11-18',
    tags: ['Next.js', 'TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
    href: '/posts/fullstack-development'
  },
  parameters: {
    docs: {
      description: {
        story: '多数のタグを含む例。'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'タグのない記事',
    date: '2024-11-17',
    tags: [],
    href: '/posts/no-tags'
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが設定されていない記事の例。'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};const L=["InternalLink","ExternalLink","WithCodeInTitle","ManyTags","NoTags"];export{a as ExternalLink,s as InternalLink,n as ManyTags,c as NoTags,o as WithCodeInTitle,L as __namedExportsOrder,E as default};
