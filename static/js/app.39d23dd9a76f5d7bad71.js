webpackJsonp([1],{121:function(a,t){},22:function(a,t,e){"use strict";e.d(t,"a",function(){return v});var i=e(37),s=e(62),n=e(63),r=e(66),l=e(69),o=e(72),c=e(73),u=e.n(c);e(117);i.a.use(s.a),i.a.use(o.a),u.a.initializeApp({apiKey:"AIzaSyCwPHRWTCKQC3UhgIeF6cemb223iTBIhGk",authDomain:"isekainime-a4eef.firebaseapp.com",databaseURL:"https://isekainime-a4eef.firebaseio.com",projectId:"isekainime-a4eef",storageBucket:"isekainime-a4eef.appspot.com",messagingSenderId:"487351828465"});var v=u.a.firestore(),d=new s.a({routes:[{path:"/",name:"Homepage",component:n.a},{path:"/anime/:slug/:episode",name:"Single",component:r.a},{path:"/about-us",name:"About",component:l.a}],mode:"history"});t.b=d},39:function(a,t,e){"use strict";var i={true:"is-active",false:""};t.a={name:"app",data:function(){return{navbarBurgerStatus:!1}},methods:{navbarBurger:function(){this.navbarBurgerStatus=!this.navbarBurgerStatus}},computed:{navbarBurgerClass:function(){return i[this.navbarBurgerStatus]}}}},40:function(a,t,e){"use strict";var i=e(22);t.a={name:"Homepage",data:function(){return{recents:[]}},methods:{},created:function(){var a=this;i.a.collection("recent").orderBy("id","desc").get().then(function(t){t.forEach(function(t){var e={};e=t.data(),e.episode.get().then(function(t){e.episode=t.data(),t.data().anime.get().then(function(t){e.episode.anime=t.data(),a.recents.push(e)})})})})}}},41:function(a,t,e){"use strict";var i=e(22);t.a={name:"Homepage",data:function(){return{data:null}},methods:{},created:function(){var a=this;i.a.collection("anime").where("slug","==",this.$route.params.slug).get().then(function(t){t.forEach(function(t){var e={};e=t.data(),i.a.collection("anime/"+a.$route.params.slug+"/episodes").where("id","==",a.$route.params.episode).get().then(function(t){t.forEach(function(t){e.episode=t.data(),a.data=e})})})})}}},42:function(a,t,e){"use strict";t.a={name:"About",data:function(){return{}},methods:{}}},55:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(37),s=e(58),n=e(22),r=e(121);e.n(r);i.a.config.productionTip=!1,new i.a({el:"#app",router:n.b,template:"<App/>",components:{App:s.a}})},58:function(a,t,e){"use strict";function i(a){e(59)}var s=e(39),n=e(61),r=e(16),l=i,o=r(s.a,n.a,!1,l,null,null);t.a=o.exports},59:function(a,t){},61:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{attrs:{id:"app"}},[e("header",[e("nav",{staticClass:"navbar is-primary",attrs:{role:"navigation","aria-label":"main navigation"}},[e("div",{staticClass:"navbar-brand"},[a._m(0),a._v(" "),e("a",{staticClass:"navbar-burger burger",class:a.navbarBurgerClass,attrs:{role:"button","aria-label":"menu","aria-expanded":"false","data-target":"navbarItems"},on:{click:a.navbarBurger}},[e("span",{attrs:{"aria-hidden":"true"}}),a._v(" "),e("span",{attrs:{"aria-hidden":"true"}}),a._v(" "),e("span",{attrs:{"aria-hidden":"true"}})])]),a._v(" "),e("div",{staticClass:"navbar-menu",class:a.navbarBurgerClass,attrs:{id:"navbarItems"}},[e("div",{staticClass:"navbar-start"},[e("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a._v("\n            Home\n          ")]),a._v(" "),e("a",{staticClass:"navbar-item"},[a._v("\n            All Anime\n          ")])],1),a._v(" "),e("div",{staticClass:"navbar-end"},[e("div",{staticClass:"navbar-item"},[e("div",{staticClass:"buttons"},[e("router-link",{staticClass:"button is-primary",attrs:{to:"/about-us"}},[e("strong",[a._v("Tentang Kami")])])],1)])])])])]),a._v(" "),e("main",[e("router-view")],1)])},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("a",{staticClass:"navbar-item",attrs:{href:"/"}},[e("p",{staticClass:"is-size-4"},[a._v("Isekainime")])])}],n={render:i,staticRenderFns:s};t.a=n},63:function(a,t,e){"use strict";function i(a){e(64)}var s=e(40),n=e(65),r=e(16),l=i,o=r(s.a,n.a,!1,l,null,null);t.a=o.exports},64:function(a,t){},65:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column"},[e("article",{staticClass:"section"},[a._m(0),a._v(" "),e("div",{staticClass:"columns is-multiline is-mobile is-variable is-1-mobile"},[e("div",{directives:[{name:"show",rawName:"v-show",value:!a.recents.length,expression:"!recents.length"}],staticClass:"column has-text-centered"},[e("h1",[a._v("Loading...")])]),a._v(" "),a._l(a.recents,function(t,i){return e("div",{directives:[{name:"show",rawName:"v-show",value:a.recents.length,expression:"recents.length"}],key:i,staticClass:"column is-one-quarter-desktop is-half-mobile"},[e("figure",{staticClass:"image is-4by5"},[e("router-link",{attrs:{to:{name:"Single",params:{slug:t.episode.anime.slug,episode:t.episode.id}}}},[e("img",{attrs:{src:t.episode.anime.preview,alt:"Placeholder image"}})])],1),a._v(" "),e("div",{staticClass:"has-text-centered"},[e("router-link",{attrs:{to:{name:"Single",params:{slug:t.episode.anime.slug,episode:t.episode.id}}}},[e("b",[e("p",{staticClass:"has-text-info"},[a._v(a._s(t.episode.anime.title))])])]),a._v(" "),e("p",[a._v("Episode "+a._s(t.episode.id))])],1)])})],2)]),a._v(" "),a._m(1)])])])])},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"title"},[e("p",[a._v("# Rilisan Terbaru")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("nav",{staticClass:"pagination is-right",attrs:{role:"navigation","aria-label":"pagination"}},[e("a",{staticClass:"pagination-previous"},[a._v("Previous")]),a._v(" "),e("a",{staticClass:"pagination-next"},[a._v("Next page")]),a._v(" "),e("ul",{staticClass:"pagination-list"},[e("li",[e("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 1"}},[a._v("1")])]),a._v(" "),e("li",[e("span",{staticClass:"pagination-ellipsis"},[a._v("…")])]),a._v(" "),e("li",[e("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 45"}},[a._v("45")])]),a._v(" "),e("li",[e("a",{staticClass:"pagination-link is-current",attrs:{"aria-label":"Page 46","aria-current":"page"}},[a._v("46")])]),a._v(" "),e("li",[e("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 47"}},[a._v("47")])]),a._v(" "),e("li",[e("span",{staticClass:"pagination-ellipsis"},[a._v("…")])]),a._v(" "),e("li",[e("a",{staticClass:"pagination-link",attrs:{"aria-label":"Goto page 86"}},[a._v("86")])])])])}],n={render:i,staticRenderFns:s};t.a=n},66:function(a,t,e){"use strict";function i(a){e(67)}var s=e(41),n=e(68),r=e(16),l=i,o=r(s.a,n.a,!1,l,null,null);t.a=o.exports},67:function(a,t){},68:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column"},[e("article",{staticClass:"section"},[a._m(0),a._v(" "),e("div",{staticClass:"columns is-multiline is-mobile is-variable is-1-mobile"},[null===a.data?e("div",{staticClass:"column has-text-centered"},[e("p",{staticClass:"is-size-3"},[a._v("Loading...")])]):a._e(),a._v(" "),null!==a.data?e("div",{staticClass:"column is-three-quarters-tablet is-full-mobile"},[e("p",{staticClass:"is-size-4"},[e("b",[a._v(a._s(a.data.title))])]),a._v(" "),e("p",[a._v("Episode "+a._s(a.data.episode.id))]),a._v(" "),e("br"),a._v(" "),e("div",{domProps:{innerHTML:a._s(a.data.episode.link)}}),a._v(" "),e("br"),a._v(" "),e("button",{staticClass:"button is-primary"},[a._v("Download (GDrive)")]),a._v(" "),e("button",{staticClass:"button is-primary"},[a._v("Download (Zippyshare)")]),a._v(" "),e("button",{staticClass:"button is-primary"},[a._v("Download (Firebase)")])]):a._e(),a._v(" "),null!==a.data?e("div",{staticClass:"column episode-list"},[a._m(1),a._v(" "),a._m(2)]):a._e()])])])])])])},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"title"},[e("p",[a._v("# Streaming Online")])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("article",{staticClass:"message"},[e("div",{staticClass:"message-header"},[e("p",[a._v("Anime Info")])]),a._v(" "),e("div",{staticClass:"message-body"},[e("p",[a._v("Category: Winter 2019")]),a._v(" "),e("p",[a._v("Genre: Romance")])])])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("aside",{staticClass:"menu"},[e("p",{staticClass:"menu-label"},[a._v("\n                    Daftar Episode\n                  ")]),a._v(" "),e("ul",{staticClass:"menu-list"},[e("li",[e("a",[a._v("Episode 1")])]),a._v(" "),e("li",[e("a",[a._v("Episode 2")])])])])}],n={render:i,staticRenderFns:s};t.a=n},69:function(a,t,e){"use strict";function i(a){e(70)}var s=e(42),n=e(71),r=e(16),l=i,o=r(s.a,n.a,!1,l,null,null);t.a=o.exports},70:function(a,t){},71:function(a,t,e){"use strict";var i=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},s=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"columns is-multiline"},[e("div",{staticClass:"column"},[e("article",{staticClass:"section"},[e("div",{staticClass:"title"},[e("p",[a._v("# Tentang Kami")])]),a._v(" "),e("div",{staticClass:"columns is-multiline is-mobile is-variable is-1-mobile"},[e("div",{staticClass:"column"},[e("p",[a._v("Konnichiwa minna san !")]),a._v(" "),e("p",[a._v("Selamat datang di website Isekainime, semoga betah ya :)")]),a._v(" "),e("br"),a._v(" "),e("p",[a._v("Jadi pertanyaannya, siapa kita?")]),a._v(" "),e("p",[a._v("\n                Kita adalah sebuah fanshare gratis yang menyediakan jasa\n                streaming dan download dengan mudah tanpa fafifu.\n              ")]),a._v(" "),e("p",[a._v("\n                Disini tidak ada yang namanya safelink dan iklan gak jelas,\n                sehingga kita bisa lebih nyaman dalam menonton anime :D\n              ")]),a._v(" "),e("br"),a._v(" "),e("figure",{staticClass:"image"},[e("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/isekainime-a4eef.appspot.com/o/miku.jpg?alt=media&token=d0480ee7-0427-47bf-b897-87a47fdfc7b7",alt:""}})])])])])])])])])}],n={render:i,staticRenderFns:s};t.a=n}},[55]);
//# sourceMappingURL=app.39d23dd9a76f5d7bad71.js.map