"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24541],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},m=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),p=l(t),f=i,d=p["".concat(u,".").concat(f)]||p[f]||s[f]||o;return t?r.createElement(d,a(a({ref:n},m),{},{components:t})):r.createElement(d,a({ref:n},m))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},74647:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(87462),i=(t(67294),t(3905));const o={title:"$minute",description:"$minute will return the current minute in CST.",id:"minute"},a=void 0,c={unversionedId:"functions/misc/minute",id:"functions/misc/minute",title:"$minute",description:"$minute will return the current minute in CST.",source:"@site/docs/functions/misc/minute.md",sourceDirName:"functions/misc",slug:"/functions/misc/minute",permalink:"/docs/functions/misc/minute",draft:!1,tags:[],version:"current",frontMatter:{title:"$minute",description:"$minute will return the current minute in CST.",id:"minute"},sidebar:"docs",previous:{title:"$map",permalink:"/docs/functions/misc/map"},next:{title:"$month",permalink:"/docs/functions/misc/month"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],m={toc:l};function s(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$minute")," will return the current minute in CST."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$minute\n")),(0,i.kt)("h2",{id:"examples"},"Example(s)"),(0,i.kt)("p",null,"This will returns the current minute:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "minute",\n    code: `\n    $minute\n    `\n});\n')),(0,i.kt)("p",null,"You can change the timezone using ",(0,i.kt)("inlineCode",{parentName:"p"},"$timezone"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "minute",\n    code: `\n    $minute \n    $timezone[America/New_York]\n    ` // returns current minute in New York\n});\n')))}s.isMDXComponent=!0}}]);