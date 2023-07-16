"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56749],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),f=o,d=u["".concat(l,".").concat(f)]||u[f]||m[f]||a;return n?t.createElement(d,i(i({ref:r},p),{},{components:n})):t.createElement(d,i({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98678:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>v,contentTitle:()=>y,default:()=>w,frontMatter:()=>d,metadata:()=>b,toc:()=>O});var t=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,n)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[r]=n,u=(e,r)=>{for(var n in r||(r={}))l.call(r,n)&&p(e,n,r[n]);if(c)for(var n of c(r))s.call(r,n)&&p(e,n,r[n]);return e},m=(e,r)=>a(e,i(r)),f=(e,r)=>{var n={};for(var t in e)l.call(e,t)&&r.indexOf(t)<0&&(n[t]=e[t]);if(null!=e&&c)for(var t of c(e))r.indexOf(t)<0&&s.call(e,t)&&(n[t]=e[t]);return n};const d={title:"$random",description:"returns a random number from min to max"},y=void 0,b={unversionedId:"functions/random",id:"version-5.5.5/functions/random",title:"$random",description:"returns a random number from min to max",source:"@site/versioned_docs/version-5.5.5/functions/random.md",sourceDirName:"functions",slug:"/functions/random",permalink:"/uk/docs/5.5.5/functions/random",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$random",description:"returns a random number from min to max"},sidebar:"docs",previous:{title:"$ram",permalink:"/uk/docs/5.5.5/functions/ram"},next:{title:"$randomChannelID",permalink:"/uk/docs/5.5.5/functions/randomchannelid"}},v={},O=[],g={toc:O},j="wrapper";function w(e){var r=e,{components:n}=r,o=f(r,["components"]);return(0,t.kt)(j,m(u(u({},g),o),{components:n,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"This function returns a random number from the specified values"),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$random[min;max;allowDecimals (yes/no)\n")),(0,t.kt)("pre",null,(0,t.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname:"random",\ncode:`$random[1;10;yes]`\n//Returns a number between 1 and 10\n})\n')))}w.isMDXComponent=!0}}]);