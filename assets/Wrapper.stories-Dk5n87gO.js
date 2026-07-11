import{i as e}from"./preload-helper-B-xQYkru.js";import{A as t,n,t as r}from"./iframe-BdMlSyPG.js";import{n as i,t as a}from"./Wrapper-CbmCvZxL.js";var o,s,c,l,u,d,f;e((()=>{o=t(),r(),a(),{expect:s,within:c}=__STORYBOOK_MODULE_TEST__,l=n.meta({title:`Shared/UI/OpenGraph/Wrapper`,component:i,tags:[`autodocs`],parameters:{docs:{description:{component:`OGイメージ用の共通ラッパー。中央揃えレイアウトと明るい背景色を提供します。`}},layout:`fullscreen`},decorators:[e=>(0,o.jsx)(`div`,{style:{width:1200,height:630},children:(0,o.jsx)(e,{})})]}),u=l.story({args:{children:(0,o.jsx)(`p`,{style:{fontSize:64},children:`OGイメージのコンテンツ`})},play:async({canvasElement:e})=>{let t=c(e);s(t.getByText(`OGイメージのコンテンツ`)).toBeInTheDocument()}}),d=l.story({args:{style:{position:`relative`},children:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(`p`,{style:{fontSize:36},children:`記事タイトル`}),(0,o.jsx)(`div`,{style:{position:`absolute`,right:48,bottom:24,fontSize:24},children:`ブログ名`})]})},parameters:{docs:{description:{story:`記事OGイメージで使用されている実際のレイアウト例。`}}}}),u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...u.input.parameters?.docs?.source}}},d.input.parameters={...d.input.parameters,docs:{...d.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...d.input.parameters?.docs?.source}}},f=[`Default`,`WithCustomStyle`]}))();export{u as Default,d as WithCustomStyle,f as __namedExportsOrder};