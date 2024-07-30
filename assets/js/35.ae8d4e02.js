(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{458:function(v,_,t){"use strict";t.r(_);var s=t(1),T=Object(s.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("h2",{attrs:{id:"http-1-1的8种请求方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#http-1-1的8种请求方法"}},[v._v("#")]),v._v(" HTTP/1.1的8种请求方法")]),v._v(" "),_("p",[v._v("目前HTTP/1.1规定了8种方法，单词都必须是"),_("strong",[v._v("大写")]),v._v("的形式。")]),v._v(" "),_("ol",[_("li",[v._v("GET：获取资源，用来读取或下载数据")]),v._v(" "),_("li",[v._v("HEAD：获取资源的元信息，可用来判断服务器上是否存在某个资源")]),v._v(" "),_("li",[v._v("POST：向服务器提交数据，用来写入或上传数据")]),v._v(" "),_("li",[v._v("PUT：与POST类似，常用于修改某个资源")]),v._v(" "),_("li",[v._v("DELETE：删除资源")]),v._v(" "),_("li",[v._v("CONNECT：建立特殊的连接隧道")]),v._v(" "),_("li",[v._v("OPTIONS：预检请求，获取服务器对资源支持的请求方法")]),v._v(" "),_("li",[v._v("TRACE：追踪请求-响应的传输路径")])]),v._v(" "),_("h2",{attrs:{id:"get-head"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#get-head"}},[v._v("#")]),v._v(" GET/HEAD")]),v._v(" "),_("p",[v._v("这两个请求方法比较类似，可以放在一起来说。")]),v._v(" "),_("p",[_("strong",[v._v("GET")]),v._v("方法从HTTP/0.9版出现至今，名副其实的“元老”，它的含义是"),_("strong",[v._v("从服务器获取资源")]),v._v("。")]),v._v(" "),_("p",[v._v("GET方法虽然动作简单，但搭配URI和其它头字段可以对资源更精确的操作。")]),v._v(" "),_("ul",[_("li",[v._v("在URI后使用“#”，在HTML这被称为“锚点”，就可以在获取页面后直接定位到某个标签所在的位置")]),v._v(" "),_("li",[v._v("使用“If-Modified-Since”字段就变成了“有条件的请求”，是实现协商缓存的重要字段")]),v._v(" "),_("li",[v._v("使用“Range”字段就变成了“范围请求”，只获取资源的一部分")])]),v._v(" "),_("p",[_("strong",[v._v("HEAD")]),v._v("方法与GET方法类似，也是请求获取资源，但与GET不同的是，服务器不会返回请求的实体数据，只会传回响应头，也就是资源的"),_("strong",[v._v("元信息")]),v._v("。")]),v._v(" "),_("p",[v._v("HEAD比GET更加轻量，在很多不需要真正需要资源的场景很适用，比如检测服务器上是否存在某个资源，或者检查文件是否有最新版本，服务器在响应头里把文件的修改时间传回来。")]),v._v(" "),_("h2",{attrs:{id:"post-put"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#post-put"}},[v._v("#")]),v._v(" POST/PUT")]),v._v(" "),_("p",[v._v("GET和HEAD是从服务器获取数据，而"),_("strong",[v._v("POST")]),v._v("和"),_("strong",[v._v("PUT")]),v._v("则是相反操作，通过报文的body携带数据，然后向URI指定的资源提交数据。")]),v._v(" "),_("p",[v._v("PUT的作用与POST类似，也是向服务器提交数据，与POST的不同之处在与，POST通常表示的是“新建”、“create”的含义，而PUT则是“修改”、“update”的含义。")]),v._v(" "),_("h2",{attrs:{id:"其它方法"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#其它方法"}},[v._v("#")]),v._v(" 其它方法")]),v._v(" "),_("p",[v._v("除了GET、HEAD、POST、PUT，还有4个标准请求方法，但它们用的不是很多。")]),v._v(" "),_("p",[_("strong",[v._v("DELETE")]),v._v("方法：删除资源，由于这个动作风险太大，所以通常服务器不会执行真的删除操作，而是对资源做一个删除标记，即软删除。")]),v._v(" "),_("p",[_("strong",[v._v("CONNECT")]),v._v("方法：要求服务器为客户端和另一台远程服务器建立一条特殊的连接隧道，这是Web服务器即充当一个代理的角色。")]),v._v(" "),_("p",[_("strong",[v._v("OPTIONS")]),v._v("方法：要求服务器列出可对资源实行的操作方法，在响应头的Allow字段里返回，即预检请求。")]),v._v(" "),_("p",[_("strong",[v._v("TRACE")]),v._v("方法：是对HTTP链路的测试或诊断，可以显示请求-响应的传输路径。它存在漏洞，会泄露网站的信息，所以Web服务器通常会禁止使用它。")]),v._v(" "),_("blockquote",[_("p",[v._v("虽然HTTP/1.1里只规定了这8种请求方法，但由于HTTP良好的扩展性，我们可以自定义请求方法，只要请求和响应双方都能理解即可。")])])])}),[],!1,null,null,null);_.default=T.exports}}]);