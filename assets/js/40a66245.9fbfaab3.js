"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[901],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6356:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:4},l="4. Start the API Server",u={unversionedId:"use/api-server",id:"use/api-server",title:"4. Start the API Server",description:"4.1 Azure Functions Core Tools",source:"@site/docs/use/3-api-server.md",sourceDirName:"use",slug:"/use/api-server",permalink:"/static-web-apps-cli/docs/use/api-server",editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/use/3-api-server.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"2. Start the Emulator",permalink:"/static-web-apps-cli/docs/use/emulator"},next:{title:"5. Deploy SWA to Azure",permalink:"/static-web-apps-cli/docs/use/deploy"}},c={},p=[{value:"4.1 Azure Functions Core Tools",id:"41-azure-functions-core-tools",level:2},{value:"4.2 Start API Server Manually",id:"42-start-api-server-manually",level:2},{value:"4.3 Start API Server Automatically",id:"43-start-api-server-automatically",level:2}],m={toc:p};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"4-start-the-api-server"},"4. Start the API Server"),(0,o.kt)("h2",{id:"41-azure-functions-core-tools"},"4.1 Azure Functions Core Tools"),(0,o.kt)("p",null,"While not mandatory, your application may choose to take advantage of ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/apis"},"serverless API support with Azure Functions"),".\nAzure Functions service has its own ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local"},"Azure Functions Core Tools")," CLI to support local development. Read the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-core-tools-reference?tabs=v2"},"API Reference")," to learn about its ",(0,o.kt)("inlineCode",{parentName:"p"},"func")," command and options."),(0,o.kt)("p",null,"By using the SWA CLI, we can streamline the local development workflow (across Azure Static Web Apps and Azure Functions) even further. The SWA CLI can:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"verify that ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local"},"Azure Functions Core Tools")," is installed in your local development environment."),(0,o.kt)("li",{parentName:"ul"},"download or update the ",(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local#install-the-azure-functions-core-tools"},"right version")," for you if needed."),(0,o.kt)("li",{parentName:"ul"},"give you the flexibility to have the CLI manage the API server launch if needed.")),(0,o.kt)("p",null,"Let's explore these options."),(0,o.kt)("h2",{id:"42-start-api-server-manually"},"4.2 Start API Server Manually"),(0,o.kt)("p",null,"You might want to run the Azure Functions Core Tools (API server) separately, to take advantage of built-in features like debugging and rich editor support."),(0,o.kt)("p",null,"To use the SWA emulator services alongside the API server:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start API server first using Azure Functions Core Tools CLI (below) or the ",(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-azurefunctions"},"VS Code Extension"),". ",(0,o.kt)("em",{parentName:"li"},"Note the URL for the local API server, once it is running"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"func host start\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Start SWA CLI in a separate terminal and use the ",(0,o.kt)("inlineCode",{parentName:"li"},"--api-location")," option to pass it the relevant local API Server URI. ",(0,o.kt)("em",{parentName:"li"},"For example:"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swa start ./my-dist --api-location http://localhost:7071\n")),(0,o.kt)("h2",{id:"43-start-api-server-automatically"},"4.3 Start API Server Automatically"),(0,o.kt)("p",null,"This assumes you have previously created (and tested) an Azure Functions App project that is now located in an ",(0,o.kt)("inlineCode",{parentName:"p"},"api")," folder in your local development environment."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Launch the API server alongside the SWA emulator")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swa start ./my-dist --api-location ./api\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Combine the launch with usage of a running dev server")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swa start http://localhost:3000 --api-location ./api\n")))}d.isMDXComponent=!0}}]);