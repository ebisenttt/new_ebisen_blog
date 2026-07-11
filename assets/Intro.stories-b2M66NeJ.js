import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";var i,a,o=e((()=>{i=t(),a=()=>(0,i.jsxs)(`section`,{className:`flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12`,children:[(0,i.jsx)(`h1`,{className:`text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8`,children:`ebisen blog`}),(0,i.jsx)(`h4`,{className:`text-center md:text-left text-lg mt-5 md:pl-8`,children:`ひよっこエンジニアの備忘録`})]}),a.__docgenInfo={description:``,methods:[],displayName:`Intro`}})),s,c,l,u,d;e((()=>{r(),o(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l=n.meta({title:`Widgets/Layout/SiteLayout/Intro`,component:a,tags:[`autodocs`],parameters:{docs:{description:{component:`ホームページのイントロセクション。ブログタイトル「ebisen blog」とサブタイトル「ひよっこエンジニアの備忘録」を表示します。`}}}}),u=l.story({play:async({canvasElement:e})=>{let t=c(e);s(t.getByRole(`heading`,{name:`ebisen blog`})).toBeInTheDocument(),s(t.getByText(`ひよっこエンジニアの備忘録`)).toBeInTheDocument()}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('heading', {
      name: 'ebisen blog'
    })).toBeInTheDocument();
    expect(canvas.getByText('ひよっこエンジニアの備忘録')).toBeInTheDocument();
  }
})`,...u.input.parameters?.docs?.source}}},d=[`Default`]}))();export{u as Default,d as __namedExportsOrder};