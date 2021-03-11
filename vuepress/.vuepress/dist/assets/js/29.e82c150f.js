(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{491:function(s,t,a){s.exports=a.p+"assets/img/websocket1.01881d8f.png"},492:function(s,t,a){s.exports=a.p+"assets/img/data_struct_explin.8d86703b.png"},580:function(s,t,a){"use strict";a.r(t);var n=a(25),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("ul",[n("li",[n("a",{attrs:{href:"https://juejin.cn/post/6854573221241421838",target:"_blank",rel:"noopener noreferrer"}},[s._v("你不知道的WebSocket"),n("OutboundLink")],1)]),s._v(" "),n("li",[n("a",{attrs:{href:"https://www.cnblogs.com/chyingp/p/websocket-deep-in.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("WebSocket协议：5分钟从入门到精通"),n("OutboundLink")],1)])]),s._v(" "),n("p",[n("img",{attrs:{src:a(491),alt:""}})]),s._v(" "),n("p",[s._v("WebSocket最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于服务器推送技术的一种。")]),s._v(" "),n("p",[s._v("其他特点包括：")]),s._v(" "),n("p",[s._v("（1）建立在 TCP 协议之上，服务器端的实现比较容易。")]),s._v(" "),n("p",[s._v("（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。")]),s._v(" "),n("p",[s._v("（3）数据格式比较轻量，性能开销小，通信高效。连接创建后，ws客户端、服务端进行数据交换时，协议控制的数据包头部较小。在不包含头部的情况下，服务端到客户端的包头只有2~10字节（取决于数据包长度），客户端到服务端的的话，需要加上额外的4字节的掩码。而HTTP协议每次通信都需要携带完整的头部。")]),s._v(" "),n("p",[s._v("（4）可以发送文本，也可以发送"),n("strong",[s._v("二进制数据")]),s._v("。")]),s._v(" "),n("p",[s._v("（5）没有同源限制，客户端可以与任意服务器通信。")]),s._v(" "),n("p",[s._v("（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。支持扩展。ws协议定义了扩展，用户可以扩展协议，或者实现自定义的子协议。（比如支持自定义压缩算法等）")]),s._v(" "),n("h3",{attrs:{id:"如何建立连接"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#如何建立连接"}},[s._v("#")]),s._v(" 如何建立连接")]),s._v(" "),n("h4",{attrs:{id:"_1、客户端-申请协议升级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1、客户端-申请协议升级"}},[s._v("#")]),s._v(" 1、客户端：申请协议升级")]),s._v(" "),n("p",[s._v("首先，客户端发起协议升级请求。可以看到，采用的是标准的HTTP报文格式，且只支持"),n("code",[s._v("GET")]),s._v("方法。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("GET / HTTP/1.1\nHost: localhost:8080\nOrigin: http://127.0.0.1:3000\nConnection: Upgrade\nUpgrade: websocket\nSec-WebSocket-Version: 13\nSec-WebSocket-Key: w4v7O6xFTi36lq3RNcgctw==\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br")])]),n("p",[s._v("重点请求首部意义如下：")]),s._v(" "),n("ul",[n("li",[n("code",[s._v("Connection: Upgrade")]),s._v("：表示要升级协议")]),s._v(" "),n("li",[n("code",[s._v("Upgrade: websocket")]),s._v("：表示要升级到"),n("code",[s._v("websocket")]),s._v("协议。")]),s._v(" "),n("li",[n("code",[s._v("Sec-WebSocket-Version: 13")]),s._v("：表示websocket的版本。如果服务端不支持该版本，需要返回一个"),n("code",[s._v("Sec-WebSocket-Version")]),s._v("header，里面包含服务端支持的版本号。")]),s._v(" "),n("li",[n("code",[s._v("Sec-WebSocket-Key")]),s._v("：与后面服务端响应首部的"),n("code",[s._v("Sec-WebSocket-Accept")]),s._v("是配套的，提供基本的防护，比如恶意的连接，或者无意的连接。\n上面请求省略了部分非重点请求首部。由于是标准的HTTP请求，类似Host、Origin、Cookie等请求首部会照常发送。在握手阶段，可以通过相关请求首部进行 安全限制、权限校验等。")])]),s._v(" "),n("h4",{attrs:{id:"_2、服务端-响应协议升级"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2、服务端-响应协议升级"}},[s._v("#")]),s._v(" 2、服务端：响应协议升级")]),s._v(" "),n("p",[s._v("服务端返回内容如下，状态代码"),n("code",[s._v("101")]),s._v("表示协议切换。到此完成协议升级，后续的数据交互都按照新的协议来。")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("HTTP/1.1 101 Switching Protocols\nConnection:Upgrade\nUpgrade: websocket\nSec-WebSocket-Accept: Oy4NRAQ13jhfONC7bP8dTKb4PTU=\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br")])]),n("p",[n("code",[s._v("Sec-WebSocket-Accept")]),s._v("根据客户端请求首部的"),n("code",[s._v("Sec-WebSocket-Key")]),s._v("计算出来。计算公式为：")]),s._v(" "),n("ol",[n("li",[s._v("将"),n("code",[s._v("Sec-WebSocket-Key")]),s._v("跟"),n("code",[s._v("258EAFA5-E914-47DA-95CA-C5AB0DC85B11")]),s._v("拼接。")]),s._v(" "),n("li",[s._v("通过"),n("code",[s._v("SHA1")]),s._v("计算出摘要，并转成"),n("code",[s._v("base64")]),s._v("字符串。")])]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// util.js")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" crypto "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"crypto"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAGIC_KEY")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("generateAcceptValue")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("secWsKey")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" crypto\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("createHash")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"sha1"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("secWsKey "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[s._v("MAGIC_KEY")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"utf8"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("digest")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v('"base64"')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br")])]),n("h3",{attrs:{id:"数据帧格式"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#数据帧格式"}},[s._v("#")]),s._v(" 数据帧格式")]),s._v(" "),n("p",[s._v("WebSocket客户端、服务端通信的最小单位是帧（frame），由1个或多个帧组成一条完整的消息（message）。")]),s._v(" "),n("ol",[n("li",[s._v("发送端：将消息切割成多个帧，并发送给服务端；")]),s._v(" "),n("li",[s._v("接收端：接收消息帧，并将关联的帧重新组装成完整的消息；")])]),s._v(" "),n("p",[n("a",{attrs:{href:"https://tools.ietf.org/html/rfc6455#section-5.2",target:"_blank",rel:"noopener noreferrer"}},[s._v("数据帧的格式-rfc6455"),n("OutboundLink")],1)]),s._v(" "),n("ol",[n("li",[s._v("从左到右，单位是比特。比如"),n("code",[s._v("FIN")]),s._v("、"),n("code",[s._v("RSV1")]),s._v("各占据1比特，"),n("code",[s._v("opcode")]),s._v("占据4比特。")]),s._v(" "),n("li",[s._v("内容包括了标识、操作代码、掩码、数据、数据长度等。")])]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("      0                   1                   2                   3\n      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n     +-+-+-+-+-------+-+-------------+-------------------------------+\n     |F|R|R|R| opcode|M| Payload len |    Extended payload length    |\n     |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |\n     |N|V|V|V|       |S|             |   (if payload len==126/127)   |\n     | |1|2|3|       |K|             |                               |\n     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +\n     |     Extended payload length continued, if payload len == 127  |\n     + - - - - - - - - - - - - - - - +-------------------------------+\n     |                               |Masking-key, if MASK set to 1  |\n     +-------------------------------+-------------------------------+\n     | Masking-key (continued)       |          Payload Data         |\n     +-------------------------------- - - - - - - - - - - - - - - - +\n     :                     Payload Data continued ...                :\n     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +\n     |                     Payload Data continued ...                |\n     +---------------------------------------------------------------+\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br")])]),n("p",[n("img",{attrs:{src:a(492),alt:""}})]),s._v(" "),n("h2",{attrs:{id:"sse"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#sse"}},[s._v("#")]),s._v(" "),n("a",{attrs:{href:"https://www.ruanyifeng.com/blog/2017/05/server-sent_events.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("SSE"),n("OutboundLink")],1)]),s._v(" "),n("p",[s._v("服务器向浏览器推送信息，除了 WebSocket的另外一种方式。总体来说，WebSocket 更强大和灵活。因为它是全双工通道，可以双向通信；SSE 是单向通道，只能服务器向浏览器发送，因为流信息本质上就是下载。如果浏览器向服务器发送信息，就变成了另一次 HTTP 请求。")]),s._v(" "),n("p",[s._v("所谓"),n("code",[s._v("SSE（Sever-Sent Event）")]),s._v("，就是浏览器向服务器发送一个HTTP请求，保持长连接，服务器不断单向地向浏览器推送“信息”（message），这么做是为了节约网络资源，不用一直发请求，建立新连接。其实就是类似长轮询。")]),s._v(" "),n("p",[s._v("也可以跨域")]),s._v(" "),n("div",{staticClass:"language-javascript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-javascript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// client")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" source "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("EventSource")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("url"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" \n      withCredentials"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 跨域时，可以指定第二个参数，打开withCredentials属性，表示是否一起发送 Cookie。")]),s._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nsource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("onopen")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 另一种写法")]),s._v("\nsource"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("addEventListener")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[s._v("'open'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),n("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("event")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("false")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);