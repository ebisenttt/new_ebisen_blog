import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,r as a,t as o}from"./config-D1ALmRtY.js";import{t as s}from"./Posts-C71KWk1o.js";import{t as c}from"./post-DQK-ClQp.js";var l,u,d,f=e((()=>{l=t(),o(),c(),u=`home-posts-heading`,d=({posts:e})=>(0,l.jsxs)(`section`,{"aria-labelledby":u,className:`space-y-6`,children:[(0,l.jsx)(`h2`,{id:u,className:`text-2xl font-semibold`,children:a}),e.length===0?(0,l.jsx)(`p`,{className:`text-sm text-gray-500`,children:i}):(0,l.jsx)(s,{posts:e})]}),d.__docgenInfo={description:``,methods:[],displayName:`PostsFeed`,props:{posts:{required:!0,tsType:{name:`Array`,elements:[{name:`intersection`,raw:`Post & { href: string; externalUrl: string | null }`,elements:[{name:`Post`},{name:`signature`,type:`object`,raw:`{ href: string; externalUrl: string | null }`,signature:{properties:[{key:`href`,value:{name:`string`,required:!0}},{key:`externalUrl`,value:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}],required:!0}}]}}]}],raw:`PostsFeedPost[]`},description:``}}}})),p,m,h,g,_,v,y;e((()=>{r(),o(),f(),{expect:p,within:m}=__STORYBOOK_MODULE_TEST__,h=n.meta({title:`Widgets/Posts/PostsFeed`,component:d,tags:[`autodocs`],argTypes:{posts:{control:!1,description:`表示する記事の配列。hrefとexternalUrlを含む。`}},parameters:{docs:{description:{component:`ホームページの記事フィードセクション。セクションタイトルと記事のグリッドを表示します。`}}}}),g=(e={})=>({title:`Sample Post`,date:`2024-11-21`,content:``,filename:`sample`,tags:[`Sample`],href:`/posts/sample`,externalUrl:null,...e}),_=h.story({args:{posts:[g({title:`Next.jsで始めるブログ開発`,date:`2024-11-21`,tags:[`Next.js`,`React`,`TypeScript`],filename:`nextjs-blog`,href:`/posts/nextjs-blog`}),g({title:`Reactの基礎を学ぶ`,date:`2024-11-20`,tags:[`React`,`JavaScript`],filename:`react-basics`,href:`/posts/react-basics`}),g({title:`React公式ドキュメント`,date:`2024-11-19`,tags:[`React`,`Documentation`],filename:`react-docs`,href:`https://react.dev`,externalUrl:`https://react.dev`}),g({title:`TypeScriptの型システム入門`,date:`2024-11-18`,tags:[`TypeScript`],filename:`typescript-types`,href:`/posts/typescript-types`})]},parameters:{docs:{description:{story:`内部記事と外部リンクが混在する記事フィードの例。`}}},play:async({canvasElement:e})=>{let t=m(e);p(t.getByRole(`heading`,{name:a})).toBeInTheDocument(),p(t.getByRole(`region`,{name:a})).toBeInTheDocument(),p(t.getByText(`Next.jsで始めるブログ開発`)).toBeInTheDocument()}}),v=h.story({args:{posts:[]},parameters:{docs:{description:{story:`記事が存在しない場合、空のメッセージが表示されます。`}}},play:async({canvasElement:e})=>{let t=m(e);p(t.getByRole(`heading`,{name:a})).toBeInTheDocument(),p(t.getByText(i)).toBeInTheDocument()}}),_.input.parameters={..._.input.parameters,docs:{..._.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,..._.input.parameters?.docs?.source}}},v.input.parameters={...v.input.parameters,docs:{...v.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...v.input.parameters?.docs?.source}}},y=[`Default`,`Empty`]}))();export{_ as Default,v as Empty,y as __namedExportsOrder};