"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4333],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=r.createContext({}),p=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),d=o,f=c["".concat(m,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},63188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={title:"$memberJoinPosition",description:"$memberJoinPosition will return a members join position.",id:"memberJoinPosition"},a=void 0,l={unversionedId:"functions/Info/memberJoinPosition",id:"functions/Info/memberJoinPosition",title:"$memberJoinPosition",description:"$memberJoinPosition will return a members join position.",source:"@site/docs/functions/Info/memberJoinPosition.md",sourceDirName:"functions/Info",slug:"/functions/Info/memberJoinPosition",permalink:"/docs/functions/Info/memberJoinPosition",draft:!1,tags:[],version:"current",frontMatter:{title:"$memberJoinPosition",description:"$memberJoinPosition will return a members join position.",id:"memberJoinPosition"},sidebar:"docs",previous:{title:"$memberAvatar",permalink:"/docs/functions/Info/memberAvatar"},next:{title:"$membersCount",permalink:"/docs/functions/Info/membersCount"}},m={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"$memberJoinPosition")," will return a members join position."),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"$memberJoinPosition[userID?;guildID?]\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"userID?"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"the ID of the member"),(0,o.kt)("td",{parentName:"tr",align:"center"},"no")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,o.kt)("td",{parentName:"tr",align:null},"integer"),(0,o.kt)("td",{parentName:"tr",align:null},"the ID of the guild"),(0,o.kt)("td",{parentName:"tr",align:"center"},"no")))),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"This will return your join position, if you're the owner then it'd be ",(0,o.kt)("inlineCode",{parentName:"p"},"1"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'memberJoinPosition',\n  code: `\n  $memberJoinPosition[$authorID;$guildID]\n  `\n});\n")))}u.isMDXComponent=!0}}]);