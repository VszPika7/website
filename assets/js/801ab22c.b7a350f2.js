"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[47058],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),u=p(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(g,l(l({ref:e},s),{},{components:n})):r.createElement(g,l({ref:e},s))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},47367:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"$interactionEdit",description:"$interactionEdit will return edit an interaction.",id:"interactionEdit"},l=void 0,o={unversionedId:"functions/event/interactionEdit",id:"functions/event/interactionEdit",title:"$interactionEdit",description:"$interactionEdit will return edit an interaction.",source:"@site/docs/functions/event/interactionEdit.md",sourceDirName:"functions/event",slug:"/functions/event/interactionEdit",permalink:"/docs/functions/event/interactionEdit",draft:!1,tags:[],version:"current",frontMatter:{title:"$interactionEdit",description:"$interactionEdit will return edit an interaction.",id:"interactionEdit"},sidebar:"docs",previous:{title:"$interactionDelete",permalink:"/docs/functions/event/interactionDelete"},next:{title:"$interactionFollowUp",permalink:"/docs/functions/event/interactionFollowUp"}},c={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:p};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionEdit")," will return edit an interaction."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$interactionEdit[content?;embeds?;components?;files?;allowedMentions?]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"content?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"New message content."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"embeds?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Embed parser."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"components?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Component parser."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"files?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"File parser."),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allowedMentions?"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"Allowed mentions? ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"users")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"roles")," ",(0,a.kt)("br",null)," 3. ",(0,a.kt)("strong",{parentName:"td"},"everyone")),(0,a.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.interactionCommand({\n    name: "interactionEdit",\n    prototype: "slash",\n    code: `\n  $interactionEdit[Bye, World!;;;;everyone]\n  $wait[5s]\n  $interactionReply[Hello, World!;;;;everyone;false]\n  `\n});\n')))}d.isMDXComponent=!0}}]);