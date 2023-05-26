"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[117],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2104:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>q,contentTitle:()=>x,default:()=>A,frontMatter:()=>E,metadata:()=>j,toc:()=>S});var a=t(7462),r=t(7294),o=t(3905),l=t(6010),i=t(2466),s=t(6550),u=t(1980),d=t(7392),c=t(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[s,u]=f({queryString:t,groupId:a}),[d,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),b=(()=>{const e=s??d;return h({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),p(e)}),[u,p,o]),tabValues:o}}var g=t(2389);const y="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),p=e=>{const n=e.currentTarget,t=d.indexOf(n),a=u[t].value;a!==o&&(c(n),s(a))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>d.push(e),onKeyDown:m,onClick:p},i,{className:(0,l.Z)("tabs__item",k,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function N(e){const n=b(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",y)},r.createElement(v,(0,a.Z)({},e,n)),r.createElement(w,(0,a.Z)({},e,n)))}function O(e){const n=(0,g.Z)();return r.createElement(N,(0,a.Z)({key:String(n)},e))}const T="tabItem_Ymn6";function C(e){let{children:n,hidden:t,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,l.Z)(T,a),hidden:t},n)}const E={title:"Creating Bundles",toc_max_heading_level:4},x=void 0,j={unversionedId:"quickstart/bundles",id:"quickstart/bundles",title:"Creating Bundles",description:"Omphalos itself is just a container that allows you free form access to",source:"@site/docs/quickstart/03-bundles.md",sourceDirName:"quickstart",slug:"/quickstart/bundles",permalink:"/docs/quickstart/bundles",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Creating Bundles",toc_max_heading_level:4},sidebar:"tutorialSidebar",previous:{title:"Configuring Omphalos",permalink:"/docs/quickstart/configuration"},next:{title:"Guides",permalink:"/docs/category/guides"}},q={},S=[{value:"Creating your first bundle",id:"creating-your-first-bundle",level:2},{value:"Creating the base bundle",id:"creating-the-base-bundle",level:3},{value:"Adding Omphalos Metadata",id:"adding-omphalos-metadata",level:3},{value:"Adding content",id:"adding-content",level:2},{value:"Adding a Panel",id:"adding-a-panel",level:3},{value:"Adding a Graphic",id:"adding-a-graphic",level:3},{value:"Adding an Extension",id:"adding-an-extension",level:3},{value:"Tying content together",id:"tying-content-together",level:2}],I={toc:S};function A(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},I,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Omphalos itself is just a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"container"))," that allows you free form access to\ncreate your own graphical overlays, control panel pages and server side code,\nallowing them all to connect together."),(0,o.kt)("p",null,"To actually make use of the software, you need to install or create one or more\n",(0,o.kt)("inlineCode",{parentName:"p"},"bundles"),", which add functionality to the app and therefore your stream."),(0,o.kt)("p",null,"This page has a quick overview of the process of creating a bundle and what is\npossible. For more details instructions, refer to the guide section of the\ndocumentation, which goes into more detail."),(0,o.kt)("h2",{id:"creating-your-first-bundle"},"Creating your first bundle"),(0,o.kt)("p",null,"A bundle in Omphalos is just a standard NodeJS package, with some key\ninformation stored in the package manifest that describes the bundle and the\ncontent that it provides to the application."),(0,o.kt)("p",null,"Bundles must be stored either in the bundle area of the configuration folder or\nat your option, you can configure Omphalos to look in a specific location for\nyour bundle."),(0,o.kt)("h3",{id:"creating-the-base-bundle"},"Creating the base bundle"),(0,o.kt)("p",null,"In this example we will create a very simple bundle from scratch that shows some\nof the key concepts that are used when creating one."),(0,o.kt)("p",null,"To do this, we must create a simple NodeJS package in the bundle folder; the\nlocation of this folder is ",(0,o.kt)("a",{parentName:"p",href:"/docs/quickstart/configuration#configuration-area"},"based on your operating system"),"."),(0,o.kt)("p",null,"In your terminal, switch to the bundle folder for your OS, and use your package\nmanager to choice to initialize a new bundle:"),(0,o.kt)(O,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(C,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-bundle-name\ncd my-bundle-name\nnpm init\n"))),(0,o.kt)(C,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-bundle-name\ncd my-bundle-name\nyarn init\n"))),(0,o.kt)(C,{value:"pnpm",label:"pnpm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir my-bundle-name\ncd my-bundle-name\npnpm init\n")))),(0,o.kt)("p",null,"The only keys that Omphalos requires in your initial ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," are the\n",(0,o.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"version")," keys. Any other keys you would normally find in the\nmanifest are fine, but Omphalos will ignore them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='my-bundle-name/package.json'",title:"'my-bundle-name/package.json'"},'{\n  "name": "my-bundle-name",\n  "version": "1.0.0",\n}\n')),(0,o.kt)("h3",{id:"adding-omphalos-metadata"},"Adding Omphalos Metadata"),(0,o.kt)("p",null,"In order to be recognized as a bundle, your package must:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Be stored in the ",(0,o.kt)("inlineCode",{parentName:"li"},"bundles")," folder of the configuration area OR have its\nlocation listed as an additional bundle"),(0,o.kt)("li",{parentName:"ol"},"Have a valid ",(0,o.kt)("inlineCode",{parentName:"li"},"name")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"version")," key"),(0,o.kt)("li",{parentName:"ol"},"Contain an ",(0,o.kt)("inlineCode",{parentName:"li"},"omphalos")," key with the required metadata.")),(0,o.kt)("p",null,"See the documentation on ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/manifest"},"bundle manifests")," for complete details on the\navailable options. The only required key is the one that tells Omphalos what\nversion of the application is required for the bundle to operate:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='my-bundle-name/package.json'",title:"'my-bundle-name/package.json'"},'{\n  "name": "my-bundle-name",\n  "version": "1.0.0",\n  "omphalos": {\n    "compatibleRange": "~0.0.1"\n  }\n}\n')),(0,o.kt)("p",null,"At this point, if you quit and restart Omphalos, the logs should show you that\nyour bundle was found and loaded without errors:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:"title='Sample Application Startup'",title:"'Sample",Application:!0,"Startup'":!0},"2022-12-23 11:54:53.746 [info] core: --------------------------------\n2022-12-23 11:54:53.751 [info] core: omphalos version 0.0.1 launching\n2022-12-23 11:54:53.751 [info] core: --------------------------------\n2022-12-23 11:54:53.753 [info] core: no extra CORS origin added\n2022-12-23 11:54:53.755 [info] resolver: scanning all bundle folders for installed bundles\n2022-12-23 11:54:53.756 [info] resolver: found 1 potential bundle(s)\n2022-12-23 11:54:53.757 [info] resolver: loaded bundle manifest for 'my-sample-bundle' from bundles/my-sample-bundle\n2022-12-23 11:54:53.760 [info] loader: loading bundle my-sample-bundle\n2022-12-23 11:54:53.760 [info] loader: loading code extensions for 'my-sample-bundle'\n2022-12-23 11:54:53.760 [warn] loader: bundle 'my-sample-bundle' has no extensions; skipping setup\n2022-12-23 11:54:53.760 [info] loader: setting up routes for 'my-sample-bundle' panels\n2022-12-23 11:54:53.761 [warn] loader: bundle 'my-sample-bundle' has no panels; skipping setup\n2022-12-23 11:54:53.761 [info] loader: setting up routes for 'my-sample-bundle' graphics\n2022-12-23 11:54:53.761 [warn] loader: bundle 'my-sample-bundle' has no graphics; skipping setup\n2022-12-23 11:54:53.772 [info] core: listening for requests at http://localhost:3000\n")),(0,o.kt)("p",null,"The bundle resolver scans for and finds the bundle, loads and validates the\nmanifest, verifies that the version of Omphalos is compatible, if so, proceeds\nwith loading of the bundle."),(0,o.kt)("h2",{id:"adding-content"},"Adding content"),(0,o.kt)("p",null,"As seen above, the bundle no content to speak of; no server side ",(0,o.kt)("inlineCode",{parentName:"p"},"extension"),"\ncode, no dashboard ",(0,o.kt)("inlineCode",{parentName:"p"},"panels")," and no overlay ",(0,o.kt)("inlineCode",{parentName:"p"},"graphics"),"."),(0,o.kt)("h3",{id:"adding-a-panel"},"Adding a Panel"),(0,o.kt)("p",null,"[ steps for adding a simple panel with a screenshot of it in the dashboard ]"),(0,o.kt)("h3",{id:"adding-a-graphic"},"Adding a Graphic"),(0,o.kt)("p",null,"[ steps for adding a graphic; show screenshot of it loaded in a browser ]"),(0,o.kt)("p",null,"This one is problematic because until we come up with the user interface to\nview graphics, you need to know urls."),(0,o.kt)("h3",{id:"adding-an-extension"},"Adding an Extension"),(0,o.kt)("p",null,"[ sample extension code ; show it starting up ]"),(0,o.kt)("h2",{id:"tying-content-together"},"Tying content together"),(0,o.kt)("p",null,"The steps here would walk through the simplistic changes needed to the above\nsamples so that the panel has a button in it which, when clicked, sends a\nmessage to the back end, which will send a message to the graphic."),(0,o.kt)("p",null,"The graphic should respond to both messages and display something to show that\nit gets both messages and not just one."),(0,o.kt)("p",null,"This shows the basics of how message sending allows you to tie everything\ntogether."))}A.isMDXComponent=!0}}]);