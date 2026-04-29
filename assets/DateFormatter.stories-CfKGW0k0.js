import{p as i}from"./iframe-Bd5CrwUb.js";import{D as c}from"./DateFormatter-Ds6T4WAp.js";import"./preload-helper-Dhgqe2qg.js";const{expect:s,within:m}=__STORYBOOK_MODULE_TEST__,n=i.meta({title:"entities/post/DateFormatter",component:c,parameters:{layout:"centered"},tags:["autodocs"]}),t=n.story({args:{dateString:"2024-01-15"},play:async({canvasElement:o})=>{const r=m(o).getByText("2024-01-15");s(r).toBeInTheDocument(),s(r).toHaveAttribute("datetime","2024-01-15")}}),e=n.story({args:{dateString:"2024-01-15T16:20:47+09:00"}}),a=n.story({args:{dateString:"2024-01-15T07:20:47Z"}});t.input.parameters={...t.input.parameters,docs:{...t.input.parameters?.docs,source:{originalSource:`meta.story({
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
})`,...t.input.parameters?.docs?.source}}};e.input.parameters={...e.input.parameters,docs:{...e.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    dateString: '2024-01-15T16:20:47+09:00'
  }
})`,...e.input.parameters?.docs?.source}}};a.input.parameters={...a.input.parameters,docs:{...a.input.parameters?.docs,source:{originalSource:`meta.story({
  args: {
    dateString: '2024-01-15T07:20:47Z'
  }
})`,...a.input.parameters?.docs?.source}}};const T=["DateOnly","WithTimezone","WithTimezoneUTC"];export{t as DateOnly,e as WithTimezone,a as WithTimezoneUTC,T as __namedExportsOrder};
