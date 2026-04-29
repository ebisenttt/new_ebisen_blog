import{p as a,j as n}from"./iframe-Bd5CrwUb.js";import{B as o}from"./Basic-lT1TAWfK.js";import"./preload-helper-Dhgqe2qg.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-DJFffFlK.js";const{expect:r,within:c}=__STORYBOOK_MODULE_TEST__,i=a.meta({title:"Shared/UI/OpenGraph/Basic",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"基本的なOGイメージ。記事タイトルが取得できない場合のフォールバックとして使用されます。"}},layout:"fullscreen"},decorators:[t=>n.jsx("div",{style:{width:1200,height:630},children:n.jsx(t,{})})]}),e=i.story({play:async({canvasElement:t})=>{const s=c(t);r(s.getByText("ebisen blog.")).toBeInTheDocument()}});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('ebisen blog.')).toBeInTheDocument();
  }
})`,...e.input.parameters?.docs?.source}}};const h=["Default"];export{e as Default,h as __namedExportsOrder};
