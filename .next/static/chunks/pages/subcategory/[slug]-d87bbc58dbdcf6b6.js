(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[830],{3144:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/subcategory/[slug]",function(){return n(606)}])},8525:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var s=n(5893),c={src:"/_next/static/media/loading.5db30e9a.gif",height:32,width:32},r=function(){return(0,s.jsx)("div",{className:"text-center",children:(0,s.jsx)("img",{className:"my-3",src:c,alt:"loading GIF"})})}},606:function(e,t,n){"use strict";n.r(t);var s=n(4051),c=n.n(s),r=n(5893),a=n(7294),i=n(1163),o=n(8525),l=n(1664);function d(e,t,n,s,c,r,a){try{var i=e[r](a),o=i.value}catch(l){return void n(l)}i.done?t(o):Promise.resolve(o).then(s,c)}t.default=function(){var e=(0,i.useRouter)(),t=e.query.slug,n=(0,a.useState)(!0),s=n[0],u=n[1],x=(0,a.useState)([]),h=x[0],m=x[1],f=(0,a.useState)(1),g=f[0],v=(f[1],(0,a.useState)(!1)),p=v[0],j=v[1];(0,a.useEffect)((function(){N()}),[]);var N=function(){var n,s=(n=c().mark((function n(){var s,r,a,i,o;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return console.log(e.query),console.log(e.route),s="http://157.245.109.102/api/item/getitemssubcat/".concat(g,"/").concat(t),n.next=5,fetch(s);case 5:return r=n.sent,n.next=8,r.json();case 8:a=n.sent,i=a.data,console.log(i),(o=h.concat(i)).length>0&&j(!0),console.log(o),u(!1),m(o);case 16:case"end":return n.stop()}}),n)})),function(){var e=this,t=arguments;return new Promise((function(s,c){var r=n.apply(e,t);function a(e){d(r,s,c,a,i,"next",e)}function i(e){d(r,s,c,a,i,"throw",e)}a(void 0)}))});return function(){return s.apply(this,arguments)}}();return(0,r.jsxs)("div",{children:[s&&(0,r.jsx)(o.Z,{}),!s&&!p&&(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"px-40 py-20 bg-white rounded-md shadow-xl",children:(0,r.jsxs)("div",{className:"flex flex-col items-center",children:[(0,r.jsx)("h1",{className:"font-bold text-blue-600 text-9xl",children:"404"}),(0,r.jsxs)("h6",{className:"mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl",children:[(0,r.jsx)("span",{className:"text-red-500",children:"Oops!"})," Page not found"]}),(0,r.jsx)("p",{className:"mb-8 text-center text-gray-500 md:text-lg",children:"The page you\u2019re looking for doesn\u2019t exist."}),(0,r.jsx)(l.default,{href:"/",children:(0,r.jsx)("a",{className:"px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100",children:"Go home"})})]})})}),!s&&p&&(0,r.jsx)("div",{children:(0,r.jsx)("section",{className:"text-gray-600 body-font",children:(0,r.jsx)("div",{className:"container px-5 py-24 mx-auto",children:(0,r.jsx)("div",{className:"flex flex-wrap -m-4",children:h.map((function(e){return(0,r.jsx)("div",{children:(0,r.jsx)(l.default,{href:"/product/".concat(e.id),children:(0,r.jsxs)("div",{className:"w-[20] cursor-pointer shadow-lg m-3 ",children:[(0,r.jsx)("a",{className:"block relative rounded overflow-hidden",children:(0,r.jsx)("img",{alt:"item image",className:"m-auto md:mx-0 h-[30vh] md:h-[36vh] block",src:e.imgId})}),(0,r.jsxs)("div",{className:"mt-4 text-center",children:[(0,r.jsx)("h3",{className:"text-gray-500 text-xs tracking-widest title-font mb-1",children:e.name}),(0,r.jsx)("h2",{className:"text-gray-900 title-font text-lg font-medium",children:e.shortDesc.length>15?"".concat(String(e.shortDesc).slice(0,15)," ..."):e.shortDesc}),(0,r.jsxs)("p",{className:"mt-1",children:["\u20b9 ",e.mrp]})]})]})})},e.id)}))})})})})]})}},1163:function(e,t,n){e.exports=n(880)}},function(e){e.O(0,[774,888,179],(function(){return t=3144,e(e.s=t);var t}));var t=e.O();_N_E=t}]);