"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[88701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,o=new Array(l);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},50990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var r=n(3905),i=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(a)for(var n of a(t))c.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$deleteIn",description:"Deletes bots message in the specified time"},b=void 0,v={unversionedId:"functions/deletein",id:"version-5.5.5/functions/deletein",title:"$deleteIn",description:"Deletes bots message in the specified time",source:"@site/versioned_docs/version-5.5.5/functions/deletein.md",sourceDirName:"functions",slug:"/functions/deletein",permalink:"/ru/docs/5.5.5/functions/deletein",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$deleteIn",description:"Deletes bots message in the specified time"},sidebar:"docs",previous:{title:"$deleteGlobalUserVar",permalink:"/ru/docs/5.5.5/functions/deleteglobaluservar"},next:{title:"$deleteInvite",permalink:"/ru/docs/5.5.5/functions/deleteinvite"}},y={},g=[{value:"Fields",id:"fields",level:4},{value:"Usage",id:"usage",level:4},{value:"Time Suffixes",id:"time-suffixes",level:4}],O={toc:g},k="wrapper";function h(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(k,d(p(p({},O),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function deletes the bot's message in the specified time"),(0,r.kt)("h4",p({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 1 field"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Time ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$deleteIn[time]")," "),(0,r.kt)("p",null,"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Time - The amount of time left until it deletes the bot message")),(0,r.kt)("h4",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "deleteIn",\ncode: `Message wil be deleted in 5 seconds\n$deleteIn[5s]`\n})\n')),(0,r.kt)("h4",p({},{id:"time-suffixes"}),"Time Suffixes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"s - Seconds"),(0,r.kt)("li",{parentName:"ul"},"m - Minutes"),(0,r.kt)("li",{parentName:"ul"},"h - Hours"),(0,r.kt)("li",{parentName:"ul"},"d - Days"),(0,r.kt)("li",{parentName:"ul"},"w - Weeks")))}h.isMDXComponent=!0}}]);