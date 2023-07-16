"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,d=u["".concat(s,".").concat(f)]||u[f]||m[f]||i;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},90844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>j,default:()=>g,frontMatter:()=>d,metadata:()=>y,toc:()=>b});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>i(e,a(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const d={title:"$emoji"},j=void 0,y={unversionedId:"functions/emoji",id:"version-5.5.5/functions/emoji",title:"$emoji",description:"This function returns the specified property from the given emojiID",source:"@site/versioned_docs/version-5.5.5/functions/emoji.md",sourceDirName:"functions",slug:"/functions/emoji",permalink:"/es/docs/5.5.5/functions/emoji",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$emoji"},sidebar:"docs",previous:{title:"$editWebhookMessage",permalink:"/es/docs/5.5.5/functions/editwebhookmessage"},next:{title:"$emojiCount",permalink:"/es/docs/5.5.5/functions/emojicount"}},v={},b=[{value:"This function has2 fields",id:"this-function-has2-fields",level:4},{value:"Options",id:"options",level:4},{value:"Available Properties",id:"available-properties",level:4}],h={toc:b},O="wrapper";function g(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(O,m(u(u({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns the specified property from the given emojiID"),(0,r.kt)("h4",u({},{id:"this-function-has2-fields"}),"This function has2 fields"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Emoji ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,r.kt)("p",null,"Raw Usage:  ",(0,r.kt)("inlineCode",{parentName:"p"},"$emoji[emojiID;property]")),(0,r.kt)("h4",u({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Emoji ID - The emoji from what ","<","property",">"," is  based off of"),(0,r.kt)("li",{parentName:"ul"},"Property - The property of the ","<","emoji",">")),(0,r.kt)("h4",u({},{id:"available-properties"}),"Available Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name - Emoji's name"),(0,r.kt)("li",{parentName:"ul"},"id - Emoji's id"),(0,r.kt)("li",{parentName:"ul"},"created - Emoji's date and time of creation"),(0,r.kt)("li",{parentName:"ul"},"url - Emoji's URL"),(0,r.kt)("li",{parentName:"ul"},"identifier - Emoji's name:id"),(0,r.kt)("li",{parentName:"ul"},"isanimated - Whether or not the emoji is animated, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"isdeleted - Whether or not the emoji is deleted, Returns Boolean"),(0,r.kt)("li",{parentName:"ul"},"guildid - Emoji's guild of origin"),(0,r.kt)("li",{parentName:"ul"},"ismanaged - Whether or not the emoji is a custom or discord default emoji, Returns Boolean")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "emoji",\ncode: `\n$emoji[815215293353426944;name]\n`\n})\n\n//Or the specified emoji\n\nbot.command({\nname: "emoji",\ncode: `\n$emoji[$message;name]\n`\n})\n')))}g.isMDXComponent=!0}}]);