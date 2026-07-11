import{c as e,i as t}from"./preload-helper-B-xQYkru.js";import{t as n}from"./react-ClSb_G98.js";import{A as r,n as i,t as a}from"./iframe-BdMlSyPG.js";import{n as o}from"./Badge-C_OQ279i.js";import{t as s}from"./ui-CmW_A2wU.js";import{t as c}from"./Posts-C71KWk1o.js";import{t as l}from"./post-DQK-ClQp.js";var u=t((()=>{}));function d(e){let t=m.find(t=>e.startsWith(t.prefix));if(!t&&!e.startsWith(f))return null;let n=t?t.prefix:f,r=e.slice(n.length),i=r.length%4==0?``:`=`.repeat(4-r.length%4),a=r.replace(/-/g,`+`).replace(/_/g,`/`)+i;try{let e=Buffer.from(a,`base64`).toString(`utf-8`);return e===``?null:e}catch{return null}}var f,p,m,h=t((()=>{f=`note__`,p=`qiita__`,m=[{domain:`note.com`,prefix:f},{domain:`qiita.com`,prefix:p}]})),g=t((()=>{})),_=t((()=>{})),v=t((()=>{u(),g(),_(),h()}));function y(e){return d(e.filename)}function b(e){let t=y(e);return t?{href:t,externalUrl:t}:{href:`/posts/${e.filename}`,externalUrl:null}}var x=t((()=>{v()})),S=t((()=>{x()}));function C(e,t){return t?e.filter(e=>e.tags?.includes(t)):[]}var w=t((()=>{})),T,E,D,O,k=t((()=>{T=r(),E=e(n()),s(),l(),S(),w(),D=`opacity-50`,O=({posts:e,tags:t,initialTag:n,tagStats:r})=>{let[i,a]=(0,E.useState)(n),[s,l]=(0,E.useState)(n);s!==n&&(l(n),a(n));let u=(0,E.useMemo)(()=>i?C(e,i).map(e=>({...e,...b(e)})):[],[e,i]);return t.length===0?(0,T.jsx)(`p`,{className:`text-sm text-gray-500`,children:`タグがありません。`}):(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{className:`flex flex-wrap gap-4 mb-8`,children:t.map(e=>(0,T.jsx)(`button`,{onClick:()=>a(e),title:`${e} (${r[e]??0})`,className:e===i?void 0:D,children:(0,T.jsx)(o,{text:e})},e))}),(0,T.jsx)(`div`,{children:(0,T.jsx)(c,{posts:u})})]})},O.__docgenInfo={description:``,methods:[],displayName:`TagFilter`,props:{posts:{required:!0,tsType:{name:`Array`,elements:[{name:`Post`}],raw:`Post[]`},description:``},tags:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``},initialTag:{required:!0,tsType:{name:`string`},description:``},tagStats:{required:!0,tsType:{name:`Record`,elements:[{name:`string`},{name:`number`}],raw:`Record<string, number>`},description:``}}}})),A,j,M,N,P,F,I,L,R,z;t((()=>{a(),k(),{expect:A,userEvent:j,within:M}=__STORYBOOK_MODULE_TEST__,N=i.meta({title:`Features/Posts/TagFilter`,component:O,tags:[`autodocs`],argTypes:{posts:{control:!1,description:`フィルタリング対象の記事配列。`},tags:{control:`object`,description:`表示するタグの配列。`},initialTag:{control:`text`,description:`初期選択されるタグ。`},tagStats:{control:`object`,description:`各タグの記事数を示すオブジェクト。`}},parameters:{docs:{description:{component:`タグで記事をフィルタリングする機能を提供するコンポーネント。タグをクリックすると、そのタグを持つ記事のみが表示されます。`}}}}),P=[{title:`Next.jsで始めるブログ開発`,date:`2024-11-21`,content:``,filename:`nextjs-blog`,tags:[`Next.js`,`React`,`TypeScript`]},{title:`Reactの基礎を学ぶ`,date:`2024-11-20`,content:``,filename:`react-basics`,tags:[`React`,`JavaScript`]},{title:`TypeScriptの型システム入門`,date:`2024-11-19`,content:``,filename:`typescript-types`,tags:[`TypeScript`]},{title:`Tailwind CSSでスタイリング`,date:`2024-11-18`,content:``,filename:`tailwind-styling`,tags:[`Tailwind CSS`,`CSS`]},{title:`フルスタック開発の始め方`,date:`2024-11-17`,content:``,filename:`fullstack-dev`,tags:[`Next.js`,`TypeScript`,`React`]}],F=N.story({args:{posts:P,tags:[`Next.js`,`React`,`TypeScript`,`JavaScript`,`Tailwind CSS`],initialTag:`React`,tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1}},parameters:{docs:{description:{story:`複数のタグと記事を含む基本的な例。初期タグは"React"。`}}},play:async({canvasElement:e})=>{let t=M(e);A(t.getByText(`Next.jsで始めるブログ開発`)).toBeInTheDocument(),A(t.getByText(`Reactの基礎を学ぶ`)).toBeInTheDocument(),await j.click(t.getByRole(`button`,{name:`TypeScript`})),A(t.getByText(`Next.jsで始めるブログ開発`)).toBeInTheDocument(),A(t.queryByText(`Reactの基礎を学ぶ`)).not.toBeInTheDocument()}}),I=N.story({args:{posts:P.filter(e=>e.tags?.includes(`TypeScript`)),tags:[`TypeScript`],initialTag:`TypeScript`,tagStats:{TypeScript:3}},parameters:{docs:{description:{story:`タグが1つだけの場合の例。`}}}}),L=N.story({args:{posts:P,tags:[`Next.js`,`React`,`TypeScript`,`JavaScript`,`Tailwind CSS`,`CSS`,`Node.js`,`PostgreSQL`,`Docker`,`AWS`],initialTag:`Next.js`,tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1,"Node.js":0,PostgreSQL:0,Docker:0,AWS:0}},parameters:{docs:{description:{story:`多数のタグがある場合の例。フレックスラップで複数行に表示されます。`}}}}),R=N.story({args:{posts:[],tags:[],initialTag:``,tagStats:{}},parameters:{docs:{description:{story:`タグが存在しない場合、メッセージが表示されます。`}}},play:async({canvasElement:e})=>{let t=M(e);A(t.getByText(`タグがありません。`)).toBeInTheDocument()}}),F.input.parameters={...F.input.parameters,docs:{...F.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: samplePosts,
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS'],
    initialTag: 'React',
    tagStats: {
      'Next.js': 2,
      React: 3,
      TypeScript: 3,
      JavaScript: 1,
      'Tailwind CSS': 1,
      CSS: 1
    }
  },
  parameters: {
    docs: {
      description: {
        story: '複数のタグと記事を含む基本的な例。初期タグは"React"。'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Next.jsで始めるブログ開発')).toBeInTheDocument();
    expect(canvas.getByText('Reactの基礎を学ぶ')).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: 'TypeScript'
    }));
    expect(canvas.getByText('Next.jsで始めるブログ開発')).toBeInTheDocument();
    expect(canvas.queryByText('Reactの基礎を学ぶ')).not.toBeInTheDocument();
  }
})`,...F.input.parameters?.docs?.source}}},I.input.parameters={...I.input.parameters,docs:{...I.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: samplePosts.filter(p => p.tags?.includes('TypeScript')),
    tags: ['TypeScript'],
    initialTag: 'TypeScript',
    tagStats: {
      TypeScript: 3
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが1つだけの場合の例。'
      }
    }
  }
})`,...I.input.parameters?.docs?.source}}},L.input.parameters={...L.input.parameters,docs:{...L.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: samplePosts,
    tags: ['Next.js', 'React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'CSS', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    initialTag: 'Next.js',
    tagStats: {
      'Next.js': 2,
      React: 3,
      TypeScript: 3,
      JavaScript: 1,
      'Tailwind CSS': 1,
      CSS: 1,
      'Node.js': 0,
      PostgreSQL: 0,
      Docker: 0,
      AWS: 0
    }
  },
  parameters: {
    docs: {
      description: {
        story: '多数のタグがある場合の例。フレックスラップで複数行に表示されます。'
      }
    }
  }
})`,...L.input.parameters?.docs?.source}}},R.input.parameters={...R.input.parameters,docs:{...R.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    posts: [],
    tags: [],
    initialTag: '',
    tagStats: {}
  },
  parameters: {
    docs: {
      description: {
        story: 'タグが存在しない場合、メッセージが表示されます。'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('タグがありません。')).toBeInTheDocument();
  }
})`,...R.input.parameters?.docs?.source}}},z=[`Default`,`SingleTag`,`ManyTags`,`NoTags`]}))();export{F as Default,L as ManyTags,R as NoTags,I as SingleTag,z as __namedExportsOrder};