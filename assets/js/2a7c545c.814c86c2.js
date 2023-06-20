"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[2989],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),l=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=l(e.components);return o.createElement(c.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(t),d=r,f=u["".concat(c,".").concat(d)]||u[d]||p[d]||a;return t?o.createElement(f,i(i({ref:n},m),{},{components:t})):o.createElement(f,i({ref:n},m))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},47827:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=t(87462),r=(t(67294),t(3905));const a={title:"$mentionedRolesCount",description:"Returns amount of mentioned roles in the command's message."},i=void 0,s={unversionedId:"functions/mentionedrolescount",id:"version-5.5.5/functions/mentionedrolescount",title:"$mentionedRolesCount",description:"Returns amount of mentioned roles in the command's message.",source:"@site/versioned_docs/version-5.5.5/functions/mentionedrolescount.md",sourceDirName:"functions",slug:"/functions/mentionedrolescount",permalink:"/docs/5.5.5/functions/mentionedrolescount",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1687236886,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$mentionedRolesCount",description:"Returns amount of mentioned roles in the command's message."},sidebar:"docs",previous:{title:"$mentionedRoles",permalink:"/docs/5.5.5/functions/mentionedroles"},next:{title:"$mentionedUsersCount",permalink:"/docs/5.5.5/functions/mentioneduserscount"}},c={},l=[{value:"Example Command:",id:"example-command",level:4}],m={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"With this function you can check how many channel mentions in the command's message are."),(0,r.kt)("p",null,"Raw usage: ",(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedRolesCount")),(0,r.kt)("h4",{id:"example-command"},"Example Command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "rolementions",\ncode: `\nYou have $mentionedRolesCount role mentions in your message.`\n});\n')))}p.isMDXComponent=!0}}]);