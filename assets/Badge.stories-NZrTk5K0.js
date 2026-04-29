import{p as d}from"./iframe-Bd5CrwUb.js";import{B as y}from"./Badge-CRezG6dZ.js";import"./preload-helper-Dhgqe2qg.js";const{expect:u,within:l}=__STORYBOOK_MODULE_TEST__,t=d.meta({title:"Shared/UI/Badge",component:y,tags:["autodocs"],argTypes:{text:{control:"text",description:"バッジに表示する文字列。特定のテキスト（ruby, typescript, HTML など）はアイコンと専用配色が適用されます。"}},parameters:{docs:{description:{component:"テキストに応じてアイコンと配色を自動選択するバッジコンポーネント。技術スタックやカテゴリの表示に利用します。"}}}}),e=t.story({args:{text:"Custom Badge"}}),r=t.story({args:{text:"ruby"}}),s=t.story({args:{text:"typescript"},play:async({canvasElement:i})=>{const m=l(i);u(m.getByText("typescript")).toBeInTheDocument(),u(i.querySelector(".devicon-typescript-plain")).not.toBeNull()}}),a=t.story({args:{text:"HTML"}}),n=t.story({args:{text:"rails"}}),o=t.story({args:{text:"eslint"}}),p=t.story({args:{text:"markdown"}}),c=t.story({args:{text:"UoPeople"}});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'Custom Badge'
  }
})`,...e.input.parameters?.docs?.source}}};r.input.parameters={...r.input.parameters,docs:{...r.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'ruby'
  }
})`,...r.input.parameters?.docs?.source}}};s.input.parameters={...s.input.parameters,docs:{...s.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...s.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'HTML'
  }
})`,...a.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'rails'
  }
})`,...n.input.parameters?.docs?.source}}};o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'eslint'
  }
})`,...o.input.parameters?.docs?.source}}};p.input.parameters={...p.input.parameters,docs:{...p.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'markdown'
  }
})`,...p.input.parameters?.docs?.source}}};c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    text: 'UoPeople'
  }
})`,...c.input.parameters?.docs?.source}}};const T=["Default","Ruby","TypeScript","HTML","Rails","ESLint","Markdown","UoPeople"];export{e as Default,o as ESLint,a as HTML,p as Markdown,n as Rails,r as Ruby,s as TypeScript,c as UoPeople,T as __namedExportsOrder};
