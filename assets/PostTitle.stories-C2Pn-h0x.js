import{P as n}from"./PostTitle-BFWB2Y7z.js";import"./jsx-runtime-ByRWct7B.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./backQuoteToCodeElement-JvVutd65.js";const{expect:c,within:i}=__STORYBOOK_MODULE_TEST__,d={title:"entities/post/PostTitle",component:n,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{title:"Next.jsを実務で使用した感想と反省"},play:async({canvasElement:a})=>{const o=i(a);c(o.getByText("Next.jsを実務で使用した感想と反省")).toBeInTheDocument()}},e={args:{title:"`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点"}},s={args:{title:"はじめに | 初学者によるRuby on Rails Tutorial学習記録 - 長いタイトルの表示確認"}},r={args:{title:"200902"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'Next.jsを実務で使用した感想と反省'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Next.jsを実務で使用した感想と反省')).toBeInTheDocument();
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:"{\n  args: {\n    title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点'\n  }\n}",...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: 'はじめに | 初学者によるRuby on Rails Tutorial学習記録 - 長いタイトルの表示確認'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: '200902'
  }
}`,...r.parameters?.docs?.source}}};const T=["Default","WithBackQuotes","LongTitle","ShortTitle"];export{t as Default,s as LongTitle,r as ShortTitle,e as WithBackQuotes,T as __namedExportsOrder,d as default};
