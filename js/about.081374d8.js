(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"030f":function(t,e,n){t.exports=n.p+"img/banner3.05914a4c.webp"},"21a5":function(t,e,n){},2525:function(t,e,n){t.exports=n.p+"img/banner2.5014145c.webp"},"287b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"scrollTop",on:{click:t.clickTop}},[t._m(0)])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"box",attrs:{id:"box"}},[n("a",{staticClass:"box-in",attrs:{href:"#headerBox"}})])}],c={name:"scrollTop",methods:{clickTop:function(){var t=null;cancelAnimationFrame(t),t=requestAnimationFrame(function e(){var n=document.body.scrollTop||document.documentElement.scrollTop;n>0?(document.body.scrollTop=document.documentElement.scrollTop=n-50,t=requestAnimationFrame(e)):cancelAnimationFrame(t)})}}},s=c,a=(n("f517"),n("2877")),o=Object(a["a"])(s,i,r,!1,null,"04fd1a84",null);e["a"]=o.exports},"2dab":function(t,e,n){"use strict";var i=n("3946"),r=n.n(i);r.a},3946:function(t,e,n){},"3f7f":function(t,e,n){"use strict";var i=n("21a5"),r=n.n(i);r.a},"5f35":function(t,e,n){},"65fd":function(t,e,n){"use strict";var i=n("5f35"),r=n.n(i);r.a},"6d51":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"futureLife"},[t._m(0),n("div",{staticClass:"productWrap"},t._l(t.techProduct,function(e){return n("div",{staticClass:"productImg"},[n("img",{attrs:{src:e.src,alt:""}}),n("div",{staticClass:"shadowContent"},[n("p",[t._v(t._s(e.description))])])])}),0),n("scrollTop")],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"futureLifeTitle"},[n("p",[t._v("每天辛苦工作，就只為了能過更好的生活品質")]),n("p",[t._v("希望能享受人生更多的樂趣")]),n("p",[t._v("「未來生活」給你帶來全新的體驗！")])])}],c=n("287b"),s={name:"futureLife",props:{},components:{scrollTop:c["a"]},data:function(){return{techProduct:[{productName:"城市啞鈴組",description:"【Future】UrbanDumbbell 城市啞鈴組",price:"價格",src:n("b2d4")},{productName:"原動力強化器",description:"【Future】X-Knee 原動力強化器(1對)",price:"價格",src:n("87b0")},{productName:"零負重變型包",description:"【FUTURE】FreeZone Plus 零負重變型包",price:"價格",src:n("9ed1")},{productName:"零負重背帶",description:"【Future】FreeZone 零負重背帶",price:"價格",src:n("96b4")}]}}},a=s,o=(n("2dab"),n("2877")),u=Object(o["a"])(a,i,r,!1,null,"72c75f94",null);e["default"]=u.exports},"87b0":function(t,e,n){t.exports=n.p+"img/porduct006.5ac3f018.gif"},"92cb":function(t,e,n){t.exports=n.p+"img/banner1.ebb75a72.webp"},"96b4":function(t,e,n){t.exports=n.p+"img/porduct008.1400c472.gif"},"9ed1":function(t,e,n){t.exports=n.p+"img/porduct007.e5dc32ef.gif"},a003:function(t,e,n){},a9a7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"futureExperimentsBox"},[n("p",[t._v("實驗室施工中...敬請期待")])])}],c=n("2877"),s={},a=Object(c["a"])(s,i,r,!1,null,null,null);e["default"]=a.exports},b2d4:function(t,e,n){t.exports=n.p+"img/porduct005.2f1d7c05.gif"},b3d7:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"homeBox"},[i("div",{staticClass:"video-box",attrs:{id:"video-box"}},[i("video",{staticClass:"video-boxContent",attrs:{id:"video-boxContent",controls:"",autoplay:"",playsinline:"true",loop:"",muted:"","webkit-playsinline":"true",src:n("e14d")},domProps:{muted:!0}},[t._v("\r\n            Your browser does not support HTML5 video.\r\n        ")])]),i("div",{staticClass:"slider"},[i("transition-group",{staticClass:"slider_list",attrs:{tag:"div",name:"fade"}},t._l(t.imgList,function(e,n){return i("img",{directives:[{name:"show",rawName:"v-show",value:n===t.active,expression:"index ===active"}],key:e,attrs:{src:e}})}),0),i("button",{staticClass:"slider_prev",on:{click:function(e){return t.change(t.active-1)}}},[t._v("prev")]),i("button",{staticClass:"slider_next",on:{click:function(e){return t.change(t.active+1)}}},[t._v("next")]),i("ul",{staticClass:"slider_dots"},t._l(t.imgList,function(e,n){return i("li",{class:{active:n===t.active},on:{click:function(e){return t.change(n)}}},[i("button",[t._v(t._s(n))])])}),0)],1)])},r=[],c={name:"Home",data:function(){return{active:0,timer:0,imgList:[n("92cb"),n("2525"),n("030f"),n("bba8")]}},computed:{total:function(){return this.imgList.length}},methods:{change:function(t){this.active=(t+this.total)%this.total}},created:function(){var t=this;this.timer=setInterval(function(){t.active=(t.active+1)%t.total},5e3)},beforeDestroy:function(){clearInterval(this.timer)}},s=c,a=(n("65fd"),n("2877")),o=Object(a["a"])(s,i,r,!1,null,"53d2ba43",null);e["default"]=o.exports},bba8:function(t,e,n){t.exports=n.p+"img/banner4.22d5df68.webp"},e14d:function(t,e,n){t.exports=n.p+"media/test.2e8a2aa2.mp4"},ef4c:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an about page")])])}],c={},s=c,a=(n("3f7f"),n("2877")),o=Object(a["a"])(s,i,r,!1,null,"b609d412",null);e["default"]=o.exports},f517:function(t,e,n){"use strict";var i=n("a003"),r=n.n(i);r.a}}]);
//# sourceMappingURL=about.081374d8.js.map