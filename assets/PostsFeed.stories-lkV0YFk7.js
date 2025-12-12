import{j as t}from"./jsx-runtime-xcAJRU58.js";import"./DateFormatter-H0iXYybS.js";import"./PostBody-Czv6WFuR.js";import"./PostHeader-0nixPUSD.js";import"./PostPreview-C5L-ZQ0V.js";import"./PostTitle-BS_Ko-kZ.js";import{P as p}from"./Posts-CeWac14_.js";import"./iframe-8QJY88xt.js";import"./preload-helper-Dhgqe2qg.js";import"./Badge-br_8847e.js";import"./Card-C-Iyn_Ul.js";import"./Container-Dz9-OqRY.js";import"./ExternalLinkIcon-DMWoPzyM.js";import"./Logo-DKV5Z4ot.js";import"./Basic-CIlahRmf.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-vzvAsrHD.js";import"./link-DSdCF7M_.js";import"./use-merged-ref-D3AvtrfK.js";import"./backQuoteToCodeElement-JvVutd65.js";const i="Latest Posts",c="記事がありません。",n="home-posts-heading",o=({posts:e})=>t.jsxs("section",{"aria-labelledby":n,className:"space-y-6",children:[t.jsx("h2",{id:n,className:"text-2xl font-semibold",children:i}),e.length===0?t.jsx("p",{className:"text-sm text-gray-500",children:c}):t.jsx(p,{posts:e})]});o.__docgenInfo={description:"",methods:[],displayName:"PostsFeed",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Post & { href: string; externalUrl: string | null }",elements:[{name:"Post"},{name:"signature",type:"object",raw:"{ href: string; externalUrl: string | null }",signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"externalUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]}],raw:"PostsFeedPost[]"},description:""}}};const O={title:"Widgets/Posts/PostsFeed",component:o,tags:["autodocs"],argTypes:{posts:{control:!1,description:"表示する記事の配列。hrefとexternalUrlを含む。"}},parameters:{docs:{description:{component:"ホームページの記事フィードセクション。セクションタイトルと記事のグリッドを表示します。"}}}},s=(e={})=>({title:"Sample Post",date:"2024-11-21",content:"",filename:"sample",tags:["Sample"],href:"/posts/sample",externalUrl:null,...e}),r={args:{posts:[s({title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","React","TypeScript"],filename:"nextjs-blog",href:"/posts/nextjs-blog"}),s({title:"Reactの基礎を学ぶ",date:"2024-11-20",tags:["React","JavaScript"],filename:"react-basics",href:"/posts/react-basics"}),s({title:"React公式ドキュメント",date:"2024-11-19",tags:["React","Documentation"],filename:"react-docs",href:"https://react.dev",externalUrl:"https://react.dev"}),s({title:"TypeScriptの型システム入門",date:"2024-11-18",tags:["TypeScript"],filename:"typescript-types",href:"/posts/typescript-types"})]},parameters:{docs:{description:{story:"内部記事と外部リンクが混在する記事フィードの例。"}}}},a={args:{posts:[]},parameters:{docs:{description:{story:"記事が存在しない場合、空のメッセージが表示されます。"}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const U=["Default","Empty"];export{r as Default,a as Empty,U as __namedExportsOrder,O as default};
