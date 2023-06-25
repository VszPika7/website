"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[63220],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=m(a),g=n,c=u["".concat(d,".").concat(g)]||u[g]||s[g]||l;return a?r.createElement(c,i(i({ref:e},p),{},{components:a})):r.createElement(c,i({ref:e},p))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=g;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:n,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},56848:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={title:"$formatDate",description:"$formatDate will format a given date.",id:"formatDate"},i=void 0,o={unversionedId:"functions/util-related/formatDate",id:"version-6.2.6/functions/util-related/formatDate",title:"$formatDate",description:"$formatDate will format a given date.",source:"@site/versioned_docs/version-6.2.6/functions/util-related/formatDate.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/formatDate",permalink:"/docs/functions/util-related/formatDate",draft:!1,tags:[],version:"6.2.6",lastUpdatedBy:"Fafa",lastUpdatedAt:1687714701,formattedLastUpdatedAt:"Jun 25, 2023",frontMatter:{title:"$formatDate",description:"$formatDate will format a given date.",id:"formatDate"},sidebar:"docs",previous:{title:"$findUser",permalink:"/docs/functions/util-related/findUser"},next:{title:"$get",permalink:"/docs/functions/util-related/get"}},d={},m=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],p={toc:m},u="wrapper";function s(t){let{components:e,...a}=t;return(0,n.kt)(u,(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$formatDate")," will format a given date."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-php"},"$formatDate[date;format?]\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Field"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:"center"},"Required"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"date"),(0,n.kt)("td",{parentName:"tr",align:null},"number"),(0,n.kt)("td",{parentName:"tr",align:null},"The date you want to format."),(0,n.kt)("td",{parentName:"tr",align:"center"},"true")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"format?"),(0,n.kt)("td",{parentName:"tr",align:null},"string"),(0,n.kt)("td",{parentName:"tr",align:null},"The format that will be used to display the date (listed below)."),(0,n.kt)("td",{parentName:"tr",align:"center"},"false")))),(0,n.kt)("details",{open:!0},(0,n.kt)("summary",null," ",(0,n.kt)("h2",null," Possible formatting ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Format"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:"right"},"Returns"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dddd"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the weekday, Monday, Tuesday, Wednesday ..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"dd"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the abbreviation of the weekday, Mon, Tue, Wed ..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"D"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the day of the month"),(0,n.kt)("td",{parentName:"tr",align:"right"},"Number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DD"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the day of the month"),(0,n.kt)("td",{parentName:"tr",align:"right"},"String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"DDD"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the day of the year, 256, 257 ..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"Number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"M / MM"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the month of the year, 10, 11 ..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"Number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MMM"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the abbreviation of the month, Jan, Feb ..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"MMMM"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the month fully January, February ..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"YYYY"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns year fully, 2020, 2021 ..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"Number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"YY"),(0,n.kt)("td",{parentName:"tr",align:null},"Returns the last two digits of the year, 20, 21 ..."),(0,n.kt)("td",{parentName:"tr",align:"right"},"Number"))))),(0,n.kt)("h2",{id:"examples"},"Example(s)"),(0,n.kt)("p",null,"This will return your current date in the ",(0,n.kt)("inlineCode",{parentName:"p"},"dddd, DD MMMM YYYY")," format:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"bot.command({\n    name: 'formatDate',\n    code: `\n  $formatDate[$dateStamp;dddd, DD MMMM YYYY]\n  `\n});\n")))}s.isMDXComponent=!0}}]);