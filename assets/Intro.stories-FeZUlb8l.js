import{j as t,p as c}from"./iframe-Bd5CrwUb.js";import"./preload-helper-Dhgqe2qg.js";const s=()=>t.jsxs("section",{className:"flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12",children:[t.jsx("h1",{className:"text-5xl md:text-7xl font-bold tracking-tighter leading-tight md:pr-8",children:"ebisen blog"}),t.jsx("h4",{className:"text-center md:text-left text-lg mt-5 md:pl-8",children:"ひよっこエンジニアの備忘録"})]});s.__docgenInfo={description:"",methods:[],displayName:"Intro"};const{expect:o,within:r}=__STORYBOOK_MODULE_TEST__,m=c.meta({title:"Widgets/Layout/SiteLayout/Intro",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"ホームページのイントロセクション。ブログタイトル「ebisen blog」とサブタイトル「ひよっこエンジニアの備忘録」を表示します。"}}}}),e=m.story({play:async({canvasElement:a})=>{const n=r(a);o(n.getByRole("heading",{name:"ebisen blog"})).toBeInTheDocument(),o(n.getByText("ひよっこエンジニアの備忘録")).toBeInTheDocument()}});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('heading', {
      name: 'ebisen blog'
    })).toBeInTheDocument();
    expect(canvas.getByText('ひよっこエンジニアの備忘録')).toBeInTheDocument();
  }
})`,...e.input.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder};
