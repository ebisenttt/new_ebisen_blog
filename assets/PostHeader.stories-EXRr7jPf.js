import{P as p}from"./PostHeader-c1lgTAGJ.js";import"./jsx-runtime-ByRWct7B.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./Badge-4GiHobYd.js";import"./Card-5vqJtSYk.js";import"./Container-CjY-ocGB.js";import"./ExternalLinkIcon-BHX7rbid.js";import"./Logo-DiI8eS99.js";import"./Basic-CtvcpFe3.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-yOxfQxMN.js";import"./DateFormatter-BXF0u73M.js";import"./PostTitle-BFWB2Y7z.js";import"./backQuoteToCodeElement-JvVutd65.js";const{expect:o,within:i}=__STORYBOOK_MODULE_TEST__,D={title:"entities/post/PostHeader",component:p,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{title:"Next.jsを実務で使用した感想と反省",date:"2024-01-15",tag:["Next.js","React","フロントエンド"]},play:async({canvasElement:c})=>{const n=i(c);o(n.getByText("Next.jsを実務で使用した感想と反省")).toBeInTheDocument(),o(n.getByText("2024-01-15")).toBeInTheDocument()}},e={args:{title:"`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点",date:"2024-01-15T16:20:47+09:00",tag:["Jest","pnpm","テスト"]}},a={args:{title:"基本情報技術者試験に合格した",date:"2024-08-25",tag:["資格"]}},r={args:{title:"ブログをリニューアルした話",date:"2023-09-17T10:57:13+09:00",tag:[]}},s={args:{title:"TypeScriptのルールをstrictにしたときにつまずいたこと",date:"2023-11-20",tag:["TypeScript","ESLint","JavaScript","フロントエンド","開発環境"]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点',\n    date: '2024-01-15T16:20:47+09:00',\n    tag: ['Jest', 'pnpm', 'テスト']\n  }\n}",...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: '基本情報技術者試験に合格した',
    date: '2024-08-25',
    tag: ['資格']
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'ブログをリニューアルした話',
    date: '2023-09-17T10:57:13+09:00',
    tag: []
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'TypeScriptのルールをstrictにしたときにつまずいたこと',
    date: '2023-11-20',
    tag: ['TypeScript', 'ESLint', 'JavaScript', 'フロントエンド', '開発環境']
  }
}`,...s.parameters?.docs?.source}}};const E=["Default","WithBackQuotesInTitle","SingleTag","NoTags","ManyTags"];export{t as Default,s as ManyTags,r as NoTags,a as SingleTag,e as WithBackQuotesInTitle,E as __namedExportsOrder,D as default};
