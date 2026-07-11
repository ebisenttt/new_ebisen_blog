import{i as e}from"./preload-helper-B-xQYkru.js";import{n as t,t as n}from"./iframe-BdMlSyPG.js";import{n as r,t as i}from"./PostHeader-BkED79cl.js";var a,o,s,c,l,u,d,f,p;e((()=>{n(),r(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s=t.meta({title:`entities/post/PostHeader`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]}),c=s.story({args:{title:`Next.jsを実務で使用した感想と反省`,date:`2024-01-15`,tag:[`Next.js`,`React`,`フロントエンド`]},play:async({canvasElement:e})=>{let t=o(e);a(t.getByText(`Next.jsを実務で使用した感想と反省`)).toBeInTheDocument(),a(t.getByText(`2024-01-15`)).toBeInTheDocument()}}),l=s.story({args:{title:"`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点",date:`2024-01-15T16:20:47+09:00`,tag:[`Jest`,`pnpm`,`テスト`]}}),u=s.story({args:{title:`基本情報技術者試験に合格した`,date:`2024-08-25`,tag:[`資格`]}}),d=s.story({args:{title:`ブログをリニューアルした話`,date:`2023-09-17T10:57:13+09:00`,tag:[]}}),f=s.story({args:{title:`TypeScriptのルールをstrictにしたときにつまずいたこと`,date:`2023-11-20`,tag:[`TypeScript`,`ESLint`,`JavaScript`,`フロントエンド`,`開発環境`]}}),c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: '\`pnpm\`で\`Jest\`の\`transformIgnorePatterns\`を設定する際の注意点',
    date: '2024-01-15T16:20:47+09:00',
    tag: ['Jest', 'pnpm', 'テスト']
  }
})`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: '基本情報技術者試験に合格した',
    date: '2024-08-25',
    tag: ['資格']
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'ブログをリニューアルした話',
    date: '2023-09-17T10:57:13+09:00',
    tag: []
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'TypeScriptのルールをstrictにしたときにつまずいたこと',
    date: '2023-11-20',
    tag: ['TypeScript', 'ESLint', 'JavaScript', 'フロントエンド', '開発環境']
  }
})`,...f.input.parameters?.docs?.source}}},p=[`Default`,`WithBackQuotesInTitle`,`SingleTag`,`NoTags`,`ManyTags`]}))();export{c as Default,f as ManyTags,d as NoTags,u as SingleTag,l as WithBackQuotesInTitle,p as __namedExportsOrder};