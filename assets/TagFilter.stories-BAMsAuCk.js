import{r as g,j as n,p as N}from"./iframe-Bd5CrwUb.js";import{B as h}from"./Badge-CRezG6dZ.js";import"./Card-BJEewEi1.js";import"./Container-BzaPk5cs.js";import"./ExternalLinkIcon-Bs2ua_Tf.js";import"./Logo-b4LtZ8dj.js";import"./Basic-lT1TAWfK.js";import"./Wrapper-DJFffFlK.js";import"./DateFormatter-Ds6T4WAp.js";import"./PostBody-B2dab3Yv.js";import"./PostHeader-DEBdXnIA.js";import"./PostPreview-C3aEQzy7.js";import"./PostTitle-BTl_t5A3.js";import{P as R}from"./Posts-7I4xqLub.js";import"./preload-helper-Dhgqe2qg.js";import"./metadata-BgGm_LXU.js";import"./link-BT4bDcJ_.js";import"./use-merged-ref-CKNCJYSD.js";import"./backQuoteToCodeElement-JvVutd65.js";const T="note__",B="qiita__",w=[{domain:"note.com",prefix:T},{domain:"qiita.com",prefix:B}];function E(e){const t=w.find(i=>e.startsWith(i.prefix));if(!t&&!e.startsWith(T))return null;const s=t?t.prefix:T,o=e.slice(s.length),r=o.length%4===0?"":"=".repeat(4-o.length%4),p=o.replace(/-/g,"+").replace(/_/g,"/")+r;try{const i=Buffer.from(p,"base64").toString("utf-8");return i===""?null:i}catch{return null}}function P(e){return E(e.filename)}function C(e){const t=P(e);return t?{href:t,externalUrl:t}:{href:`/posts/${e.filename}`,externalUrl:null}}function _(e,t){return t?e.filter(s=>s.tags?.includes(t)):[]}const D="opacity-50",x=({posts:e,tags:t,initialTag:s,tagStats:o})=>{const[r,p]=g.useState(s),[i,v]=g.useState(s);i!==s&&(v(s),p(s));const j=g.useMemo(()=>r?_(e,r).map(a=>({...a,...C(a)})):[],[e,r]);return t.length===0?n.jsx("p",{className:"text-sm text-gray-500",children:"タグがありません。"}):n.jsxs("div",{children:[n.jsx("div",{className:"flex flex-wrap gap-4 mb-8",children:t.map(a=>n.jsx("button",{onClick:()=>p(a),title:`${a} (${o[a]??0})`,className:a===r?void 0:D,children:n.jsx(h,{text:a})},a))}),n.jsx("div",{children:n.jsx(R,{posts:j})})]})};x.__docgenInfo={description:"",methods:[],displayName:"TagFilter",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"Post"}],raw:"Post[]"},description:""},tags:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},initialTag:{required:!0,tsType:{name:"string"},description:""},tagStats:{required:!0,tsType:{name:"Record",elements:[{name:"string"},{name:"number"}],raw:"Record<string, number>"},description:""}}};const{expect:c,userEvent:I,within:f}=__STORYBOOK_MODULE_TEST__,u=N.meta({title:"Features/Posts/TagFilter",component:x,tags:["autodocs"],argTypes:{posts:{control:!1,description:"フィルタリング対象の記事配列。"},tags:{control:"object",description:"表示するタグの配列。"},initialTag:{control:"text",description:"初期選択されるタグ。"},tagStats:{control:"object",description:"各タグの記事数を示すオブジェクト。"}},parameters:{docs:{description:{component:"タグで記事をフィルタリングする機能を提供するコンポーネント。タグをクリックすると、そのタグを持つ記事のみが表示されます。"}}}}),y=[{title:"Next.jsで始めるブログ開発",date:"2024-11-21",content:"",filename:"nextjs-blog",tags:["Next.js","React","TypeScript"]},{title:"Reactの基礎を学ぶ",date:"2024-11-20",content:"",filename:"react-basics",tags:["React","JavaScript"]},{title:"TypeScriptの型システム入門",date:"2024-11-19",content:"",filename:"typescript-types",tags:["TypeScript"]},{title:"Tailwind CSSでスタイリング",date:"2024-11-18",content:"",filename:"tailwind-styling",tags:["Tailwind CSS","CSS"]},{title:"フルスタック開発の始め方",date:"2024-11-17",content:"",filename:"fullstack-dev",tags:["Next.js","TypeScript","React"]}],l=u.story({args:{posts:y,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS"],initialTag:"React",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1}},parameters:{docs:{description:{story:'複数のタグと記事を含む基本的な例。初期タグは"React"。'}}},play:async({canvasElement:e})=>{const t=f(e);c(t.getByText("Next.jsで始めるブログ開発")).toBeInTheDocument(),c(t.getByText("Reactの基礎を学ぶ")).toBeInTheDocument(),await I.click(t.getByRole("button",{name:"TypeScript"})),c(t.getByText("Next.jsで始めるブログ開発")).toBeInTheDocument(),c(t.queryByText("Reactの基礎を学ぶ")).not.toBeInTheDocument()}}),m=u.story({args:{posts:y.filter(e=>e.tags?.includes("TypeScript")),tags:["TypeScript"],initialTag:"TypeScript",tagStats:{TypeScript:3}},parameters:{docs:{description:{story:"タグが1つだけの場合の例。"}}}}),S=u.story({args:{posts:y,tags:["Next.js","React","TypeScript","JavaScript","Tailwind CSS","CSS","Node.js","PostgreSQL","Docker","AWS"],initialTag:"Next.js",tagStats:{"Next.js":2,React:3,TypeScript:3,JavaScript:1,"Tailwind CSS":1,CSS:1,"Node.js":0,PostgreSQL:0,Docker:0,AWS:0}},parameters:{docs:{description:{story:"多数のタグがある場合の例。フレックスラップで複数行に表示されます。"}}}}),d=u.story({args:{posts:[],tags:[],initialTag:"",tagStats:{}},parameters:{docs:{description:{story:"タグが存在しない場合、メッセージが表示されます。"}}},play:async({canvasElement:e})=>{const t=f(e);c(t.getByText("タグがありません。")).toBeInTheDocument()}});l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...l.input.parameters?.docs?.source}}};m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...m.input.parameters?.docs?.source}}};S.input.parameters={...S.input.parameters,docs:{...S.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...S.input.parameters?.docs?.source}}};d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}};const V=["Default","SingleTag","ManyTags","NoTags"];export{l as Default,S as ManyTags,d as NoTags,m as SingleTag,V as __namedExportsOrder};
