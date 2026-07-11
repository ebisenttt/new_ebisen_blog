import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,t as a}from"./PostPreview-CVFQnmZ6.js";var o,s,c,l,u,d,f,p,m,h;e((()=>{o=t(),r(),a(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l=n.meta({title:`Entities/Post/PostPreview`,component:i,tags:[`autodocs`],argTypes:{title:{control:`text`,description:`記事のタイトル。バッククォートは<code>要素に変換されます。`},date:{control:`text`,description:`記事の公開日(YYYY-MM-DD形式)。`},tags:{control:`object`,description:`記事のタグ配列。`},href:{control:`text`,description:`リンク先のURL。`},externalUrl:{control:`text`,description:`外部リンクのURL。指定すると外部リンクアイコンが表示され、target="_blank"で開きます。`}},parameters:{docs:{description:{component:`記事のプレビューカードを表示するコンポーネント。タイトル、日付、タグを含み、内部リンクと外部リンクの両方に対応しています。`}}},decorators:[e=>(0,o.jsx)(`div`,{style:{maxWidth:`400px`},children:(0,o.jsx)(e,{})})]}),u=l.story({args:{title:`Next.jsで始めるブログ開発`,date:`2024-11-21`,tags:[`Next.js`,`TypeScript`,`React`],href:`/posts/nextjs-blog`},parameters:{docs:{description:{story:`内部記事へのリンク例。Next.js Linkを使用します。`}}},play:async({canvasElement:e})=>{let t=c(e);s(t.getByText(`Next.js`)).toBeInTheDocument();let n=e.querySelector(`a[href="/posts/nextjs-blog"]`);s(n).toBeInTheDocument(),s(n).not.toHaveAttribute(`target`)}}),d=l.story({args:{title:`React公式ドキュメント`,date:`2024-11-20`,tags:[`React`,`Documentation`],href:`https://react.dev`,externalUrl:`https://react.dev`},parameters:{docs:{description:{story:`外部リンクの例。外部リンクアイコンが表示され、新しいタブで開きます。`}}},play:async({canvasElement:e})=>{let t=e.querySelector(`a[href="https://react.dev"]`);s(t).toBeInTheDocument(),s(t).toHaveAttribute(`target`,`_blank`),s(t).toHaveAttribute(`rel`,`noopener noreferrer`)}}),f=l.story({args:{title:"`Array.prototype.map()`の使い方",date:`2024-11-19`,tags:[`JavaScript`],href:`/posts/array-map`},parameters:{docs:{description:{story:`タイトルにバッククォートを含む例。バッククォート部分は<code>要素に変換されます。`}}}}),p=l.story({args:{title:`フルスタック開発の始め方`,date:`2024-11-18`,tags:[`Next.js`,`TypeScript`,`React`,`Node.js`,`PostgreSQL`,`Tailwind CSS`],href:`/posts/fullstack-development`},parameters:{docs:{description:{story:`多数のタグを含む例。`}}}}),m=l.story({args:{title:`タグのない記事`,date:`2024-11-17`,tags:[],href:`/posts/no-tags`},parameters:{docs:{description:{story:`タグが設定されていない記事の例。`}}}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}},h=[`InternalLink`,`ExternalLink`,`WithCodeInTitle`,`ManyTags`,`NoTags`]}))();export{d as ExternalLink,u as InternalLink,p as ManyTags,m as NoTags,f as WithCodeInTitle,h as __namedExportsOrder};