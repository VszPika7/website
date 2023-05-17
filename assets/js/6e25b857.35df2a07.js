"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43767],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>f});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,d=m["".concat(u,".").concat(f)]||m[f]||p[f]||i;return t?n.createElement(d,a(a({ref:r},s),{},{components:t})):n.createElement(d,a({ref:r},s))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},36203:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={title:"$hour",description:"$hour will return the current hour in CST.",id:"hour"},a=void 0,c={unversionedId:"functions/misc/hour",id:"functions/misc/hour",title:"$hour",description:"$hour will return the current hour in CST.",source:"@site/docs/functions/misc/hour.md",sourceDirName:"functions/misc",slug:"/functions/misc/hour",permalink:"/docs/functions/misc/hour",draft:!1,tags:[],version:"current",frontMatter:{title:"$hour",description:"$hour will return the current hour in CST.",id:"hour"},sidebar:"docs",previous:{title:"$getObjectProperty",permalink:"/docs/functions/misc/getObjectProperty"},next:{title:"$humanizeMs",permalink:"/docs/functions/misc/humanizeMs"}},u={},l=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:l};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$hour")," will return the current hour in CST."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$hour\n")),(0,o.kt)("h2",{id:"examples"},"Example(s)"),(0,o.kt)("p",null,"This will returns the current hour:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "hour",\n    code: `\n    $hour\n    `\n});\n')),(0,o.kt)("p",null,"You can change the timezone using ",(0,o.kt)("inlineCode",{parentName:"p"},"$timezone"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\n    name: "hour",\n    code: `\n    $hour \n    $timezone[America/New_York]\n    ` // returns current hour in New York\n});\n')))}p.isMDXComponent=!0}}]);