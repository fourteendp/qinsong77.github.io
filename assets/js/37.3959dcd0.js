(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{487:function(t,a,e){t.exports=e.p+"assets/img/react_native1.5c5eb678.png"},569:function(t,a,e){"use strict";e.r(a);var r=e(25),i=Object(r.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("ul",[r("li",[r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/343519887",target:"_blank",rel:"noopener noreferrer"}},[t._v("React Native 原理与实践"),r("OutboundLink")],1),t._v(" "),r("img",{attrs:{src:e(487),alt:""}})])]),t._v(" "),r("h3",{attrs:{id:"原理"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),r("h4",{attrs:{id:"javascriptcore"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#javascriptcore"}},[t._v("#")]),t._v(" JavaScriptCore")]),t._v(" "),r("p",[t._v("JavaScriptCore 是 JavaScript 引擎，通常会被叫做虚拟机，专门设计来解释和执行 JavaScript 代码。在 React Native 里面，JavaScriptCore 负责 bundle 产出的 JS 代码的解析和执行。")]),t._v(" "),r("ul",[r("li",[t._v("大多数情况下，React Native 使用的是JavaScriptCore，也就是 "),r("code",[t._v("Safari")]),t._v(" 所使用的 "),r("code",[t._v("JavaScript 引擎")]),t._v("。但是在 iOS 上 JavaScriptCore 并没有使用即时编译技术（JIT），因为在 iOS 中应用无权拥有可写可执行的内存页（因此无法动态生成代码）。")]),t._v(" "),r("li",[t._v("在使用 Chrome 调试时，所有的 JavaScript 代码都运行在 Chrome 中，并且通过 WebSocket 与原生代码通信。此时的运行环境是V8 引擎。")])]),t._v(" "),r("h4",{attrs:{id:"js-engine"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js-engine"}},[t._v("#")]),t._v(" JS Engine")]),t._v(" "),r("p",[t._v("React Native 需要一个 JS 的运行环境，因为 React Native 会把应用的 JS 代码编译成一个 JS 文件（x x.bundle），React Native 框架的目标就是解释运行这个 JS 脚本文件，如果是 Native 拓展的 API，则直接通过 bridge 调用 Native 方法，最基础的比如绘制 UI 界面，映射 Virtual DOM 到真实的 UI 组件中。")])])}),[],!1,null,null,null);a.default=i.exports}}]);