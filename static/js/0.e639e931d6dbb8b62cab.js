webpackJsonp([0],{"+NAL":function(t,e,n){var r={"./tp1.png":"D1vk","./tp2.png":"Azd2","./tp3.png":"0xwQ","./tp4.png":"FngZ"};function a(t){return n(i(t))}function i(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="+NAL"},"0xwQ":function(t,e,n){t.exports=n.p+"static/img/tp3.220b86e.png"},"3fs2":function(t,e,n){var r=n("RY/4"),a=n("dSzd")("iterator"),i=n("/bQp");t.exports=n("FeBl").getIteratorMethod=function(t){if(void 0!=t)return t[a]||t["@@iterator"]||i[r(t)]}},"412r":function(t,e){},"5zde":function(t,e,n){n("zQR9"),n("qyJz"),t.exports=n("FeBl").Array.from},Azd2:function(t,e,n){t.exports=n.p+"static/img/tp2.a189dde.png"},D1vk:function(t,e,n){t.exports=n.p+"static/img/tp1.735933e.png"},FHDi:function(t,e,n){t.exports=n.p+"static/img/sw3.255df96.png"},FngZ:function(t,e,n){t.exports=n.p+"static/img/tp4.96e5165.png"},Gu7T:function(t,e,n){"use strict";e.__esModule=!0;var r,a=n("c/Tr"),i=(r=a)&&r.__esModule?r:{default:r};e.default=function(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return(0,i.default)(t)}},MBjb:function(t,e){},Mhyx:function(t,e,n){var r=n("/bQp"),a=n("dSzd")("iterator"),i=Array.prototype;t.exports=function(t){return void 0!==t&&(r.Array===t||i[a]===t)}},"RY/4":function(t,e,n){var r=n("R9M2"),a=n("dSzd")("toStringTag"),i="Arguments"==r(function(){return arguments}());t.exports=function(t){var e,n,s;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),a))?n:i?r(e):"Object"==(s=r(e))&&"function"==typeof e.callee?"Arguments":s}},Sue6:function(t,e,n){t.exports=n.p+"static/img/sw1.1350233.png"},UiJJ:function(t,e,n){var r={"./sw1.png":"Sue6","./sw2.png":"hLhx","./sw3.png":"FHDi"};function a(t){return n(i(t))}function i(t){var e=r[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}a.keys=function(){return Object.keys(r)},a.resolve=i,t.exports=a,a.id="UiJJ"},"W+XU":function(t,e){},ZTf5:function(t,e){},"c/Tr":function(t,e,n){t.exports={default:n("5zde"),__esModule:!0}},dY0y:function(t,e,n){var r=n("dSzd")("iterator"),a=!1;try{var i=[7][r]();i.return=function(){a=!0},Array.from(i,function(){throw 2})}catch(t){}t.exports=function(t,e){if(!e&&!a)return!1;var n=!1;try{var i=[7],s=i[r]();s.next=function(){return{done:n=!0}},i[r]=function(){return s},t(i)}catch(t){}return n}},djvp:function(t,e){},eSCC:function(t,e){},fBQ2:function(t,e,n){"use strict";var r=n("evD5"),a=n("X8DO");t.exports=function(t,e,n){e in t?r.f(t,e,a(0,n)):t[e]=n}},hLhx:function(t,e,n){t.exports=n.p+"static/img/sw2.c2e2592.png"},mbWO:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("4ywN"),a={name:"shakingWater",props:{value:{default:80}},data:function(){return{w:600,h:200,waveH:20,num:parseInt(this.value)}},computed:{path:function(){var t=this.w/8,e=this.waveH;return["M 0 "+(1+e)+" Q "+t+" 1 "+2*t+" "+(1+e)+" Q "+3*t+" "+(1+2*e)+"  "+4*t+" "+(1+e)+" Q "+5*t+" 1  "+6*t+" "+(1+e)+" Q "+7*t+" "+(1+2*e)+"  "+8*t+" "+(1+e)+" V"+(this.h+10)+" H0 Z","M 0 "+(1+e)+" Q "+t+" "+(1+e)+" "+2*t+" "+(1+e)+" Q "+3*t+" "+(1+e)+"  "+4*t+" "+(1+e)+" Q "+5*t+" "+(1+e)+"  "+6*t+" "+(1+e)+" Q "+7*t+" "+(1+e)+"  "+8*t+" "+(1+e)+" V"+(this.h+10)+" H0 Z"]},progress:function(){return(100-this.num)*(this.h-2*this.waveH)/100}},methods:{startPlay:function(){var t=this.w/8;Object(r.a)({targets:".wave1",easing:"easeOutQuart",duration:5e3,begin:function(){Object(r.a)({targets:".wave",easing:"linear",duration:500,loop:10,translateX:[{value:0,duration:0},{value:4*-t}]})},d:[{value:this.path[0],duration:1e3},{value:this.path[1]}]})},startplay2:function(){var t=this.$el.querySelectorAll(".point"),e=this.$el;r.a.set(t,{translateX:function(){return r.a.random(-10,e.offsetWidth+10)},scale:function(){return r.a.random(2,10)/10},opacity:function(){return r.a.random(1,8)/10}}),t.forEach(function(t){var n={targets:[t],duration:function(){return r.a.random(1e3,5e3)},delay:function(){return r.a.random(0,2e3)},translateY:[0,r.a.random(-e.offsetHeight/3,-e.offsetHeight)],easing:"linear",loop:!0,direction:"normal"};Object(r.a)(n)})}},mounted:function(){this.startplay2(),this.w=3*this.$el.offsetWidth,this.h=this.$el.offsetHeight}},i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"shakingWater",on:{mouseenter:t.startPlay}},[n("svg",{staticClass:"wave",attrs:{width:t.w,height:t.h,xmlns:"http://www.w3.org/2000/svg"}},[n("path",{staticClass:"wave1",style:{transform:"translateY("+t.progress+"px)"},attrs:{fill:"url(#color)",d:t.path[1]}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"color",x1:"0",y1:"0",x2:"0",y2:t.h,gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{offset:"0%","stop-color":"rgb(114,233,228)"}}),t._v(" "),n("stop",{attrs:{offset:"100%","stop-color":"rgb(92,189,253)"}})],1)],1)]),t._v(" "),t._l(20,function(t){return n("div",{key:t,staticClass:"point"})}),t._v(" "),n("div",{staticClass:"number"},[t._v(t._s(t.num)+"%")])],2)},staticRenderFns:[]};var s={name:"shaingWaterWindow",components:{ShakingWater:n("VU/8")(a,i,!1,function(t){n("zLFA")},"data-v-d1c3964e",null).exports},data:function(){return{code:'<shaking-water :value="70"></shaking-water>',img:[{remark:"在页面初始化时，获取组件宽高，通过computed分别计算svg水平时曲线和波动时曲线"},{remark:"绘制波浪，初始状态为水平"},{remark:"调用animeJs，右波浪状态过渡为水平状态，同时svg从右到左反复移动"}]}},created:function(){this.img.forEach(function(t,e){t.src=n("UiJJ")("./sw"+(e+1)+".png")})}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("shaking-water",{attrs:{value:60}}),t._v(" "),n("p",[n("strong",[t._v("使用方法：")]),t._v(" "),n("span",[t._v(t._s(t.code))])]),t._v(" "),n("p",[t._v("value 设置水位高度，仅在初始化的时候生效，value的有效值默认0-100")]),t._v(" "),t._m(0),t._v(" "),n("div",[n("strong",[t._v("关键代码：")]),t._v(" "),t._l(t.img,function(e,r){return n("div",{key:e.src},[n("p",[t._v(t._s(r+1)+"."+t._s(e.remark))]),t._v(" "),n("img",{attrs:{src:e.src}})])})],2)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("设置思路：")]),this._v("使用animeJs的svg形变，水波又两种状态，波动状态和水平状态，波动状态下的曲线使用 二次贝塞尔曲线绘制，之后调整控制二次贝塞尔曲线的控制点，使线条变水平，\n  在线条变为水平的过程中，线条进行从右到做的反复移动，外层盒子超出部分隐藏，让波浪生动起来")])}]};var d=n("VU/8")(s,o,!1,function(t){n("412r")},"data-v-12839071",null).exports,c={name:"titlePopWindow",data:function(){return{code:'<p v-show-title="string/vnode">当前的例子的title</p>',img:[{remark:"注册一个全局指令，在bind钩子中绑定事件"},{remark:"创建组件，使用transiton组件包裹，使用show变量控制页面显示，show通过props传入，受父组件控制"},{remark:"新增vue子类，使用render构建组件模板，手动挂载后将组件dom插入body中，利用鼠标事件计算当前dom在页面中的视觉坐标"},{remark:"vue子类show变量设置未false，在下一个nextTick方法中进行组件实例销毁，"}],note:["clientY 指的是距离可视页面左上角的距离","pageY 指的是距离可视页面左上角的距离(不受页面滚动影响)","screenY 指的是距离屏幕左上角的距离","layerY 指的是找到它或它父级元素中最近具有定位的左上角距离","offsetY 指的是距离它自己左上角的距离"]}},created:function(){this.img.forEach(function(t,e){t.src=n("+NAL")("./tp"+(e+1)+".png")})}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"titlePopWindow"},[n("p",[t._v("elementUI中有el-popover组件，弹出气泡窗口，虽然方便并且扩展性强，但是对文档的可读性有一定的影响，并且在开发过程中经常需要手动刷新页面来保证气泡弹窗内容的更新，\n    我在之前的工作中，用气泡窗口最多的还是title，毕竟 浏览器自带的title太丑了，样式也无法自定义调整，\n    之后写了这个例子，用于之后的工作中，主要还是用来取代浏览器中自带的title")]),t._v(" "),n("div",{staticClass:"example-line"},[n("p",{attrs:{title:"浏览器的title"}},[t._v("浏览器的title")]),t._v(" "),n("el-popover",{attrs:{placement:"top-start",width:"200",trigger:"hover",content:"使用el-popover做的title"}},[n("p",{attrs:{slot:"reference"},slot:"reference"},[t._v("使用el-popover做的title")])]),t._v(" "),n("p",{directives:[{name:"show-title",rawName:"v-show-title",value:"当前的例子的title",expression:"'当前的例子的title'"}]},[t._v("当前的例子的title")])],1),t._v(" "),n("p",[n("strong",[t._v("使用方法：")]),t._v(t._s(t.code)+"， 在v-show-stitle 传入string 或者 vnode，只供内部使用，并未对传入的数据格式做校验\n  ")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("p",[t._v("弹窗删除方法：在生成弹窗的过程中，会将vue实例使用一个 let变量保存起来，触发删除后，vue实例执行$destroy进行销毁,并将页面中的dom节点删除，vue实例设置未null")]),t._v(" "),n("ol",[n("strong",[t._v("注意事项：")]),t._v(" "),t._l(t.note,function(e,r){return n("li",{key:r},[t._v(t._s(e))])})],2),t._v(" "),n("div",[n("strong",[t._v("关键代码：")]),t._v(" "),t._l(t.img,function(e,r){return n("div",{key:r},[n("p",[t._v(t._s(e.remark))]),t._v(" "),n("img",{attrs:{src:e.src}})])})],2)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("设计思路：")]),this._v("注册一个全局自定义指令，在bind钩子中，对传入的el元素监听mouseenter 和 mouseleave事件，\n    mouseenter绑定生成弹窗方法，mouseleave绑定弹窗删除方法\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("弹窗生成方法：使用vue的extend方法，生成了一个新的vue组件实例，根据 "),e("strong",[this._v("v-show-stitle")]),this._v(" 传入的内容，构建新的vue组件的render方法，\n  之后通过 $mount 方法，将生成的 $el dom节点插入 body标签中")])}]};var u=n("VU/8")(c,l,!1,function(t){n("ZTf5")},"data-v-447ba202",null).exports,v={name:"parallax",data:function(){return{scrollVal:0}},computed:{p1:function(){return.5*this.scrollVal+"px"},p2:function(){return.5*-this.scrollVal+"px"},p3:function(){return.15*-this.scrollVal+"px"},p4:function(){return.15*this.scrollVal+"px"},p5:function(){return 1*this.scrollVal+"px"}},methods:{scroll:function(t){this.scrollVal=t.target.scrollTop,console.log("hello",t.target.scrollTop)}}},p={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"parallax-net",on:{scroll:function(e){return e.preventDefault(),t.scroll(e)}}},[n("section",{staticClass:"img-list center"},[n("img",{staticClass:"img",style:{top:t.p1},attrs:{src:"static/image/p1.jpg"}}),t._v(" "),n("img",{staticClass:"img",style:{left:t.p2},attrs:{src:"static/image/p2.png"}}),t._v(" "),n("img",{staticClass:"img",style:{top:t.p3},attrs:{src:"static/image/p3.png"}}),t._v(" "),n("h2",{staticClass:"title",style:{top:t.p5}},[t._v("\n      MOON\n    ")]),t._v(" "),n("img",{staticClass:"img",style:{top:t.p4},attrs:{src:"static/image/p4.png"}})]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"text"},[e("p",[this._v("\n      偶尔在网上看到这种利用视觉差做的网页，实现效果简单，却能让整个网站生动起来，于是照着网上的例子也写了一个，\n      设置图片为绝对定位， 之后监听窗口scroll事件，读取"),e("strong",[this._v("scrollTop")]),this._v("值，根据scrollTop的值分别设置\n      图片的top值或者left。\n    ")]),this._v(" "),e("p",[this._v("\n      另外 使用了css中的 mix-blend-mode 属性，具体使用教程可查看该路径\n      "),e("a",{attrs:{target:"_blank",href:"https://www.runoob.com/cssref/pr-mix-blend-mode-html.html"}},[this._v(" https://www.runoob.com/cssref/pr-mix-blend-mode-html.html")])])])}]};var g=n("VU/8")(v,p,!1,function(t){n("eSCC")},"data-v-087f08e8",null).exports,f=n("Gu7T"),m=n.n(f),h={name:"draggingComp",props:{value:{type:Array,default:function(){return[]}},type:{default:"insert"},moveAwayStyle:{type:Object,default:function(){return{transform:"translate(30%,20%)"}}},unique:{default:"id"}},data:function(){return{data:this.value,mouse:{down:!1,move:!1},dragItem:{},dragIndex:-1,dragEnterIndex:-1}},created:function(){},methods:{dragstart:function(t,e){this.dragIndex=t},dragenter:function(t,e){-1!==this.dragIndex&&t!==this.dragIndex&&(this.dragEnterIndex=t)},dragover:function(t){t.preventDefault()},drop:function(){if(-1!==this.dragEnterIndex){var t=this.data[this.dragIndex];if("insert"===this.type)console.log("from",this.dragIndex,"to",this.dragEnterIndex),this.data.splice(this.dragEnterIndex,0,t),this.data.splice(this.dragEnterIndex<this.dragIndex?this.dragIndex+1:this.dragIndex,1);else if("exchange"===this.type){var e;(e=this.data).splice.apply(e,[this.dragEnterIndex,1].concat(m()(this.data.splice(this.dragIndex,1,this.data[this.dragEnterIndex]))))}}this.dragIndex=-1,this.dragEnterIndex=-1},checkDragItemClear:function(){-1!==this.dragIndex&&this.drop()}},mounted:function(){document.addEventListener("mousemove",this.checkDragItemClear)},beforeDestroy:function(){document.removeEventListener("mousemove",this.checkDragItemClear)}},_={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition-group",{staticClass:"list-complete draggingComp",attrs:{name:"list-complete",tag:"div"}},t._l(t.data,function(e,r){return e?n("div",{key:e[t.unique],class:["list-complete-item",t.dragIndex===r?"hidden":""],style:Object.assign({},t.dragEnterIndex===r&&t.dragIndex+1!==r?t.moveAwayStyle:{},{"z-index":t.data.length-r}),attrs:{draggable:"true"},on:{dragstart:function(n){return t.dragstart(r,e)},dragenter:function(n){return t.dragenter(r,e)},dragover:t.dragover,drop:function(e){return t.drop(e)}}},[t._t("default",[t._v("\n      hello\n    ")],{data:e})],2):t._e()}),0)},staticRenderFns:[]};var x=n("VU/8")(h,_,!1,function(t){n("MBjb")},"data-v-cc089a38",null).exports,y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"codeArticle"},t._l(t.code,function(e,r){return n("div",{key:r},[n("p",[n("strong",[t._v(t._s(e.remark))])]),t._v(" "),n("div",{staticClass:"code"},[t._v(t._s(e.code))])])}),0)},staticRenderFns:[]};var w={name:"draggingCompWindow",components:{CodeArticle:n("VU/8")({name:"codeArticle",props:{code:[]}},y,!1,function(t){n("djvp")},"data-v-16e5ddac",null).exports,DraggingComp:x},data:function(){return{data:[],data2:[],code:'<dragging-comp unique="id" v-model="data" type="exchange"\n                     :moveAwayStyle="{transform: \'scale(.6)\'}"\n                     v-slot="scopeVal">\n        <template>\n          hello：{{scopeVal.data.id}}\n        </template>\n      </dragging-comp>',steps:[{code:'  <transition-group name="list-complete"\n                    class="list-complete draggingComp" tag="div">\n    <div :class="[\'list-complete-item\', dragIndex===index?\'hidden\':\'\']"\n         :style="{...dragEnterIndex===index&&dragIndex+1!==index?moveAwayStyle:{}, ...{\'z-index\':data.length-index}}"\n         draggable="true"\n         :key="item[unique]"\n         v-if="item"\n         @dragstart="dragstart(index,item)"\n         @dragenter="dragenter(index,item)"\n         @dragover="dragover"\n         @drop="drop($event)"\n         v-for="(item, index) in data">\n      <slot :data="item">\n        hello\n      </slot>\n    </div>\n  </transition-group>',remark:"设置transition-group中的name，设置list-complete-enter等样式，监听元素中的drag事件"},{remark:"处理逻辑",code:"  methods: {\n    // 拖拽开始，记录index\n    dragstart (index, item) {\n      this.dragIndex = index\n    },\n    dragenter (index, item) {\n      // 在没有拖拽元素时，中断方法，收到其他拖拽元素的影响\n      if (this.dragIndex === -1) return\n      // 记录下触碰到的元素的index\n      if (index !== this.dragIndex) this.dragEnterIndex = index\n    },\n    dragover (e) {\n      // 执行该方法，才能触发drop事件\n      e.preventDefault()\n    },\n    // 拖拽结束，根据类型和记录下的两个index值，对数组进行操作\n    drop () {\n      if (this.dragEnterIndex !== -1) {\n        let item = this.data[this.dragIndex]\n        if (this.type === 'insert') {\n          console.log('from', this.dragIndex, 'to', this.dragEnterIndex)\n          this.data.splice(this.dragEnterIndex, 0, item)\n          this.data.splice(this.dragEnterIndex < this.dragIndex ? this.dragIndex + 1 : this.dragIndex, 1)\n        } else if (this.type === 'exchange') {\n          this.data.splice(this.dragEnterIndex, 1, ...this.data.splice(this.dragIndex, 1, this.data[this.dragEnterIndex]))\n        }\n      }\n      this.dragIndex = -1\n      this.dragEnterIndex = -1\n    },\n    // 为了确保选中的拖动item被清空，在document中监听mousemove，\n    checkDragItemClear () {\n      if (this.dragIndex !== -1) {\n        this.drop()\n      }\n    }\n  },\n  // 确保拖拽结束后\n  mounted () {\n    document.addEventListener('mousemove', this.checkDragItemClear)\n  },\n  beforeDestroy () {\n    document.removeEventListener('mousemove', this.checkDragItemClear)\n  }"}]}},mounted:function(){for(var t=0;t<16;t++)this.data.push({id:t}),this.data2.push({id:t})}},I={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("\n    vue-draggable、awe-dnd 都是现成的拖拽排序组件,但在使用的过程中总是感觉差一点意思,存在没有过度,直接跳的问题,\n    正好vue中封装了一个我个人非常喜欢的组件 tranisiton-group，于是我在改组件基础上封装了一个新的拖拽组件\n  ")]),t._v(" "),t._m(0),t._v(" "),n("div",[t._m(1),t._v(" "),n("p",{staticStyle:{"white-space":"pre"}},[t._v("\n      "+t._s(t.code)+"\n    ")]),t._v(" "),n("p",[t._v("使用v-model 绑定数组，设置操作类型tpye，exchange为数组元素位置互换，insert为拖拽元素插入到移动的位置中，unique设置唯一值，必填，如果为空默认为‘id’，\n    可通过作用域插槽对内容做自定义，moveAwayStyle设置触发dragenter的元素的样式")])]),t._v(" "),n("div",[n("strong",[t._v("案例：")]),t._v(" "),n("div",{staticClass:"exp-row"},[n("div",[n("dragging-comp",{key:"exp1",attrs:{type:"insert",unique:"id"},scopedSlots:t._u([{key:"default",fn:function(e){return[[t._v("\n            hello："+t._s(e.data.id)+"\n          ")]]}}]),model:{value:t.data,callback:function(e){t.data=e},expression:"data"}}),t._v(" "),n("p",[t._v("纵向排序(通过父组件样式覆盖)，触碰元素默认样式, 纵向排序的时候会感觉元素运动轨迹不对，emm，这个是错觉，最开始我也以为是bug来着")])],1),t._v(" "),n("div"),t._v(" "),n("div",[n("dragging-comp",{key:"exp2",attrs:{type:"exchange",moveAwayStyle:{transform:"scale(.6)"},unique:"id"},scopedSlots:t._u([{key:"default",fn:function(e){return[[t._v("\n            hello："+t._s(e.data.id)+"\n          ")]]}}]),model:{value:t.data2,callback:function(e){t.data2=e},expression:"data2"}}),t._v(" "),n("p",[t._v("横向排序(通过父组件样式覆盖)，触碰元素设置新的样式")])],1)])]),t._v(" "),n("div",[t._m(2),t._v(" "),n("code-article",{attrs:{code:t.steps}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("设计思路：")]),this._v("在最开始的使用，采用了 mousedown mouseup mouseenter mousemove 等事件来触发列表重新排序，随后了解到html中新增了\n    drag事件，大大的降低了组件逻辑复杂度。主要流程为 dragstart 触发记录下当前移动元素的index1，dragenter触发记录下拖拽时触碰到的元素index2，\n    drop 触发时通过index1 和 index2 对整个数据列表进行重新排序，另外由于props 中传入的数据时数组对象，可以直接修改且不会报错，元素之间的移动则由 transition-group 组件\n    处理\n  ")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("使用方法：")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("关键代码")])])}]};var k={name:"demoExample",components:{DraggingCompWindow:n("VU/8")(w,I,!1,function(t){n("qBiT")},"data-v-6d6222ba",null).exports,Parallax:g,TitlePopWindow:u,ShaingWaterWindow:d},data:function(){return{catalog:[{name:"带波浪的进度",component:"shaing-water-window"},{name:"自定义title",component:"title-pop-window"},{name:"视觉差文章展示",component:"parallax"},{name:"拖拽组件",component:"dragging-comp-window"}],selectedDemo:!1}},created:function(){},methods:{computedPosition:function(t){console.log(t)},test2:function(t){console.log(t)},test:function(t){var e=this.$createElement("p","hello,by $titlePop");this.vm=this.$titlePop(e,t,[t.x-t.offsetX,t.y-t.offsetY])},test3:function(){console.log(this.vm)}}},E={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("article",{staticClass:"demoExample"},[n("dl",{staticClass:"catalog part"},t._l(t.catalog,function(e,r){return n("dt",{key:r,staticClass:"catalog-item",on:{click:function(n){t.selectedDemo=e}}},[t._v(t._s(e.name))])}),0),t._v(" "),n("section",{staticClass:"window part"},[t.selectedDemo?n(t.selectedDemo.component,{key:"sub-window",tag:"component",staticClass:"sub-window"}):t._e()],1),t._v(" "),n("nav")])},staticRenderFns:[]};var b=n("VU/8")(k,E,!1,function(t){n("W+XU")},"data-v-7cc2927f",null);e.default=b.exports},msXi:function(t,e,n){var r=n("77Pl");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},qBiT:function(t,e){},qyJz:function(t,e,n){"use strict";var r=n("+ZMJ"),a=n("kM2E"),i=n("sB3e"),s=n("msXi"),o=n("Mhyx"),d=n("QRG4"),c=n("fBQ2"),l=n("3fs2");a(a.S+a.F*!n("dY0y")(function(t){Array.from(t)}),"Array",{from:function(t){var e,n,a,u,v=i(t),p="function"==typeof this?this:Array,g=arguments.length,f=g>1?arguments[1]:void 0,m=void 0!==f,h=0,_=l(v);if(m&&(f=r(f,g>2?arguments[2]:void 0,2)),void 0==_||p==Array&&o(_))for(n=new p(e=d(v.length));e>h;h++)c(n,h,m?f(v[h],h):v[h]);else for(u=_.call(v),n=new p;!(a=u.next()).done;h++)c(n,h,m?s(u,f,[a.value,h],!0):a.value);return n.length=h,n}})},zLFA:function(t,e){}});
//# sourceMappingURL=0.e639e931d6dbb8b62cab.js.map