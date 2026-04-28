import{j as e}from"./jsx-runtime-ByRWct7B.js";import{W as r}from"./Wrapper-yOxfQxMN.js";import"./iframe-DtOF-sBV.js";import"./preload-helper-Dhgqe2qg.js";const{expect:a,within:i}=__STORYBOOK_MODULE_TEST__,m={title:"Shared/UI/OpenGraph/Wrapper",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"OGイメージ用の共通ラッパー。中央揃えレイアウトと明るい背景色を提供します。"}},layout:"fullscreen"},decorators:[s=>e.jsx("div",{style:{width:1200,height:630},children:e.jsx(s,{})})]},t={args:{children:e.jsx("p",{style:{fontSize:64},children:"OGイメージのコンテンツ"})},play:async({canvasElement:s})=>{const o=i(s);a(o.getByText("OGイメージのコンテンツ")).toBeInTheDocument()}},n={args:{style:{position:"relative"},children:e.jsxs(e.Fragment,{children:[e.jsx("p",{style:{fontSize:36},children:"記事タイトル"}),e.jsx("div",{style:{position:"absolute",right:48,bottom:24,fontSize:24},children:"ブログ名"})]})},parameters:{docs:{description:{story:"記事OGイメージで使用されている実際のレイアウト例。"}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const h=["Default","WithCustomStyle"];export{t as Default,n as WithCustomStyle,h as __namedExportsOrder,m as default};
