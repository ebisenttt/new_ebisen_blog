import{i as e}from"./preload-helper-B-xQYkru.js";import{n as t,t as n}from"./iframe-BdMlSyPG.js";import{n as r,t as i}from"./DateFormatter-Bt7ve81X.js";var a,o,s,c,l,u,d;e((()=>{n(),r(),{expect:a,within:o}=__STORYBOOK_MODULE_TEST__,s=t.meta({title:`entities/post/DateFormatter`,component:i,parameters:{layout:`centered`},tags:[`autodocs`]}),c=s.story({args:{dateString:`2024-01-15`},play:async({canvasElement:e})=>{let t=o(e).getByText(`2024-01-15`);a(t).toBeInTheDocument(),a(t).toHaveAttribute(`datetime`,`2024-01-15`)}}),l=s.story({args:{dateString:`2024-01-15T16:20:47+09:00`}}),u=s.story({args:{dateString:`2024-01-15T07:20:47Z`}}),c.input.parameters={...c.input.parameters,docs:{...c.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    dateString: '2024-01-15'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const time = canvas.getByText('2024-01-15');
    expect(time).toBeInTheDocument();
    expect(time).toHaveAttribute('datetime', '2024-01-15');
  }
})`,...c.input.parameters?.docs?.source}}},l.input.parameters={...l.input.parameters,docs:{...l.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    dateString: '2024-01-15T16:20:47+09:00'
  }
})`,...l.input.parameters?.docs?.source}}},u.input.parameters={...u.input.parameters,docs:{...u.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    dateString: '2024-01-15T07:20:47Z'
  }
})`,...u.input.parameters?.docs?.source}}},d=[`DateOnly`,`WithTimezone`,`WithTimezoneUTC`]}))();export{c as DateOnly,l as WithTimezone,u as WithTimezoneUTC,d as __namedExportsOrder};