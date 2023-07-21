"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[65447],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},c="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),c=m(a),k=r,g=c["".concat(o,".").concat(k)]||c[k]||u[k]||l;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function g(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=k;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[c]="string"==typeof t?t:r,i[1]=d;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},80128:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>b,contentTitle:()=>N,default:()=>f,frontMatter:()=>g,metadata:()=>s,toc:()=>v});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))o.call(e,a)&&p(t,a,e[a]);if(d)for(var a of d(e))m.call(e,a)&&p(t,a,e[a]);return t},u=(t,e)=>l(t,i(e)),k=(t,e)=>{var a={};for(var n in t)o.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&m.call(t,n)&&(a[n]=t[n]);return a};const g={title:"$getAuditLogs",description:"$getAuditLogs recuperar\xe1 los registros de auditor\xeda del servidor de acuerdo con los argumentos dados.",id:"getAuditLogs"},N=void 0,s={unversionedId:"functions/info-related/getAuditLogs",id:"version-6.4.0/functions/info-related/getAuditLogs",title:"$getAuditLogs",description:"$getAuditLogs recuperar\xe1 los registros de auditor\xeda del servidor de acuerdo con los argumentos dados.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getAuditLogs.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getAuditLogs",permalink:"/es/docs/functions/info-related/getAuditLogs",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"21 jul 2023",frontMatter:{title:"$getAuditLogs",description:"$getAuditLogs recuperar\xe1 los registros de auditor\xeda del servidor de acuerdo con los argumentos dados.",id:"getAuditLogs"},sidebar:"docs",previous:{title:"$getAttachment",permalink:"/es/docs/functions/info-related/getAttachment"},next:{title:"$getBanReason",permalink:"/es/docs/functions/info-related/getBanReason"}},b={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Eventos del registro de auditor\xeda",id:"eventos-del-registro-de-auditor\xeda",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:v},h="wrapper";function f(t){var e=t,{components:a}=e,r=k(e,["components"]);return(0,n.kt)(h,u(c(c({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$getAuditLogs")," recuperar\xe1 los registros de auditor\xeda del servidor de acuerdo con los argumentos dados."),(0,n.kt)("h2",c({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$getAuditLogs[servidorID;usarioID?;l\xedmite?;acci\xf3n?;formato?]\n")),(0,n.kt)("h2",c({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"servidorID"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El ID de un servidor espec\xedfico."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"s\xed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"usarioID?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El usuario que ejecut\xf3 la acci\xf3n indicada en los registros de auditor\xeda."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"l\xedmite?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"n\xfamero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El m\xe1ximo de registros de auditor\xeda que devolver\xe1."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"acci\xf3n?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"La acci\xf3n que se ha ejecutado."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"formato?"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"El formato para devolver los registros de auditor\xeda."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Formato"),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"{executor.username}"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Devolver\xe1 el nombre de usuario del usuario que ha ejecutado la acci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"{executor.mention}"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Mencionar\xe1 el usuario que ejecut\xf3 la acci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"{executor.id}"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Devolver\xe1 el ID del usuario que ejecut\xf3 la acci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"{executor.tag}"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Devolver\xe1 el discriminador del usuario que ejecut\xf3 la acci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"{target.id}"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Devolver\xe1 el ID del usuario que era el objetivo de la acci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"{action}"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Devolver\xe1 la propia acci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"{id}"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Devuelve el ID de la acci\xf3n/registro de auditor\xeda")))),(0,n.kt)("h2",c({},{id:"eventos-del-registro-de-auditor\xeda"}),"Eventos del registro de auditor\xeda"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"EVENTO"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"VALOR"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"DESCRIPCI\xd3N"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"OBJETO CAMBIADO"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GuildUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"1"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se han actualizado los ajustes del servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ChannelCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"10"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se cre\xf3 el canal"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Canal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ChannelUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"11"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se han actualizado los ajustes de los canales"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Canal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ChannelDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"12"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Canal eliminado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Canal")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ChannelOverwriteCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"13"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha a\xf1adido un permiso de sobrescritura a un canal"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Canal sobrescritura")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ChannelOverwriteUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"14"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha actualizado la sobreescritura de permisos para un canal"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Canal sobrescritura")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ChannelOverwriteDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"15"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha eliminado el permiso de sobrescritura de un canal"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Canal sobrescritura")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MemberKick"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"20"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha expulsado un miembro del servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MemberPrune"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"21"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se suprimieron miembros del servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MemberBanAdd"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"22"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Miembro baneado del servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MemberBanRemove"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"23"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Miembro desbaneado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MemberUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"24"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Miembro fue actualizado en el servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Miembro")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MemberRoleUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"25"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha a\xf1adido o eliminado un miembro de un rol"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Rol parcial")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MemberMove"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"26"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Miembro movido a otro canal de voz"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MemberDisconnect"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"27"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Miembro desconectado de un canal de voz"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"BotAdd"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"28"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Bot a\xf1adido al servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"RoleCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"30"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se cre\xf3 rol"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Rol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"RoleUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"31"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Rol actualizado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Rol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"RoleDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"32"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Rol eliminado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Rol")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"InviteCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"40"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha creado invitaci\xf3n al servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Invitaci\xf3n y metadatos de invitaci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"InviteUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"41"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha actualizado invitaci\xf3n al servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Invitaci\xf3n y metadatos de invitaci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"InviteDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"42"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha eliminado invitaci\xf3n al servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Invitaci\xf3n y metadatos de invitaci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"WebhookCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"50"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha creado webhook"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Webhook")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"WebhookUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"51"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se han actualizado las propiedades o el canal del webhook"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Webhook")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"WebhookDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"52"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Webhook eliminado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Webhook")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"EmojiCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"60"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se cre\xf3 Emoji"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Emoji")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"EmojiUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"61"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha actualizado nombre de emoji"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Emoji")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"EmojiDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"62"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Emoji fue eliminado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Emoji")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MessageDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"72"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha borrado un solo mensaje"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MessageBulkDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"73"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se han borrado varios mensajes"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MessagePin"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"74"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Mensaje se ha fijado en un canal"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"MessageUnPin"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"75"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha eliminado un mensaje de los fijados de un canal"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IntegrationCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"80"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Aplicaci\xf3n se ha a\xf1adido al servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Integraci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IntegrationUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"81"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha actualizado aplicaci\xf3n (por ejemplo, se han actualizado sus \xe1mbitos)"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Integraci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IntegrationDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"82"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Aplicaci\xf3n ha sido eliminada del servidor"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Integraci\xf3n")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"StageInstanceCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"83"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha creado la instancia del escenario (el canal del escenario pasa a estar en directo)"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Escenario instancia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"StageInstanceUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"84"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se han actualizado los detalles de la instancia de escenario"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Escenario instancia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"StageInstanceDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"85"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha eliminado instancia de escenario (el canal de escenario ya no est\xe1 en directo)"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Escenario instancia")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"StickerCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"90"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se cre\xf3 sticker"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Sticker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"StickerUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"91"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se han actualizado los detalles de un sticker"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Sticker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"StickerDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"92"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha eliminado sticker"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Sticker")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GuildScheduledEventCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"100"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Evento creado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Evento programado del servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GuildScheduledEventUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"101"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Evento actualizado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Evento programado del servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GuildScheduledEventDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"102"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Evento cancelado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Evento programado del servidor")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ThreadCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"110"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha creado un hilo en un canal"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Hilo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ThreadUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"111"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Hilo actualizado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Hilo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ThreadDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"112"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Hilo eliminado"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Hilo")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"ApplicationCommandPermissionUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"121"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se han actualizado los permisos de un comando"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Permiso de comando")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"AutoModerationRuleCreate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"140"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha creado una regla de moderaci\xf3n autom\xe1tica"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Regla de moderaci\xf3n autom\xe1tica")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"AutoModerationRuleUpdate"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"141"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha actualizado una regla de moderaci\xf3n autom\xe1tica"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Regla de moderaci\xf3n autom\xe1tica")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"AutoModerationRuleDelete"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"142"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Se ha eliminado una regla de moderaci\xf3n autom\xe1tica"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"Regla de moderaci\xf3n autom\xe1tica")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"AutoModerationBlockMessage"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"143"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Mensaje bloqueado por Moderaci\xf3n Autom\xe1tica"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"AutoModerationFlagToChannel"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"144"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Mensaje marcado por la moderaci\xf3n autom\xe1tica"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"AutoModerationUserCommunicationDisabled"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"145"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"La Moderaci\xf3n Autom\xe1tica ha aisla un miembro"),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}))))),(0,n.kt)("h2",c({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 sus \xfaltimos baneos (que se registran en los registros de auditor\xeda):"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getAuditLogs',\n    code: `\n  $getAuditLogs[$guildID;$authorID;5;$authorID;12;{executor.username}: {target.id} - {action}]\n  `\n});\n")))}f.isMDXComponent=!0}}]);