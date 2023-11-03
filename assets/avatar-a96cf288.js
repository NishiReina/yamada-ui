import{j as C,a as e}from"./jsx-runtime-b08f8875.js";import{r as x}from"./index-8ee6c85d.js";import{b as k}from"./icon-1c0bf186.js";import{u as y}from"./use-image-0efcb53a.js";import{d as g,k as I,e as j,v as w,t as F}from"./factory-ab7c3580.js";import{f as S}from"./forward-ref-cf7188bd.js";import{a as E}from"./use-component-style-07e84389.js";import{o as M}from"./theme-provider-1097130b.js";const P=t=>C(k,{viewBox:"0 0 128 128",color:["white","black"],width:"100%",height:"100%",className:"ui-avatar__icon",...t,children:[e("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),e("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"})]}),R=t=>{const a=t.split(" "),s=a[0]??"",r=a.length>1?a[a.length-1]:"";return s&&r?`${s.charAt(0)}${r.charAt(0)}`:s.charAt(0)},T=({name:t,format:a=R,...s})=>{const o={...B().name};return e(g.div,{className:"ui-avatar__name",role:"img",__css:o,...s,children:t?a(t):null})},[$,B]=I({strict:!1,name:"AvatarContext"}),O=S((t,a)=>{const[s,r]=E("Avatar",t),{className:o,src:l,srcSet:m,name:n,loading:d,icon:u,ignoreFallback:f,borderRadius:i="full",rounded:c="full",onError:v,onLoad:h,format:A,children:p,..._}=M(r),[L,N]=x.useState(!0),b={position:"relative",display:"inline-flex",justifyContent:"center",alignItems:"center",flexShrink:0,textAlign:"center",textTransform:"uppercase",fontWeight:"medium",...s.container};return e($,{value:s,children:C(g.span,{ref:a,className:j("ui-avatar",o),"data-loading":w(L),borderRadius:i,rounded:c,__css:b,..._,children:[e(W,{src:l,srcSet:m,loading:d,borderRadius:i,rounded:c,onLoad:F(h,()=>N(!1)),onError:v,format:A,name:n,icon:u,ignoreFallback:f}),p]})})}),W=({src:t,srcSet:a,onError:s,onLoad:r,format:o,borderRadius:l,rounded:m,name:n,loading:d,icon:u=e(P,{}),ignoreFallback:f,crossOrigin:i,referrerPolicy:c})=>{const h=y({src:t,onError:s,crossOrigin:i,ignoreFallback:f})==="loaded";if(!t||!h)return n?e(T,{name:n,format:o}):x.cloneElement(u,{role:"img"});const p={width:"100%",height:"100%",objectFit:"cover"};return e(g.img,{className:"ui-avatar__image",src:t,srcSet:a,alt:n,loading:d,onLoad:r,referrerPolicy:c,borderRadius:l,rounded:m,__css:p})};export{O as A,B as u};
//# sourceMappingURL=avatar-a96cf288.js.map