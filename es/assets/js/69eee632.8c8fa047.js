"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[94413],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=a,m=d["".concat(p,".").concat(u)]||d[u]||f[u]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},90322:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>g,default:()=>N,frontMatter:()=>m,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),u=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$jsonRequest",description:"Retrieve a JSON format (api)"},g=void 0,y={unversionedId:"functions/jsonrequest",id:"version-5.5.5/functions/jsonrequest",title:"$jsonRequest",description:"Retrieve a JSON format (api)",source:"@site/versioned_docs/version-5.5.5/functions/jsonrequest.md",sourceDirName:"functions",slug:"/functions/jsonrequest",permalink:"/es/docs/5.5.5/functions/jsonrequest",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Fafa",lastUpdatedAt:1689549866,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$jsonRequest",description:"Retrieve a JSON format (api)"},sidebar:"docs",previous:{title:"$joinVC",permalink:"/es/docs/5.5.5/functions/joinvc"},next:{title:"$kick",permalink:"/es/docs/5.5.5/functions/kick"}},h={},k=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Types of Header",id:"types-of-header",level:4},{value:"Example",id:"example",level:2}],b={toc:k},v="wrapper";function N(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(v,f(d(d({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function returns a property from a JSON formatted api."),(0,r.kt)("h3",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$jsonRequest[api;property?;error?;headerName:headerValue?...]\n")),(0,r.kt)("h3",d({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"api"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The api from which the specified property is to be retrieved"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"link"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"yes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"property"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The property that is to be retrieved from the api"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"error"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The error to be displayed if the property wasn't found"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"alphanumeric"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"header"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"The header that is to be retrieved from the api"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"headerName:headerValue"),(0,r.kt)("td",d({parentName:"tr"},{align:"left"}),"no")))),(0,r.kt)("h4",d({},{id:"types-of-header"}),"Types of Header"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"normal: ")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-text"}),"A:hi;B:Bye\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"json: ")),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'{ "A" : "hi", "B" : "bye" }\n')),(0,r.kt)("h2",d({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "api", \ncode: `$jsonRequest[https://some-random-api.ml/facts/dog;fact;Could not fnd a dog fact!]`\n})\n/*\n\nAPI Breakdown:\nIn this api given, if you go to the link it will give you\n{"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."}\nSo in \'property\', you\'d put "fact", because it\'s the only property there to get\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;fact;Could not fnd a dog fact!]`\n\n\nBut what if the api was like this:\n{"dog": {"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."} }\nThen in property, first you\'d\nneed to get "dog", so you\'d put \'dog\', then to get the fact\nadd fact after it, like this: \'dog.fact\'\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;dog.fact;Could not fnd a dog fact!]`\n\n\nBut let\'s say the api has brackets around the thing you\nwant to get:\n{"dog": [{"fact":"Putting collars on dogs is an ancient practice, but dog licenses are much more recent."}] }\nSo in property, you will still have \'dog\' first,\nthen you\'d add brackets as follows: \'dog[0]\' \nthen simply add on fact. \'dog[0].fact\'\nWARNING: For DBD.js instead of [] we use #RIGHT# for [ and #LEFT# for ]\nEx:\n$jsonRequest[https://some-random-api.ml/facts/dog;dog#RIGHT#0#LEFT#.fact;Could not fnd a dog fact!]`\n\n\n*/\n')))}N.isMDXComponent=!0}}]);