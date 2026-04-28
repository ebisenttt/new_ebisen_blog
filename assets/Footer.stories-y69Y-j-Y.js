import{F as a}from"./Footer-DLYV6Gjr.js";import"./jsx-runtime-ByRWct7B.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";import"./image-Be5DxHDz.js";import"./use-merged-ref-E0-5uso8.js";import"./Badge-4GiHobYd.js";import"./Card-5vqJtSYk.js";import"./Container-CjY-ocGB.js";import"./ExternalLinkIcon-BHX7rbid.js";import"./Logo-DiI8eS99.js";import"./Basic-CtvcpFe3.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-yOxfQxMN.js";const{expect:e,within:c}=__STORYBOOK_MODULE_TEST__,D={title:"Widgets/Layout/SiteLayout/Footer",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"サイトフッター。ブログタイトルとソーシャルメディアリンク(GitHub, X/Twitter, note)を表示します。"}},layout:"fullscreen"}},o={play:async({canvasElement:n})=>{const t=c(n);e(t.getByRole("heading",{name:"ebisen blog."})).toBeInTheDocument(),e(t.getByAltText("github")).toBeInTheDocument(),e(t.getByAltText("x-twitter")).toBeInTheDocument(),e(t.getByAltText("note")).toBeInTheDocument()}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('heading', {
      name: 'ebisen blog.'
    })).toBeInTheDocument();
    expect(canvas.getByAltText('github')).toBeInTheDocument();
    expect(canvas.getByAltText('x-twitter')).toBeInTheDocument();
    expect(canvas.getByAltText('note')).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder,D as default};
