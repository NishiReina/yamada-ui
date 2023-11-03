import{a as u,j as D,F}from"./jsx-runtime-b08f8875.js";import{r as f}from"./index-8ee6c85d.js";import{u as S}from"./environment-provider-c01394a3.js";import{L as g,h as L}from"./factory-ab7c3580.js";import{T as h}from"./text-50bfeca2.js";import"./_commonjsHelpers-de833af9.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-95ca0d59.js";import"./forward-ref-cf7188bd.js";import"./use-component-style-07e84389.js";import"./theme-provider-1097130b.js";const Q=(t,{ssr:i=!0,fallback:c}={})=>{const{getWindow:m}=S(),d=L(t)?t:[t];let p=L(c)?c:[c];p=p.filter(r=>r!=null);const[j,x]=f.useState(()=>d.map((r,s)=>({media:r,matches:i?!!p[s]:m().matchMedia(r).matches})));return f.useEffect(()=>{const r=m();x(d.map(e=>({media:e,matches:r.matchMedia(e).matches})));const s=d.map(e=>r.matchMedia(e)),a=e=>{x(y=>y.slice().map(l=>l.media===e.media?{...l,matches:e.matches}:l))};return s.forEach(e=>{g(e.addListener)?e.addListener(a):e.addEventListener("change",a)}),()=>{s.forEach(e=>{g(e.removeListener)?e.removeListener(a):e.removeEventListener("change",a)})}},[m]),j.map(r=>r.matches)},G={title:"Hooks / useMediaQuery"},o=()=>{const[t]=Q("(min-width: 1280px)");return u(h,{children:t?"larger than 1280px":"smaller than 1280px"})},n=()=>{const[t,i]=Q(["(min-width: 1280px)","(prefers-color-scheme: dark)"]);return D(F,{children:[u(h,{children:t?"larger than 1280px":"smaller than 1280px"}),u(h,{children:i?"color mode is dark":"color mode is light"})]})};var M,E,T;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [flg] = useMediaQuery('(min-width: 1280px)');
  return <Text>{flg ? 'larger than 1280px' : 'smaller than 1280px'}</Text>;
}`,...(T=(E=o.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var k,v,w;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isLarge, isDark] = useMediaQuery(['(min-width: 1280px)', '(prefers-color-scheme: dark)']);
  return <>
      <Text>{isLarge ? 'larger than 1280px' : 'smaller than 1280px'}</Text>
      <Text>{isDark ? 'color mode is dark' : 'color mode is light'}</Text>
    </>;
}`,...(w=(v=n.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const I=["basic","useMulti"];export{I as __namedExportsOrder,o as basic,G as default,n as useMulti};
//# sourceMappingURL=use-media-query.stories-320c691b.js.map