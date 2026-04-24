import{j as t}from"./jsx-runtime-Big8sbBF.js";import"./DateFormatter-DHQrS1NR.js";import"./PostBody-B-iTB6yZ.js";import"./PostHeader-CCjPWjd8.js";import"./PostPreview-eTIwP5Gj.js";import"./PostTitle-By9UwiPw.js";import{P as u}from"./Posts-Dj3frOJ9.js";import"./iframe-DP25XCWT.js";import"./preload-helper-Dhgqe2qg.js";import"./Badge-BEk0nViE.js";import"./Card-CRdUK99d.js";import"./Container-DX1BEMnH.js";import"./ExternalLinkIcon-Dc2jDuq6.js";import"./Logo-UHO-Gcpf.js";import"./Basic-jfzfpS28.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-CrfQqFuJ.js";import"./link-DyiQJEEI.js";import"./use-merged-ref-DJLgNEVR.js";import"./backQuoteToCodeElement-JvVutd65.js";const g="Latest Posts",f="記事がありません。",m="home-posts-heading",d=({posts:e})=>t.jsxs("section",{"aria-labelledby":m,className:"space-y-6",children:[t.jsx("h2",{id:m,className:"text-2xl font-semibold",children:g}),e.length===0?t.jsx("p",{className:"text-sm text-gray-500",children:f}):t.jsx(u,{posts:e})]});d.__docgenInfo={description:"",methods:[],displayName:"PostsFeed",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Post & { href: string; externalUrl: string | null }",elements:[{name:"Post"},{name:"signature",type:"object",raw:"{ href: string; externalUrl: string | null }",signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"externalUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]}],raw:"PostsFeedPost[]"},description:""}}};var n,o,i,p,c,l;const q={title:"Widgets/Posts/PostsFeed",component:d,tags:["autodocs"],argTypes:{posts:{control:!1,description:"表示する記事の配列。hrefとexternalUrlを含む。"}},parameters:{docs:{description:{component:"ホームページの記事フィードセクション。セクションタイトルと記事のグリッドを表示します。"}}}},s=(e={})=>({title:"Sample Post",date:"2024-11-21",content:"",filename:"sample",tags:["Sample"],href:"/posts/sample",externalUrl:null,...e}),r={args:{posts:[s({title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","React","TypeScript"],filename:"nextjs-blog",href:"/posts/nextjs-blog"}),s({title:"Reactの基礎を学ぶ",date:"2024-11-20",tags:["React","JavaScript"],filename:"react-basics",href:"/posts/react-basics"}),s({title:"React公式ドキュメント",date:"2024-11-19",tags:["React","Documentation"],filename:"react-docs",href:"https://react.dev",externalUrl:"https://react.dev"}),s({title:"TypeScriptの型システム入門",date:"2024-11-18",tags:["TypeScript"],filename:"typescript-types",href:"/posts/typescript-types"})]},parameters:{docs:{description:{story:"内部記事と外部リンクが混在する記事フィードの例。"}}}},a={args:{posts:[]},parameters:{docs:{description:{story:"記事が存在しない場合、空のメッセージが表示されます。"}}}};r.parameters={...r.parameters,docs:{...(n=r.parameters)===null||n===void 0?void 0:n.docs,source:{originalSource:`{
  args: {
    posts: [createPost({
      title: 'Next.jsで始めるブログ開発',
      date: '2024-11-21',
      tags: ['Next.js', 'React', 'TypeScript'],
      filename: 'nextjs-blog',
      href: '/posts/nextjs-blog'
    }), createPost({
      title: 'Reactの基礎を学ぶ',
      date: '2024-11-20',
      tags: ['React', 'JavaScript'],
      filename: 'react-basics',
      href: '/posts/react-basics'
    }), createPost({
      title: 'React公式ドキュメント',
      date: '2024-11-19',
      tags: ['React', 'Documentation'],
      filename: 'react-docs',
      href: 'https://react.dev',
      externalUrl: 'https://react.dev'
    }), createPost({
      title: 'TypeScriptの型システム入門',
      date: '2024-11-18',
      tags: ['TypeScript'],
      filename: 'typescript-types',
      href: '/posts/typescript-types'
    })]
  },
  parameters: {
    docs: {
      description: {
        story: '内部記事と外部リンクが混在する記事フィードの例。'
      }
    }
  }
}`,...(i=r.parameters)===null||i===void 0||(o=i.docs)===null||o===void 0?void 0:o.source}}};a.parameters={...a.parameters,docs:{...(p=a.parameters)===null||p===void 0?void 0:p.docs,source:{originalSource:`{
  args: {
    posts: []
  },
  parameters: {
    docs: {
      description: {
        story: '記事が存在しない場合、空のメッセージが表示されます。'
      }
    }
  }
}`,...(l=a.parameters)===null||l===void 0||(c=l.docs)===null||c===void 0?void 0:c.source}}};const A=["Default","Empty"];export{r as Default,a as Empty,A as __namedExportsOrder,q as default};
