import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,t as a}from"./Basic-DRP4wEWY.js";var o,s,c,l,u,d;e((()=>{o=t(),r(),a(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l=n.meta({title:`Shared/UI/OpenGraph/Basic`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`基本的なOGイメージ。記事タイトルが取得できない場合のフォールバックとして使用されます。`}},layout:`fullscreen`},decorators:[e=>(0,o.jsx)(`div`,{style:{width:1200,height:630},children:(0,o.jsx)(e,{})})]}),u=l.story({play:async({canvasElement:e})=>{let t=c(e);s(t.getByText(`ebisen blog.`)).toBeInTheDocument()}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('ebisen blog.')).toBeInTheDocument();
  }
})`,...u.input.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder};