import{j as r}from"./jsx-runtime-xcAJRU58.js";import{P as t}from"./PostPreview-C5L-ZQ0V.js";const a=({posts:n})=>r.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-8 md:gap-y-16 mb-32",children:n.map(e=>r.jsx(t,{title:e.title,date:e.date,tags:e.tags,href:e.href??e.externalUrl??`/posts/${e.filename}`,externalUrl:e.externalUrl===void 0?void 0:e.externalUrl},e.filename))});a.__docgenInfo={description:"",methods:[],displayName:"Posts",props:{posts:{required:!0,tsType:{name:"Array",elements:[{name:"intersection",raw:`Post & {
  href?: string
  externalUrl?: string | null
}`,elements:[{name:"Post"},{name:"signature",type:"object",raw:`{
  href?: string
  externalUrl?: string | null
}`,signature:{properties:[{key:"href",value:{name:"string",required:!1}},{key:"externalUrl",value:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}],required:!1}}]}}]}],raw:"PostWithLink[]"},description:""}}};export{a as P};
