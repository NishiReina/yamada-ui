import{j as v}from"./jsx-runtime-5BUNAZ9W.js";import{r}from"./index-4g5l5LRQ.js";import{f as N}from"./forward-ref-A-8Arhkk.js";import{a as C}from"./use-component-style-UguhvTUx.js";import{o as H}from"./theme-provider-YeTkYVXb.js";import{m as T,u as y,a as I,h as u}from"./factory-cZuM5uc7.js";const R={scrollbarWidth:"none",_scrollbar:{display:"none"},"&::-webkit-scrollbar":{display:"none"}},j={_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"},_light:{_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}},_dark:{_scrollbarTrack:{bg:"transparent"},"&::-webkit-scrollbar-track":{bg:"transparent"},_scrollbarThumb:{bg:"transparent"},"&::-webkit-scrollbar-thumb":{bg:"transparent"}}},F=N((S,_)=>{const[i,w]=C("ScrollArea",S),{className:M,type:e="hover",overflow:b="overlay",scrollHideDelay:t=1e3,onScrollPositionChange:a,children:m,innerProps:p,...o}=H(w),[f,d]=r.useState(!1),[l,g]=r.useState(!1),h=e==="always",k=e==="never",n=r.useRef(void 0),c=r.useRef(void 0),x=r.useCallback(()=>{e==="hover"&&(clearTimeout(n.current),d(!0))},[e]),E=r.useCallback(()=>{e==="hover"&&(n.current=setTimeout(()=>d(!1),t))},[t,e]),A=r.useCallback(s=>{a==null||a({x:s.target.scrollLeft,y:s.target.scrollTop}),e==="scroll"&&(l||g(!0),clearTimeout(c.current),c.current=setTimeout(()=>g(!1),t))},[l,a,t,e]);r.useEffect(()=>()=>{n.current&&clearTimeout(n.current),c.current&&clearTimeout(c.current)},[]);const L=r.useMemo(()=>{const s={overflow:b,...i};return k?T(s,R):T(s,!h&&!f&&!l?j:{})},[h,f,k,l,b,i]);return v(y.div,{ref:_,className:I("ui-scroll-area",M),tabIndex:0,__css:L,...o,onMouseEnter:u(o.onMouseEnter,x),onMouseLeave:u(o.onMouseLeave,E),onScroll:u(o.onScroll,A),children:p?v(y.div,{className:"ui-scroll-area__inner",...p,children:m}):m})});export{F as S};