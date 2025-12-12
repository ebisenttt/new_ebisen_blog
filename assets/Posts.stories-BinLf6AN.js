import{P as i}from"./Posts-CX0xrqtC.js";import"./jsx-runtime-BMpsxvGK.js";import"./iframe-DRPE7Y9R.js";import"./preload-helper-Dhgqe2qg.js";import"./PostPreview-2OAWuSf_.js";import"./link-CRa9TLBr.js";import"./use-merged-ref-suOZneGN.js";import"./backQuoteToCodeElement-JvVutd65.js";import"./Badge-BjHQG7_S.js";import"./Card-BocezHRH.js";import"./Container-FFmTnjCD.js";import"./ExternalLinkIcon-DcDof-LR.js";import"./Logo-DbzDo5RS.js";import"./Basic-BSALKj-N.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-Bug8LG32.js";import"./DateFormatter-BvEgS3vq.js";const k={title:"entities/post/Posts",component:i,parameters:{layout:"padded"},tags:["autodocs"]},t=(p={})=>({title:"サンプル記事",date:"2024-01-15",filename:"sample",content:"",tags:["タグ1","タグ2"],href:"/posts/sample",...p}),s={args:{posts:[t({filename:"nextjs-blog",title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","TypeScript","React"],href:"/posts/nextjs-blog"}),t({filename:"array-map",title:"`Array.prototype.map()`の使い方",date:"2024-11-19",tags:["JavaScript"],href:"/posts/array-map"}),t({filename:"fullstack",title:"フルスタック開発の始め方",date:"2024-11-18",tags:["Next.js","TypeScript","React","Node.js"],href:"/posts/fullstack"}),t({filename:"no-tags",title:"タグのない記事",date:"2024-11-17",tags:[],href:"/posts/no-tags"})]}},a={args:{posts:[t({filename:"react-docs",title:"React公式ドキュメント",date:"2024-11-20",tags:["React","Documentation"],href:"https://react.dev",externalUrl:"https://react.dev"}),t({filename:"internal",title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js"],href:"/posts/nextjs-blog"})]}},r={args:{posts:[t({filename:"single",title:"単一の記事",date:"2024-11-21",tags:["タグ"],href:"/posts/single"})]}},n={args:{posts:Array.from({length:6},(p,e)=>t({filename:`post-${e+1}`,title:`記事タイトル ${e+1}`,date:`2024-11-${String(21-e).padStart(2,"0")}`,tags:[`タグ${e+1}`],href:`/posts/post-${e+1}`}))}},o={args:{posts:[]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    posts: [createPost({
      filename: 'single',
      title: '単一の記事',
      date: '2024-11-21',
      tags: ['タグ'],
      href: '/posts/single'
    })]
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:"{\n  args: {\n    posts: Array.from({\n      length: 6\n    }, (_, i) => createPost({\n      filename: `post-${i + 1}`,\n      title: `記事タイトル ${i + 1}`,\n      date: `2024-11-${String(21 - i).padStart(2, '0')}`,\n      tags: [`タグ${i + 1}`],\n      href: `/posts/post-${i + 1}`\n    }))\n  }\n}",...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    posts: []
  }
}`,...o.parameters?.docs?.source}}};const v=["Default","WithExternalLinks","SinglePost","ManyPosts","Empty"];export{s as Default,o as Empty,n as ManyPosts,r as SinglePost,a as WithExternalLinks,v as __namedExportsOrder,k as default};
