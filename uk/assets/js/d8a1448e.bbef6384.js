"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[59228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,o(o({ref:t},c),{},{components:n})):a.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95035:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var a=n(3905),r=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),d=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$createApplicationCommand",description:"Creates an application command."},k=void 0,g={unversionedId:"functions/createapplicationcommand",id:"version-5.5.5/functions/createapplicationcommand",title:"$createApplicationCommand",description:"Creates an application command.",source:"@site/versioned_docs/version-5.5.5/functions/createapplicationcommand.md",sourceDirName:"functions",slug:"/functions/createapplicationcommand",permalink:"/uk/docs/5.5.5/functions/createapplicationcommand",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$createApplicationCommand",description:"Creates an application command."},sidebar:"docs",previous:{title:"$channelID",permalink:"/uk/docs/5.5.5/functions/channelid"},next:{title:"$channelName",permalink:"/uk/docs/5.5.5/functions/channelname"}},h={},y=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Application Permissions",id:"application-permissions",level:4},{value:"Application Types",id:"application-types",level:4},{value:"Slash Options",id:"slash-options",level:4},{value:"Footnotes",id:"footnotes",level:6},{value:"Examples",id:"examples",level:2}],N={toc:y},b="wrapper";function v(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(b,u(m(m({},N),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Create an application command which is can be:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Slash type"),(0,a.kt)("li",{parentName:"ul"},"Message type"),(0,a.kt)("li",{parentName:"ul"},"User type")),(0,a.kt)("h3",m({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$createApplicationCommand[guildID/global;application name;application description?;default permission;type;options?]\n")),(0,a.kt)("h3",m({},{id:"fields"}),"Fields"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Field"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Description"),(0,a.kt)("th",m({parentName:"tr"},{align:"left"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"guildID/global"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"Creates the application command, for guild or global"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"application name"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The name of application command"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"application description"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"Description of application command, ",(0,a.kt)("strong",{parentName:"td"},"only required on slash type")),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"default permission"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The permission whom has authorize to use"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"type"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The type of application command"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"yes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"options"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"The options of the ",(0,a.kt)("strong",{parentName:"td"},"slash")," type"),(0,a.kt)("td",m({parentName:"tr"},{align:"left"}),"no")))),(0,a.kt)("h4",m({},{id:"application-permissions"}),"Application Permissions"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true")," \u2014 Anyone has permission to execute it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false")," \u2014 No one will able to execute the application command (can be changed with application permission functions)"))),(0,a.kt)("h4",m({},{id:"application-types"}),"Application Types"),(0,a.kt)("blockquote",null,(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"message")," \u2014 Creates the application command can be executed on the message."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"slash")," \u2014 Creates an application command for slash message."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"user")," \u2014 Creates an application command that can be executed on the user."))),(0,a.kt)("h4",m({},{id:"slash-options"}),"Slash Options"),(0,a.kt)("p",null,"There are 3 types of creating a slash options:"),(0,a.kt)("p",null,"  Firstly"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"name:description:require:type\n//choices, subcommand & sub groups don't work on this.\n")),(0,a.kt)("p",null,"  Secondly"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"// {subCommand:name:description:\n{type:name:description:require}\n// :{choice:name:value}\n")),(0,a.kt)("p",null,"  And the last one"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-json"}),'{\n  "name": "name",\n  "description": "description",\n  "required": boolean,\n  "type": "STRING" // or a number of type\n}\n')),(0,a.kt)("h6",m({},{id:"footnotes"}),"Footnotes"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You don't need to use application description on apps since it won't show up."),(0,a.kt)("li",{parentName:"ul"},"Slash command is name or option, ",(0,a.kt)("strong",{parentName:"li"},"cannot")," contain uppercase. But apps interaction commands can have."),(0,a.kt)("li",{parentName:"ul"},"You can create up to 25 choices. For more information you can check Discord Documentary."),(0,a.kt)("li",{parentName:"ul"},"All application types can be called with ",(0,a.kt)("inlineCode",{parentName:"li"},"slash")," prototype.")),(0,a.kt)("h2",m({},{id:"examples"}),"Examples"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Message Application")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "create-message-apps",\n  code: `\n  Created the message application successfully.\n\n  $createApplicationCommand[$guildID;Warn;;true;message]\n  `\n});\n\n// $interactionData[targetId] gets the target\'s id. Which is a message ID.\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User Application")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "create-user-apps",\n  code: `\n  Created the user application successfully.\n\n  $createApplicationCommand[$guildID;Ban;;admin;user]\n  `\n});\n\n// $interactionData[targetId] gets the target\'s id. Which is an user ID.\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Special Slash Command from contributor \u2764")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "create-slash-cmd",\n  code: `\n  Created the sub-slash command successfully.\n  \n  $createApplicationCommand[$guildID;ban;.;true;slash;[\n    {\n      "name": "mention", \n      "description": "Find user and ban them on the current server.", \n      "type": "SUB_COMMANDS", \n      "options": [\n        { \n          "name": "user", \n          "description": "Mention an user.", \n          "required": true, \n          "type": "USER"\n        },\n        {\n          "name": "reason", \n          "description": "Explain it with a few words.", \n          "required": false, \n          "type": "STRING"\n        }\n      ]\n    }, \n    {\n      "name": "id", \n      "description": "Type an user ID to ban them on the current server.", \n      "type": "SUB_COMMANDS", \n      "options": [\n        {\n          "name": "user", \n          "description": "Type the user ID.", \n          "required": true, \n          "type": "STRING"\n        }, \n        {\n          "name": "reason", \n          "description": "Explain it with a few words.", \n          "required": false, \n          "type": "STRING"\n        }\n      ] \n    }\n  ]]\n  `\n});\n')))}v.isMDXComponent=!0}}]);