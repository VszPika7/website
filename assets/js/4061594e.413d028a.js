"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[27641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),s=r,f=m["".concat(d,".").concat(s)]||m[s]||u[s]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},95865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>w,frontMatter:()=>f,metadata:()=>k,toc:()=>N});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&p(e,a,t[a]);return e},u=(e,t)=>i(e,l(t)),s=(e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$ifAwaited",description:"$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.",id:"ifAwaited"},g=void 0,k={unversionedId:"functions/misc-related/ifAwaited",id:"version-6.4.0/functions/misc-related/ifAwaited",title:"$ifAwaited",description:"$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.",source:"@site/versioned_docs/version-6.4.0/functions/misc-related/ifAwaited.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/ifAwaited",permalink:"/docs/functions/misc-related/ifAwaited",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689982189,formattedLastUpdatedAt:"Jul 21, 2023",frontMatter:{title:"$ifAwaited",description:"$ifAwaited will check a condition and executed an awaited command depending on the condition being true or false.",id:"ifAwaited"},sidebar:"docs",previous:{title:"$if",permalink:"/docs/functions/misc-related/if"},next:{title:"$isTicket",permalink:"/docs/functions/misc-related/isTicket"}},b={},N=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Valid Mathematical Operators",id:"valid-mathematical-operators",level:4},{value:"Example(s)",id:"examples",level:2}],y={toc:N},h="wrapper";function w(e){var t=e,{components:a}=t,r=s(t,["components"]);return(0,n.kt)(h,u(m(m({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$ifAwaited")," will check a condition and executed an awaited command depending on the condition being true or false."),(0,n.kt)("h2",m({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$ifAwaited[condition;true;false?]\n")),(0,n.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"condition"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Condition to check"),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"true"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"What to do when the condition is true."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"false?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"What to do when the condition is false."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("h4",m({},{id:"valid-mathematical-operators"}),"Valid Mathematical Operators"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Operator"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Mathematical Expression"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"=="),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"equal to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"!="),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"not equal to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"<="),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"less than or equal to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),">","="),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"greater than or equal to")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),">"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"greater than")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"<"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"less than")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"|","|"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"logical OR")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"&&"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"logical conjunction")))),(0,n.kt)("h2",m({},{id:"examples"}),"Example(s)"),(0,n.kt)("p",null,"This will execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"awaitedCommand")," awaited command as the statement is true:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "ifAwaited",\n    code: `\n    $ifAwaited[1==1;{execute:awaitedCommand}]\n    `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommand",\n    code: `\n    $sendMessage[That\'s true!;false]\n    `\n});\n')))}w.isMDXComponent=!0}}]);