"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[88701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},56070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>a,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const l={title:"$deleteIn",description:"Deletes bots message in the specified time"},o=void 0,a={unversionedId:"functions/deletein",id:"version-5.5.5/functions/deletein",title:"$deleteIn",description:"Deletes bots message in the specified time",source:"@site/versioned_docs/version-5.5.5/functions/deletein.md",sourceDirName:"functions",slug:"/functions/deletein",permalink:"/docs/functions/deletein",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$deleteIn",description:"Deletes bots message in the specified time"},sidebar:"docs",previous:{title:"$deleteGlobalUserVar",permalink:"/docs/functions/deleteglobaluservar"},next:{title:"$deleteInvite",permalink:"/docs/functions/deleteinvite"}},s={},c=[{value:"Fields",id:"fields",level:4},{value:"Usage",id:"usage",level:4},{value:"Time Suffixes",id:"time-suffixes",level:4}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function deletes the bot's message in the specified time"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function has 1 field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Time ","(","Required",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$deleteIn[time]")," "),(0,i.kt)("p",null,"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Time - The amount of time left until it deletes the bot message")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deleteIn",\ncode: `Message wil be deleted in 5 seconds\n$deleteIn[5s]`\n})\n')),(0,i.kt)("h4",{id:"time-suffixes"},"Time Suffixes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"s - Seconds"),(0,i.kt)("li",{parentName:"ul"},"m - Minutes"),(0,i.kt)("li",{parentName:"ul"},"h - Hours"),(0,i.kt)("li",{parentName:"ul"},"d - Days"),(0,i.kt)("li",{parentName:"ul"},"w - Weeks")))}d.isMDXComponent=!0}}]);