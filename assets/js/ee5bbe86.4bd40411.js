"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[61979],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),f=i,m=c["".concat(u,".").concat(f)]||c[f]||s[f]||l;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var p=2;p<l;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},71853:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),i=(n(67294),n(3905));const l={title:"$findRole",description:"$findRole will search and return a given role of a certain guild.",id:"findRole"},a=void 0,o={unversionedId:"functions/Util/findRole",id:"functions/Util/findRole",title:"$findRole",description:"$findRole will search and return a given role of a certain guild.",source:"@site/docs/functions/Util/findRole.md",sourceDirName:"functions/Util",slug:"/functions/Util/findRole",permalink:"/docs/functions/Util/findRole",draft:!1,tags:[],version:"current",frontMatter:{title:"$findRole",description:"$findRole will search and return a given role of a certain guild.",id:"findRole"},sidebar:"docs",previous:{title:"$findNumbers",permalink:"/docs/functions/Util/findNumbers"},next:{title:"$findRoles",permalink:"/docs/functions/Util/findRoles"}},u={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2},{value:"Note that this example won&#39;t work if your bot is not in the guild where the role is in.",id:"note-that-this-example-wont-work-if-your-bot-is-not-in-the-guild-where-the-role-is-in",level:3}],d={toc:p};function s(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$findRole")," will search and return a given role of a certain guild."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"$findRole[roleResolver;guildID?]\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"roleResolver"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"name of the role you want to find"),(0,i.kt)("td",{parentName:"tr",align:null},"yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"guildID?"),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"guild ID where the role is present in"),(0,i.kt)("td",{parentName:"tr",align:null},"no")))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"This will return the role ID of the role ",(0,i.kt)("inlineCode",{parentName:"p"},"Owner")," if it exists:"),(0,i.kt)("h3",{id:"note-that-this-example-wont-work-if-your-bot-is-not-in-the-guild-where-the-role-is-in"},"Note that this example won't work if your bot is not in the guild where the role is in."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n  name: 'findRole',\n  code: `\n  $findRole[Owner;773352845738115102]\n  `\n});\n")))}s.isMDXComponent=!0}}]);