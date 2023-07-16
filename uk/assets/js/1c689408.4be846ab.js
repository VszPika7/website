"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[71198],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=o,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27451:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var n=r(3905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>l(e,a(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$role"},h=void 0,y={unversionedId:"functions/role",id:"version-5.5.5/functions/role",title:"$role",description:"This function returns the given role's specified property",source:"@site/versioned_docs/version-5.5.5/functions/role.md",sourceDirName:"functions",slug:"/functions/role",permalink:"/uk/docs/5.5.5/functions/role",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$role"},sidebar:"docs",previous:{title:"$resumeSong",permalink:"/uk/docs/5.5.5/functions/resumesong"},next:{title:"$roleCount",permalink:"/uk/docs/5.5.5/functions/rolecount"}},b={},v=[{value:"Usage",id:"usage",level:4},{value:"Options",id:"options",level:4},{value:"Available Properties",id:"available-properties",level:4}],g={toc:v},k="wrapper";function O(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(k,m(c(c({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function returns the given role's specified property"),(0,n.kt)("h4",c({},{id:"usage"}),"Usage"),(0,n.kt)("p",null,"This function has 2 fields"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Role ID ","(","Required",")"),(0,n.kt)("li",{parentName:"ol"},"Property ","(","Required",")")),(0,n.kt)("p",null,"Raw Usage: ",(0,n.kt)("inlineCode",{parentName:"p"},"$role[roleID;property]")),(0,n.kt)("h4",c({},{id:"options"}),"Options"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Role ID - The role the properties are base off of"),(0,n.kt)("li",{parentName:"ul"},"Property - The property from the ","<","role",">")),(0,n.kt)("h4",c({},{id:"available-properties"}),"Available Properties"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"name - Role's name"),(0,n.kt)("li",{parentName:"ul"},"mention - Role's mention"),(0,n.kt)("li",{parentName:"ul"},"id - Role's ID"),(0,n.kt)("li",{parentName:"ul"},"hex - Role's hex color"),(0,n.kt)("li",{parentName:"ul"},"created - Role's date and time of creation"),(0,n.kt)("li",{parentName:"ul"},"position - Role's position"),(0,n.kt)("li",{parentName:"ul"},"rawposition - Role's raw position"),(0,n.kt)("li",{parentName:"ul"},"guild - Role's guild's id of origin"),(0,n.kt)("li",{parentName:"ul"},"guildname - Role's guild's name of origin "),(0,n.kt)("li",{parentName:"ul"},"timestamp - How long ago the role was created"),(0,n.kt)("li",{parentName:"ul"},"isdeleted - Whether or not the role has been deleted, Returns Boolean"),(0,n.kt)("li",{parentName:"ul"},"ismentionable - Whether or not the role can be mentioned, Returns Boolean"),(0,n.kt)("li",{parentName:"ul"},"iseditable - Whether or not the author of the command can edit the role, Returns Boolean"),(0,n.kt)("li",{parentName:"ul"},"ismanaged - Whether or not Discord manages the role, Returns Boolean"),(0,n.kt)("li",{parentName:"ul"},"ishoisted - Whether or not the role is hoisted, Returns Boolean")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "role",\ncode: `\n$role[773353340674900029;name]\n`\n})\n\n//Or specified role\n\nbot.command({\nname: "role",\ncode: `\n$role[$mentionedRoles[1];name]\n`\n})\n')))}O.isMDXComponent=!0}}]);