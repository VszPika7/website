"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71142],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),s=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,l=e.originalType,a=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(r),f=i,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||l;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=r.length,c=new Array(l);c[0]=f;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[u]="string"==typeof e?e:i,c[1]=o;for(var s=2;s<l;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},62699:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var n=r(3905),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&p(e,r,t[r]);if(o)for(var r of o(t))s.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,c(t)),f=(e,t)=>{var r={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$clientID",description:"$clientID will return the client's Discord User ID.",id:"clientID"},y=void 0,b={unversionedId:"functions/client-related/clientID",id:"functions/client-related/clientID",title:"$clientID",description:"$clientID will return the client's Discord User ID.",source:"@site/docs/functions/client-related/clientID.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientID",permalink:"/ru/docs/7.0.0/functions/client-related/clientID",draft:!1,tags:[],version:"current",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$clientID",description:"$clientID will return the client's Discord User ID.",id:"clientID"},sidebar:"docs",previous:{title:"Setup",permalink:"/ru/docs/7.0.0/guides/setup"}},v={},O=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],g={toc:O},D="wrapper";function w(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(D,d(u(u({},g),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$clientID")," will return the client's Discord User ID."),(0,n.kt)("h2",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$clientID\n")),(0,n.kt)("h2",u({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will return the client's ID:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientID',\n    code: `\n  $clientID\n  `\n});\n")))}w.isMDXComponent=!0}}]);