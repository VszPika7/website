"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[20787],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},c="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o[c]="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45956:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>N,contentTitle:()=>k,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))s.call(e,n)&&u(t,n,e[n]);if(o)for(var n of o(e))p.call(e,n)&&u(t,n,e[n]);return t},d=(t,e)=>l(t,i(e)),m=(t,e)=>{var n={};for(var r in t)s.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&o)for(var r of o(t))e.indexOf(r)<0&&p.call(t,r)&&(n[r]=t[r]);return n};const f={title:"$setStatus",description:"$setStatus changera le statut du client.",id:"setStatus"},k=void 0,g={unversionedId:"functions/client-related/setStatus",id:"version-6.4.0/functions/client-related/setStatus",title:"$setStatus",description:"$setStatus changera le statut du client.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/setStatus.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/setStatus",permalink:"/fr/docs/functions/client-related/setStatus",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 juil. 2023",frontMatter:{title:"$setStatus",description:"$setStatus changera le statut du client.",id:"setStatus"},sidebar:"docs",previous:{title:"$setClientName",permalink:"/fr/docs/functions/client-related/setClientName"},next:{title:"$alwaysExecute",permalink:"/fr/docs/functions/event-related/alwaysExecute"}},N={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:b},v="wrapper";function O(t){var e=t,{components:n}=e,a=m(e,["components"]);return(0,r.kt)(v,d(c(c({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setStatus")," changera le statut du client."),(0,r.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$setStatus[nom;type;statut;URL;afk?]\n")),(0,r.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"nom"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Le contenu du statut."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"type"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"champ de caract\xe8res, entier"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"PLAYING")," (par defaut) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"WATCHING")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"STREAMING")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},"LISTENING")," ",(0,r.kt)("br",null)," 5. ",(0,r.kt)("strong",{parentName:"td"},"COMPETING")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"statut"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"online")," (par defaut) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"idle")," ",(0,r.kt)("br",null)," 3. ",(0,r.kt)("strong",{parentName:"td"},"dnd")," ",(0,r.kt)("br",null)," 4. ",(0,r.kt)("strong",{parentName:"td"},"invisible")),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"URL"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"URL (statut de streaming)"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"afk?"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"bool\xe9en"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"1. ",(0,r.kt)("strong",{parentName:"td"},"true")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"false")," (par d\xe9faut)"),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")))),(0,r.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Ceci changera le statut du client en ",(0,r.kt)("strong",{parentName:"p"},"PLAYING")," et avec comme statut ",(0,r.kt)("strong",{parentName:"p"},"online"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'setStatus',\n    code: `\n   $setStatus[Hello!;PLAYING;online]`\n});\n")))}O.isMDXComponent=!0}}]);