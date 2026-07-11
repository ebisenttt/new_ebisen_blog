import{i as e}from"./preload-helper-B-xQYkru.js";import{n as t,t as n}from"./iframe-BdMlSyPG.js";import{n as r,t as i}from"./PostTitle-B1DOK46U.js";var a,o,s,c,l,u,d,f;e((()=>{n(),r(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s=t.meta({title:`entities/post/PostTitle`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]}),c=s.story({args:{title:`Next.jsを実務で使用した感想と反省`},play:async({canvasElement:e})=>{let t=o(e);a(t.getByText(`Next.jsを実務で使用した感想と反省`)).toBeInTheDocument()}}),l=s.story({args:{title:"`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点"}}),u=s.story({args:{title:`はじめに | 初学者によるRuby on Rails Tutorial学習記録 - 長いタイトルの表示確認`}}),d=s.story({args:{title:`200902`}}),c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'Next.jsを実務で使用した感想と反省'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('Next.jsを実務で使用した感想と反省')).toBeInTheDocument();
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:"meta.story({\n  args: {\n    title: '`pnpm`で`Jest`の`transformIgnorePatterns`を設定する際の注意点'\n  }\n})",...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: 'はじめに | 初学者によるRuby on Rails Tutorial学習記録 - 長いタイトルの表示確認'
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    title: '200902'
  }
})`,...d.input.parameters?.docs?.source}}},f=[`Default`,`WithBackQuotes`,`LongTitle`,`ShortTitle`]}))();export{c as Default,u as LongTitle,d as ShortTitle,l as WithBackQuotes,f as __namedExportsOrder};