"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80150],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>s});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),p=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},m=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(r),s=n,g=u["".concat(o,".").concat(s)]||u[s]||c[s]||l;return r?a.createElement(g,d(d({ref:t},m),{},{components:r})):a.createElement(g,d({ref:t},m))}));function s(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,d=new Array(l);d[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,d[1]=i;for(var p=2;p<l;p++)d[p]=r[p];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},50872:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={title:"$addThreadMember",description:"$addThreadMember will add a member to a thread.",id:"addThreadMember"},d=void 0,i={unversionedId:"functions/Calling/addThreadMember",id:"functions/Calling/addThreadMember",title:"$addThreadMember",description:"$addThreadMember will add a member to a thread.",source:"@site/docs/functions/Calling/addThreadMember.md",sourceDirName:"functions/Calling",slug:"/functions/Calling/addThreadMember",permalink:"/docs/functions/Calling/addThreadMember",draft:!1,tags:[],version:"current",frontMatter:{title:"$addThreadMember",description:"$addThreadMember will add a member to a thread.",id:"addThreadMember"},sidebar:"docs",previous:{title:"$addSelectMenu",permalink:"/docs/functions/Calling/addSelectMenu"},next:{title:"$addTimestamp",permalink:"/docs/functions/Calling/addTimestamp"}},o={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}],m={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$addThreadMember")," will add a member to a thread."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$addThreadMember[channelID;threadID;userID;reason]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"channelID"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"channel ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"threadID"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"thread ID"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"userID"),(0,n.kt)("td",{parentName:"tr",align:null},"integer"),(0,n.kt)("td",{parentName:"tr",align:null},"user id"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"reason"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"reason to display in audit logs"),(0,n.kt)("td",{parentName:"tr",align:"center"},"yes")))),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"This will create a thread and a random user to it:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'addThreadMember',\n  code: `\n  $addThreadMember[$channelID;$get[id];$randomUserID;testing]\n  $let[id;$createThread[$channelID;example;1440;public;$messageID;yes]]  \n  `\n});\n")))}c.isMDXComponent=!0}}]);