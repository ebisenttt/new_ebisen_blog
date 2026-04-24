import{P as j}from"./Posts-Dj3frOJ9.js";import"./jsx-runtime-Big8sbBF.js";import"./iframe-DP25XCWT.js";import"./preload-helper-Dhgqe2qg.js";import"./PostPreview-eTIwP5Gj.js";import"./link-DyiQJEEI.js";import"./use-merged-ref-DJLgNEVR.js";import"./backQuoteToCodeElement-JvVutd65.js";import"./Badge-BEk0nViE.js";import"./Card-CRdUK99d.js";import"./Container-DX1BEMnH.js";import"./ExternalLinkIcon-Dc2jDuq6.js";import"./Logo-UHO-Gcpf.js";import"./Basic-jfzfpS28.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-CrfQqFuJ.js";import"./DateFormatter-DHQrS1NR.js";var i,p,l,m,d,c,g,f,u,_,v,h,x,y,P;const z={title:"entities/post/Posts",component:j,parameters:{layout:"padded"},tags:["autodocs"]},t=(S={})=>({title:"サンプル記事",date:"2024-01-15",filename:"sample",content:"",tags:["タグ1","タグ2"],href:"/posts/sample",...S}),s={args:{posts:[t({filename:"nextjs-blog",title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","TypeScript","React"],href:"/posts/nextjs-blog"}),t({filename:"array-map",title:"`Array.prototype.map()`の使い方",date:"2024-11-19",tags:["JavaScript"],href:"/posts/array-map"}),t({filename:"fullstack",title:"フルスタック開発の始め方",date:"2024-11-18",tags:["Next.js","TypeScript","React","Node.js"],href:"/posts/fullstack"}),t({filename:"no-tags",title:"タグのない記事",date:"2024-11-17",tags:[],href:"/posts/no-tags"})]}},a={args:{posts:[t({filename:"react-docs",title:"React公式ドキュメント",date:"2024-11-20",tags:["React","Documentation"],href:"https://react.dev",externalUrl:"https://react.dev"}),t({filename:"internal",title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js"],href:"/posts/nextjs-blog"})]}},r={args:{posts:[t({filename:"single",title:"単一の記事",date:"2024-11-21",tags:["タグ"],href:"/posts/single"})]}},o={args:{posts:Array.from({length:6},(S,e)=>t({filename:`post-${e+1}`,title:`記事タイトル ${e+1}`,date:`2024-11-${String(21-e).padStart(2,"0")}`,tags:[`タグ${e+1}`],href:`/posts/post-${e+1}`}))}},n={args:{posts:[]}};s.parameters={...s.parameters,docs:{...(i=s.parameters)===null||i===void 0?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=s.parameters)===null||l===void 0||(p=l.docs)===null||p===void 0?void 0:p.source}}};a.parameters={...a.parameters,docs:{...(m=a.parameters)===null||m===void 0?void 0:m.docs,source:{originalSource:`{
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
}`,...(c=a.parameters)===null||c===void 0||(d=c.docs)===null||d===void 0?void 0:d.source}}};r.parameters={...r.parameters,docs:{...(g=r.parameters)===null||g===void 0?void 0:g.docs,source:{originalSource:`{
  args: {
    posts: [createPost({
      filename: 'single',
      title: '単一の記事',
      date: '2024-11-21',
      tags: ['タグ'],
      href: '/posts/single'
    })]
  }
}`,...(u=r.parameters)===null||u===void 0||(f=u.docs)===null||f===void 0?void 0:f.source}}};o.parameters={...o.parameters,docs:{...(_=o.parameters)===null||_===void 0?void 0:_.docs,source:{originalSource:"{\n  args: {\n    posts: Array.from({\n      length: 6\n    }, (_, i) => createPost({\n      filename: `post-${i + 1}`,\n      title: `記事タイトル ${i + 1}`,\n      date: `2024-11-${String(21 - i).padStart(2, '0')}`,\n      tags: [`タグ${i + 1}`],\n      href: `/posts/post-${i + 1}`\n    }))\n  }\n}",...(h=o.parameters)===null||h===void 0||(v=h.docs)===null||v===void 0?void 0:v.source}}};n.parameters={...n.parameters,docs:{...(x=n.parameters)===null||x===void 0?void 0:x.docs,source:{originalSource:`{
  args: {
    posts: []
  }
}`,...(P=n.parameters)===null||P===void 0||(y=P.docs)===null||y===void 0?void 0:y.source}}};const B=["Default","WithExternalLinks","SinglePost","ManyPosts","Empty"];export{s as Default,n as Empty,o as ManyPosts,r as SinglePost,a as WithExternalLinks,B as __namedExportsOrder,z as default};
