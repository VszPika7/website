"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[53480],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),d=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(r),m=n,k=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=r[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},35364:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>j,frontMatter:()=>k,metadata:()=>g,toc:()=>b});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&d.call(e,a)&&(r[a]=e[a]);return r};const k={title:"$reactionCollector",description:"$reactionCollector crear\xe1 un recopilador de reacciones en un mensaje determinado.",id:"reactionCollector"},f=void 0,g={unversionedId:"functions/awaited-related/reactionCollector",id:"version-6.4.0/functions/awaited-related/reactionCollector",title:"$reactionCollector",description:"$reactionCollector crear\xe1 un recopilador de reacciones en un mensaje determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/reactionCollector.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/reactionCollector",permalink:"/es/docs/functions/awaited-related/reactionCollector",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$reactionCollector",description:"$reactionCollector crear\xe1 un recopilador de reacciones en un mensaje determinado.",id:"reactionCollector"},sidebar:"docs",previous:{title:"$editIn",permalink:"/es/docs/functions/awaited-related/editIn"},next:{title:"$broadcastEval",permalink:"/es/docs/functions/client-related/broadcastEval"}},N={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:b},v="wrapper";function j(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(v,u(s(s({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$reactionCollector")," crear\xe1 un recopilador de reacciones en un mensaje determinado."),(0,a.kt)("h2",s({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$reactionCollector[CanalID;ID de mensaje;filtros de usuario;tiempo\n;reacciones;comandosesperados;eliminar reacci\xf3n?;esperar datos?;finEsperar?]\n")),(0,a.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"canalID"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"iD del canal"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"ID de mensaje"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"mensaje ID"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"filtro de usuario"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"a lo que el bot responder\xe1 ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"todos ")," ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"ID de usuario espec\xedfico")," - cualquier ID de usuario"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"tiempo"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cuando el comando expira"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"reacciones"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"reacciones que escuchar\xe1 el bot, puede separar varios emojis con una coma ( ",(0,a.kt)("inlineCode",{parentName:"td"},",")," )"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"comandoEsperado"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"comandos que se ejecutar\xe1n, puede separar varios emojis con una coma ( ",(0,a.kt)("inlineCode",{parentName:"td"},",")," )"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\xbfremover Reacci\xf3n?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"remover las reacciones despu\xe9s de ejecutar los comandos"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"esperar datos?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"datos esperados."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"finEsperar?"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"comando para terminar esperado / esperar a ejecutar cuando finalice el temporizador"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto enviar\xe1 un mensaje cuando agregue una reacci\xf3n:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "reactionCollector",\n    code: `\n  $reactionCollector[$channelID;$splitText[1];$authorID;10m;\ud83d\udc40;awaitReaction;;true]\n  $textSplit[$sendMessage[\xa1Reacciona con "\ud83d\udc40" para algo especial!;true]; ]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitReaction",\n    code: `\n  $sendMessage[\ud83d\udc40 que es esto?]\n  `\n});\n')))}j.isMDXComponent=!0}}]);