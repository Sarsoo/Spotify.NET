"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1918],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1862:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=r(4996),l=["components"],s={id:"example_blazor_wasm",title:"Blazor WASM"},p=void 0,c={unversionedId:"example_blazor_wasm",id:"example_blazor_wasm",title:"Blazor WASM",description:"Description",source:"@site/docs/example_blazor_wasm.md",sourceDirName:".",slug:"/example_blazor_wasm",permalink:"/SpotifyAPI-NET/docs/example_blazor_wasm",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/example_blazor_wasm.md",tags:[],version:"current",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1653159886,formattedLastUpdatedAt:"5/21/2022",frontMatter:{id:"example_blazor_wasm",title:"Blazor WASM"},sidebar:"docs",previous:{title:"ASP.NET",permalink:"/SpotifyAPI-NET/docs/example_asp"},next:{title:"Blazor ServerSide",permalink:"/SpotifyAPI-NET/docs/example_blazor"}},u={},m=[{value:"Description",id:"description",level:2},{value:"Run it",id:"run-it",level:2}],d={toc:m};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"This small cross-platform web app runs on ",(0,a.kt)("inlineCode",{parentName:"p"},"Blazor WebAssembly"),", which was released on 19. May 2020. It allows to run C# code in any browser which supports WebAssembly. This allows to create .NET full-stack web projects without writing any JavaScript. Find more about ",(0,a.kt)("a",{parentName:"p",href:"https://devblogs.microsoft.com/aspnet/blazor-webassembly-3-2-0-now-available/"},"Blazor WebAssembly here")),(0,a.kt)("p",null,"Since this library is compatible with ",(0,a.kt)("inlineCode",{parentName:"p"},".NET Standard 2.1"),", you can use all features of ",(0,a.kt)("inlineCode",{parentName:"p"},"SpotifyAPI.Web")," in your blazor wasm app. The example logs the user in via ",(0,a.kt)("inlineCode",{parentName:"p"},"Implicit Grant")," and does 2 user-related API requests from the browser. You can observe the requests from your browsers network tools."),(0,a.kt)("img",{alt:"BlazorWASM Spotify Example",src:(0,i.Z)("img/blazorwasm_homepage.png")}),(0,a.kt)("img",{alt:"BlazorWASM Spotify Example - network tools",src:(0,i.Z)("img/blazorwasm_network_tools.png")}),(0,a.kt)("h2",{id:"run-it"},"Run it"),(0,a.kt)("p",null,"Before running it, make sure you created an app in your ",(0,a.kt)("a",{parentName:"p",href:"https://developer.spotify.com/dashboard/"},"spotify dashboard")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://localhost:5001")," is a redirect uri of it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Assumes linux and current working directory is the cloned repository\ncd SpotifyAPI.Web.Examples/Example.BlazorWASM\ndotnet restore\n\necho "{ \\"SPOTIFY_CLIENT_ID\\": \\"YourSpotifyClientId\\" }" > wwwroot/appsettings.json\ndotnet run\n\n# Visit https://localhost:5001\n')))}f.isMDXComponent=!0}}]);