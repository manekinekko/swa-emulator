"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[982],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7826:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={sidebar_position:1},s="1. Install the SWA CLI",p={unversionedId:"use/install",id:"use/install",title:"1. Install the SWA CLI",description:"You can install the Static Web Apps CLI using npm, yarn or pnpm.",source:"@site/docs/use/1-install.md",sourceDirName:"use",slug:"/use/install",permalink:"/static-web-apps-cli/docs/use/install",draft:!1,editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/use/1-install.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"About SWA CLI",permalink:"/static-web-apps-cli/docs/intro"},next:{title:"2. Start the Emulator",permalink:"/static-web-apps-cli/docs/use/emulator"}},c={},u=[{value:"Installing the CLI",id:"installing-the-cli",level:2},{value:"Validate the install",id:"validate-the-install",level:2},{value:"Basic usage",id:"basic-usage",level:2},{value:"Extended usage",id:"extended-usage",level:2},{value:"Run using npx",id:"run-using-npx",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"1-install-the-swa-cli"},"1. Install the SWA CLI"),(0,i.kt)("p",null,"You can install the Static Web Apps CLI using ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/commands/npm-install"},(0,i.kt)("inlineCode",{parentName:"a"},"npm")),", ",(0,i.kt)("a",{parentName:"p",href:"https://classic.yarnpkg.com/lang/en/docs/cli/install/"},(0,i.kt)("inlineCode",{parentName:"a"},"yarn"))," or ",(0,i.kt)("a",{parentName:"p",href:"https://pnpm.io/cli/install"},(0,i.kt)("inlineCode",{parentName:"a"},"pnpm")),"."),(0,i.kt)("h2",{id:"installing-the-cli"},"Installing the CLI"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"See: "),(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@azure/static-web-apps-cli"},"@azure/static-web-apps-cli")," ."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"To install this globally, use:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @azure/static-web-apps-cli\n")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You can also install the SWA CLI inside a project (instead of globally) as a development dependency using:"),(0,i.kt)("pre",{parentName:"div"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -D @azure/static-web-apps-cli\n")))),(0,i.kt)("h2",{id:"validate-the-install"},"Validate the install"),(0,i.kt)("p",null,"Installing the package will make the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"swa"))," command available on your development machine. To validate your install, you can check the installed version with:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"swa --version\n# Should print out the version number\n")),(0,i.kt)("h2",{id:"basic-usage"},"Basic usage"),(0,i.kt)("p",null,"The best way to get started is to run the ",(0,i.kt)("inlineCode",{parentName:"p"},"swa")," command alone and follow the interactive prompts."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"swa\n")),(0,i.kt)("p",null,"It will generate a configuration for you, then build your project and ask if you want to deploy it to Azure."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"../cli/swa"},"swa")," for more details."),(0,i.kt)("h2",{id:"extended-usage"},"Extended usage"),(0,i.kt)("p",null,"Here are the currently supported ",(0,i.kt)("inlineCode",{parentName:"p"},"swa")," commands. Use ",(0,i.kt)("inlineCode",{parentName:"p"},"swa <command> --help")," to learn about options and usage for that particular command."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../cli/swa-login"},(0,i.kt)("inlineCode",{parentName:"a"},"login")),": login into Azure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../cli/swa-init"},(0,i.kt)("inlineCode",{parentName:"a"},"init")),": initialize a new static web app project"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../cli/swa-start"},(0,i.kt)("inlineCode",{parentName:"a"},"start")),": start the emulator from a directory or bind to a dev server"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../cli/swa-deploy"},(0,i.kt)("inlineCode",{parentName:"a"},"deploy")),": deploy the current project to Azure Static Web Apps"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../cli/swa-build"},(0,i.kt)("inlineCode",{parentName:"a"},"build")),": build your project")),(0,i.kt)("h2",{id:"run-using-npx"},"Run using npx"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/commands/npx"},"npx"),' command (aka "npm exec") lets you run an arbitrary command from a local or remote npm package. If the command was not installed globally on the device, this installs it for you in a central cache - making it a useful option if you want to use different versions of the same command on the local device.'),(0,i.kt)("p",null,"You can run any Static Web Apps CLI commands directly using npx. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @azure/static-web-apps-cli --version\n")),(0,i.kt)("p",null,"Or use this command to start the emulator:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npx @azure/static-web-apps-cli start\n")))}d.isMDXComponent=!0}}]);