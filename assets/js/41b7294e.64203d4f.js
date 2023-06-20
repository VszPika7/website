"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=u(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||i;return n?o.createElement(f,l(l({ref:t},c),{},{components:n})):o.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[m]="string"==typeof e?e:r,l[1]=a;for(var u=2;u<i;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},74937:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var o=n(87462),r=(n(67294),n(3905));const i={title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",id:"mentionedRolesCount"},l=void 0,a={unversionedId:"functions/util-related/mentionedRolesCount",id:"version-6.2.6/functions/util-related/mentionedRolesCount",title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",source:"@site/versioned_docs/version-6.2.6/functions/util-related/mentionedRolesCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedRolesCount",permalink:"/docs/functions/util-related/mentionedRolesCount",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687289630,formattedLastUpdatedAt:"Jun 20, 2023",frontMatter:{title:"$mentionedRolesCount",description:"$mentionedRolesCount will return the amount of role mentions within a message.",id:"mentionedRolesCount"},sidebar:"docs",previous:{title:"$mentionedRoles",permalink:"/docs/functions/util-related/mentionedRoles"},next:{title:"$mentionedUsersCount",permalink:"/docs/functions/util-related/mentionedUsersCount"}},s={},u=[{value:"Usage",id:"usage",level:2},{value:"Example(s)",id:"examples",level:2}],c={toc:u},m="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedRolesCount")," will return the amount of role mentions within a message."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"$mentionedRolesCount\n")),(0,r.kt)("h2",{id:"examples"},"Example(s)"),(0,r.kt)("p",null,"This will return the amount of role mentions in the given text:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'mentionedRolesCount',\n    code: `\n  You have: $mentionedRolesCount role mentions in your message!\n`\n});\n")))}d.isMDXComponent=!0}}]);