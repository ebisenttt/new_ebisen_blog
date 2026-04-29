import{j as t,p as a}from"./iframe-Bd5CrwUb.js";import{W as i}from"./Wrapper-DJFffFlK.js";import"./preload-helper-Dhgqe2qg.js";const{expect:p,within:c}=__STORYBOOK_MODULE_TEST__,r=a.meta({title:"Shared/UI/OpenGraph/Wrapper",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"OGイメージ用の共通ラッパー。中央揃えレイアウトと明るい背景色を提供します。"}},layout:"fullscreen"},decorators:[s=>t.jsx("div",{style:{width:1200,height:630},children:t.jsx(s,{})})]}),e=r.story({args:{children:t.jsx("p",{style:{fontSize:64},children:"OGイメージのコンテンツ"})},play:async({canvasElement:s})=>{const o=c(s);p(o.getByText("OGイメージのコンテンツ")).toBeInTheDocument()}}),n=r.story({args:{style:{position:"relative"},children:t.jsxs(t.Fragment,{children:[t.jsx("p",{style:{fontSize:36},children:"記事タイトル"}),t.jsx("div",{style:{position:"absolute",right:48,bottom:24,fontSize:24},children:"ブログ名"})]})},parameters:{docs:{description:{story:"記事OGイメージで使用されている実際のレイアウト例。"}}}});e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    children: <p style={{
      fontSize: 64
    }}>OGイメージのコンテンツ</p>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText('OGイメージのコンテンツ')).toBeInTheDocument();
  }
})`,...e.input.parameters?.docs?.source}}};n.input.parameters={...n.input.parameters,docs:{...n.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    style: {
      position: 'relative'
    },
    children: <>
        <p style={{
        fontSize: 36
      }}>記事タイトル</p>
        <div style={{
        position: 'absolute',
        right: 48,
        bottom: 24,
        fontSize: 24
      }}>
          ブログ名
        </div>
      </>
  },
  parameters: {
    docs: {
      description: {
        story: '記事OGイメージで使用されている実際のレイアウト例。'
      }
    }
  }
})`,...n.input.parameters?.docs?.source}}};const u=["Default","WithCustomStyle"];export{e as Default,n as WithCustomStyle,u as __namedExportsOrder};
