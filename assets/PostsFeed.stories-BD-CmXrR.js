import{j as s,p as y}from"./iframe-Bd5CrwUb.js";import"./DateFormatter-Ds6T4WAp.js";import"./PostBody-B2dab3Yv.js";import"./PostHeader-DEBdXnIA.js";import"./PostPreview-C3aEQzy7.js";import"./PostTitle-BTl_t5A3.js";import{P as g}from"./Posts-7I4xqLub.js";import"./preload-helper-Dhgqe2qg.js";import"./Badge-CRezG6dZ.js";import"./Card-BJEewEi1.js";import"./Container-BzaPk5cs.js";import"./ExternalLinkIcon-Bs2ua_Tf.js";import"./Logo-b4LtZ8dj.js";import"./Basic-lT1TAWfK.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-DJFffFlK.js";import"./link-BT4bDcJ_.js";import"./use-merged-ref-CKNCJYSD.js";import"./backQuoteToCodeElement-JvVutd65.js";const c="Latest Posts",p="記事がありません。",i="home-posts-heading",m=({posts:e})=>s.jsxs("section",{"aria-labelledby":i,className:"space-y-6",children:[s.jsx("h2",{id:i,className:"text-2xl font-semibold",children:c}),e.length===0?s.jsx("p",{className:"text-sm text-gray-500",children:p}):s.jsx(g,{posts:e})]});m.__docgenInfo={description:"",methods:[],displayName:"PostsFeed",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:"Post & { href: string; externalUrl: string | null }",elements:[{name:"Post"},{name:"signature",type:"object",raw:"{ href: string; externalUrl: string | null }",signature:{properties:[{key:"href",value:{name:"string",required:!0}},{key:"externalUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!0}}]}}]}],raw:"PostsFeedPost[]"},description:""}}};const{expect:n,within:l}=__STORYBOOK_MODULE_TEST__,d=y.meta({title:"Widgets/Posts/PostsFeed",component:m,tags:["autodocs"],argTypes:{posts:{control:!1,description:"表示する記事の配列。hrefとexternalUrlを含む。"}},parameters:{docs:{description:{component:"ホームページの記事フィードセクション。セクションタイトルと記事のグリッドを表示します。"}}}}),a=(e={})=>({title:"Sample Post",date:"2024-11-21",content:"",filename:"sample",tags:["Sample"],href:"/posts/sample",externalUrl:null,...e}),r=d.story({args:{posts:[a({title:"Next.jsで始めるブログ開発",date:"2024-11-21",tags:["Next.js","React","TypeScript"],filename:"nextjs-blog",href:"/posts/nextjs-blog"}),a({title:"Reactの基礎を学ぶ",date:"2024-11-20",tags:["React","JavaScript"],filename:"react-basics",href:"/posts/react-basics"}),a({title:"React公式ドキュメント",date:"2024-11-19",tags:["React","Documentation"],filename:"react-docs",href:"https://react.dev",externalUrl:"https://react.dev"}),a({title:"TypeScriptの型システム入門",date:"2024-11-18",tags:["TypeScript"],filename:"typescript-types",href:"/posts/typescript-types"})]},parameters:{docs:{description:{story:"内部記事と外部リンクが混在する記事フィードの例。"}}},play:async({canvasElement:e})=>{const t=l(e);n(t.getByRole("heading",{name:c})).toBeInTheDocument(),n(t.getByRole("region",{name:c})).toBeInTheDocument(),n(t.getByText("Next.jsで始めるブログ開発")).toBeInTheDocument()}}),o=d.story({args:{posts:[]},parameters:{docs:{description:{story:"記事が存在しない場合、空のメッセージが表示されます。"}}},play:async({canvasElement:e})=>{const t=l(e);n(t.getByRole("heading",{name:c})).toBeInTheDocument(),n(t.getByText(p)).toBeInTheDocument()}});r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...r.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...o.input.parameters?.docs?.source}}};const w=["Default","Empty"];export{r as Default,o as Empty,w as __namedExportsOrder};
