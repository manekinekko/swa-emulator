"use strict";(self.webpackChunk_azure_static_web_apps_cli_docs=self.webpackChunk_azure_static_web_apps_cli_docs||[]).push([[461],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,y=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(y,p(p({ref:t},s),{},{components:n})):a.createElement(y,p({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,p=new Array(r);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,p[1]=l;for(var u=2;u<r;u++)p[u]=n[u];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7906:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),p=["components"],l={sidebar_position:5},i="5. Deploy SWA to Azure",u={unversionedId:"use/deploy",id:"use/deploy",title:"5. Deploy SWA to Azure",description:"The CLI can also be used to deploy an app to Azure Static Web Apps using the command",source:"@site/docs/use/4-deploy.md",sourceDirName:"use",slug:"/use/deploy",permalink:"/static-web-apps-cli/docs/use/deploy",draft:!1,editUrl:"https://github.com/azure/static-web-apps-cli/tree/main/docs/www/docs/use/4-deploy.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"4. Start the API Server",permalink:"/static-web-apps-cli/docs/use/api-server"},next:{title:"6. Use Runtime Config File",permalink:"/static-web-apps-cli/docs/use/config"}},s={},c=[{value:"5.1 Deployment token",id:"51-deployment-token",level:2},{value:"5.2 Deploy a front-end app without an API",id:"52-deploy-a-front-end-app-without-an-api",level:2},{value:"5.3 Deploy a front-end app with an API",id:"53-deploy-a-front-end-app-with-an-api",level:2},{value:"5.4 Deploy a Blazor app",id:"54-deploy-a-blazor-app",level:2},{value:"5.5 Deploy using the <code>swa-cli.config.json</code>",id:"55-deploy-using-the-swa-cliconfigjson",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,p);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"5-deploy-swa-to-azure"},"5. Deploy SWA to Azure"),(0,r.kt)("p",null,"The CLI can also be used to deploy an app to Azure Static Web Apps using the command: ",(0,r.kt)("inlineCode",{parentName:"p"},"swa deploy"),". Here are some common use cases:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Deploy a front-end app without an API"),(0,r.kt)("li",{parentName:"ol"},"Deploy a front-end app with an API"),(0,r.kt)("li",{parentName:"ol"},"Deploy a Blazor app")),(0,r.kt)("p",null,"A ",(0,r.kt)("strong",{parentName:"p"},"Deployment Token")," is required in order to make a deployment! Read the steps below to learn how to access a deployment token."),(0,r.kt)("h2",{id:"51-deployment-token"},"5.1 Deployment token"),(0,r.kt)("p",null,"The CLI supports Deployment token. This is usually useful when deploying from a CI/CD environment. You can get a deployment token either from:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://portal.azure.com/"},"Azure portal"),": ",(0,r.kt)("strong",{parentName:"p"},"Home \u2192 Static Web App \u2192 Your Instance \u2192 Overview \u2192 Manage deployment token"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are using the ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/azcli"},"Azure CLI"),", you can get the deployment token of your project using the following command:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'az staticwebapp secrets list --name <application-name> --query "properties.apiKey"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If you are using the ",(0,r.kt)("a",{parentName:"li",href:"https://aka.ms/swa/cli-local-development"},"Azure Static Web Apps CLI (this project)"),", you can get the deployment token of your project using the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa deploy --print-token\n")),(0,r.kt)("p",null,"You can then use that value with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--deployment-token <token>")," (e.g. from a CI/CD environment), or you can create an environment variable called ",(0,r.kt)("inlineCode",{parentName:"p"},"SWA_CLI_DEPLOYMENT_TOKEN")," and set it to the deployment token. Read the next section for more details."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IMPORTANT:")," Don't store the deployment token in a public repository. It should be kept secret!"),(0,r.kt)("h2",{id:"52-deploy-a-front-end-app-without-an-api"},"5.2 Deploy a front-end app without an API"),(0,r.kt)("p",null,"You can deploy a front-end application (without an API) to Azure Static Web Apps by running the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"If your front-end application requires a build step, run the build step (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run build"),") or refer to your application build instructions.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option 1:")," From build folder you would like to deploy, run the deploy command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd build/\nswa deploy\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Note: the "build" folder must contain the static content of your app to be deployed!')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Option 2:")," You can also deploy a specific folder:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If your front-end application requires a build step, run the build step (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),") or refer to your application build instructions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy your app:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa deploy ./my-dist\n")),(0,r.kt)("h2",{id:"53-deploy-a-front-end-app-with-an-api"},"5.3 Deploy a front-end app with an API"),(0,r.kt)("p",null,"To deploy both the front-end app and an API to Azure Static Web Apps, use the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If your front-end application requires a build step, run the build step (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),") or refer to your application build instructions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Make sure the",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/static-web-apps/configuration#platform"}," API language runtime version")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"staticwebapp.config.json")," file is set correctly, for example:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "platform": {\n    "apiRuntime": "node:16"\n  }\n}\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Deploy your app:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa deploy ./my-dist --api-location ./api\n")),(0,r.kt)("h2",{id:"54-deploy-a-blazor-app"},"5.4 Deploy a Blazor app"),(0,r.kt)("p",null,"To deploy a Blazor app with (optional) an API to Azure Static Web Apps, use the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Build your Blazor app in Release mode:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"dotnet publish -c Release\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"From the root of your project, run the deploy command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa deploy ./Client/bin/Release/net6.0/publish/wwwroot --api-location ./Api\n")),(0,r.kt)("h2",{id:"55-deploy-using-the-swa-cliconfigjson"},"5.5 Deploy using the ",(0,r.kt)("inlineCode",{parentName:"h2"},"swa-cli.config.json")),(0,r.kt)("p",null,"If you are using a ",(0,r.kt)("a",{parentName:"p",href:"#swa-cli.config.json"},(0,r.kt)("inlineCode",{parentName:"a"},"swa-cli.config.json"))," configuration file in your project and have a single configuration entry, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configurations": {\n    "my-app": {\n      "appLocation": "./",\n      "apiLocation": "api",\n      "outputLocation": "frontend",\n      "start": {\n        "outputLocation": "frontend"\n      },\n      "deploy": {\n        "outputLocation": "frontend"\n      }\n    }\n  }\n}\n')),(0,r.kt)("p",null,"Then you can deploy your application by running the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If your front-end application requires a build step, run the build step (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run build"),") or refer to your application build instructions.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Deploy your app:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa deploy\n")),(0,r.kt)("p",null,"If you have multiple configuration entries, you can provide the entry ID to specify which one to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"swa deploy my-otherapp\n")))}m.isMDXComponent=!0}}]);