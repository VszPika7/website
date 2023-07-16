"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[30202],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,f=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},19896:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>v,frontMatter:()=>f,metadata:()=>k,toc:()=>b});var a=n(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&d(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),u=(e,t)=>{var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$addSelectMenu",description:"Adds a select menu component to message.",id:"addselectmenu"},g=void 0,k={unversionedId:"functions/addselectmenu",id:"version-5.5.5/functions/addselectmenu",title:"$addSelectMenu",description:"Adds a select menu component to message.",source:"@site/versioned_docs/version-5.5.5/functions/addselectmenu.md",sourceDirName:"functions",slug:"/functions/addselectmenu",permalink:"/es/docs/5.5.5/functions/addselectmenu",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$addSelectMenu",description:"Adds a select menu component to message.",id:"addselectmenu"},sidebar:"docs",previous:{title:"$addReactions",permalink:"/es/docs/5.5.5/functions/addreactions"},next:{title:"$addThreadMember",permalink:"/es/docs/5.5.5/functions/addthreadmember"}},h={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Select Menu Options",id:"select-menu-options",level:2},{value:"Notice",id:"notice",level:2},{value:"Example",id:"example",level:2}],y={toc:b},N="wrapper";function v(e){var t=e,{components:n}=t,r=u(t,["components"]);return(0,a.kt)(N,c(m(m({},y),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This function that adds a selection menu to client's message."),(0,a.kt)("h2",m({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$addSelectMenu[index;customID;placeholder;minimum value;maximum value;disable;label:description:value:default?:emoji?;...]\n")),(0,a.kt)("h2",m({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Type"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"index"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The menu to show up on the given embed"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"placeholder"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"Text that will show as default label on select menu."),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"minimum value"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"Minimal options to choose from"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"maximum value"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"Maximum options to choose from"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"number"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"disable"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"Disabling the selection menu"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"boolean"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")))),(0,a.kt)("h2",m({},{id:"select-menu-options"}),"Select Menu Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Option"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"label"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The title of select menu option"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"description"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The description of select menu option"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"value"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"Select menu option's value"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"default?"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"To show the select menu option as placeholder"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"emoji?"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"Adding emoji to select menu option"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h2",m({},{id:"notice"}),"Notice"),(0,a.kt)("p",null,"Interaction commands needs this event on main file (or handler):"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'events: ["onMessage", "onInteractionCreate"]\n')),(0,a.kt)("h2",m({},{id:"example"}),"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "add-select-menu",\n  code:`\n  Select an option.\n  \n  $addSelectMenu[1;helpCustomID;This placeholder won\'t show up cause we have selected default field as yes;1;1;no;A Option:Description of A option:helpValue0:no:\ud83d\udc4b;B Option::helpValue1:yes]\n  `\n});\n\nbot.interactionCommand({\n  name: "helpCustomID",\n  prototype: "selectMenu", \n  code: `\n  $interactionUpdate[A option\'s response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won\'t show up:helpValue0:Either this.:false}{selectMenuOptions:This won\'t show up either.:helpValue1:cause menu disabled.:false}}}]\n\n  $onlyIf[$interactionData[values[0]]==0;]\n  `\n});\n\nbot.interactionCommand({\n  name: "helpCustomID",\n  prototype: "selectMenu", \n  code: `\n  $interactionUpdate[B option\'s response.;;{actionRow:{selectMenu:helpCustomID:Menu has been disabled:1:1:yes:{selectMenuOptions:This won\'t show up:helpValue0:Either this.:false}{selectMenuOptions:This won\'t show up either.:helpValue1:cause menu disabled.:false}}}]\n\n  $onlyIf[$interactionData[values[0]]==1;]\n  `\n});\n')))}v.isMDXComponent=!0}}]);