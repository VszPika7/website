"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78716],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=l.createContext({}),s=function(e){var n=l.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return l.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},d=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?l.createElement(h,i(i({ref:n},p),{},{components:t})):l.createElement(h,i({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<r;s++)i[s]=t[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,t)}d.displayName="MDXCreateElement"},77756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var l=t(87462),a=(t(67294),t(3905));const r={title:"$deleteChannels",description:"$deleteChannels will delete a multiple channels.",id:"deleteChannels"},i=void 0,o={unversionedId:"functions/Calling/deleteChannels",id:"functions/Calling/deleteChannels",title:"$deleteChannels",description:"$deleteChannels will delete a multiple channels.",source:"@site/docs/functions/Calling/deleteChannels.md",sourceDirName:"functions/Calling",slug:"/functions/Calling/deleteChannels",permalink:"/docs/functions/Calling/deleteChannels",draft:!1,tags:[],version:"current",frontMatter:{title:"$deleteChannels",description:"$deleteChannels will delete a multiple channels.",id:"deleteChannels"},sidebar:"docs",previous:{title:"$deleteChannel",permalink:"/docs/functions/Calling/deleteChannel"},next:{title:"$deleteCommand",permalink:"/docs/functions/Calling/deleteCommand"}},c={},s=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,l.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$deleteChannels")," will delete a multiple channels."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$deleteChannels[...channels]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"channels"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"channel IDs"),(0,a.kt)("td",{parentName:"tr",align:"center"},"yes")))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"This will delete multiple channels, make sure to replace the arguments:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'deleteChannels',\n  code: `\n  $deleteChannels[channelID1;channelID2;channelID3;channelID4]\n  `\n});\n")))}u.isMDXComponent=!0}}]);