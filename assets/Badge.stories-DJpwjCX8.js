import{B as d}from"./Badge-4GiHobYd.js";import"./jsx-runtime-ByRWct7B.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";const{expect:i,within:u}=__STORYBOOK_MODULE_TEST__,S={title:"Shared/UI/Badge",component:d,tags:["autodocs"],argTypes:{text:{control:"text",description:"バッジに表示する文字列。特定のテキスト（ruby, typescript, HTML など）はアイコンと専用配色が適用されます。"}},parameters:{docs:{description:{component:"テキストに応じてアイコンと配色を自動選択するバッジコンポーネント。技術スタックやカテゴリの表示に利用します。"}}}},e={args:{text:"Custom Badge"}},r={args:{text:"ruby"}},t={args:{text:"typescript"},play:async({canvasElement:p})=>{const m=u(p);i(m.getByText("typescript")).toBeInTheDocument(),i(p.querySelector(".devicon-typescript-plain")).not.toBeNull()}},s={args:{text:"HTML"}},a={args:{text:"rails"}},o={args:{text:"eslint"}},n={args:{text:"markdown"}},c={args:{text:"UoPeople"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'Custom Badge'
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'ruby'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'HTML'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'rails'
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'eslint'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'markdown'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    text: 'UoPeople'
  }
}`,...c.parameters?.docs?.source}}};const T=["Default","Ruby","TypeScript","HTML","Rails","ESLint","Markdown","UoPeople"];export{e as Default,o as ESLint,s as HTML,n as Markdown,a as Rails,r as Ruby,t as TypeScript,c as UoPeople,T as __namedExportsOrder,S as default};
