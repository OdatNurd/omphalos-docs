"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[252],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=u(n),g=l,h=d["".concat(s,".").concat(g)]||d[g]||m[g]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,i=new Array(o);i[0]=g;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:l,i[1]=r;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var a=n(7462),l=(n(7294),n(3905));const o={title:"Configuration"},i=void 0,r={unversionedId:"guides/configuration",id:"guides/configuration",title:"Configuration",description:"This page would talk about the configuration file in more detail. It should",source:"@site/docs/guides/06_configuration.md",sourceDirName:"guides",slug:"/guides/configuration",permalink:"/docs/guides/configuration",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Configuration"},sidebar:"tutorialSidebar",previous:{title:"Extensions",permalink:"/docs/guides/extensions"},next:{title:"Logging",permalink:"/docs/guides/logging"}},s={},u=[{value:"port",id:"port",level:2},{value:"bundles",id:"bundles",level:2},{value:"additional",id:"additional",level:3},{value:"ignore",id:"ignore",level:3},{value:"logging",id:"logging",level:2},{value:"level",id:"level",level:3},{value:"timestamp",id:"timestamp",level:3},{value:"console",id:"console",level:3},{value:"file",id:"file",level:3},{value:"cors",id:"cors",level:2},{value:"origin",id:"origin",level:3},{value:"developerMode",id:"developermode",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This page would talk about the configuration file in more detail. It should\ninclude all of the configuration options, their default values, and how you can\nset them in either the configuration file OR via environment variables."),(0,l.kt)("p",null,"The current configuration keys are:"),(0,l.kt)("h2",{id:"port"},"port"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"PORT"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"3000"))),(0,l.kt)("p",null,"The port that the internal server listens on."),(0,l.kt)("h2",{id:"bundles"},"bundles"),(0,l.kt)("p",null,"The options in this section control bundles; extra locations to load a bundle\nfrom and bundles which should be ignored and not loaded if they are found."),(0,l.kt)("h3",{id:"additional"},"additional"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"ADDITIONAL_BUNDLES"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"A list of extra paths that contain bundles to load. This should be either a list\nof absolute paths, or paths that are relative to the installation location of\nOmphalos."),(0,l.kt)("h3",{id:"ignore"},"ignore"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"IGNORE_BUNDLES"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"A list of bundle ",(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"names"))," that should not be loaded if they are seen."),(0,l.kt)("h2",{id:"logging"},"logging"),(0,l.kt)("p",null,"The options here control logging in the application; when it happens and where\nit gets sent."),(0,l.kt)("admonition",{title:"A transport is needed!",type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"When configuring logging, you can choose to send logs either to the console, to\na log file, or both. You should always configure at least one of the two; if\nyou don't want to log to the console, log to a file."),(0,l.kt)("p",{parentName:"admonition"},"Diagnosing errors should they happen will be much easier.")),(0,l.kt)("h3",{id:"level"},"level"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"LOG_LEVEL"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"info"))),(0,l.kt)("p",null,"Controls the level of log details that are sent to the log output. When logging\nat a level, all logs at that level and below are logged and anything above is\nignored."),(0,l.kt)("p",null,"For example, ",(0,l.kt)("inlineCode",{parentName:"p"},"silly")," logs everything and ",(0,l.kt)("inlineCode",{parentName:"p"},"info")," will not log ",(0,l.kt)("inlineCode",{parentName:"p"},"debug")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"silly"),",\nand so on."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"error")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"warn")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"info")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"debug")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("inlineCode",{parentName:"li"},"silly"))),(0,l.kt)("h3",{id:"timestamp"},"timestamp"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"LOG_TIMESTAMP"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"YYYY-MM-DD HH:mm:ss.SSS"))),(0,l.kt)("p",null,"All generated logs are timestamped; this configuration option allows you to\nspecify the format and detail of the timestamps used."),(0,l.kt)("h3",{id:"console"},"console"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"LOG_TO_CONSOLE"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"true"))),(0,l.kt)("p",null,"When logging, send log output to the console. This is handiest when running\nOmphalos during development or from the command line and less so when launching\nit as a GUI application."),(0,l.kt)("h3",{id:"file"},"file"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"LOG_FILENAME"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"''"))),(0,l.kt)("p",null,"Controls whether log output is sent to a file or not, and if so, what the\nfilename template for the file is. The filename can be anything you like;\ninclude ",(0,l.kt)("inlineCode",{parentName:"p"},"%DATE%")," to insert the current date into the filename."),(0,l.kt)("h2",{id:"cors"},"cors"),(0,l.kt)("p",null,"The options here control ",(0,l.kt)("inlineCode",{parentName:"p"},"CORS"),"; from ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"},"MDN"),":"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that\nallows a server to indicate any origins (domain, scheme, or port) other than\nits own from which a browser should permit loading resources.")),(0,l.kt)("h3",{id:"origin"},"origin"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"CORS_ORIGIN"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"[]"))),(0,l.kt)("p",null,"This contains a list of extra origins to allow requests from; items in the\nlist are regular strings unless they start and end with a ",(0,l.kt)("inlineCode",{parentName:"p"},"/")," character, in\nwhich case they are treated as regular expressions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'"cors": {\n  "origin": [\n    "/chrome-extension:\\/\\/.*/",\n    "https://hoppscotch.io"\n  ]\n}\n')),(0,l.kt)("h2",{id:"developermode"},"developerMode"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"environment variable: ",(0,l.kt)("strong",{parentName:"li"},(0,l.kt)("em",{parentName:"strong"},"DEVELOPER_MODE"))),(0,l.kt)("li",{parentName:"ul"},"default: ",(0,l.kt)("inlineCode",{parentName:"li"},"false"))),(0,l.kt)("p",null,"Controls whether developer mode is enabled or not. Generally speaking, you\nprobably don't need to have this turned on unless you are having issues and a\ndeveloper asks you to turn it on."),(0,l.kt)("p",null,"With this turned on:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Dashboard panels have reload buttons to individually reload them."),(0,l.kt)("li",{parentName:"ul"},"The docs button loads local documentation instead of the official site.")),(0,l.kt)("admonition",{type:"warning"},(0,l.kt)("p",{parentName:"admonition"},"This option is primarily for use while developing Omphalos; if you are an\nadvanced user you may also find it useful as well, so long as you keep in mind\nthat the user experience will be different as a result of turning this on.")))}d.isMDXComponent=!0}}]);