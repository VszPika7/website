"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27638],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>d});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},v=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),v=c(t),d=a,f=v["".concat(s,".").concat(d)]||v[d]||u[d]||l;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=v;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}v.displayName="MDXCreateElement"},24489:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const l={title:"$serverAvailable",description:"$serverAvailable will return if the given guild is available on Discord.",id:"serverAvailable"},i=void 0,o={unversionedId:"functions/Info/serverAvailable",id:"functions/Info/serverAvailable",title:"$serverAvailable",description:"$serverAvailable will return if the given guild is available on Discord.",source:"@site/docs/functions/Info/serverAvailable.md",sourceDirName:"functions/Info",slug:"/functions/Info/serverAvailable",permalink:"/docs/functions/Info/serverAvailable",draft:!1,tags:[],version:"current",frontMatter:{title:"$serverAvailable",description:"$serverAvailable will return if the given guild is available on Discord.",id:"serverAvailable"},sidebar:"docs",previous:{title:"$serverAFKChannelID",permalink:"/docs/functions/Info/serverAFKChannelID"},next:{title:"$serverBanner",permalink:"/docs/functions/Info/serverBanner"}},s={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$serverAvailable")," will return if the given guild is available on Discord."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$serverAvailable[guildID?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"guild ID"),(0,a.kt)("td",{parentName:"tr",align:"center"},"no")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This will return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," depending on if the guild is available:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'serverAvailable',\n  code: `\n  $serverAvailable[$guildID]\n  `\n});\n")))}u.isMDXComponent=!0}}]);