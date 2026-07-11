import{i as e}from"./preload-helper-B-xQYkru.js";import{n as t,t as n}from"./iframe-BdMlSyPG.js";import{n as r,t as i}from"./Badge-C_OQ279i.js";var a,o,s,c,l,u,d,f,p,m,h,g;e((()=>{n(),i(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s=t.meta({title:`Shared/UI/Badge`,component:r,tags:[`autodocs`],argTypes:{text:{control:`text`,description:`バッジに表示する文字列。特定のテキスト（ruby, typescript, HTML など）はアイコンと専用配色が適用されます。`}},parameters:{docs:{description:{component:`テキストに応じてアイコンと配色を自動選択するバッジコンポーネント。技術スタックやカテゴリの表示に利用します。`}}}}),c=s.story({args:{text:`Custom Badge`}}),l=s.story({args:{text:`ruby`}}),u=s.story({args:{text:`typescript`},play:async({canvasElement:e})=>{let t=o(e);a(t.getByText(`typescript`)).toBeInTheDocument(),a(e.querySelector(`.devicon-typescript-plain`)).not.toBeNull()}}),d=s.story({args:{text:`HTML`}}),f=s.story({args:{text:`rails`}}),p=s.story({args:{text:`eslint`}}),m=s.story({args:{text:`markdown`}}),h=s.story({args:{text:`UoPeople`}}),c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'Custom Badge'
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'ruby'
  }
})`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'typescript'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('typescript')).toBeInTheDocument();
    expect(canvasElement.querySelector('.devicon-typescript-plain')).not.toBeNull();
  }
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'HTML'
  }
})`,...d.input.parameters?.docs?.source}}},f.input.parameters={...f.input.parameters,docs:{...f.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'rails'
  }
})`,...f.input.parameters?.docs?.source}}},p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'eslint'
  }
})`,...p.input.parameters?.docs?.source}}},m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'markdown'
  }
})`,...m.input.parameters?.docs?.source}}},h.input.parameters={...h.input.parameters,docs:{...h.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'UoPeople'
  }
})`,...h.input.parameters?.docs?.source}}},g=[`Default`,`Ruby`,`TypeScript`,`HTML`,`Rails`,`ESLint`,`Markdown`,`UoPeople`]}))();export{c as Default,p as ESLint,d as HTML,m as Markdown,f as Rails,l as Ruby,u as TypeScript,h as UoPeople,g as __namedExportsOrder};