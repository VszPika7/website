"use strict";(self.webpackChunkaoijs_docs=self.webpackChunkaoijs_docs||[]).push([[17405],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={title:"$serverDescription"},o=void 0,l={unversionedId:"functions/available-functions/serverDescription",id:"functions/available-functions/serverDescription",title:"$serverDescription",description:"Gets the current guild description.",source:"@site/docs/functions/available-functions/serverDescription.md",sourceDirName:"functions/available-functions",slug:"/functions/available-functions/serverDescription",permalink:"/docs/6.0.0/functions/available-functions/serverDescription",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1658668724,formattedLastUpdatedAt:"Jul 24, 2022",frontMatter:{title:"$serverDescription"},sidebar:"docs",previous:{title:"$round",permalink:"/docs/6.0.0/functions/available-functions/round"},next:{title:"$serverExplicitContentFilter",permalink:"/docs/6.0.0/functions/available-functions/serverExplicitContentFilter"}},c={},s=[{value:"Function Information",id:"function-information",level:3},{value:"Returns",id:"returns",level:3},{value:"Function Usage",id:"function-usage",level:4},{value:"Examples",id:"examples",level:4}],u={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gets the current guild description."),(0,a.kt)("h3",{id:"function-information"},"Function Information"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"guildID"),(0,a.kt)("td",{parentName:"tr",align:null},"The guild id to get its description."),(0,a.kt)("td",{parentName:"tr",align:null},"Guild"),(0,a.kt)("td",{parentName:"tr",align:null},"Yes")))),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"?String")),(0,a.kt)("h4",{id:"function-usage"},"Function Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$serverDescription or $serverDescription[guildID]\n")),(0,a.kt)("h4",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$serverDescription[773352845738115102]\n")))}p.isMDXComponent=!0}}]);