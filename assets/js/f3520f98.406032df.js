"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[42612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>p});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(t),p=i,m=d["".concat(l,".").concat(p)]||d[p]||f[p]||o;return t?r.createElement(m,a(a({ref:n},c),{},{components:t})):r.createElement(m,a({ref:n},c))}));function p(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},19529:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=t(87462),i=(t(67294),t(3905));const o={title:"$findNumbers"},a=void 0,s={unversionedId:"functions/findnumbers",id:"version-5.5.5/functions/findnumbers",title:"$findNumbers",description:"This function filters our numbers from given &lt;string&gt; and returns them alone",source:"@site/versioned_docs/version-5.5.5/functions/findnumbers.md",sourceDirName:"functions",slug:"/functions/findnumbers",permalink:"/docs/functions/findnumbers",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1658666031,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$findNumbers"},sidebar:"docs",previous:{title:"$findMembers",permalink:"/docs/functions/findmembers"},next:{title:"$findRole",permalink:"/docs/functions/findrole"}},l={},u=[{value:"Fields",id:"fields",level:4},{value:"Options",id:"options",level:4},{value:"Usage",id:"usage",level:4}],c={toc:u};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This function filters our numbers from given ","<","string",">"," and returns them alone"),(0,i.kt)("h4",{id:"fields"},"Fields"),(0,i.kt)("p",null,"This function  has 1 field"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"String ","(","Required",")")),(0,i.kt)("p",null,"Raw Usage: ",(0,i.kt)("inlineCode",{parentName:"p"},"$findNumbers[string]")),(0,i.kt)("h4",{id:"options"},"Options"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"String - The text we're filtering")),(0,i.kt)("h4",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'bot.command({\nname: "findNumbers",\ncode: `$findNumbers[fdef243/%kcnv]`\n})\n/*\nBot will return:\n243\n*/\n')))}f.isMDXComponent=!0}}]);