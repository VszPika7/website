"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[83028],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=d(n),s=r,k=m["".concat(p,".").concat(s)]||m[s]||u[s]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},18179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>O,frontMatter:()=>k,metadata:()=>f,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(o)for(var n of o(t))d.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),s=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n};const k={title:"$newApplicationCmd",description:"$newApplicationCmd Devolver\xe1 verdadero o falso seg\xfan el tipo de interacci\xf3n.",id:"newApplicationCmd"},g=void 0,f={unversionedId:"functions/event-related/newApplicationCmd",id:"version-6.4.0/functions/event-related/newApplicationCmd",title:"$newApplicationCmd",description:"$newApplicationCmd Devolver\xe1 verdadero o falso seg\xfan el tipo de interacci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/newApplicationCmd.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/newApplicationCmd",permalink:"/es/docs/functions/event-related/newApplicationCmd",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$newApplicationCmd",description:"$newApplicationCmd Devolver\xe1 verdadero o falso seg\xfan el tipo de interacci\xf3n.",id:"newApplicationCmd"},sidebar:"docs",previous:{title:"$isSelectMenuInteraction",permalink:"/es/docs/functions/event-related/isSelectMenuInteraction"},next:{title:"$newChannel",permalink:"/es/docs/functions/event-related/newChannel"}},v={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Opci\xf3n",id:"opci\xf3n",level:3},{value:"Ejemplo(s)",id:"ejemplos",level:2}],N={toc:b},y="wrapper";function O(e){var t=e,{components:n}=t,r=s(t,["components"]);return(0,a.kt)(y,u(m(m({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$newApplicationCmd")," obtiene los datos de las devoluciones de llamada de la aplicaci\xf3n (actualiza y crea una)."),(0,a.kt)("h2",m({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$newApplicationCmd[nombre]\n")),(0,a.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"opci\xf3n"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Opci\xf3n a recuperar."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h3",m({},{id:"opci\xf3n"}),"Opci\xf3n"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Nombre del comando de barra.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"id"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ID de la barra com\xfan.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"descripci\xf3n"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Descripci\xf3n de la barra com\xfan.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"versi\xf3n"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Versi\xf3n del comando slash.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"opci\xf3n"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Opciones del comando slash.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"servidorID"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ID de gremio del comando de barra oblicua.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"ID de aplicaci\xf3n"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve el ID de la aplicaci\xf3n.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Permiso por defecto"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve los permisos predeterminados del comando slash.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"marca de tiempo"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve la marca de tiempo de la creaci\xf3n del comando slash (en ms).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Creado en"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Devuelve la fecha de creaci\xf3n del comando slash.")))),(0,a.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.applicationCmdUpdateCommand({\n    channel: "channelid",\n    code: `\n    \xa1El comando de barra se actualiz\xf3!\n\n- Nombre: $newApplicationCmd[name]\n- ID: $newApplicationCmd[id]\n- ID de aplicaci\xf3n: $newApplicationCmd[applicationID]`\n})\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Este c\xf3digo se ejecutar\xe1 cuando ",(0,a.kt)("strong",{parentName:"li"},"comando de barra se actualice")," (Modificado)")))}O.isMDXComponent=!0}}]);