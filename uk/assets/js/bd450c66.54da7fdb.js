"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87218],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78401:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>k,frontMatter:()=>m,metadata:()=>g,toc:()=>v});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$getEmbed",description:"Gets information on an embed"},b=void 0,g={unversionedId:"functions/getembed",id:"version-5.5.5/functions/getembed",title:"$getEmbed",description:"Gets information on an embed",source:"@site/versioned_docs/version-5.5.5/functions/getembed.md",sourceDirName:"functions",slug:"/functions/getembed",permalink:"/uk/docs/5.5.5/functions/getembed",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$getEmbed",description:"Gets information on an embed"},sidebar:"docs",previous:{title:"$getCustomStatus",permalink:"/uk/docs/5.5.5/functions/getcustomstatus"},next:{title:"$getGlobalUserVar",permalink:"/uk/docs/5.5.5/functions/getglobaluservar"}},y={},v=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],O={toc:v},h="wrapper";function k(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(h,d(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function gets the ","<","property",">"," of the embed"),(0,r.kt)("h4",u({},{id:"fields"}),"Fields"),(0,r.kt)("p",null,"This function has 4 required fields."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Channel ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Message ID ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Index ","(","Required",")"),(0,r.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$getEmbed[Channel ID;Message ID;Index;Property]")),(0,r.kt)("h4",u({},{id:"options"}),"Options"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Channel ID - Channel Where the message is located."),(0,r.kt)("li",{parentName:"ul"},"Message ID - Message which you want to get the embed info."),(0,r.kt)("li",{parentName:"ul"},"Index - The index of the embed."),(0,r.kt)("li",{parentName:"ul"},"Property ","(","type, title, description, url, color, timestamp, fields, fvalue, thumbnail, image, video, author, provider, footer, files, createdAt, hexColor, length",")"," - The embed property you want to get.")),(0,r.kt)("h4",u({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "getEmbed",\ncode: `Embed Title Info: $getEmbed[773357387062968400;780877316380688444;1;title]`\n})\n')))}k.isMDXComponent=!0}}]);