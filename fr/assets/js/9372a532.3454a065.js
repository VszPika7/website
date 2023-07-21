"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[66412],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,y=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23941:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>O,frontMatter:()=>y,metadata:()=>b,toc:()=>v});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&s(e,r,t[r]);return e},c=(e,t)=>l(e,o(t)),d=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const y={title:"$arraySome",description:"$arraySome v\xe9rifie la pr\xe9sence d'\xe9l\xe9ments donn\xe9s dans le tableau.",id:"arraySome"},f=void 0,b={unversionedId:"functions/array-related/arraySome",id:"version-6.4.0/functions/array-related/arraySome",title:"$arraySome",description:"$arraySome v\xe9rifie la pr\xe9sence d'\xe9l\xe9ments donn\xe9s dans le tableau.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arraySome.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arraySome",permalink:"/fr/docs/functions/array-related/arraySome",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$arraySome",description:"$arraySome v\xe9rifie la pr\xe9sence d'\xe9l\xe9ments donn\xe9s dans le tableau.",id:"arraySome"},sidebar:"docs",previous:{title:"$arrayShuffle",permalink:"/fr/docs/functions/array-related/arrayShuffle"},next:{title:"$arraySort",permalink:"/fr/docs/functions/array-related/arraySort"}},k={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:v},N="wrapper";function O(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,a.kt)(N,c(m(m({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arraySome")," v\xe9rifie la pr\xe9sence d'\xe9l\xe9ments donn\xe9s dans le tableau."),(0,a.kt)("h2",m({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$arraySome[nom;requ\xeate;typeDeRequ\xeate?]\n")),(0,a.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"requ\xeate"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"L'\xe9l\xe9ment que nous allons rechercher pour chaque \xe9l\xe9ment du tableau."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"typeDeRequ\xeate?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"L'op\xe9rateur de comparaison."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"faux")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"==")," \u2014 Chaque \xe9l\xe9ment correspondant \xe0 la requ\xeate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"!=")," \u2014 Chaque \xe9l\xe9ment qui ne correspond pas \xe0 la requ\xeate."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">")," - Tous les \xe9l\xe9ments situ\xe9s \xe0 \"gauche\" de l'\xe9l\xe9ment trouv\xe9, \xe0 l'exclusion de lui-m\xeame."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<")," - Tous les \xe9l\xe9ments situ\xe9s \xe0 \"droite\" de l'\xe9l\xe9ment trouv\xe9, \xe0 l'exclusion de lui-m\xeame."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},">="),' - Tous les \xe9l\xe9ments situ\xe9s \xe0 "gauche" de l\'\xe9l\xe9ment trouv\xe9, y compris lui-m\xeame.'),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"<="),' - Tous les \xe9l\xe9ments situ\xe9s \xe0 "droite" de l\'\xe9l\xe9ment trouv\xe9, y compris lui-m\xeame.')),(0,a.kt)("h2",m({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-some",\n    code: `\n  $arraySome[tableau;aoi.js;==]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n});\n')))}O.isMDXComponent=!0}}]);