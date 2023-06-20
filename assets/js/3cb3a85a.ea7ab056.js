"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[81355],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},70883:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const l={title:"$deleteRoles",description:"Deletes the specified role/roles"},a=void 0,i={unversionedId:"functions/deleteroles",id:"version-5.5.5/functions/deleteroles",title:"$deleteRoles",description:"Deletes the specified role/roles",source:"@site/versioned_docs/version-5.5.5/functions/deleteroles.md",sourceDirName:"functions",slug:"/functions/deleteroles",permalink:"/docs/5.5.5/functions/deleteroles",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687249755,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$deleteRoles",description:"Deletes the specified role/roles"},sidebar:"docs",previous:{title:"$deleteMessageVar",permalink:"/docs/5.5.5/functions/deletemessagevar"},next:{title:"$deleteServerVar",permalink:"/docs/5.5.5/functions/deleteservervar"}},s={},c=[],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function deletes the specified role","(","s",")"),(0,o.kt)("p",null,"Fields"),(0,o.kt)("p",null,"This function has 1 required field"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Role ID ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Role ID 2 ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Etc")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$deleteRoles[roleID;roleID;etc]")),(0,o.kt)("p",null,"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Role ID","(","s",")"," - The role","(","s",")"," the bot is deleting")),(0,o.kt)("p",null,"Usage"),(0,o.kt)("p",null,"Deleting the mentioned role"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deleteRoles",\ncode: `Deleted a role.\n$deleteRoles[$mentionedRoles[1]]`\n})\n')),(0,o.kt)("p",null,"Deleting multiple mentioned roles"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "deleteRoles",\ncode: `Deleted a role.\n$deleteRoles[$mentionedRoles[1];$mentionedRoles[2];$mentionedRoles[3]]`\n})\n')))}u.isMDXComponent=!0}}]);