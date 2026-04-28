import{j as s}from"./jsx-runtime-ByRWct7B.js";import"./DateFormatter-BXF0u73M.js";import"./PostBody-CtNvuDIB.js";import"./PostHeader-c1lgTAGJ.js";import"./PostPreview-CCNIZyAN.js";import"./PostTitle-BFWB2Y7z.js";import{P as d}from"./Posts-BZLM63Qb.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./Badge-4GiHobYd.js";import"./Card-5vqJtSYk.js";import"./Container-CjY-ocGB.js";import"./ExternalLinkIcon-BHX7rbid.js";import"./Logo-DiI8eS99.js";import"./Basic-CtvcpFe3.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-yOxfQxMN.js";import"./link-_QTOc7RR.js";import"./use-merged-ref-E0-5uso8.js";import"./backQuoteToCodeElement-JvVutd65.js";const c="Latest Posts",p="記事がありません。",i="home-posts-heading",m=({posts:e})=>s.jsxs("section",{"aria-labelledby":i,className:"space-y-6",children:[s.jsx("h2",{id:i,className:"text-2xl font-semibold",children:c}),e.length===0?s.jsx("p",{className:"text-sm text-gray-500",children:p}):s.jsx(d,{posts:e})]});m.__docgenInfo={description:"",methods:[],displayName:"PostsFeed",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Post & { href: string; externalUrl: string | null }",elements:[{name:"Post"},{name:"signature",type:"object",raw:"{ href: string; externalUrl: string | null }",signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"externalUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]}],raw:"PostsFeedPost[]"},description:""}}};const{expect:n,within:l}=__STORYBOOK_MODULE_TEST__,M={title:"Widgets/Posts/PostsFeed",component:m,tags:["autodocs"],argTypes:{posts:{control:!1,description:"表示する記事の配列。hrefとexternalUrlを含む。"}},parameters:{docs:{description:{component:"ホームページの記事フィードセクション。セクションタイトルと記事のグリッドを表示します。"}}}},a=(e={})=>({title:"Sample Post",date:"2024-11-21",content:"",filename:"sample",tags:["Sample"],href:"/posts/sample",externalUrl:null,...e}),r={args:{posts:[a({title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","React","TypeScript"],filename:"nextjs-blog",href:"/posts/nextjs-blog"}),a({title:"Reactの基礎を学ぶ",date:"2024-11-20",tags:["React","JavaScript"],filename:"react-basics",href:"/posts/react-basics"}),a({title:"React公式ドキュメント",date:"2024-11-19",tags:["React","Documentation"],filename:"react-docs",href:"https://react.dev",externalUrl:"https://react.dev"}),a({title:"TypeScriptの型システム入門",date:"2024-11-18",tags:["TypeScript"],filename:"typescript-types",href:"/posts/typescript-types"})]},parameters:{docs:{description:{story:"内部記事と外部リンクが混在する記事フィードの例。"}}},play:async({canvasElement:e})=>{const t=l(e);n(t.getByRole("heading",{name:c})).toBeInTheDocument(),n(t.getByRole("region",{name:c})).toBeInTheDocument(),n(t.getByText("Next.jsで始めるブログ開発")).toBeInTheDocument()}},o={args:{posts:[]},parameters:{docs:{description:{story:"記事が存在しない場合、空のメッセージが表示されます。"}}},play:async({canvasElement:e})=>{const t=l(e);n(t.getByRole("heading",{name:c})).toBeInTheDocument(),n(t.getByText(p)).toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('heading', {
      name: HOME_POSTS_SECTION_TITLE
    })).toBeInTheDocument();
    expect(canvas.getByRole('region', {
      name: HOME_POSTS_SECTION_TITLE
    })).toBeInTheDocument();
    expect(canvas.getByText('Next.jsで始めるブログ開発')).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    posts: []
  },
  parameters: {
    docs: {
      description: {
        story: '記事が存在しない場合、空のメッセージが表示されます。'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('heading', {
      name: HOME_POSTS_SECTION_TITLE
    })).toBeInTheDocument();
    expect(canvas.getByText(HOME_POSTS_EMPTY_MESSAGE)).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const U=["Default","Empty"];export{r as Default,o as Empty,U as __namedExportsOrder,M as default};
