webpackJsonp([2],{RacV:function(e,s){},m0bX:function(e,s){},qPiH:function(e,s,t){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o={name:"demo",beforeCreate:function(){console.log("beforeCreate")},created:function(){console.log("created")},beforeMount:function(){console.log("beforeMount")},mounted:function(){console.log("mounted")},beforeDestroy:function(){console.log("beforeDestroy")},destroyed:function(){console.log("destroyed")}},n={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("demo")])},staticRenderFns:[]};var r={name:"collectedQuestions",components:{Demo:t("VU/8")(o,n,!1,function(e){t("RacV")},"data-v-54ed8b95",null).exports},data:function(){return{name:"collectedQuestions",key:1}},mounted:function(){console.log(this)}},a={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("article",{staticClass:"collectedQuestions"},[t("section",{staticClass:"querstion"},[t("strong",[e._v("错误：项目引入sass，dev运行异常，抛出异常")]),e._v(" "),t("p",{staticClass:"code"},[e._v('\n      * !!vue-style-loader!css-loader?{"minimize":false,"sourceMap":false}!../../node_modules/vue-loader/lib/style-compiler/index?{"vue":true,"id":"data-v-1d57e5ea","scoped":false,"hasInlineConfig":false}!stylus-loader?{"sourceMap":false}!../../node_modules/vue-loader/lib/selector?type=styles&index=0!./a.vue in ./src/components/a.vue\n    ')]),e._v(" "),t("p",[e._v("解决方法：确认sass-loader，node-loader，style-loader等依赖安装完成，确认全部安装完成后，检查sass版本，过高的版本\n    也有可能引发上述问题，当前项目使用的sass-loader版本为"),t("strong",{staticClass:"red"},[e._v("7.3.1")])])]),e._v(" "),t("section",{staticClass:"querstion"},[t("strong",[e._v("vue项目中动态加载图片问题")]),e._v(" "),t("p",[e._v("需要通过require(相对路径)来解析图片，如果直接通过变量设置路径并绑定到img src 属性上，webpack会将其解析成字符串，打包后会出现指向错误路径，因为打包时项目的目录结构发生了变化")])]),e._v(" "),t("section",{staticClass:"querstion"},[t("strong",[e._v("项目中如何定义scss全局变量")]),e._v(" "),t("p",[e._v("build/utils.js 中，修改为")]),e._v(" "),t("pre",[e._v("    scss: generateLoaders('sass').concat(\n      {\n        loader: 'sass-resources-loader',\n        options: {\n          resources: path.resolve(__dirname, '../src/assets/vars.scss')\n        }\n      }\n    ),\n  ")])]),e._v(" "),t("section",{staticClass:"querstion"},[t("strong",[e._v("通过keep-alive 包裹的组件如何进行强制刷新")]),e._v(" "),t("p",[e._v("1.组件被keep-alive包裹，进行组件切换时，会触发activated和deactivated两个钩子，前者\n    为组件激活时触发，后者组件失活时触发，可以在deactivated，运行$destroy方法，销毁失活组件，这样在次进来后\n    组件会进行重新渲染，created mount等钩子函数会重新触发")]),e._v(" "),t("p",[e._v("2.利用key，vue 通过key来判断更新前后当前节点是否是同一个节点，这个也涉及到了diff算法。当组件绑定的key值发生改变时，通过diff算法\n    判断，将使用新节点来替换旧节点，从而达到组件强制更新的效果，同样在这个过程中，组件同样会触发created mounted等钩子函数，通过测试，可以发现\n    他的一个顺序 beforeCreate - created - beforeMount - beforeDestroy - destroyed - mounted，可以看出组件的销毁时在组件开始挂载之后，\n    完成挂载之前")]),e._v(" "),t("p",[e._v("另外对于在v-for中是否需要添加key值，可以参考如下文章"),t("a",{attrs:{href:"https://segmentfault.com/a/1190000020716723"}},[e._v("https://segmentfault.com/a/1190000020716723")])]),e._v(" "),t("p",[e._v("在简单情况下，不加key确实可以调高一定的加载效率，不过这种效率对于用户来说微乎其微，并且也不利于复杂情况的下页面开发，最好还是使用key，另外对于使用index来作为key值的用法，index作为key\n    和不设置key效果是一样的，列表项index不会变化，并且使用index还会一起更新上的问题，比如降低页面更新的效率，在transition-group中引起错误的动画序列")])]),e._v(" "),t("section",[t("strong",[e._v("vue 中的 Filter")]),e._v(" "),t("p",[e._v("Filter只能用来处理传入参数的修改，相比computed，他更简洁，降低页面加载时的负荷，但同时使用场景收到限制，例如无法使用this，或者说他的this不指向当前组件实例")])])])}]};var c=t("VU/8")(r,a,!1,function(e){t("m0bX")},"data-v-3b00b25f",null);s.default=c.exports}});
//# sourceMappingURL=2.eeec07453a0ec1ae1868.js.map