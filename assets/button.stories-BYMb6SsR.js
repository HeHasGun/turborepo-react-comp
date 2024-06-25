import{r as x}from"./index-uubelm5h.js";var m={exports:{}},l={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P=x,g=Symbol.for("react.element"),j=Symbol.for("react.fragment"),h=Object.prototype.hasOwnProperty,w=P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,E={key:!0,ref:!0,__self:!0,__source:!0};function y(e,r,t){var o,n={},p=null,d=null;t!==void 0&&(p=""+t),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(d=r.ref);for(o in r)h.call(r,o)&&!E.hasOwnProperty(o)&&(n[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps,r)n[o]===void 0&&(n[o]=r[o]);return{$$typeof:g,type:e,key:p,ref:d,props:n,_owner:w.current}}l.Fragment=j;l.jsx=y;l.jsxs=y;m.exports=l;var b=m.exports;const R=b.jsx,S=b.jsxs;var B=Object.defineProperty,H=Object.defineProperties,T=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?B(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,k=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&f(e,t,r[t]);if(s)for(var t of s(r))O.call(r,t)&&f(e,t,r[t]);return e},I=(e,r)=>H(e,T(r)),N=(e,r)=>{var t={};for(var o in e)v.call(e,o)&&r.indexOf(o)<0&&(t[o]=e[o]);if(e!=null&&s)for(var o of s(e))r.indexOf(o)<0&&O.call(e,o)&&(t[o]=e[o]);return t};function i(e){var r=e,{children:t}=r,o=N(r,["children"]);return S("button",I(k({type:"button"},o),{children:[t,t,t]}))}i.displayName="Button";const D={component:i,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},a={render:e=>R(i,{...e,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello"}),name:"Button",args:{children:"Hello",type:"button",style:{color:"blue",border:"1px solid gray",padding:10,borderRadius:10}}};var _,u,c;a.parameters={...a.parameters,docs:{...(_=a.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello
    </Button>,
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(c=(u=a.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const L=["Primary"];export{a as Primary,L as __namedExportsOrder,D as default};
