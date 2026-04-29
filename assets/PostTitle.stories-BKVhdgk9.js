import{p as i}from"./iframe-Bd5CrwUb.js";import{P as p}from"./PostTitle-BTl_t5A3.js";import"./preload-helper-Dhgqe2qg.js";import"./backQuoteToCodeElement-JvVutd65.js";const{expect:c,within:u}=__STORYBOOK_MODULE_TEST__,a=i.meta({title:"entities/post/PostTitle",component:p,parameters:{layout:"centered"},tags:["autodocs"]}),t=a.story({args:{title:"Next.jsを実務で使用した感想と反省"},play:async({canvasElement:n})=>{const o=u(n);c(o.getByText("Next.jsを実務で使用した感想と反省")).toBeInTheDocument()}}),e=a.story({args:{title:"`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点"}}),s=a.story({args:{title:"はじめに | 初学者によるRuby on Rails Tutorial学習記録 - 長いタイトルの表示確認"}}),r=a.story({args:{title:"200902"}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Next.jsを実務で使用した感想と反省'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Next.jsを実務で使用した感想と反省')).toBeInTheDocument();
  }
})`,...t.input.parameters?.docs?.source}}};e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:"meta.story({\n  args: {\n    title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点'\n  }\n})",...e.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'はじめに | 初学者によるRuby on Rails Tutorial学習記録 - 長いタイトルの表示確認'
  }
})`,...s.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: '200902'
  }
})`,...r.input.parameters?.docs?.source}}};const d=["Default","WithBackQuotes","LongTitle","ShortTitle"];export{t as Default,s as LongTitle,r as ShortTitle,e as WithBackQuotes,d as __namedExportsOrder};
