"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(d,".").concat(m)]||c[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"$ordinal",description:"$ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.",id:"ordinal"},o=void 0,l={unversionedId:"functions/math-related/ordinal",id:"version-6.2.6/functions/math-related/ordinal",title:"$ordinal",description:"$ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.",source:"@site/versioned_docs/version-6.2.6/functions/math-related/ordinal.md",sourceDirName:"functions/math-related",slug:"/functions/math-related/ordinal",permalink:"/docs/functions/math-related/ordinal",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1686803432,formattedLastUpdatedAt:"Jun 15, 2023",frontMatter:{title:"$ordinal",description:"$ordinal adds st, nd, rd, th to a number such as 1st, 2nd, 3rd, 4th.",id:"ordinal"},sidebar:"docs",previous:{title:"$multi",permalink:"/docs/functions/math-related/multi"},next:{title:"$round",permalink:"/docs/functions/math-related/round"}},d={},p=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$ordinal")," adds ",(0,a.kt)("inlineCode",{parentName:"p"},"st"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"nd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"rd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"th")," to a number such as ",(0,a.kt)("inlineCode",{parentName:"p"},"1st"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"2nd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"3rd"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"4th"),"."),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"$ordinal[number]\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Field"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"number"),(0,a.kt)("td",{parentName:"tr",align:null},"Number which will add ",(0,a.kt)("inlineCode",{parentName:"td"},"st"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"nd"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"rd"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"th")," to it."),(0,a.kt)("td",{parentName:"tr",align:"center"},"true")))),(0,a.kt)("h2",{id:"examples"},"Example(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'ordinal',\n    code: `\n  $ordinal[12] -> Returns 12nd \n  $ordinal[50] -> Returns 50th\n  $ordinal[11] -> Returns 11st\n  $ordinal[88] -> Returns 88th\n  `\n});\n")))}u.isMDXComponent=!0}}]);