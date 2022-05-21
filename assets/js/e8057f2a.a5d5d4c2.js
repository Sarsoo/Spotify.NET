"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[7638],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||c[m]||o;return r?n.createElement(d,l(l({ref:t},s),{},{components:r})):n.createElement(d,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9962:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return c}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"profiles",title:"Profiles",sidebar_label:"Profiles"},p=void 0,u={unversionedId:"web/profiles",id:"version-5.1.1/web/profiles",title:"Profiles",description:"GetPrivateProfile",source:"@site/versioned_docs/version-5.1.1/web/profiles.md",sourceDirName:"web",slug:"/web/profiles",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/profiles",draft:!1,editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/profiles.md",tags:[],version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1653159886,formattedLastUpdatedAt:"5/21/2022",frontMatter:{id:"profiles",title:"Profiles",sidebar_label:"Profiles"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Playlists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/playlists"},next:{title:"Proxy Settings",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/proxy"}},s={},c=[{value:"GetPrivateProfile",id:"getprivateprofile",level:2},{value:"GetPublicProfile",id:"getpublicprofile",level:2}],f={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"getprivateprofile"},"GetPrivateProfile"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get detailed profile information about the current user (including the current user\u2019s username).")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example")))),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#user-object-private"},"PrivateProfile")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"PrivateUser user = _spotify.GetPrivateProfile();\nConsole.WriteLine(user.DisplayName);\n")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"getpublicprofile"},"GetPublicProfile"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Get public profile information about a Spotify user.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Example"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"userId"),(0,o.kt)("td",{parentName:"tr",align:null},"The user's Spotify user ID."),(0,o.kt)("td",{parentName:"tr",align:null},"EXAMPLE")))),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#user-object-public"},"PublicProfile")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-csharp"},"")),(0,o.kt)("hr",null))}m.isMDXComponent=!0}}]);