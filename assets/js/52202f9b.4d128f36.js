"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[29622],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51008:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={title:"$serverExists",description:"$serverExists will check if the given guild exists.",id:"serverExists"},l=void 0,s={unversionedId:"functions/Util/serverExists",id:"functions/Util/serverExists",title:"$serverExists",description:"$serverExists will check if the given guild exists.",source:"@site/docs/functions/Util/serverExists.md",sourceDirName:"functions/Util",slug:"/functions/Util/serverExists",permalink:"/docs/functions/Util/serverExists",draft:!1,tags:[],version:"current",frontMatter:{title:"$serverExists",description:"$serverExists will check if the given guild exists.",id:"serverExists"},sidebar:"docs",previous:{title:"$serverEmojiExists",permalink:"/docs/functions/Util/serverEmojiExists"},next:{title:"$spliceTextJoin",permalink:"/docs/functions/Util/spliceTextJoin"}},o={},c=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$serverExists")," will check if the given guild exists."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$serverExists[guildId]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"guildId"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"guild id"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This will return ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," your guild exists:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'serverExists',\n  code: `\n  $serverExists[$guildID]\n  `\n});\n")))}u.isMDXComponent=!0}}]);