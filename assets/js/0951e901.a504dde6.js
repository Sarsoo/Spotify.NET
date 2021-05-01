(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{124:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=o(a),d=n,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||b;return a?r.a.createElement(m,c(c({ref:t},i),{},{components:a})):r.a.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var i=2;i<b;i++)l[i]=a[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},66:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(7),b=(a(0),a(124)),l={id:"player",title:"Player",sidebar_label:"Player"},c={unversionedId:"web/player",id:"version-5.1.1/web/player",isDocsHomePage:!1,title:"Player",description:"GetDevices",source:"@site/versioned_docs/version-5.1.1/web/player.md",slug:"/web/player",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/player",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/versioned_docs/version-5.1.1/web/player.md",version:"5.1.1",lastUpdatedBy:"Jonas Dellinger",lastUpdatedAt:1619881884,formattedLastUpdatedAt:"5/1/2021",sidebar_label:"Player",sidebar:"version-5.1.1/someSidebar",previous:{title:"Personalization",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/personalization"},next:{title:"Playlists",permalink:"/SpotifyAPI-NET/docs/5.1.1/web/playlists"}},p=[{value:"GetDevices",id:"getdevices",children:[]},{value:"GetPlayback",id:"getplayback",children:[]},{value:"GetPlayingTrack",id:"getplayingtrack",children:[]},{value:"TransferPlayback",id:"transferplayback",children:[]},{value:"ResumePlayback",id:"resumeplayback",children:[]},{value:"PausePlayback",id:"pauseplayback",children:[]},{value:"SkipPlaybackToNext",id:"skipplaybacktonext",children:[]},{value:"SkipPlaybackToPrevious",id:"skipplaybacktoprevious",children:[]},{value:"SeekPlayback",id:"seekplayback",children:[]},{value:"SetRepeatMode",id:"setrepeatmode",children:[]},{value:"SetVolume",id:"setvolume",children:[]},{value:"SetShuffle",id:"setshuffle",children:[]},{value:"AddToQueue",id:"addtoqueue",children:[]}],i={toc:p};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"getdevices"},"GetDevices"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get information about a user\u2019s available devices.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"AvailabeDevices devices = _spotify.GetDevices();\ndevices.Devices.ForEach(device => Console.WriteLine(device.Name));\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getplayback"},"GetPlayback"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get information about the user\u2019s current playback state, including track, track progress, and active device.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[market]"),Object(b.b)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"PlaybackContext context = _spotify.GetPlayback();\nif(context.Item != null)\n  Console.WriteLine(context.Item.Name)); //Print the current song\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"getplayingtrack"},"GetPlayingTrack"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Get the object currently being played on the user\u2019s Spotify account.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[market]"),Object(b.b)("td",{parentName:"tr",align:null},"An ISO 3166-1 alpha-2 country code. Provide this parameter if you want to apply Track Relinking."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"DE"'))))),Object(b.b)("p",null,"This is a simpler (less data) version of ",Object(b.b)("inlineCode",{parentName:"p"},"GetPlayback")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"PlaybackContext context = _spotify.GetPlayingTrack();\nif(context.Item != null)\n  Console.WriteLine(context.Item.Name)); //Print the current song\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"transferplayback"},"TransferPlayback"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Transfer playback to a new device and determine if it should start playing.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"deviceIds or deviceId"),Object(b.b)("td",{parentName:"tr",align:null},"A JSON array containing the ID of the device on which playback should be started/transferred"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"play"),Object(b.b)("td",{parentName:"tr",align:null},"true: ensure playback happens on new device, false: keep current playback state"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"true"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse error = _spotify.TransferPlayback("XXXX-XXXX-XXXX-XXXX");\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"resumeplayback"},"ResumePlayback"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Start a new context or resume current playback on the user\u2019s active device.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"contextUri"),Object(b.b)("td",{parentName:"tr",align:null},"Spotify URI of the context to play"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"spotify:album:1Je1IMUlBXcx1Fz0WE7oPT"'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"uris"),Object(b.b)("td",{parentName:"tr",align:null},"An array of the Spotify track URIs to play."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'new List<string> { "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" }'))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"offset"),Object(b.b)("td",{parentName:"tr",align:null},"Indicates from where in the context playback should start. Only available when context_uri corresponds to an album or playlist object, or when the uris parameter is used."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"0"))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse error = _spotify.ResumePlayback(uris: new List<string> { "spotify:track:4iV5W9uYEdYUVa79Axb7Rh" });\n')),Object(b.b)("hr",null),Object(b.b)("h2",{id:"pauseplayback"},"PausePlayback"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Pause playback on the user\u2019s account.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.PausePlayback();\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"skipplaybacktonext"},"SkipPlaybackToNext"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Skips to next track in the user\u2019s queue.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SkipPlaybackToNext();\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"skipplaybacktoprevious"},"SkipPlaybackToPrevious"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Skips to previous track in the user\u2019s queue.\nNote that this will ALWAYS skip to the previous track, regardless of the current track\u2019s progress.\nReturning to the start of the current track should be performed using the ",Object(b.b)("a",{parentName:"p",href:"https://api.spotify.com/v1/me/player/seek"},"https://api.spotify.com/v1/me/player/seek")," endpoint.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SkipPlaybackToPrevious();\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"seekplayback"},"SeekPlayback"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Seeks to the given position in the user\u2019s currently playing track.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"positionMs"),Object(b.b)("td",{parentName:"tr",align:null},"The position in milliseconds to seek to. Must be a positive number. Passing in a position that is greater than the length of the track will cause the player to start playing the next song."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"50"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SeekPlayback(50);\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setrepeatmode"},"SetRepeatMode"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Set the repeat mode for the user\u2019s playback. Options are repeat-track, repeat-context, and off.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"state"),Object(b.b)("td",{parentName:"tr",align:null},"track, context or off."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"RepeatState.Track"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SetRepeatMode(RepeatState.Track);\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setvolume"},"SetVolume"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Set the volume for the user\u2019s current playback device.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"volumePercent"),Object(b.b)("td",{parentName:"tr",align:null},"Integer. The volume to set. Must be a value from 0 to 100 inclusive."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"50"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SetVolume(50);\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"setshuffle"},"SetShuffle"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Toggle shuffle on or off for user\u2019s playback.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"shuffle"),Object(b.b)("td",{parentName:"tr",align:null},"True or False"),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},"ErrorResponse error = _spotify.SetShuffle(false);\n")),Object(b.b)("hr",null),Object(b.b)("h2",{id:"addtoqueue"},"AddToQueue"),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},"Add an Item to the User's Playback Queue. BETA.")),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Parameters")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Name"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:null},"Example"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"uri"),Object(b.b)("td",{parentName:"tr",align:null},"The uri of the item to add to the queue. Must be a track or an episode uri."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},"spotify:track:7zrCVKp6x0AtolOsn2iMif"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"[deviceId]"),Object(b.b)("td",{parentName:"tr",align:null},"The id of the device this command is targeting. If not supplied, the user's currently active device is the target."),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("inlineCode",{parentName:"td"},'"XXXX-XXXX-XXXX-XXXX"'))))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Usage")),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-csharp"},'ErrorResponse error = _spotify.AddToQueue("spotify:track:7zrCVKp6x0AtolOsn2iMif");\n')))}o.isMDXComponent=!0}}]);