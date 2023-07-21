"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[43782],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||l;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1806:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&d(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&d(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$findInCache",description:"$findInCache will search for given arguments in your bot's cache.",id:"findInCache"},g=void 0,k={unversionedId:"functions/misc-related/findInCache",id:"version-6.4.0/functions/misc-related/findInCache",title:"$findInCache",description:"$findInCache will search for given arguments in your bot's cache.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/findInCache.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/findInCache",permalink:"/uk/docs/functions/misc-related/findInCache",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$findInCache",description:"$findInCache will search for given arguments in your bot's cache.",id:"findInCache"},sidebar:"docs",previous:{title:"$fileSize",permalink:"/uk/docs/functions/misc-related/fileSize"},next:{title:"$findObjectProperty",permalink:"/uk/docs/functions/misc-related/findObjectProperty"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2}],N={toc:b},h="wrapper";function v(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,u(s(s({},N),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findInCache")," will search for given arguments in your bot's cache."),(0,r.kt)("h2",s({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$findInCache[type;name;prop;value;findType?;returnValue?]\n")),(0,r.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Type of the object to search."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Name of the object to search."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"prop"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Property."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"value"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Property value."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"findType?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"includes")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"startsWith")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"endsWith")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},">="),", ",(0,r.kt)("strong",{parentName:"td"},"=="),", ",(0,r.kt)("strong",{parentName:"td"},"===")," (default), ",(0,r.kt)("strong",{parentName:"td"},"<="),", ",(0,r.kt)("strong",{parentName:"td"},"<"),", ",(0,r.kt)("strong",{parentName:"td"},">")),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"returnValue?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"boolean"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"true* ",(0,r.kt)("br",null)," 2. "),"false**"),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))))}v.isMDXComponent=!0}}]);