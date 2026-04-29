import{p as a}from"./iframe-Bd5CrwUb.js";import{F as r}from"./Footer-CXel2uCx.js";import"./preload-helper-Dhgqe2qg.js";import"./image-Ctr0a-nZ.js";import"./use-merged-ref-CKNCJYSD.js";import"./Badge-CRezG6dZ.js";import"./Card-BJEewEi1.js";import"./Container-BzaPk5cs.js";import"./ExternalLinkIcon-Bs2ua_Tf.js";import"./Logo-b4LtZ8dj.js";import"./Basic-lT1TAWfK.js";import"./metadata-BgGm_LXU.js";import"./Wrapper-DJFffFlK.js";const{expect:e,within:c}=__STORYBOOK_MODULE_TEST__,i=a.meta({title:"Widgets/Layout/SiteLayout/Footer",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"サイトフッター。ブログタイトルとソーシャルメディアリンク(GitHub, X/Twitter, note)を表示します。"}},layout:"fullscreen"}}),o=i.story({play:async({canvasElement:n})=>{const t=c(n);e(t.getByRole("heading",{name:"ebisen blog."})).toBeInTheDocument(),e(t.getByAltText("github")).toBeInTheDocument(),e(t.getByAltText("x-twitter")).toBeInTheDocument(),e(t.getByAltText("note")).toBeInTheDocument()}});o.input.parameters={...o.input.parameters,docs:{...o.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...o.input.parameters?.docs?.source}}};const v=["Default"];export{o as Default,v as __namedExportsOrder};
