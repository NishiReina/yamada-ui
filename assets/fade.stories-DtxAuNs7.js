import{j as u}from"./jsx-runtime-CKrituN3.js";import{u as s}from"./index-rYLD436_.js";import{F as l}from"./fade-CvLvDueu.js";import{B as d}from"./button-BVpNPTtI.js";import{B as o}from"./box-DbelsMaR.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-_tcQm2Fk.js";import"./motion-JgkBPv6g.js";import"./motion-CnBSKlMk.js";import"./forward-ref-DuAegr0M.js";import"./factory-Of2RQyuI.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-BPGUNDjC.js";import"./utils-DDBoqB94.js";import"./use-ripple-B3KRFMgv.js";import"./loading-1HRbNEiS.js";import"./index-YpBXZaf8.js";import"./theme-provider-hRojBB0d.js";import"./index-BH_1AbQL.js";import"./index-ByT6p88B.js";import"./icon-CdBlBeK_.js";import"./use-component-style-D7EDsEkU.js";const I={title:"Components / Transitions / Fade",component:l},r=()=>{const[n,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:n,children:u.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},t=()=>{const[n,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:n,duration:.4,children:u.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})},i=()=>{const[n,{toggle:e}]=s();return u.jsxs(u.Fragment,{children:[u.jsx(d,{onClick:e,children:"Please Click"}),u.jsx(l,{isOpen:n,unmountOnExit:!0,children:u.jsx(o,{w:"full",bg:"orange.500",rounded:"md",p:"md",color:"white",children:"クリリンのことか……クリリンのことかーーーっ！！！！！"})}),u.jsx(o,{w:"full",bg:"purple.500",rounded:"md",p:"md",color:"white",children:"私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……"})]})};var F,m,p;r.parameters={...r.parameters,docs:{...(F=r.parameters)==null?void 0:F.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var c,a,B;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} duration={0.4}>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(B=(a=t.parameters)==null?void 0:a.docs)==null?void 0:B.source}}};var g,C,x;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const [isOpen, {
    toggle
  }] = useBoolean();
  return <>
      <Button onClick={toggle}>Please Click</Button>

      <Fade isOpen={isOpen} unmountOnExit>
        <Box w="full" bg="orange.500" rounded="md" p="md" color="white">
          クリリンのことか……クリリンのことかーーーっ！！！！！
        </Box>
      </Fade>

      <Box w="full" bg="purple.500" rounded="md" p="md" color="white">
        私の戦闘力は530000です。ですがもちろんフルパワーであなたと戦う気はありませんからご心配なく……
      </Box>
    </>;
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const J=["basic","withDuration","exitUnmount"];export{J as __namedExportsOrder,r as basic,I as default,i as exitUnmount,t as withDuration};