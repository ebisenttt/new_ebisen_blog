import{i as e}from"./preload-helper-B-xQYkru.js";import{n as t,t as n}from"./iframe-BdMlSyPG.js";import{n as r,t as i}from"./Footer-BPVNjSY8.js";var a,o,s,c,l;e((()=>{n(),r(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s=t.meta({title:`Widgets/Layout/SiteLayout/Footer`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`サイトフッター。ブログタイトルとソーシャルメディアリンク(GitHub, X/Twitter, note)を表示します。`}},layout:`fullscreen`}}),c=s.story({play:async({canvasElement:e})=>{let t=o(e);a(t.getByRole(`heading`,{name:`ebisen blog.`})).toBeInTheDocument(),a(t.getByAltText(`github`)).toBeInTheDocument(),a(t.getByAltText(`x-twitter`)).toBeInTheDocument(),a(t.getByAltText(`note`)).toBeInTheDocument()}}),c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...c.input.parameters?.docs?.source}}},l=[`Default`]}))();export{c as Default,l as __namedExportsOrder};