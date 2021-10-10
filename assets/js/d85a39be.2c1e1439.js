"use strict";(self.webpackChunkspotify_api_docs=self.webpackChunkspotify_api_docs||[]).push([[4785],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,f=d["".concat(p,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2248:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(3117),o=n(102),a=(n(7294),n(3905)),i={id:"authorization_code",title:"Authorization Code"},s=void 0,p={unversionedId:"authorization_code",id:"authorization_code",isDocsHomePage:!1,title:"Authorization Code",description:"This flow is suitable for long-running applications in which the user grants permission only once. It provides an access token that can be refreshed. Since the token exchange involves sending your secret key, perform this on a secure location, like a backend service, and not from a client such as a browser or from a mobile app.",source:"@site/docs/authorization_code.md",sourceDirName:".",slug:"/authorization_code",permalink:"/SpotifyAPI-NET/docs/authorization_code",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/authorization_code.md",version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1633887464,formattedLastUpdatedAt:"10/10/2021",frontMatter:{id:"authorization_code",title:"Authorization Code"},sidebar:"docs",previous:{title:"Implicit Grant",permalink:"/SpotifyAPI-NET/docs/implicit_grant"},next:{title:"PKCE",permalink:"/SpotifyAPI-NET/docs/pkce"}},c=[{value:"Existing Web-Server",id:"existing-web-server",children:[]},{value:"Using Spotify.Web.Auth",id:"using-spotifywebauth",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This flow is suitable for long-running applications in which the user grants permission only once. It provides an access token that can be refreshed. Since the token exchange involves sending your secret key, perform this on a secure location, like a backend service, and not from a client such as a browser or from a mobile app.")),(0,a.kt)("h2",{id:"existing-web-server"},"Existing Web-Server"),(0,a.kt)("p",null,"If you are already in control of a Web-Server (like ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET"),"), you can start the flow by generating a login uri:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Make sure "http://localhost:5000" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("http://localhost:5000"),\n  "ClientId",\n  LoginRequest.ResponseType.Code\n)\n{\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n// Redirect user to uri via your favorite web-server\n')),(0,a.kt)("p",null,"When the user is redirected to the generated uri, they will have to login with their Spotify account and confirm that your application wants to access their user data. Once confirmed, they will be redirected to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:5000")," and a ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," parameter is attached to the query. This ",(0,a.kt)("inlineCode",{parentName:"p"},"code")," has to be exchanged for an ",(0,a.kt)("inlineCode",{parentName:"p"},"access_token")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"refresh_token"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// This method should be called from your web-server when the user visits "http://localhost:5000"\npublic Task GetCallback(string code)\n{\n  var response = await new OAuthClient().RequestToken(\n    new AuthorizationCodeTokenRequest("ClientId", "ClientSecret", code, "http://localhost:5000")\n  );\n\n  var spotify = new SpotifyClient(response.AccessToken);\n  // Also important for later: response.RefreshToken\n}\n')),(0,a.kt)("p",null,"If the token expires at some point (check via ",(0,a.kt)("inlineCode",{parentName:"p"},"response.IsExpired"),"), you can refresh it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var newResponse = await new OAuthClient().RequestToken(\n  new AuthorizationCodeRefreshRequest("ClientId", "ClientSecret", response.RefreshToken)\n);\n\nvar spotify = new SpotifyClient(newResponse.AccessToken);\n')),(0,a.kt)("p",null,"You can also let the ",(0,a.kt)("inlineCode",{parentName:"p"},"AuthorizationCodeAuthenticator")," take care of the refresh part:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'var response = await new OAuthClient().RequestToken(\n  new AuthorizationCodeTokenRequest("ClientId", "ClientSecret", code, "http://localhost:5000")\n);\nvar config = SpotifyClientConfig\n  .CreateDefault()\n  .WithAuthenticator(new AuthorizationCodeAuthenticator("ClientId", "ClientSecret", response));\n\nvar spotify = new SpotifyClient(config);\n')),(0,a.kt)("p",null,"For a real example, have a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.ASP"},"Example.ASP"),". This also uses the great package ",(0,a.kt)("inlineCode",{parentName:"p"},"AspNet.Security.OAuth.Spotify")," which takes care of the OAuth flow inside of ",(0,a.kt)("inlineCode",{parentName:"p"},"ASP.NET"),"."),(0,a.kt)("h2",{id:"using-spotifywebauth"},"Using Spotify.Web.Auth"),(0,a.kt)("p",null,"For cross-platform CLI and desktop apps (non ",(0,a.kt)("inlineCode",{parentName:"p"},"UWP")," apps), ",(0,a.kt)("inlineCode",{parentName:"p"},"Spotify.Web.Auth")," can be used to supply a small embedded Web Server for the code retrieval."),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Your client secret will be exposed when embedded in a desktop/CLI app. This can be abused and is not prefered. If possible, let the user create an application in the Spotify dashboard or let a server handle the Spotify communication."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'private static EmbedIOAuthServer _server;\n\npublic static async Task Main()\n{\n  // Make sure "http://localhost:5000/callback" is in your spotify application as redirect uri!\n  _server = new EmbedIOAuthServer(new Uri("http://localhost:5000/callback"), 5000);\n  await _server.Start();\n\n  _server.AuthorizationCodeReceived += OnAuthorizationCodeReceived;\n  _server.ErrorReceived += OnErrorReceived;\n\n  var request = new LoginRequest(_server.BaseUri, "ClientId", LoginRequest.ResponseType.Code)\n  {\n    Scope = new List<string> { Scopes.UserReadEmail }\n  };\n  BrowserUtil.Open(request.ToUri());\n}\n\nprivate static async Task OnAuthorizationCodeReceived(object sender, AuthorizationCodeResponse response)\n{\n  await _server.Stop();\n\n  var config = SpotifyClientConfig.CreateDefault();\n  var tokenResponse = await new OAuthClient(config).RequestToken(\n    new AuthorizationCodeTokenRequest(\n      "ClientId", "ClientSecret", response.Code, new Uri("http://localhost:5000/callback")\n    )\n  );\n\n  var spotify = new SpotifyClient(tokenResponse.AccessToken);\n  // do calls with Spotify and save token?\n}\n\nprivate static async Task OnErrorReceived(object sender, string error, string state)\n{\n  Console.WriteLine($"Aborting authorization, error received: {error}");\n  await _server.Stop();\n}\n')),(0,a.kt)("p",null,"For real examples, have a look at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.PersistentConfig"},"Example.CLI.PersistentConfig")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/tree/master/SpotifyAPI.Web.Examples/Example.CLI.CustomHTML"},"Example.CLI.CustomHTML")))}u.isMDXComponent=!0}}]);