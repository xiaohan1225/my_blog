(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{601:function(t,s,n){"use strict";n.r(s);var a=n(5),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"p-limit"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#p-limit"}},[t._v("#")]),t._v(" p-limit")]),t._v(" "),n("blockquote",[n("p",[t._v("Run multiple promise-returning & async functions with limited concurrency")])]),t._v(" "),n("h2",{attrs:{id:"install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[t._v("#")]),t._v(" Install")]),t._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[t._v("$ npm install p-limit\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br")])]),n("h2",{attrs:{id:"usage"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),n("div",{staticClass:"language-js line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pLimit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'p-limit'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" limit "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pLimit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" input "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchSomething")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'foo'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchSomething")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("limit")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("doSomething")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Only one promise is run at once")]),t._v("\n\t"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Promise"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tconsole"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br")])]),n("h2",{attrs:{id:"api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[t._v("#")]),t._v(" API")]),t._v(" "),n("h3",{attrs:{id:"plimit-concurrency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#plimit-concurrency"}},[t._v("#")]),t._v(" pLimit(concurrency)")]),t._v(" "),n("p",[t._v("Returns a "),n("code",[t._v("limit")]),t._v(" function.")]),t._v(" "),n("h4",{attrs:{id:"concurrency"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#concurrency"}},[t._v("#")]),t._v(" concurrency")]),t._v(" "),n("p",[t._v("Type: "),n("code",[t._v("number")]),n("br"),t._v("\nMinimum: "),n("code",[t._v("1")]),n("br"),t._v("\nDefault: "),n("code",[t._v("Infinity")])]),t._v(" "),n("p",[t._v("Concurrency limit.")]),t._v(" "),n("h3",{attrs:{id:"limit-fn-args"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#limit-fn-args"}},[t._v("#")]),t._v(" limit(fn, ...args)")]),t._v(" "),n("p",[t._v("Returns the promise returned by calling "),n("code",[t._v("fn(...args)")]),t._v(".")]),t._v(" "),n("h4",{attrs:{id:"fn"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fn"}},[t._v("#")]),t._v(" fn")]),t._v(" "),n("p",[t._v("Type: "),n("code",[t._v("Function")])]),t._v(" "),n("p",[t._v("Promise-returning/async function.")]),t._v(" "),n("h4",{attrs:{id:"args"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#args"}},[t._v("#")]),t._v(" args")]),t._v(" "),n("p",[t._v("Any arguments to pass through to "),n("code",[t._v("fn")]),t._v(".")]),t._v(" "),n("p",[t._v("Support for passing arguments on to the "),n("code",[t._v("fn")]),t._v(" is provided in order to be able to avoid creating unnecessary closures. You probably don't need this optimization unless you're pushing a "),n("em",[t._v("lot")]),t._v(" of functions.")]),t._v(" "),n("h3",{attrs:{id:"limit-activecount"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#limit-activecount"}},[t._v("#")]),t._v(" limit.activeCount")]),t._v(" "),n("p",[t._v("The number of promises that are currently running.")]),t._v(" "),n("h3",{attrs:{id:"limit-pendingcount"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#limit-pendingcount"}},[t._v("#")]),t._v(" limit.pendingCount")]),t._v(" "),n("p",[t._v("The number of promises that are waiting to run (i.e. their internal "),n("code",[t._v("fn")]),t._v(" was not called yet).")]),t._v(" "),n("h3",{attrs:{id:"limit-clearqueue"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#limit-clearqueue"}},[t._v("#")]),t._v(" limit.clearQueue()")]),t._v(" "),n("p",[t._v("Discard pending promises that are waiting to run.")]),t._v(" "),n("p",[t._v("This might be useful if you want to teardown the queue at the end of your program's lifecycle or discard any function calls referencing an intermediary state of your app.")]),t._v(" "),n("p",[t._v("Note: This does not cancel promises that are already running.")]),t._v(" "),n("h2",{attrs:{id:"faq"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#faq"}},[t._v("#")]),t._v(" FAQ")]),t._v(" "),n("h3",{attrs:{id:"how-is-this-different-from-the-p-queue-package"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#how-is-this-different-from-the-p-queue-package"}},[t._v("#")]),t._v(" How is this different from the "),n("a",{attrs:{href:"https://github.com/sindresorhus/p-queue",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("p-queue")]),n("OutboundLink")],1),t._v(" package?")]),t._v(" "),n("p",[t._v("This package is only about limiting the number of concurrent executions, while "),n("code",[t._v("p-queue")]),t._v(" is a fully featured queue implementation with lots of different options, introspection, and ability to pause the queue.")]),t._v(" "),n("h2",{attrs:{id:"related"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#related"}},[t._v("#")]),t._v(" Related")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/sindresorhus/p-queue",target:"_blank",rel:"noopener noreferrer"}},[t._v("p-queue"),n("OutboundLink")],1),t._v(" - Promise queue with concurrency control")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/sindresorhus/p-throttle",target:"_blank",rel:"noopener noreferrer"}},[t._v("p-throttle"),n("OutboundLink")],1),t._v(" - Throttle promise-returning & async functions")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/sindresorhus/p-debounce",target:"_blank",rel:"noopener noreferrer"}},[t._v("p-debounce"),n("OutboundLink")],1),t._v(" - Debounce promise-returning & async functions")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/sindresorhus/p-all",target:"_blank",rel:"noopener noreferrer"}},[t._v("p-all"),n("OutboundLink")],1),t._v(" - Run promise-returning & async functions concurrently with optional limited concurrency")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/sindresorhus/promise-fun",target:"_blank",rel:"noopener noreferrer"}},[t._v("More…"),n("OutboundLink")],1)])]),t._v(" "),n("hr"),t._v(" "),n("div",{attrs:{align:"center"}},[n("b",[n("a",{attrs:{href:"https://tidelift.com/subscription/pkg/npm-p-limit?utm_source=npm-p-limit&utm_medium=referral&utm_campaign=readme"}},[t._v("Get professional support for this package with a Tidelift subscription")])]),t._v(" "),n("br"),t._v(" "),n("sub",[t._v("\n\t\tTidelift helps make open source sustainable for maintainers while giving companies"),n("br"),t._v("assurances about security, maintenance, and licensing for their dependencies.\n\t")])])])}),[],!1,null,null,null);s.default=e.exports}}]);