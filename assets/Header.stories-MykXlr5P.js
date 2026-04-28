import{T as n}from"./metadata-BgGm_LXU.js";import{j as e}from"./jsx-runtime-ByRWct7B.js";import{L as r}from"./link-_QTOc7RR.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./use-merged-ref-E0-5uso8.js";const a=()=>e.jsx("h2",{className:"text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8",children:e.jsx(r,{href:"/",className:"hover:underline",children:n})});a.__docgenInfo={description:"",methods:[],displayName:"Header"};const{expect:c,within:i}=__STORYBOOK_MODULE_TEST__,x={title:"Widgets/Layout/SiteLayout/Header",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"サイトヘッダー。ブログタイトルへのホームリンクを表示します。記事詳細ページで使用されます。"}}}},t={play:async({canvasElement:o})=>{const s=i(o).getByRole("link",{name:n});c(s).toHaveAttribute("href","/")}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByRole('link', {
      name: TITLE
    });
    expect(link).toHaveAttribute('href', '/');
  }
}`,...t.parameters?.docs?.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,x as default};
