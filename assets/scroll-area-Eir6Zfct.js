import{a as v}from"./jsx-runtime-yA-pgArV.js";import{r}from"./index-IybTgENJ.js";import{f as N}from"./forward-ref-6T0UNPU-.js";import{a as C}from"./use-component-style-_JdcgHxa.js";import{o as H}from"./theme-provider-DF2eZl7U.js";import{m as T,u as y,a as R,h as i}from"./factory-LMyrE5lk.js";const P={scrollbarWidth:"none",_scrollbar:{display:"none"},"&::-webkit-scrollbar":{display:"none"}},j={_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"},_light:{_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}},_dark:{_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}}},F=N((S,_)=>{const[u,w]=C("ScrollArea",S),{className:M,type:e="hover",overflow:b="overlay",scrollHideDelay:t=1e3,onScrollPositionChange:a,children:m,innerProps:p,...o}=H(w),[f,d]=r.useState(!1),[l,g]=r.useState(!1),h=e==="always",k=e==="never",n=r.useRef(void 0),c=r.useRef(void 0),x=r.useCallback(()=>{e==="hover"&&(clearTimeout(n.current),d(!0))},[e]),E=r.useCallback(()=>{e==="hover"&&(n.current=setTimeout(()=>d(!1),t))},[t,e]),A=r.useCallback(s=>{a==null||a({x:s.target.scrollLeft,y:s.target.scrollTop}),e==="scroll"&&(l||g(!0),clearTimeout(c.current),c.current=setTimeout(()=>g(!1),t))},[l,a,t,e]);r.useEffect(()=>()=>{n.current&&clearTimeout(n.current),c.current&&clearTimeout(c.current)},[]);const L=r.useMemo(()=>{const s={overflow:b,...u};return k?T(s,P):T(s,!h&&!f&&!l?j:{})},[h,f,k,l,b,u]);return v(y.div,{ref:_,className:R("ui-scroll-area",M),__css:L,...o,onMouseEnter:i(o.onMouseEnter,x),onMouseLeave:i(o.onMouseLeave,E),onScroll:i(o.onScroll,A),children:p?v(y.div,{className:"ui-scroll-area__inner",...p,children:m}):m})});export{F as S};