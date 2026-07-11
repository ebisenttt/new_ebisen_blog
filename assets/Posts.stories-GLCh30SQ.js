import{i as e}from"./preload-helper-B-xQYkru.js";import{n as t,t as n}from"./iframe-BdMlSyPG.js";import{n as r,t as i}from"./Posts-C71KWk1o.js";var a,o,s,c,l,u,d,f,p,m;e((()=>{n(),r(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s=t.meta({title:`entities/post/Posts`,component:i,parameters:{layout:`padded`},tags:[`autodocs`]}),c=(e={})=>({title:`サンプル記事`,date:`2024-01-15`,filename:`sample`,content:``,tags:[`タグ1`,`タグ2`],href:`/posts/sample`,...e}),l=s.story({args:{posts:[c({filename:`nextjs-blog`,title:`Next.jsで始めるブログ開発`,date:`2024-11-21`,tags:[`Next.js`,`TypeScript`,`React`],href:`/posts/nextjs-blog`}),c({filename:`array-map`,title:"`Array.prototype.map()`の使い方",date:`2024-11-19`,tags:[`JavaScript`],href:`/posts/array-map`}),c({filename:`fullstack`,title:`フルスタック開発の始め方`,date:`2024-11-18`,tags:[`Next.js`,`TypeScript`,`React`,`Node.js`],href:`/posts/fullstack`}),c({filename:`no-tags`,title:`タグのない記事`,date:`2024-11-17`,tags:[],href:`/posts/no-tags`})]},play:async({canvasElement:e})=>{let t=o(e);a(t.getByText(`Next.jsで始めるブログ開発`)).toBeInTheDocument(),a(t.getByText(`フルスタック開発の始め方`)).toBeInTheDocument()}}),u=s.story({args:{posts:[c({filename:`react-docs`,title:`React公式ドキュメント`,date:`2024-11-20`,tags:[`React`,`Documentation`],href:`https://react.dev`,externalUrl:`https://react.dev`}),c({filename:`internal`,title:`Next.jsで始めるブログ開発`,date:`2024-11-21`,tags:[`Next.js`],href:`/posts/nextjs-blog`})]}}),d=s.story({args:{posts:[c({filename:`single`,title:`単一の記事`,date:`2024-11-21`,tags:[`タグ`],href:`/posts/single`})]}}),f=s.story({args:{posts:Array.from({length:6},(e,t)=>c({filename:`post-${t+1}`,title:`記事タイトル ${t+1}`,date:`2024-11-${String(21-t).padStart(2,`0`)}`,tags:[`タグ${t+1}`],href:`/posts/post-${t+1}`}))}}),p=s.story({args:{posts:[]}}),l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: [createPost({
      filename: 'nextjs-blog',
      title: 'Next.jsで始めるブログ開発',
      date: '2024-11-21',
      tags: ['Next.js', 'TypeScript', 'React'],
      href: '/posts/nextjs-blog'
    }), createPost({
      filename: 'array-map',
      title: '\`Array.prototype.map()\`の使い方',
      date: '2024-11-19',
      tags: ['JavaScript'],
      href: '/posts/array-map'
    }), createPost({
      filename: 'fullstack',
      title: 'フルスタック開発の始め方',
      date: '2024-11-18',
      tags: ['Next.js', 'TypeScript', 'React', 'Node.js'],
      href: '/posts/fullstack'
    }), createPost({
      filename: 'no-tags',
      title: 'タグのない記事',
      date: '2024-11-17',
      tags: [],
      href: '/posts/no-tags'
    })]
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Next.jsで始めるブログ開発')).toBeInTheDocument();
    expect(canvas.getByText('フルスタック開発の始め方')).toBeInTheDocument();
  }
})`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: [createPost({
      filename: 'react-docs',
      title: 'React公式ドキュメント',
      date: '2024-11-20',
      tags: ['React', 'Documentation'],
      href: 'https://react.dev',
      externalUrl: 'https://react.dev'
    }), createPost({
      filename: 'internal',
      title: 'Next.jsで始めるブログ開発',
      date: '2024-11-21',
      tags: ['Next.js'],
      href: '/posts/nextjs-blog'
    })]
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: [createPost({
      filename: 'single',
      title: '単一の記事',
      date: '2024-11-21',
      tags: ['タグ'],
      href: '/posts/single'
    })]
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:"meta.story({\n  args: {\n    posts: Array.from({\n      length: 6\n    }, (_, i) => createPost({\n      filename: `post-${i + 1}`,\n      title: `記事タイトル ${i + 1}`,\n      date: `2024-11-${String(21 - i).padStart(2, '0')}`,\n      tags: [`タグ${i + 1}`],\n      href: `/posts/post-${i + 1}`\n    }))\n  }\n})",...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: []
  }
})`,...p.input.parameters?.docs?.source}}},m=[`Default`,`WithExternalLinks`,`SinglePost`,`ManyPosts`,`Empty`]}))();export{l as Default,p as Empty,f as ManyPosts,d as SinglePost,u as WithExternalLinks,m as __namedExportsOrder};