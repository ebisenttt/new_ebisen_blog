import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{a as i,t as a}from"./config-D1ALmRtY.js";import{n as o,t as s}from"./link-DPVMW1ge.js";var c,l,u=e((()=>{c=t(),s(),a(),l=()=>(0,c.jsx)(`h2`,{className:`text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8`,children:(0,c.jsx)(o,{href:`/`,className:`hover:underline`,children:i})}),l.__docgenInfo={description:``,methods:[],displayName:`Header`}})),d,f,p,m,h;e((()=>{r(),a(),u(),{expect:d,within:f}=__STORYBOOK_MODULE_TEST__,p=n.meta({title:`Widgets/Layout/SiteLayout/Header`,component:l,tags:[`autodocs`],parameters:{docs:{description:{component:`サイトヘッダー。ブログタイトルへのホームリンクを表示します。記事詳細ページで使用されます。`}}}}),m=p.story({play:async({canvasElement:e})=>{let t=f(e).getByRole(`link`,{name:i});d(t).toHaveAttribute(`href`,`/`)}}),m.input.parameters={...m.input.parameters,docs:{...m.input.parameters?.docs,source:{originalSource:`meta.story({
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: TITLE
    });
    expect(link).toHaveAttribute('href', '/');
  }
})`,...m.input.parameters?.docs?.source}}},h=[`Default`]}))();export{m as Default,h as __namedExportsOrder};