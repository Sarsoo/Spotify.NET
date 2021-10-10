"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[1663],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return d}});var a=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var p=a.createContext({}),s=function(t){var e=a.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},m=function(t){var e=s(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),c=s(r),d=n,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return r?a.createElement(k,l(l({ref:e},m),{},{components:r})):a.createElement(k,l({ref:e},m))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},823:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return u}});var a=r(3117),n=r(102),i=(r(7294),r(3905)),l={id:"personalization",title:"Personalization",sidebar_label:"Personalization"},o=void 0,p={unversionedId:"web/personalization",id:"version-5.1.1/web/personalization",isDocsHomePage:!1,title:"Personalization",description:"GetUsersTopTracks",source:"@site/versioned_docs/version-5.1.1/web/personalization.md",sourceDirName:"web",slug:"/web/personalization",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/personalization",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/personalization.md",version:"5.1.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1633887464,formattedLastUpdatedAt:"10/10/2021",frontMatter:{id:"personalization",title:"Personalization",sidebar_label:"Personalization"},sidebar:"version-5.1.1/someSidebar",previous:{title:"Library",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/library"},next:{title:"Player",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/player"}},s=[{value:"GetUsersTopTracks",id:"getuserstoptracks",children:[]},{value:"GetUsersTopArtists",id:"getuserstopartists",children:[]},{value:"GetUsersRecentlyPlayedTracks",id:"getusersrecentlyplayedtracks",children:[]}],m={toc:s};function u(t){var e=t.components,r=(0,n.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"getuserstoptracks"},"GetUsersTopTracks"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the current user\u2019s top tracks based on calculated affinity.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[timeRange]"),(0,i.kt)("td",{parentName:"tr",align:null},"Over what time frame the affinities are compute."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TimeRangeType.MediumTerm"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[limit]"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,i.kt)("td",{parentName:"tr",align:null},"The index of the first entity to return. Default: 0 (i.e., the first track). Use with limit to get the next set of entities."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"))))),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#track-object-full"},"FullTrack")," wrapped inside a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#paging-object"},"Paging-object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Paging<FullTrack> tracks = _spotify.GetUsersTopTracks();\ntracks.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Track-Names (max 20)\nConsole.WriteLine(tracks.Total.ToString()) //Display total album track count\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"getuserstopartists"},"GetUsersTopArtists"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get the current user\u2019s top artists based on calculated affinity.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[timeRange]"),(0,i.kt)("td",{parentName:"tr",align:null},"Over what time frame the affinities are compute."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"TimeRangeType.MediumTerm"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[limit]"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[offset]"),(0,i.kt)("td",{parentName:"tr",align:null},"The index of the first entity to return. Default: 0 (i.e., the first track). Use with limit to get the next set of entities."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"0"))))),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#artist-object-full"},"FullArtist")," wrapped inside a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#paging-object"},"Paging-object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Paging<FullArtist> artists = _spotify.GetUsersTopArtists();\nartists.Items.ForEach(item => Console.WriteLine(item.Name)); //Display all fetched Artist-Names (max 20)\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"getusersrecentlyplayedtracks"},"GetUsersRecentlyPlayedTracks"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Get tracks from the current user\u2019s recent play history.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parameters")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Example"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[limit]"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of items to return. Default: 20. Minimum: 1. Maximum: 50."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"20"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[after]"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns all items after (but not including) this cursor position."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DateTime.Now.AddDays(-1)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"[before]"),(0,i.kt)("td",{parentName:"tr",align:null},"Returns all items before (but not including) this cursor position."),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"DateTime.Now.AddDays(-1)"))))),(0,i.kt)("p",null,"Returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayHistory")," wrapped inside a ",(0,i.kt)("a",{parentName:"p",href:"https://developer.spotify.com/web-api/object-model/#cursor-based-paging-object"},"CursorPaging-object")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Usage")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"CursorPaging<PlayHistory> histories = _spotify.GetUsersRecentlyPlayedTracks();\nhistories.Items.ForEach(item => Console.WriteLine(item.Track.Name));\n")),(0,i.kt)("hr",null))}u.isMDXComponent=!0}}]);