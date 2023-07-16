"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[41885],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},80456:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>b});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$uri",description:"Decodes or Encodes an URL."},y=void 0,g={unversionedId:"functions/uri",id:"version-5.5.5/functions/uri",title:"$uri",description:"Decodes or Encodes an URL.",source:"@site/versioned_docs/version-5.5.5/functions/uri.md",sourceDirName:"functions",slug:"/functions/uri",permalink:"/uk/docs/5.5.5/functions/uri",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$uri",description:"Decodes or Encodes an URL."},sidebar:"docs",previous:{title:"$uptime",permalink:"/uk/docs/5.5.5/functions/uptime"},next:{title:"$useChannel",permalink:"/uk/docs/5.5.5/functions/usechannel"}},v={},b=[{value:"Example usage to encode:",id:"example-usage-to-encode",level:2},{value:"Example usage to decode:",id:"example-usage-to-decode",level:2}],O={toc:b},h="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(h,d(p(p({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function decodes or encodes an URL."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$uri[encode/decode;text]")),(0,r.kt)("h2",p({},{id:"example-usage-to-encode"}),"Example usage to encode:"),(0,r.kt)("p",null,"The following example returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello%20ElTuna%230001!%20(this%20is%20a%20test)")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "encode",\ncode: `\n$uri[encode;Hello ElTuna#0001! (this is a test)]\n`})\n')),(0,r.kt)("h2",p({},{id:"example-usage-to-decode"}),"Example usage to decode:"),(0,r.kt)("p",null,"The following example returns ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello ElTuna#0001! (this is a test)")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "decode",\ncode: `\n$uri[decode;Hello%20ElTuna%230001!%20(this%20is%20a%20test)]\n`})\n')),(0,r.kt)("p",null,"You find a full list of encode characters ",(0,r.kt)("a",p({parentName:"p"},{href:"https://www.w3schools.com/tags/ref_urlencode.ASP"}),"here"),"."))}k.isMDXComponent=!0}}]);