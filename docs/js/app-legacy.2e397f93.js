(function(){"use strict";var t={5164:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var o=n(144),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{style:{background:"lightskyblue","overflow-y":t.auto}},[n("v-app-bar",{attrs:{dark:"",app:"",elevation:"0",color:"#00000000"}},[n("v-app-bar-nav-icon",{on:{click:t.menuOpen}})],1),n("v-main",[n("router-view")],1),n("v-dialog",{attrs:{transition:"fade-transition",fullscreen:""},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",{style:{background:"lightskyblue"},attrs:{elevation:"0"}},[n("v-toolbar",{attrs:{dark:"",app:"",elevation:"0",color:"#00000000"}},[n("v-icon",{on:{click:function(e){t.dialog=!1}}},[t._v("mdi-close")])],1),n("v-content",t._l(t.appMenus,(function(e,o){return n("v-row",{key:"menu-"+o,staticClass:"my-15",attrs:{"no-gutters":"",justify:"center"}},[n("h2",{staticClass:"headline font-weight-bold white--text pointer",on:{click:function(n){return t.route(e)}}},[t._v(" "+t._s(e.title)+" ")])])})),1)],1)],1)],1)},i=[],a={name:"App",components:{},data:function(){return{dialog:!1,appMenus:[{to:"Top",title:"Top"},{to:"About",title:"About"}]}},methods:{menuOpen:function(){this.dialog=!0},route:function(t){console.log(t),this.$router.push({name:t.to}),this.dialog=!1}}},r=a,u=n(1001),l=n(3453),c=n.n(l),f=n(7524),h=n(3343),m=n(3870),v=n(3685),p=n(8699),y=n(770),d=n(6428),b=n(7877),g=n(2877),w=n(6656),x=(0,u.Z)(r,s,i,!1,null,null,null),_=x.exports;c()(x,{VApp:f.Z,VAppBar:h.Z,VAppBarNavIcon:m.Z,VCard:v.Z,VContent:p.Z,VDialog:y.Z,VIcon:d.Z,VMain:b.Z,VRow:g.Z,VToolbar:w.Z});var j=n(8345),k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-container",[o("v-row",{staticClass:"text-center"},[o("v-col",{attrs:{cols:"12"}},[o("v-img",{staticClass:"my-3",attrs:{src:n(9574),contain:"",height:"200"}})],1),o("v-col",{staticClass:"mb-4"},[o("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Welcome to Vuetify")]),o("p",{staticClass:"subheading font-weight-regular"},[t._v(" For help and collaboration with other Vuetify developers, "),o("br"),t._v("please join our online "),o("a",{attrs:{href:"https://community.vuetifyjs.com",target:"_blank"}},[t._v("Discord Community")])])]),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),o("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),o("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),o("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[o("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),o("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,n){return o("a",{key:n,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},C=[],Z={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},V=Z,O=n(2102),A=n(247),T=n(7047),M=(0,u.Z)(V,k,C,!1,null,null,null),E=M.exports;c()(M,{VCol:O.Z,VContainer:A.Z,VImg:T.Z,VRow:g.Z});var S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",{staticClass:"text-center"},[n("v-col",{attrs:{cols:"12"}},[n("v-img",{staticClass:"my-3",attrs:{src:"https://miyajiyuseiportfolioweb.blob.core.windows.net/resources/9uOKQFm5.jpg",contain:"",height:"200"}})],1),n("v-col",{staticClass:"mb-4 white--text"},[n("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("Miyaji Yusei")]),n("p",{staticClass:"subheading font-weight-regular"},[t._v(" Konnichiwa. Watashi no namae ha Miyaji Yusei to imasu. "),n("br"),t._v(" Futsutsukamono desuga yorosiku onegai itashimasu. ")])]),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("What's next?")]),n("v-row",{attrs:{justify:"center"}},t._l(t.whatsNext,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Important Links")]),n("v-row",{attrs:{justify:"center"}},t._l(t.importantLinks,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1),n("v-col",{staticClass:"mb-5",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v("Ecosystem")]),n("v-row",{attrs:{justify:"center"}},t._l(t.ecosystem,(function(e,o){return n("a",{key:o,staticClass:"subheading mx-3",attrs:{href:e.href,target:"_blank"}},[t._v(" "+t._s(e.text)+" ")])})),0)],1)],1)],1)},q=[],F={name:"HelloWorld",data:function(){return{ecosystem:[{text:"vuetify-loader",href:"https://github.com/vuetifyjs/vuetify-loader"},{text:"github",href:"https://github.com/vuetifyjs/vuetify"},{text:"awesome-vuetify",href:"https://github.com/vuetifyjs/awesome-vuetify"}],importantLinks:[{text:"Documentation",href:"https://vuetifyjs.com"},{text:"Chat",href:"https://community.vuetifyjs.com"},{text:"Made with Vuetify",href:"https://madewithvuejs.com/vuetify"},{text:"Twitter",href:"https://twitter.com/vuetifyjs"},{text:"Articles",href:"https://medium.com/vuetify"}],whatsNext:[{text:"Explore components",href:"https://vuetifyjs.com/components/api-explorer"},{text:"Select a layout",href:"https://vuetifyjs.com/getting-started/pre-made-layouts"},{text:"Frequently Asked Questions",href:"https://vuetifyjs.com/getting-started/frequently-asked-questions"}]}}},I=F,L=(0,u.Z)(I,S,q,!1,null,null,null),W=L.exports;c()(L,{VCol:O.Z,VContainer:A.Z,VImg:T.Z,VRow:g.Z});var N=[{path:"/",name:"Top",component:E},{path:"/about",name:"About",component:W}];o.Z.use(j.Z);var $=new j.Z({mode:"history",routes:N}),D=$,P=n(5591),B=n(1846);o.Z.use(P.Z);var Q=new P.Z({theme:{themes:{light:{primary:B.Z.lightBlue,secondary:B.Z.blueGrey,transparent:B.Z.shades.transparent,accent:B.Z.indigo.base}}}});o.Z.config.productionTip=!1,new o.Z({router:D,vuetify:Q,render:function(t){return t(_)}}).$mount("#app")},9574:function(t,e,n){t.exports=n.p+"img/logo.5919a104.svg"}},e={};function n(o){var s=e[o];if(void 0!==s)return s.exports;var i=e[o]={exports:{}};return t[o](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,o,s,i){if(!o){var a=1/0;for(c=0;c<t.length;c++){o=t[c][0],s=t[c][1],i=t[c][2];for(var r=!0,u=0;u<o.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](o[u])}))?o.splice(u--,1):(r=!1,i<a&&(a=i));if(r){t.splice(c--,1);var l=s();void 0!==l&&(e=l)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,s,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p=""}(),function(){var t={143:0};n.O.j=function(e){return 0===t[e]};var e=function(e,o){var s,i,a=o[0],r=o[1],u=o[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(s in r)n.o(r,s)&&(n.m[s]=r[s]);if(u)var c=u(n)}for(e&&e(o);l<a.length;l++)i=a[l],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self["webpackChunkweb"]=self["webpackChunkweb"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(5164)}));o=n.O(o)})();
//# sourceMappingURL=app-legacy.2e397f93.js.map