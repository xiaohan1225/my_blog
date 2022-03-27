(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{560:function(e,t,v){"use strict";v.r(t);var _=v(5),a=Object(_.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"前言"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[e._v("#")]),e._v(" 前言")]),e._v(" "),v("p",[e._v("vue提供了两种编译版本，一种是"),v("code",[e._v("Runtime-Compiler")]),e._v("，还有一种是"),v("code",[e._v("Runtime-only")]),e._v("，前者会多提供"),v("code",[e._v("compiler")]),e._v("功能，也就是支持"),v("code",[e._v("template")]),e._v("写法。也就是我们可以在组件对象中写"),v("code",[e._v("template:<div>"+e._s(e.a)+"</div>")]),e._v("，然后vue内部会把template转化为"),v("code",[e._v("render函数")]),e._v("，这个过程就是"),v("code",[e._v("模板编译")]),e._v("。")]),e._v(" "),v("h2",{attrs:{id:"过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#过程"}},[e._v("#")]),e._v(" 过程")]),e._v(" "),v("p",[e._v("vue的模板解析分为三步：")]),e._v(" "),v("ol",[v("li",[e._v("将template转成ast")]),e._v(" "),v("li",[e._v("optimization")]),e._v(" "),v("li",[e._v("转化成render函数")])]),e._v(" "),v("h3",{attrs:{id:"将template转成ast"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#将template转成ast"}},[e._v("#")]),e._v(" 将template转成ast")]),e._v(" "),v("p",[e._v("vue会先拿到"),v("code",[e._v("template")]),e._v("字符串，然后通过内部定义一些正则做的解析，字符串解析一部分就删除一部分，同时用一个"),v("code",[e._v("栈")]),e._v("保证标签的正常闭合。")]),e._v(" "),v("h3",{attrs:{id:"optimization"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#optimization"}},[e._v("#")]),e._v(" optimization")]),e._v(" "),v("p",[e._v("这一步的目的是标记"),v("code",[e._v("静态节点")]),e._v("和"),v("code",[e._v("静态根节点")]),e._v("，在diff的时候可以跳过静态节点，提高性能。")]),e._v(" "),v("h3",{attrs:{id:"转化成render函数"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#转化成render函数"}},[e._v("#")]),e._v(" 转化成render函数")]),e._v(" "),v("p",[e._v("这一步就是用"),v("code",[e._v("_c")]),e._v("、"),v("code",[e._v("_v")]),e._v("、"),v("code",[e._v("_l")]),e._v("、"),v("code",[e._v("_s")]),e._v("等方法去对ast做一个字符串的拼接，再利用"),v("code",[e._v("with")]),e._v("去组件实例上取值，然后用"),v("code",[e._v("new Function")]),e._v("把它包装成一个函数，调用这个函数就得到组件的"),v("code",[e._v("虚拟节点")]),e._v("。")])])}),[],!1,null,null,null);t.default=a.exports}}]);