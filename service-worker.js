if(!self.define){let e,i={};const d=(d,a)=>(d=new URL(d+".js",a).href,i[d]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=i,document.head.appendChild(e)}else e=d,importScripts(d),i()})).then((()=>{let e=i[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(a,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let s={};const n=e=>d(e,c),b={module:{uri:c},exports:s,require:n};i[c]=Promise.all(a.map((e=>b[e]||n(e)))).then((e=>(r(...e),s)))}}define(["./workbox-f16d130a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"404.html",revision:"2dd0853a07898c705ce03d25d75a7011"},{url:"archives/2024/01/index.html",revision:"cd39b2feb574a08cf4c424ef1cdc0004"},{url:"archives/2024/06/index.html",revision:"c9584906b8494133913333da89c6d6bd"},{url:"archives/2024/08/index.html",revision:"4add60f46f1885c1f81774fcc8419b50"},{url:"archives/2024/index.html",revision:"da4658e61e096f01c9b79be4fe296eb3"},{url:"archives/index.html",revision:"37deb7e2787e941b96a58fe1c6f99a73"},{url:"categories/Cloud/index.html",revision:"108d57cd757317333f745f205db64ddd"},{url:"categories/DevOps/index.html",revision:"b6b28cd8b1566bbdcad523e57dac308a"},{url:"categories/index.html",revision:"5aa55f1de56277b4578b22cc967f5b32"},{url:"categories/Web/index.html",revision:"2d8891eb745c8d941cf9c31b24ef6d03"},{url:"css/index.css",revision:"7ad6770e52ff191e9c6bc5b7cdc34bc5"},{url:"css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"css/self.css",revision:"6e2d52b54855e1082b829328e3cfec18"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"en/404.html",revision:"2bc03a7187bb5bdf3505b5d45b2a49e8"},{url:"en/archives/2024/01/index.html",revision:"86720b9cb9c910bd613988fa6b8ad2b1"},{url:"en/archives/2024/index.html",revision:"9420406eeed876cddaa0babacd5f8ae4"},{url:"en/archives/index.html",revision:"a59ff201b85921b0fa90d5049e1c1905"},{url:"en/categories/Cloud/index.html",revision:"f45c537adad0c3a7738a1f8f8d918989"},{url:"en/categories/DevOps/index.html",revision:"2d92b8f39d5850bb927a0069cd7ebfd5"},{url:"en/categories/index.html",revision:"18b4d577dc467cf9bf1f76a29db06e9d"},{url:"en/categories/Web/index.html",revision:"2e7297995e38c3b0d1339773ba1ec02a"},{url:"en/css/index.css",revision:"7ad6770e52ff191e9c6bc5b7cdc34bc5"},{url:"en/css/loading-bar.css",revision:"f83646c6e3db46a7fc7f6fa0819871bb"},{url:"en/css/self.css",revision:"abdf0183cfd7057706a6f3e07c685a13"},{url:"en/css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"en/img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"en/img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"en/img/archive.jpg",revision:"239bb72ce28d72103b0ab6c4fb5dfb44"},{url:"en/img/category.jpg",revision:"9c554c159aee1d7c96ce493ff12b2dea"},{url:"en/img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"en/img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"en/img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"en/img/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"en/img/pwa/logo.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"en/img/tag.jpg",revision:"2dffdc774cb75394b687f550b7be7e65"},{url:"en/img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"en/index.html",revision:"381f3e7c8cd5fd3580047eb928fcbecf"},{url:"en/js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"en/js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"en/js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"en/js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"en/js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"en/logo/aghenim.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"en/portfolios/iframe-keep-alive.html",revision:"68387625a19a4a995d41618bc8b2b197"},{url:"en/portfolios/ir-calculator.html",revision:"5c635adff5bdc727561232b15cdf5707"},{url:"en/portfolios/resume-for-zj.html",revision:"cac682add2ef6a62be7623fa2e31e928"},{url:"en/portfolios/resume.html",revision:"236d2996c0a46e993d797379bd3ecf2a"},{url:"en/posts/4bbb0782/index.html",revision:"4000733a38f0c382c139742da3e4e6e3"},{url:"en/posts/6f34bf22/index.html",revision:"1208cfebd3c444a2d04acd212375abcd"},{url:"en/posts/c9954876/index.html",revision:"006287e5d5e19f853b9b51afb4e3bea2"},{url:"en/posts/c9fe5e28/index.html",revision:"3143994e0bd4e045bee64c56f2104236"},{url:"en/posts/dd126a4b/index.html",revision:"0acf25dc587bc13b1d93302d30560940"},{url:"en/tags/Authentication/index.html",revision:"b831dada413a52ff63181ad8bbaaa88e"},{url:"en/tags/Blog/index.html",revision:"d39a856eea9c7c6da856d4aa2d13721d"},{url:"en/tags/Butterfly/index.html",revision:"1d596405367a436f14f0f5648a1a59c1"},{url:"en/tags/Cloud/index.html",revision:"fcc8a8690870bece53120448e97f8f6c"},{url:"en/tags/DevOps/index.html",revision:"0262eac21a8e564962337d26cc85db81"},{url:"en/tags/Frp/index.html",revision:"aef1883e2bff1a8752d058856a912a91"},{url:"en/tags/Git/index.html",revision:"b4f6d9338a43d9ba54680c4d71d02b2f"},{url:"en/tags/GitHub/index.html",revision:"cd08b616f3ad8722dfd76b858eddd122"},{url:"en/tags/Hexo/index.html",revision:"a7ec57f0f04a7a210a6c403b6bcd1229"},{url:"en/tags/index.html",revision:"ea82b744b41311c68f635592be399afa"},{url:"en/tags/Network/index.html",revision:"ac8fd0af98a7854c1f12ef757325d6d0"},{url:"en/tags/PWA/index.html",revision:"590850fbf931a8492cd6409e772dc68f"},{url:"en/tags/SSH/index.html",revision:"b6a0ef1564f6a8e9428b3af160fc28c9"},{url:"en/tags/Theme/index.html",revision:"18e3c5161b91c7696dff4812d1c198e8"},{url:"en/tags/Web-App/index.html",revision:"afc859b61a6db7727e55294291fdeee2"},{url:"en/tags/Web/index.html",revision:"e04af4ebf6956564bcbedc650c0c5f75"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/alipay.jpg",revision:"42c6c21e5cf1053da0982d903ec5097c"},{url:"img/archive.jpg",revision:"239bb72ce28d72103b0ab6c4fb5dfb44"},{url:"img/category.jpg",revision:"9c554c159aee1d7c96ce493ff12b2dea"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"img/index.jpg",revision:"39e7e165c001ca388cb13c0b6082d880"},{url:"img/logo.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"img/pwa/logo.png",revision:"296bd8c753556aea7aa7030ed09b876e"},{url:"img/tag.jpg",revision:"2dffdc774cb75394b687f550b7be7e65"},{url:"img/wechat.jpg",revision:"d6e810dc81ed26cecd073058b8d94d88"},{url:"index.html",revision:"8585862754b9e45b1641c1ef51603de0"},{url:"js/inject.js",revision:"8e5f243e9c052c2bea5727090dbb2787"},{url:"js/main.js",revision:"960297fafacb19dff1246d71f6dfcf6f"},{url:"js/search/algolia.js",revision:"4491ac1d470a1693a502a9d09034aa21"},{url:"js/search/local-search.js",revision:"9da6b76672a143c8c8449770a8d259f3"},{url:"js/tw_cn.js",revision:"fb4da68124bbafbd2d3da537c80e27ce"},{url:"js/utils.js",revision:"420a15cf446b5670244a9ea05b2bccf0"},{url:"logo/aghenim.png",revision:"2386937d389eb940b8741a06abd90d56"},{url:"portfolios/iframe-keep-alive.html",revision:"f65b50bcd121b31f5ee155a84d0d19a5"},{url:"portfolios/ir-calculator.html",revision:"618a06cef964529f8f41b3da3cf51382"},{url:"portfolios/light-plm.html",revision:"9da3a8b48269481a525d339101873238"},{url:"portfolios/resume-for-zj.html",revision:"b432628ca3a90288071cbf9b9a01d1cb"},{url:"portfolios/resume.html",revision:"5cdb498394342adb820171cf7fe03b3c"},{url:"portfolios/ttt.html",revision:"271b829ee88205e8975c52916c5af913"},{url:"posts/0/index.html",revision:"e50344b82ae6adeec39b54ab3e672e43"},{url:"posts/1fd3c959/index.html",revision:"8f7b130addfd4a0ed5ce87b9143a6442"},{url:"posts/4b4dbb3/index.html",revision:"4d6b95e2d5d579c1972e04a5f056ca4d"},{url:"posts/4bbb0781/index.html",revision:"bf3c58e4fed18b220d0f47ae93bcd372"},{url:"posts/8baa021c/index.html",revision:"fc182a1710e0973ae807e7a60f673b1e"},{url:"posts/c7190df0/index.html",revision:"ce775ece5220b0c419f6838a3f8307e1"},{url:"posts/e087a4ad/index.html",revision:"3d46f140d31ac7ed1332d5bb36950a39"},{url:"tags/Authentication/index.html",revision:"f9d5261a3f449557612508c10b154198"},{url:"tags/Blog/index.html",revision:"b08235edd08726f4f2b94df91b58a170"},{url:"tags/Butterfly/index.html",revision:"b1d382d0d8c7dbd32fe01a8f38d4e9e1"},{url:"tags/Cloud/index.html",revision:"c470a30c2bfc9998750d6e0e4f49abfd"},{url:"tags/DevOps/index.html",revision:"848fb6688f86e3deef5957c76d1189ad"},{url:"tags/Frp/index.html",revision:"9fd051f2ce2c2248f3200993e9cc837b"},{url:"tags/Git/index.html",revision:"bef3900bf819cb893a4711977cb15db3"},{url:"tags/GitHub/index.html",revision:"28f8d68b1cbb0e146000d84f212a5c0c"},{url:"tags/Hexo/index.html",revision:"ed14666160dd3beb2fff96cebe89c07d"},{url:"tags/index.html",revision:"21bbe12e8b6ba621d83286e98610e8bf"},{url:"tags/Network/index.html",revision:"8f6a275c9099fa05b6649a810816f0a8"},{url:"tags/PWA/index.html",revision:"406b0946475e9f46460e67b93f633b74"},{url:"tags/SSH/index.html",revision:"e0feb6f356181ddb43a562a54ec52eb9"},{url:"tags/Theme/index.html",revision:"902305feef7f39ad480e1461d11331a9"},{url:"tags/Web-App/index.html",revision:"aff82778ea5de74b70e6a0992c282407"},{url:"tags/Web/index.html",revision:"9696afdf7c7d3a9e3f45bf56d9250ca1"}],{})}));
//# sourceMappingURL=service-worker.js.map
