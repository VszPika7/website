"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[58769],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},m=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=s(t),d=o,f=u["".concat(l,".").concat(d)]||u[d]||p[d]||a;return t?r.createElement(f,c(c({ref:n},m),{},{components:t})):r.createElement(f,c({ref:n},m))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58989:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>b,default:()=>j,frontMatter:()=>f,metadata:()=>y,toc:()=>O});var r=t(3905),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&m(e,t,n[t]);if(i)for(var t of i(n))s.call(n,t)&&m(e,t,n[t]);return e},p=(e,n)=>a(e,c(n)),d=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$commandsCount",description:"$commandsCount retournera le nombre de commandes.",id:"commandsCount"},b=void 0,y={unversionedId:"functions/info-related/commandsCount",id:"version-6.4.0/functions/info-related/commandsCount",title:"$commandsCount",description:"$commandsCount retournera le nombre de commandes.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/commandsCount.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/commandsCount",permalink:"/fr/docs/functions/info-related/commandsCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$commandsCount",description:"$commandsCount retournera le nombre de commandes.",id:"commandsCount"},sidebar:"docs",previous:{title:"$commandName",permalink:"/fr/docs/functions/info-related/commandName"},next:{title:"$cpu",permalink:"/fr/docs/functions/info-related/cpu"}},v={},O=[{value:"Utilisation",id:"utilisation",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:O},C="wrapper";function j(e){var n=e,{components:t}=n,o=d(n,["components"]);return(0,r.kt)(C,p(u(u({},g),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$commandsCount")," retournera le nombre de commandes."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$commandsCount\n")),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera le nombre de commandes de votre bot :"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'commandsCount',\n    code: `\n  $commandsCount\n  `\n});\n")))}j.isMDXComponent=!0}}]);