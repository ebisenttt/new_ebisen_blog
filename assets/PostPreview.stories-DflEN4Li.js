import{p as d,j as m}from"./iframe-Bd5CrwUb.js";import{P as l}from"./PostPreview-C3aEQzy7.js";import"./preload-helper-Dhgqe2qg.js";import"./link-BT4bDcJ_.js";import"./use-merged-ref-CKNCJYSD.js";import"./backQuoteToCodeElement-JvVutd65.js";import"./Badge-CRezG6dZ.js";import"./Card-BJEewEi1.js";import"./Container-BzaPk5cs.js";import"./ExternalLinkIcon-Bs2ua_Tf.js";import"./Logo-b4LtZ8dj.js";import"./Basic-lT1TAWfK.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-DJFffFlK.js";import"./DateFormatter-Ds6T4WAp.js";const{expect:e,within:u}=__STORYBOOK_MODULE_TEST__,s=d.meta({title:"Entities/Post/PostPreview",component:l,tags:["autodocs"],argTypes:{title:{control:"text",description:"記事のタイトル。バッククォートは<code>要素に変換されます。"},date:{control:"text",description:"記事の公開日(YYYY-MM-DD形式)。"},tags:{control:"object",description:"記事のタグ配列。"},href:{control:"text",description:"リンク先のURL。"},externalUrl:{control:"text",description:'外部リンクのURL。指定すると外部リンクアイコンが表示され、target="_blank"で開きます。'}},parameters:{docs:{description:{component:"記事のプレビューカードを表示するコンポーネント。タイトル、日付、タグを含み、内部リンクと外部リンクの両方に対応しています。"}}},decorators:[t=>m.jsx("div",{style:{maxWidth:"400px"},children:m.jsx(t,{})})]}),o=s.story({args:{title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","TypeScript","React"],href:"/posts/nextjs-blog"},parameters:{docs:{description:{story:"内部記事へのリンク例。Next.js Linkを使用します。"}}},play:async({canvasElement:t})=>{const r=u(t);e(r.getByText("Next.js")).toBeInTheDocument();const c=t.querySelector('a[href="/posts/nextjs-blog"]');e(c).toBeInTheDocument(),e(c).not.toHaveAttribute("target")}}),a=s.story({args:{title:"React公式ドキュメント",date:"2024-11-20",tags:["React","Documentation"],href:"https://react.dev",externalUrl:"https://react.dev"},parameters:{docs:{description:{story:"外部リンクの例。外部リンクアイコンが表示され、新しいタブで開きます。"}}},play:async({canvasElement:t})=>{const r=t.querySelector('a[href="https://react.dev"]');e(r).toBeInTheDocument(),e(r).toHaveAttribute("target","_blank"),e(r).toHaveAttribute("rel","noopener noreferrer")}}),n=s.story({args:{title:"`Array.prototype.map()`の使い方",date:"2024-11-19",tags:["JavaScript"],href:"/posts/array-map"},parameters:{docs:{description:{story:"タイトルにバッククォートを含む例。バッククォート部分は<code>要素に変換されます。"}}}}),p=s.story({args:{title:"フルスタック開発の始め方",date:"2024-11-18",tags:["Next.js","TypeScript","React","Node.js","PostgreSQL","Tailwind CSS"],href:"/posts/fullstack-development"},parameters:{docs:{description:{story:"多数のタグを含む例。"}}}}),i=s.story({args:{title:"タグのない記事",date:"2024-11-17",tags:[],href:"/posts/no-tags"},parameters:{docs:{description:{story:"タグが設定されていない記事の例。"}}}});o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...o.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...a.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...n.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...i.input.parameters?.docs?.source}}};const L=["InternalLink","ExternalLink","WithCodeInTitle","ManyTags","NoTags"];export{a as ExternalLink,o as InternalLink,p as ManyTags,i as NoTags,n as WithCodeInTitle,L as __namedExportsOrder};
