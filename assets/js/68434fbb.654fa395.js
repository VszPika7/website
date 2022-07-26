"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[78580],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),f=a,y=m["".concat(i,".").concat(f)]||m[f]||u[f]||s;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<s;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},46046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const s={title:"$messageType",description:"Returns the type of this message."},o=void 0,l={unversionedId:"functions/messagetype",id:"version-5.5.5/functions/messagetype",title:"$messageType",description:"Returns the type of this message.",source:"@site/versioned_docs/version-5.5.5/functions/messagetype.md",sourceDirName:"functions",slug:"/functions/messagetype",permalink:"/docs/functions/messagetype",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$messageType",description:"Returns the type of this message."},sidebar:"docs",previous:{title:"$messageSlice",permalink:"/docs/functions/messageslice"},next:{title:"$messageURL",permalink:"/docs/functions/messageurl"}},i={},p=[{value:"Usage:",id:"usage",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The type of the current message, e.g. DEFAULT. Here are the available message types:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DEFAULT"),(0,a.kt)("li",{parentName:"ul"},"RECIPIENT","_","ADD"),(0,a.kt)("li",{parentName:"ul"},"RECIPIENT","_","REMOVE"),(0,a.kt)("li",{parentName:"ul"},"CALL"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","NAME","_","CHANGE"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","ICON","_","CHANGE"),(0,a.kt)("li",{parentName:"ul"},"PINS","_","ADD"),(0,a.kt)("li",{parentName:"ul"},"GUILD","_","MEMBER","_","JOIN"),(0,a.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION"),(0,a.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","1"),(0,a.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","2"),(0,a.kt)("li",{parentName:"ul"},"USER","_","PREMIUM","_","GUILD","_","SUBSCRIPTION","_","TIER","_","3"),(0,a.kt)("li",{parentName:"ul"},"CHANNEL","_","FOLLOW","_","ADD"),(0,a.kt)("li",{parentName:"ul"},"GUILD","_","DISCOVERY","_","DISQUALIFIED"),(0,a.kt)("li",{parentName:"ul"},"GUILD","_","DISCOVERY","_","REQUALIFIED")),(0,a.kt)("h4",{id:"usage"},"Usage:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'bot.command({\nname: "$alwaysExecute",\ncode: `\nThe server has reached boost level 3! \ud83c\udf89\n$onlyIf[$messageType==USER_PREMIUM_GUILD_SUBSCRIPTION_TIER_3;]\n')))}u.isMDXComponent=!0}}]);