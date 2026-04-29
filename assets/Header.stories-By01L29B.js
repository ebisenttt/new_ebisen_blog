import{j as e,p as r}from"./iframe-Bd5CrwUb.js";import{T as n}from"./metadata-BgGm_LXU.js";import{L as i}from"./link-BT4bDcJ_.js";import"./preload-helper-Dhgqe2qg.js";import"./use-merged-ref-CKNCJYSD.js";const a=()=>e.jsx("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:e.jsx(i,{href:"/",className:"hover:underline",children:n})});a.__docgenInfo={description:"",methods:[],displayName:"Header"};const{expect:c,within:m}=__STORYBOOK_MODULE_TEST__,p=r.meta({title:"Widgets/Layout/SiteLayout/Header",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"サイトヘッダー。ブログタイトルへのホームリンクを表示します。記事詳細ページで使用されます。"}}}}),t=p.story({play:async({canvasElement:o})=>{const s=m(o).getByRole("link",{name:n});c(s).toHaveAttribute("href","/")}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: TITLE
    });
    expect(link).toHaveAttribute('href', '/');
  }
})`,...t.input.parameters?.docs?.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder};
