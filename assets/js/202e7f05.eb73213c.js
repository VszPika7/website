"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[62069],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},c),{},{components:n})):a.createElement(k,o({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},20500:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const r={title:"Introduction",description:"Setting up aoi.music with ease.",id:"aoimusic-introduction"},o=void 0,l={unversionedId:"akarui/aoi.music/aoimusic-introduction",id:"akarui/aoi.music/aoimusic-introduction",title:"Introduction",description:"Setting up aoi.music with ease.",source:"@site/docs/akarui/aoi.music/1introduction.md",sourceDirName:"akarui/aoi.music",slug:"/akarui/aoi.music/aoimusic-introduction",permalink:"/docs/akarui/aoi.music/aoimusic-introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"Leref",lastUpdatedAt:1680807940,formattedLastUpdatedAt:"Apr 6, 2023",frontMatter:{title:"Introduction",description:"Setting up aoi.music with ease.",id:"aoimusic-introduction"},sidebar:"docs",previous:{title:"Soundcloud ID",permalink:"/docs/other/soundcloudid"},next:{title:"$addFilter",permalink:"/docs/akarui/aoi.music/functions/addFilter"}},s={},u=[{value:"Table of Content",id:"table-of-content",level:3},{value:"Installation",id:"installation",level:3},{value:"Options",id:"options",level:3},{value:"Example Usage",id:"example-usage",level:3},{value:"Events",id:"events",level:3},{value:"Adding Events",id:"adding-events",level:4},{value:"List of Events",id:"list-of-events",level:4},{value:"Using Events",id:"using-events",level:3}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"table-of-content"},"Table of Content"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#installation"},"Installation"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#example-usage"},"Setup"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#events"},"Events")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#adding-events"},"Adding Events"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#list-of-events"},"List of Events"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"#using-events"},"Using Events")))))),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"node.js 16.9.0 or newer is required.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @akarui/aoi.music\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# for Edge\nnpm install @akarui/aoi.music@dev\n# or\nnpm install https://github.com/akaruidevelopment/music#main\n")),(0,i.kt)("h3",{id:"options"},"Options"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const voice = new AoiVoice(bot, {\n    searchOptions?: {\n        soundcloudClientId?: string,\n        youtubeCookie?: string,\n        youtubeAuth?: PathLike,\n        youtubegl?: string,\n        youtubeClient?: "WEB" | "ANDROID" | "YTMUSIC",\n    },\n    requestOptions?: {\n        offsetTimeout?: number,\n        soundcloudLikeTrackLimit?: number,\n        youtubePlaylistLimit?: number,\n        spotifyPlaylistLimit?: number,\n    },\n    devOptions?: {\n        debug: boolean,\n    },\n});\n')),(0,i.kt)("h3",{id:"example-usage"},"Example Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'const { AoiClient } = require("aoi.js");\nconst { AoiVoice, PlayerEvents, PluginName, Cacher, Filter } = require("@akarui/aoi.music");\n\nconst bot = new AoiClient({\n    token: "Discord Bot Token",\n    prefix: "Discord Bot Prefix",\n    intents: ["MessageContent", "Guilds", "GuildMessages", "GuildVoiceStates"],\n    events: ["onMessage", "onInteractionCreate"],\n    database: {\n        type: "aoi.db",\n        db: require("aoi.db"),\n        tables: ["main"],\n        path: "./database/",\n        extraOptions: {\n            dbType: "KeyValue"\n        }\n    }\n});\n\nconst voice = new AoiVoice(bot, {\n    searchOptions: {\n        soundcloudClientId: "Soundcloud ID",\n        youtubegl: "US",\n    },\n    requestOptions: {\n        offsetTimeout: 0,\n        soundcloudLikeTrackLimit: 200,\n    },\n});\n\n// Command Example (ping)\nbot.command({\n    name: "ping",\n    code: `Pong! $pingms`,\n});\n\n// optional (cacher / filter)\nvoice.addPlugin(PluginName.Cacher, new Cacher("memory" /* or "disk" */));\nvoice.addPlugin(PluginName.Filter, new Filter({\n    filterFromStart: false,\n}));\n')),(0,i.kt)("h3",{id:"events"},"Events"),(0,i.kt)("h4",{id:"adding-events"},"Adding Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"voice.bindExecutor(bot.functionManager.interpreter);\n\nvoice.addEvent(PlayerEvents.EVENT_NAME);\n")),(0,i.kt)("h4",{id:"list-of-events"},"List of Events"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRACK_START")," ","\u2192"," Emitted whenever a track starts. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRACK_END")," ","\u2192"," Emitted whenever a track ends."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QUEUE_START")," ","\u2192"," Emitted whenever a queue starts."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"QUEUE_END")," ","\u2192"," Emitted whenever a queue ends."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"AUDIO_ERROR")," ","\u2192"," Emitted whenever a audio error occurs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRACK_PAUSE")," ","\u2192"," Emitted whenever a track pauses."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TRACK_RESUME")," ","\u2192"," Emitted whenever a track resumes.")),(0,i.kt)("h3",{id:"using-events"},"Using Events"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'loader.load(voice.cmds,"./voice/") // loader being the LoadCommands class\n')),(0,i.kt)("p",null,"This should be the content of your ",(0,i.kt)("inlineCode",{parentName:"p"},"/voice/somefile.js"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'module.exports = [{\n    channel: "$channelID",\n    type: "eventName",\n    code: `code to execute here`\n}]\n')),(0,i.kt)("p",null,"If you don't want to use handlers, you can use this instead in your main file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'voice.cmds["eventName"].set("name of the command", {\n    channel: "$channelID",\n    code: `code to execute here`\n});\n')))}d.isMDXComponent=!0}}]);