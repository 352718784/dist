webpackJsonp([3],{"6is4":function(e,t){},D0lI:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("7+uW"),i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},i,!1,function(e){n("VtjP")},null,null).exports,s=n("/ocq"),u=n("4ywN"),o={name:"menuBar",props:{value:""},computed:{page:function(){var e=this;return this.$nextTick(function(){e.paging(e.$route.path)}),this.$route.path}},data:function(){return{menuList:[{name:"主页",id:"/mainView/mainPage"},{name:"开发工具",id:"/mainView/devTools"}]}},methods:{paging:function(e){var t=this.$el.querySelector('[data-id="'+e+'"]'),n=this.$el.querySelector(".bar");Object(u.a)({targets:n,left:t.offsetLeft,width:t.offsetWidth,duration:1e3})}}},c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ol",{staticClass:"menuBar"},[e._l(e.menuList,function(t){return n("li",{key:t.id,class:{activity:e.page===t.id},attrs:{"data-id":t.id},on:{click:function(n){return e.$router.push(t.id)}}},[e._v(e._s(t.name))])}),e._v(" "),n("div",{staticClass:"bar"})],2)},staticRenderFns:[]};var l={name:"mainView",components:{MenuBar:n("VU/8")(o,c,!1,function(e){n("6is4")},"data-v-2dbcba26",null).exports},data:function(){return{menuList:[{index:"/mainView/mainPage",name:"主页"},{index:"/mainView/devTools",name:"开发工具"}],defaultActive:""}},mounted:function(){this.defaultActive=this.$route.path},methods:{}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"main-view"},[t("menu-bar"),this._v(" "),t("article",{staticClass:"sub-view"},[t("transition",{attrs:{name:"fade",mode:"out-in"}},[t("keep-alive",[t("router-view",{staticClass:"fade-item"})],1)],1)],1)],1)},staticRenderFns:[]};var m=n("VU/8")(l,d,!1,function(e){n("D0lI")},"data-v-5a3a9534",null).exports;a.default.use(s.a);var f=new s.a({routes:[{path:"/mainView",component:m,name:"mainView",children:[{path:"mainPage",component:function(){return n.e(1).then(n.bind(null,"+UnO"))},name:"mainPage"},{path:"devTools",component:function(){return n.e(0).then(n.bind(null,"jlzB"))},name:"devTools"}]}]}),p=n("zL8q"),v=n.n(p);n("tvR6");a.default.use(v.a),f.beforeEach(function(e,t,n){e.name&&"mainView"!==e.name?n():n({path:"/mainView/mainPage"})}),new a.default({el:"#app",router:f,components:{App:r},template:"<App/>"})},VtjP:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.07d0a6e18b2dfbdb361a.js.map