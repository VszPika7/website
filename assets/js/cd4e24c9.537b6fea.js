"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[42555],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),u=m(n),d=o,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var m=2;m<i;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},26175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>m});var r=n(87462),o=(n(67294),n(3905));const i={title:"$modifyRolePerms"},l=void 0,a={unversionedId:"functions/modifyroleperms",id:"version-5.5.5/functions/modifyroleperms",title:"$modifyRolePerms",description:"This function allows the bot to modify the given roles permissions",source:"@site/versioned_docs/version-5.5.5/functions/modifyroleperms.md",sourceDirName:"functions",slug:"/functions/modifyroleperms",permalink:"/docs/functions/modifyroleperms",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$modifyRolePerms"},sidebar:"docs",previous:{title:"$modifyRole",permalink:"/docs/functions/modifyrole"},next:{title:"$modifyWebhook",permalink:"/docs/functions/modifywebhook"}},s={},m=[],p={toc:m};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This function allows the bot to modify the given roles permissions"),(0,o.kt)("p",null,"Fields"),(0,o.kt)("p",null,"This function has 2 required fields"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Role ID ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Permission 1 ","(","Required",")"),(0,o.kt)("li",{parentName:"ol"},"Permission 2 ","(","Optional",")"),(0,o.kt)("li",{parentName:"ol"},"Etc")),(0,o.kt)("p",null,"Raw Usage: ",(0,o.kt)("inlineCode",{parentName:"p"},"$modifyRolePerms[roleID;permission1;permission2 (optional);etc]")),(0,o.kt)("p",null,"Options"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Role ID - The role we're modifying the permissions"),(0,o.kt)("li",{parentName:"ul"},"Permission","(","s",")"," - The permissions that are being modified. "),(0,o.kt)("li",{parentName:"ul"},"+perm = Allow the permission"),(0,o.kt)("li",{parentName:"ul"},"-perm = Deny the permission"),(0,o.kt)("li",{parentName:"ul"},"+/-all - Allows or denies all the permissions")),(0,o.kt)("p",null,"Usage"),(0,o.kt)("p",null,"Allowing a permission"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];+admin]`\n})\n')),(0,o.kt)("p",null,"Denying a permission"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];-admin]`\n})\n')),(0,o.kt)("p",null,"Allowing all permissions"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "modifyRolePerms",\ncode: `$modifyRolePerms[$mentionedRoles[1];+all]`\n})\n')))}c.isMDXComponent=!0}}]);