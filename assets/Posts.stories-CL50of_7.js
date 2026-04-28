import{P as i}from"./Posts-BZLM63Qb.js";import"./jsx-runtime-ByRWct7B.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./PostPreview-CCNIZyAN.js";import"./link-_QTOc7RR.js";import"./use-merged-ref-E0-5uso8.js";import"./backQuoteToCodeElement-JvVutd65.js";import"./Badge-4GiHobYd.js";import"./Card-5vqJtSYk.js";import"./Container-CjY-ocGB.js";import"./ExternalLinkIcon-BHX7rbid.js";import"./Logo-DiI8eS99.js";import"./Basic-CtvcpFe3.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-yOxfQxMN.js";import"./DateFormatter-BXF0u73M.js";const{expect:c,within:l}=__STORYBOOK_MODULE_TEST__,D={title:"entities/post/Posts",component:i,parameters:{layout:"padded"},tags:["autodocs"]},e=(s={})=>({title:"サンプル記事",date:"2024-01-15",filename:"sample",content:"",tags:["タグ1","タグ2"],href:"/posts/sample",...s}),a={args:{posts:[e({filename:"nextjs-blog",title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","TypeScript","React"],href:"/posts/nextjs-blog"}),e({filename:"array-map",title:"`Array.prototype.map()`の使い方",date:"2024-11-19",tags:["JavaScript"],href:"/posts/array-map"}),e({filename:"fullstack",title:"フルスタック開発の始め方",date:"2024-11-18",tags:["Next.js","TypeScript","React","Node.js"],href:"/posts/fullstack"}),e({filename:"no-tags",title:"タグのない記事",date:"2024-11-17",tags:[],href:"/posts/no-tags"})]},play:async({canvasElement:s})=>{const t=l(s);c(t.getByText("Next.jsで始めるブログ開発")).toBeInTheDocument(),c(t.getByText("フルスタック開発の始め方")).toBeInTheDocument()}},n={args:{posts:[e({filename:"react-docs",title:"React公式ドキュメント",date:"2024-11-20",tags:["React","Documentation"],href:"https://react.dev",externalUrl:"https://react.dev"}),e({filename:"internal",title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js"],href:"/posts/nextjs-blog"})]}},r={args:{posts:[e({filename:"single",title:"単一の記事",date:"2024-11-21",tags:["タグ"],href:"/posts/single"})]}},o={args:{posts:Array.from({length:6},(s,t)=>e({filename:`post-${t+1}`,title:`記事タイトル ${t+1}`,date:`2024-11-${String(21-t).padStart(2,"0")}`,tags:[`タグ${t+1}`],href:`/posts/post-${t+1}`}))}},p={args:{posts:[]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    posts: [createPost({
      filename: 'single',
      title: '単一の記事',
      date: '2024-11-21',
      tags: ['タグ'],
      href: '/posts/single'
    })]
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{\n  args: {\n    posts: Array.from({\n      length: 6\n    }, (_, i) => createPost({\n      filename: `post-${i + 1}`,\n      title: `記事タイトル ${i + 1}`,\n      date: `2024-11-${String(21 - i).padStart(2, '0')}`,\n      tags: [`タグ${i + 1}`],\n      href: `/posts/post-${i + 1}`\n    }))\n  }\n}",...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    posts: []
  }
}`,...p.parameters?.docs?.source}}};const E=["Default","WithExternalLinks","SinglePost","ManyPosts","Empty"];export{a as Default,p as Empty,o as ManyPosts,r as SinglePost,n as WithExternalLinks,E as __namedExportsOrder,D as default};
