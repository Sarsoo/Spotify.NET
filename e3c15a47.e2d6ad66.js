(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{181:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(187)),i={id:"pkce",title:"PKCE"},c={id:"pkce",title:"PKCE",description:"The authorization code flow with PKCE is the best option for mobile and desktop applications where it is unsafe to store your client secret. It provides your app with an access token that can be refreshed. For further information about this flow, see IETF RFC-7636.",source:"@site/docs/pkce.md",permalink:"/SpotifyAPI-NET/docs/next/pkce",editUrl:"https://github.com/JohnnyCrazy/SpotifyAPI-NET/edit/master/SpotifyAPI.Docs/docs/pkce.md",version:"next",lastUpdatedBy:"Denis Mtfl",lastUpdatedAt:1605023095,sidebar:"docs",previous:{title:"Authorization Code",permalink:"/SpotifyAPI-NET/docs/next/authorization_code"},next:{title:"Token Swap",permalink:"/SpotifyAPI-NET/docs/next/token_swap"}},l=[{value:"Generating Challenge &amp; Verifier",id:"generating-challenge--verifier",children:[]},{value:"Generating Login URI",id:"generating-login-uri",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The authorization code flow with PKCE is the best option for mobile and desktop applications where it is unsafe to store your client secret. It provides your app with an access token that can be refreshed. For further information about this flow, see ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc7636"}),"IETF RFC-7636"),".")),Object(o.b)("h2",{id:"generating-challenge--verifier"},"Generating Challenge & Verifier"),Object(o.b)("p",null,"For every authentication request, a verify code and its challenge code needs to be generated. The class ",Object(o.b)("inlineCode",{parentName:"p"},"PKCEUtil")," can be used to generate those, either with random generated or self supplied values:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'// Generates a secure random verifier of length 100 and its challenge\nvar (verifier, challenge) = PKCEUtil.GenerateCodes();\n\n// Generates a secure random verifier of length 120 and its challenge\nvar (verifier, challenge) = PKCEUtil.GenerateCodes(120);\n\n// Returns the passed string and its challenge (Make sure it\'s random and long enough)\nvar (verifier, challenge) = PKCEUtil.GenerateCodes("YourSecureRandomString");\n')),Object(o.b)("h2",{id:"generating-login-uri"},"Generating Login URI"),Object(o.b)("p",null,"Like most auth flows, you'll need to redirect your user to Spotify's servers so they are able to grant access to your application:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'// Make sure "http://localhost:5000/callback" is in your applications redirect URIs!\nvar loginRequest = new LoginRequest(\n  new Uri("http://localhost:5000/callback"),\n  "YourClientId",\n  LoginRequest.ResponseType.Code\n)\n{\n  CodeChallengeMethod = "S256",\n  CodeChallenge = challenge,\n  Scope = new[] { Scopes.PlaylistReadPrivate, Scopes.PlaylistReadCollaborative }\n};\nvar uri = loginRequest.ToUri();\n// Redirect user to uri via your favorite web-server or open a local browser window\n')),Object(o.b)("p",null,"When the user is redirected to the generated uri, they will have to login with thei Spotify account and confirm that your application wants to access their user data. Once confirmed, they will be redirected to ",Object(o.b)("inlineCode",{parentName:"p"},"http://localhost:5000/callback")," and a ",Object(o.b)("inlineCode",{parentName:"p"},"code")," parameter is attached to the query. The redirect URI can also contain a custom protocol paired with UWP App Custom Protocol handler. This received ",Object(o.b)("inlineCode",{parentName:"p"},"code")," has to be exchanged for an ",Object(o.b)("inlineCode",{parentName:"p"},"access_token")," and ",Object(o.b)("inlineCode",{parentName:"p"},"refresh_token"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'// This method should be called from your web-server when the user visits "http://localhost:5000/callback"\npublic Task GetCallback(string code)\n{\n  // Note that we use the verifier calculated above!\n  var initialResponse = await new OAuthClient().RequestToken(\n    new PKCETokenRequest("ClientId", code, "http://localhost:5000", verifier)\n  );\n\n  var spotify = new SpotifyClient(initialResponse.AccessToken);\n  // Also important for later: response.RefreshToken\n}\n')),Object(o.b)("p",null,"With PKCE you can also refresh tokens once they're expired:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),'var newResponse = await new OAuthClient().RequestToken(\n  new PKCETokenRefreshRequest("ClientId", initialResponse.RefreshToken)\n);\n\nvar spotify = new SpotifyClient(newResponse.AccessToken);\n')),Object(o.b)("p",null,"If you do not want to take care of manually refreshing tokens, you can use ",Object(o.b)("inlineCode",{parentName:"p"},"PKCEAuthenticator"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-csharp"}),"var authenticator = new PKCEAuthenticator(clientId, initialResponse);\n\nvar config = SpotifyClientConfig.CreateDefault()\n  .WithAuthenticator(authenticator);\nvar spotify = new SpotifyClient(config);\n")))}p.isMDXComponent=!0},187:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},h=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,b=u["".concat(i,".").concat(h)]||u[h]||d[h]||o;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);