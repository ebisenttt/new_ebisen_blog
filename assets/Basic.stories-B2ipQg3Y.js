import{j as s}from"./jsx-runtime-ByRWct7B.js";import{B as n}from"./Basic-CtvcpFe3.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-yOxfQxMN.js";const{expect:o,within:r}=__STORYBOOK_MODULE_TEST__,u={title:"Shared/UI/OpenGraph/Basic",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"基本的なOGイメージ。記事タイトルが取得できない場合のフォールバックとして使用されます。"}},layout:"fullscreen"},decorators:[t=>s.jsx("div",{style:{width:1200,height:630},children:s.jsx(t,{})})]},e={play:async({canvasElement:t})=>{const a=r(t);o(a.getByText("ebisen blog.")).toBeInTheDocument()}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('ebisen blog.')).toBeInTheDocument();
  }
}`,...e.parameters?.docs?.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder,u as default};
