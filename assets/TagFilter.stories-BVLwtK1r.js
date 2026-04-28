import{j as n}from"./jsx-runtime-ByRWct7B.js";import{a as g}from"./iframe-DtOF-sBV.js";import{B as v}from"./Badge-4GiHobYd.js";import"./Card-5vqJtSYk.js";import"./Container-CjY-ocGB.js";import"./ExternalLinkIcon-BHX7rbid.js";import"./Logo-DiI8eS99.js";import"./Basic-CtvcpFe3.js";import"./Wrapper-yOxfQxMN.js";import"./DateFormatter-BXF0u73M.js";import"./PostBody-CtNvuDIB.js";import"./PostHeader-c1lgTAGJ.js";import"./PostPreview-CCNIZyAN.js";import"./PostTitle-BFWB2Y7z.js";import{P as N}from"./Posts-BZLM63Qb.js";import"./preload-helper-Dhgqe2qg.js";import"./metadata-BgGm_LXU.js";import"./link-_QTOc7RR.js";import"./use-merged-ref-E0-5uso8.js";import"./backQuoteToCodeElement-JvVutd65.js";const T="note__",h="qiita__",R=[{domain:"note.com",prefix:T},{domain:"qiita.com",prefix:h}];function B(e){const t=R.find(o=>e.startsWith(o.prefix));if(!t&&!e.startsWith(T))return null;const s=t?t.prefix:T,i=e.slice(s.length),r=i.length%4===0?"":"=".repeat(4-i.length%4),p=i.replace(/-/g,"+").replace(/_/g,"/")+r;try{const o=Buffer.from(p,"base64").toString("utf-8");return o===""?null:o}catch{return null}}function E(e){return B(e.filename)}function P(e){const t=E(e);return t?{href:t,externalUrl:t}:{href:`/posts/${e.filename}`,externalUrl:null}}function w(e,t){return t?e.filter(s=>s.tags?.includes(t)):[]}const C="opacity-50",y=({posts:e,tags:t,initialTag:s,tagStats:i})=>{const[r,p]=g.useState(s),[o,f]=g.useState(s);o!==s&&(f(s),p(s));const j=g.useMemo(()=>r?w(e,r).map(a=>({...a,...P(a)})):[],[e,r]);return t.length===0?n.jsx("p",{className:"text-sm text-gray-500",children:"タグがありません。"}):n.jsxs("div",{children:[n.jsx("div",{className:"flex flex-wrap gap-4 mb-8",children:t.map(a=>n.jsx("button",{onClick:()=>p(a),title:`${a} (${i[a]??0})`,className:a===r?void 0:C,children:n.jsx(v,{text:a})},a))}),n.jsx("div",{children:n.jsx(N,{posts:j})})]})};y.__docgenInfo={description:"",methods:[],displayName:"TagFilter",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"Post"}],raw:"Post[]"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},initialTag:{required:!0,tsType:{name:"string"},description:""},tagStats:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"},description:""}}};const{expect:c,userEvent:_,within:x}=__STORYBOOK_MODULE_TEST__,H={title:"Features/Posts/TagFilter",component:y,tags:["autodocs"],argTypes:{posts:{control:!1,description:"フィルタリング対象の記事配列。"},tags:{control:"object",description:"表示するタグの配列。"},initialTag:{control:"text",description:"初期選択されるタグ。"},tagStats:{control:"object",description:"各タグの記事数を示すオブジェクト。"}},parameters:{docs:{description:{component:"タグで記事をフィルタリングする機能を提供するコンポーネント。タグをクリックすると、そのタグを持つ記事のみが表示されます。"}}}},u=[{title:"Next.jsで始めるブログ開発",date:"2024-11-21",content:"",filename:"nextjs-blog",tags:["Next.js","React","TypeScript"]},{title:"Reactの基礎を学ぶ",date:"2024-11-20",content:"",filename:"react-basics",tags:["React","JavaScript"]},{title:"TypeScriptの型システム入門",date:"2024-11-19",content:"",filename:"typescript-types",tags:["TypeScript"]},{title:"Tailwind CSSでスタイリング",date:"2024-11-18",content:"",filename:"tailwind-styling",tags:["Tailwind CSS","CSS"]},{title:"フルスタック開発の始め方",date:"2024-11-17",content:"",filename:"fullstack-dev",tags:["Next.js","TypeScript","React"]}],l={args:{posts:u,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS"],initialTag:"React",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1}},parameters:{docs:{description:{story:'複数のタグと記事を含む基本的な例。初期タグは"React"。'}}},play:async({canvasElement:e})=>{const t=x(e);c(t.getByText("Next.jsで始めるブログ開発")).toBeInTheDocument(),c(t.getByText("Reactの基礎を学ぶ")).toBeInTheDocument(),await _.click(t.getByRole("button",{name:"TypeScript"})),c(t.getByText("Next.jsで始めるブログ開発")).toBeInTheDocument(),c(t.queryByText("Reactの基礎を学ぶ")).not.toBeInTheDocument()}},m={args:{posts:u.filter(e=>e.tags?.includes("TypeScript")),tags:["TypeScript"],initialTag:"TypeScript",tagStats:{TypeScript:3}},parameters:{docs:{description:{story:"タグが1つだけの場合の例。"}}}},S={args:{posts:u,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS","CSS","Node.js","PostgreSQL","Docker","AWS"],initialTag:"Next.js",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1,"Node.js":0,PostgreSQL:0,Docker:0,AWS:0}},parameters:{docs:{description:{story:"多数のタグがある場合の例。フレックスラップで複数行に表示されます。"}}}},d={args:{posts:[],tags:[],initialTag:"",tagStats:{}},parameters:{docs:{description:{story:"タグが存在しない場合、メッセージが表示されます。"}}},play:async({canvasElement:e})=>{const t=x(e);c(t.getByText("タグがありません。")).toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const V=["Default","SingleTag","ManyTags","NoTags"];export{l as Default,S as ManyTags,d as NoTags,m as SingleTag,V as __namedExportsOrder,H as default};
