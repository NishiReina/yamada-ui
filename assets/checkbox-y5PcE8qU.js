import{j as l,a as te}from"./jsx-runtime-TtYKBvr-.js";import{t as ae}from"./index-KC9DbLMk.js";import{r as o}from"./index-IybTgENJ.js";import{u as se}from"./index-znEHh1qe.js";import{a as Y,u as oe,g as E}from"./form-control-5i85VEjC.js";import{g as L,c as ie,v as ce,a as z,o as A,p as H,Y as le,u as R,b as j,e as re,Q as B,w as W,K as w,h as b}from"./factory-APG2CWDq.js";import{A as ue}from"./index-dKw0visz.js";import{m as K}from"./motion-RGBG165B.js";import{u as de}from"./use-component-style-XlqdEMGL.js";import{o as he}from"./theme-provider-rjxHA_Gz.js";import{F as fe}from"./flex-efS-RiWe.js";const Q=t=>t&&H(t)&&H(t.target),me=({isNative:t,...u})=>{u.onChange=L(u.onChange);const[e,c]=se({value:u.value,defaultValue:u.defaultValue||[],onChange:u.onChange}),d=o.useCallback(a=>{const m=Q(a)?a.target.checked:!e.includes(a),i=Q(a)?a.target.value:a,s=m?[...e,i]:e.filter(y=>String(y)!==String(i));c(s)},[e,c]),x=o.useCallback((a,m=null)=>({...a,ref:m,[t?"checked":"isChecked"]:e.some(i=>String(a==null?void 0:a.value)===String(i)),onChange:d}),[d,t,e]);return{value:e,setValue:c,onChange:d,getCheckboxProps:x}},[ke,Ce]=ie({strict:!1,name:"CheckboxGroupContext"}),be=o.forwardRef(({className:t,size:u,variant:e,colorScheme:c,children:d,items:x=[],direction:a="column",gap:m,...i},s)=>{const{value:y,onChange:I}=me(i),{isRequired:D,isReadOnly:p,isDisabled:P,isInvalid:S}=Y(i),h=ce(d);let v=[];return!h.length&&x.length&&(v=x.map(({label:k,value:r,...F},_)=>l(J,{value:r,...F,children:k},_))),l(ke,{value:{size:u,variant:e,colorScheme:c,isRequired:D,isReadOnly:p,isDisabled:P,isInvalid:S,value:y,onChange:I},children:l(fe,{ref:s,className:z("ui-checkbox-group",t),role:"group",direction:a,gap:m??(a==="row"?"1rem":void 0),...A(i,["value","defaultValue","onChange","isInvalid","isDisabled","isRequired","isReadOnly"]),children:d??v})})});be.displayName="CheckboxGroup";const ve=t=>{const{name:u,value:e,defaultIsChecked:c,tabIndex:d,required:x,disabled:a,readOnly:m,isIndeterminate:i,...s}=oe(t),y=t.id||o.useId(),[I,D]=o.useState(!1),[p,P]=o.useState(!1),[S,h]=o.useState(!1),[v,k]=o.useState(!1),r=o.useRef(null),[F,_]=o.useState(!0),[q,M]=o.useState(!!c),N=t.isChecked!==void 0,C=N?t.isChecked:q,G=L(n=>{var g;if(m||a){n.preventDefault();return}N||M(!C||i?!0:n.target.checked),(g=s.onChange)==null||g.call(s,n)},[m,a,N,C,i]),U=L(s.onBlur),V=L(s.onFocus),O=o.useCallback(({key:n})=>{n===" "&&k(!0)},[k]),T=o.useCallback(({key:n})=>{n===" "&&k(!1)},[k]);o.useEffect(()=>ae(D),[]),j(()=>{r.current&&(r.current.indeterminate=!!i)},[i]),re(()=>{a&&P(!1)},[a,P]),j(()=>{var n;(n=r.current)!=null&&n.form&&(r.current.form.onreset=()=>M(!!c))},[]),j(()=>{r.current&&r.current.checked!==C&&M(r.current.checked)},[r.current]);const Z=o.useCallback((n={},g=null)=>({...B(s,E({omit:["aria-readonly"]})),...n,ref:W(g,f=>{f&&_(f.tagName==="LABEL")}),"data-checked":w(C),onClick:b(n.onClick,()=>{var f;F||((f=r.current)==null||f.click(),requestAnimationFrame(()=>{var X;return(X=r.current)==null?void 0:X.focus()}))})}),[C,F,s]),$=o.useCallback((n={},g=null)=>({...B(s,E({omit:["aria-readonly"]})),...n,ref:g,"data-active":w(v),"data-hover":w(S),"data-checked":w(C),"data-focus":w(p),"data-focus-visible":w(p&&I),"data-indeterminate":w(i),"aria-hidden":!0,onMouseDown:b(n.onMouseDown,f=>{p&&f.preventDefault(),k(!0)}),onMouseUp:b(n.onMouseUp,()=>k(!1)),onMouseEnter:b(n.onMouseEnter,()=>h(!0)),onMouseLeave:b(n.onMouseLeave,()=>h(!1))}),[v,C,p,S,I,i,s]),ee=o.useCallback((n={},g=null)=>({...B(s,E({omit:["aria-readonly"]})),...n,ref:W(r,g),id:y,type:"checkbox",name:u,value:e,tabIndex:d,required:x,disabled:a,readOnly:m,checked:C,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:b(n.onChange,G),onBlur:b(n.onBlur,U,()=>P(!1)),onFocus:b(n.onFocus,V,()=>P(!0)),onKeyDown:b(n.onKeyDown,O),onKeyUp:b(n.onKeyUp,T)}),[s,y,u,e,d,x,a,m,C,G,U,V,O,T]),ne=o.useCallback((n={},g=null)=>({...B(s,E({omit:["aria-readonly"]})),...n,ref:g,"data-checked":w(C),onMouseDown:b(n.onMouseDown,f=>{f.preventDefault(),f.stopPropagation()}),onTouchStart:b(n.onTouchStart,f=>{f.preventDefault(),f.stopPropagation()})}),[C,s]);return{isFocusVisible:I,isFocused:p,isHovered:S,isActive:v,isChecked:C,isIndeterminate:i,getContainerProps:Z,getIconProps:$,getInputProps:ee,getLabelProps:ne}},J=o.forwardRef((t,u)=>{const e=Ce(),c=Y(t),[d,x]=de("Checkbox",{...e?A(e,["value"]):{},...t}),{className:a,gap:m="0.5rem",isRequired:i=(e==null?void 0:e.isRequired)??c.isRequired,isReadOnly:s=(e==null?void 0:e.isReadOnly)??c.isReadOnly,isDisabled:y=(e==null?void 0:e.isDisabled)??c.isDisabled,isInvalid:I=(e==null?void 0:e.isInvalid)??c.isInvalid,iconProps:D,inputProps:p,labelProps:P,children:S,...h}=he(x),{isChecked:v,isIndeterminate:k,getContainerProps:r,getInputProps:F,getIconProps:_,getLabelProps:q}=ve({...h,isRequired:i,isReadOnly:s,isDisabled:y,isInvalid:I,isChecked:e!=null&&e.value&&h.value?e.value.includes(h.value):h.isChecked,onChange:e!=null&&e.onChange&&h.value?le(e.onChange,h.onChange):h.onChange}),M=o.cloneElement((D==null?void 0:D.children)??l(ge,{}),{__css:{opacity:v||k?1:0,transform:v||k?"scale(1)":"scale(0.95)",transitionProperty:"transform",transitionDuration:"normal"},isIndeterminate:k,isChecked:v,isRequired:i,isReadOnly:s,isDisabled:y,isInvalid:I});return te(R.label,{className:z("ui-checkbox",a),...r(),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:m,...d.container},...A(h,["id","name","value","defaultValue","defaultIsChecked","isChecked","isIndeterminate","onChange","onBlur","onFocus","tabIndex"]),children:[l(R.input,{className:"ui-checkbox__input",...F(p,u)}),l(R.span,{className:"ui-checkbox__icon",__css:{pointerEvents:s?"none":void 0,position:"relative",display:"inline-block",userSelect:"none",...d.icon},..._(A(D??{children:void 0},["children"])),children:M}),l(R.span,{className:"ui-checkbox__label",__css:{...d.label},...q(P),children:S})]})});J.displayName="Checkbox";const ge=({isIndeterminate:t,isChecked:u,...e})=>{const c=A(e,["isRequired","isReadOnly","isDisabled","isInvalid"]);return l(ue,{initial:!1,children:t||u?l(R.div,{__css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:l(R.div,{as:K.div,variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:t?l(ye,{...c}):l(xe,{...c})})}):null})},xe=t=>l(R.svg,{as:K.svg,width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...t,children:l("polyline",{points:"1.5 6 4.5 9 10.5 1"})}),ye=t=>l(R.svg,{as:K.svg,width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...t,children:l("line",{x1:"21",x2:"3",y1:"12",y2:"12"})});export{J as C,be as a,ve as b,me as u};