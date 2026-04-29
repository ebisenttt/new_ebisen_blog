import{p as c}from"./iframe-Bd5CrwUb.js";import{P as m}from"./PostHeader-DEBdXnIA.js";import"./preload-helper-Dhgqe2qg.js";import"./Badge-CRezG6dZ.js";import"./Card-BJEewEi1.js";import"./Container-BzaPk5cs.js";import"./ExternalLinkIcon-Bs2ua_Tf.js";import"./Logo-b4LtZ8dj.js";import"./Basic-lT1TAWfK.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-DJFffFlK.js";import"./DateFormatter-Ds6T4WAp.js";import"./PostTitle-BTl_t5A3.js";import"./backQuoteToCodeElement-JvVutd65.js";const{expect:p,within:u}=__STORYBOOK_MODULE_TEST__,t=c.meta({title:"entities/post/PostHeader",component:m,parameters:{layout:"centered"},tags:["autodocs"]}),e=t.story({args:{title:"Next.jsを実務で使用した感想と反省",date:"2024-01-15",tag:["Next.js","React","フロントエンド"]},play:async({canvasElement:i})=>{const o=u(i);p(o.getByText("Next.jsを実務で使用した感想と反省")).toBeInTheDocument(),p(o.getByText("2024-01-15")).toBeInTheDocument()}}),a=t.story({args:{title:"`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点",date:"2024-01-15T16:20:47+09:00",tag:["Jest","pnpm","テスト"]}}),r=t.story({args:{title:"基本情報技術者試験に合格した",date:"2024-08-25",tag:["資格"]}}),n=t.story({args:{title:"ブログをリニューアルした話",date:"2023-09-17T10:57:13+09:00",tag:[]}}),s=t.story({args:{title:"TypeScriptのルールをstrictにしたときにつまずいたこと",date:"2023-11-20",tag:["TypeScript","ESLint","JavaScript","フロントエンド","開発環境"]}});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Next.jsを実務で使用した感想と反省',
    date: '2024-01-15',
    tag: ['Next.js', 'React', 'フロントエンド']
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Next.jsを実務で使用した感想と反省')).toBeInTheDocument();
    expect(canvas.getByText('2024-01-15')).toBeInTheDocument();
  }
})`,...e.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:"meta.story({\n  args: {\n    title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点',\n    date: '2024-01-15T16:20:47+09:00',\n    tag: ['Jest', 'pnpm', 'テスト']\n  }\n})",...a.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: '基本情報技術者試験に合格した',
    date: '2024-08-25',
    tag: ['資格']
  }
})`,...r.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'ブログをリニューアルした話',
    date: '2023-09-17T10:57:13+09:00',
    tag: []
  }
})`,...n.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'TypeScriptのルールをstrictにしたときにつまずいたこと',
    date: '2023-11-20',
    tag: ['TypeScript', 'ESLint', 'JavaScript', 'フロントエンド', '開発環境']
  }
})`,...s.input.parameters?.docs?.source}}};const E=["Default","WithBackQuotesInTitle","SingleTag","NoTags","ManyTags"];export{e as Default,s as ManyTags,n as NoTags,r as SingleTag,a as WithBackQuotesInTitle,E as __namedExportsOrder};
