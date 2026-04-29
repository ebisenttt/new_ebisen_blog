import{p as m}from"./iframe-Bd5CrwUb.js";import{P as l}from"./Posts-7I4xqLub.js";import"./preload-helper-Dhgqe2qg.js";import"./PostPreview-C3aEQzy7.js";import"./link-BT4bDcJ_.js";import"./use-merged-ref-CKNCJYSD.js";import"./backQuoteToCodeElement-JvVutd65.js";import"./Badge-CRezG6dZ.js";import"./Card-BJEewEi1.js";import"./Container-BzaPk5cs.js";import"./ExternalLinkIcon-Bs2ua_Tf.js";import"./Logo-b4LtZ8dj.js";import"./Basic-lT1TAWfK.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-DJFffFlK.js";import"./DateFormatter-Ds6T4WAp.js";const{expect:c,within:g}=__STORYBOOK_MODULE_TEST__,s=m.meta({title:"entities/post/Posts",component:l,parameters:{layout:"padded"},tags:["autodocs"]}),e=(a={})=>({title:"サンプル記事",date:"2024-01-15",filename:"sample",content:"",tags:["タグ1","タグ2"],href:"/posts/sample",...a}),n=s.story({args:{posts:[e({filename:"nextjs-blog",title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","TypeScript","React"],href:"/posts/nextjs-blog"}),e({filename:"array-map",title:"`Array.prototype.map()`の使い方",date:"2024-11-19",tags:["JavaScript"],href:"/posts/array-map"}),e({filename:"fullstack",title:"フルスタック開発の始め方",date:"2024-11-18",tags:["Next.js","TypeScript","React","Node.js"],href:"/posts/fullstack"}),e({filename:"no-tags",title:"タグのない記事",date:"2024-11-17",tags:[],href:"/posts/no-tags"})]},play:async({canvasElement:a})=>{const t=g(a);c(t.getByText("Next.jsで始めるブログ開発")).toBeInTheDocument(),c(t.getByText("フルスタック開発の始め方")).toBeInTheDocument()}}),r=s.story({args:{posts:[e({filename:"react-docs",title:"React公式ドキュメント",date:"2024-11-20",tags:["React","Documentation"],href:"https://react.dev",externalUrl:"https://react.dev"}),e({filename:"internal",title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js"],href:"/posts/nextjs-blog"})]}}),o=s.story({args:{posts:[e({filename:"single",title:"単一の記事",date:"2024-11-21",tags:["タグ"],href:"/posts/single"})]}}),p=s.story({args:{posts:Array.from({length:6},(a,t)=>e({filename:`post-${t+1}`,title:`記事タイトル ${t+1}`,date:`2024-11-${String(21-t).padStart(2,"0")}`,tags:[`タグ${t+1}`],href:`/posts/post-${t+1}`}))}}),i=s.story({args:{posts:[]}});n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...n.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...r.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: [createPost({
      filename: 'single',
      title: '単一の記事',
      date: '2024-11-21',
      tags: ['タグ'],
      href: '/posts/single'
    })]
  }
})`,...o.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:"meta.story({\n  args: {\n    posts: Array.from({\n      length: 6\n    }, (_, i) => createPost({\n      filename: `post-${i + 1}`,\n      title: `記事タイトル ${i + 1}`,\n      date: `2024-11-${String(21 - i).padStart(2, '0')}`,\n      tags: [`タグ${i + 1}`],\n      href: `/posts/post-${i + 1}`\n    }))\n  }\n})",...p.input.parameters?.docs?.source}}};i.input.parameters={...i.input.parameters,docs:{...i.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: []
  }
})`,...i.input.parameters?.docs?.source}}};const E=["Default","WithExternalLinks","SinglePost","ManyPosts","Empty"];export{n as Default,i as Empty,p as ManyPosts,o as SinglePost,r as WithExternalLinks,E as __namedExportsOrder};
