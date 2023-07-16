"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32629:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>O,contentTitle:()=>b,default:()=>g,frontMatter:()=>m,metadata:()=>y,toc:()=>h});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))s.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$createRole",description:"Creates a new role"},b=void 0,y={unversionedId:"functions/createrole",id:"version-5.5.5/functions/createrole",title:"$createRole",description:"Creates a new role",source:"@site/versioned_docs/version-5.5.5/functions/createrole.md",sourceDirName:"functions",slug:"/functions/createrole",permalink:"/fr/docs/5.5.5/functions/createrole",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$createRole",description:"Creates a new role"},sidebar:"docs",previous:{title:"$createObject",permalink:"/fr/docs/5.5.5/functions/createobject"},next:{title:"$createStageInstance",permalink:"/fr/docs/5.5.5/functions/createstageinstance"}},O={},h=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],v={toc:h},k="wrapper";function g(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(k,d(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function allows the bot to create a new role in the current guild"),(0,n.kt)("h4",u({},{id:"fields"}),"Fields"),(0,n.kt)("p",null,"This function has 2 required fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Guild ID ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Return Role ID ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Name ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Color ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Hoisted ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Position ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Mentionable ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Permission ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Permission 2 ","(","Optional",")"),(0,n.kt)("li",{parentName:"ol"},"Etc")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$createRole[guildid;returnID (yes/no);name;color (optional);hoisted (yes/no)(optional);position (optional);mentionable (yes/no)(optional);permission;permission;...]")),(0,n.kt)("h4",u({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GuildID - The ID of the guild "),(0,n.kt)("li",{parentName:"ul"},"ReturnID - Returns the id of the role created "),(0,n.kt)("li",{parentName:"ul"},"Name - The name of the role"),(0,n.kt)("li",{parentName:"ul"},"Color - The color of the role ","(","in hex",")"),(0,n.kt)("li",{parentName:"ul"},"Hoisted - Whether or not the role will be hoisted"),(0,n.kt)("li",{parentName:"ul"},"Position - The position of the role"),(0,n.kt)("li",{parentName:"ul"},"Mentionable - Whether or not the role will be mentionable"),(0,n.kt)("li",{parentName:"ul"},"Permissions ","(","1,2,3,etc",")"," - The allowed permissions for the role")),(0,n.kt)("h4",u({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "createRole",\ncode: `$createRole[$guildID;no;Administrator;FF0000;yes;2;no;admin]`\n}) // Creates new role named "Administrator"\n')))}g.isMDXComponent=!0}}]);