(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{376:function(t,e,a){"use strict";a.r(e);var s=a(40),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"内置类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置类型"}},[t._v("#")]),t._v(" 内置类型")]),t._v(" "),a("p",[t._v("JavaScript目前有八种内置类型（包含ES6的symbol）：")]),t._v(" "),a("ul",[a("li",[t._v("null")]),t._v(" "),a("li",[t._v("undefined")]),t._v(" "),a("li",[t._v("string")]),t._v(" "),a("li",[t._v("number")]),t._v(" "),a("li",[t._v("boolean")]),t._v(" "),a("li",[t._v("object")]),t._v(" "),a("li",[t._v("symbol")]),t._v(" "),a("li",[t._v("BigInt")])]),t._v(" "),a("h4",{attrs:{id:"typeof-null-为-object-的bug"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#typeof-null-为-object-的bug"}},[t._v("#")]),t._v(" typeof null 为 'object'的bug")]),t._v(" "),a("blockquote",[a("p",[t._v("JavaScript中的数据在底层是以二进制存储，比如null所有存储值都是0，但是底层的判断机制，只要前三位为0，就会判定为object，所以才会有typeof null === 'object'这个bug。")])]),t._v(" "),a("h2",{attrs:{id:"语言中所有的底层存储方式是是什么。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言中所有的底层存储方式是是什么。"}},[t._v("#")]),t._v(" 语言中所有的底层存储方式是是什么。")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("数组(Array)\n数组是一种聚合数据类型，它是将具有相同类型的若干变量有序地组织在一起的集合。数组可以说是最基本的数据结构，在各种编程语言中都有对应。一个数组可以分解为多个数组元素，按照数据元素的类型，数组可以分为整型数组、字符型数组、浮点型数组、指针数组和结构数组等。数组还可以有一维、二维以及多维等表现形式。")])]),t._v(" "),a("li",[a("p",[t._v("栈( Stack)\n栈是一种特殊的线性表，它只能在一个表的一个固定端进行数据结点的插入和删除操作。栈按照后进先出的原则来存储数据，也就是说，先插入的数据将被压入栈底，最后插入的数据在栈顶，读出数据时，从栈顶开始逐个读出。栈在汇编语言程序中，经常用于重要数据的现场保护。栈中没有数据时，称为空栈。")])]),t._v(" "),a("li",[a("p",[t._v("队列(Queue)\n队列和栈类似，也是一种特殊的线性表。和栈不同的是，队列只允许在表的一端进行插入操作，而在另一端进行删除操作。一般来说，进行插入操作的一端称为队尾，进行删除操作的一端称为队头。队列中没有元素时，称为空队列")])]),t._v(" "),a("li",[a("p",[t._v("链表( Linked List)\n链表是一种数据元素按照链式存储结构进行存储的数据结构，这种存储结构具有在物理上存在非连续的特点。链表由一系列数据结点构成，每个数据结点包括数据域和指针域两部分。其中，指针域保存了数据结构中下一个元素存放的地址。链表结构中数据元素的逻辑顺序是通过链表中的指针链接次序来实现的。")])]),t._v(" "),a("li",[a("p",[t._v("树( Tree)\n树是典型的非线性结构，它是包括，2个结点的有穷集合K。在树结构中，有且仅有一个根结点，该结点没有前驱结点。在树结构中的其他结点都有且仅有一个前驱结点，而且可以有两个后继结点，m≥0")])]),t._v(" "),a("li",[a("p",[t._v("图(Graph)\n图是另一种非线性数据结构。在图结构中，数据结点一般称为顶点，而边是顶点的有序偶对。如果两个顶点之间存在一条边，那么就表示这两个顶点具有相邻关系")])]),t._v(" "),a("li",[a("p",[t._v("堆(Heap)\n堆是一种特殊的树形数据结构，一般讨论的堆都是二叉堆。堆的特点是根结点的值是所有结点中最小的或者最大的，并且根结点的两个子树也是一个堆结构")])]),t._v(" "),a("li",[a("p",[t._v("散列表(Hash)\n散列表源自于散列函数(Hash function)，其思想是如果在结构中存在关键字和T相等的记录，那么必定在F(T)的存储位置可以找到该记录，这样就可以不用进行比较操作而直接取得所查记录")])])]),t._v(" "),a("h2",{attrs:{id:"javascript使用的是-堆-heap-和-栈-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript使用的是-堆-heap-和-栈-stack"}},[t._v("#")]),t._v(" JavaScript使用的是 堆(Heap) 和 栈( Stack)")]),t._v(" "),a("p",[t._v("JavaScript基本类型数据都是直接按值存储在栈中的(Undefined、Null、不是new出来的布尔、数字和字符串)，每种类型的数据占用的内存空间的大小是确定的，并由系统自动分配和自动释放。这样带来的好处就是，内存可以及时得到回收，相对于堆来说 ，更加容易管理内存空间。")]),t._v(" "),a("p",[t._v("JavaScript引用类型数据被存储于堆中 (如对象、数组、函数等，它们是通过拷贝和new出来的）。其实，说存储于堆中，也不太准确，因为，引用类型的数据的地址指针是存储于栈中的，当我们想要访问引用类型的值的时候，需要先从栈中获得对象的地址指针，然后，在通过地址指针找到堆中的所需要的数据。")]),t._v(" "),a("h2",{attrs:{id:"this的指向（https-juejin-im-post-6844903496253177863）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this的指向（https-juejin-im-post-6844903496253177863）"}},[t._v("#")]),t._v(" this的指向（https://juejin.im/post/6844903496253177863）")]),t._v(" "),a("blockquote",[a("p",[t._v("在 ES5 中，其实 this 的指向，始终坚持一个原理：this 永远指向最后调用它的那个对象。")])]),t._v(" "),a("h4",{attrs:{id:"改变-this-的指向的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改变-this-的指向的方法"}},[t._v("#")]),t._v(" 改变 this 的指向的方法")]),t._v(" "),a("ul",[a("li",[t._v("使用 ES6 的箭头函数")]),t._v(" "),a("li",[t._v("在函数内部使用 _this = this")]),t._v(" "),a("li",[t._v("使用 apply、call、bind")]),t._v(" "),a("li",[t._v("new 实例化一个对象")])]),t._v(" "),a("h2",{attrs:{id:"instanceof-运算符用于检测构造函数的-prototype-属性是否出现在某个实例对象的原型链上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#instanceof-运算符用于检测构造函数的-prototype-属性是否出现在某个实例对象的原型链上"}},[t._v("#")]),t._v(" instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上")]),t._v(" "),a("p",[t._v("语法")]),t._v(" "),a("blockquote",[a("p",[t._v("object instanceof constructor")])]),t._v(" "),a("h4",{attrs:{id:"set-map-weakmap-weakset-https-juejin-im-post-6844904169417998349"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-map-weakmap-weakset-https-juejin-im-post-6844904169417998349"}},[t._v("#")]),t._v(" set, map, weakMap, weakSet(https://juejin.im/post/6844904169417998349)")]),t._v(" "),a("h4",{attrs:{id:"使用object-prototype-hasownproperty-call-obj-key-比用obj-hasownproperty安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用object-prototype-hasownproperty-call-obj-key-比用obj-hasownproperty安全"}},[t._v("#")]),t._v(" 使用Object.prototype.hasOwnProperty.call(obj, key) 比用obj.hasOwnProperty安全")]),t._v(" "),a("h4",{attrs:{id:"没有副作用的方法和函数被称为纯函数。"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#没有副作用的方法和函数被称为纯函数。"}},[t._v("#")]),t._v(" 没有副作用的方法和函数被称为纯函数。")]),t._v(" "),a("h4",{attrs:{id:"web储存方案-https-juejin-im-post-6844904192549584903"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#web储存方案-https-juejin-im-post-6844904192549584903"}},[t._v("#")]),t._v(" web储存方案 https://juejin.im/post/6844904192549584903")]),t._v(" "),a("h2",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("ul",[a("li",[t._v("https://xieyufei.com/2019/12/30/Quiz-Eventloop.html")]),t._v(" "),a("li",[t._v("https://juejin.im/post/6844903971228745735")]),t._v(" "),a("li",[t._v("https://juejin.im/post/6844903711106400264")]),t._v(" "),a("li",[t._v("https://juejin.im/post/6844903752621637645\n"),a("a",{attrs:{href:"https://juejin.im/post/6844903761949753352",target:"_blank",rel:"noopener noreferrer"}},[t._v("浏览器与Node的事件循环(Event Loop)有何区别"),a("OutboundLink")],1)])]),t._v(" "),a("blockquote",[a("p",[t._v("JavaScript 是单线程、异步、非阻塞、解释型脚本语言。JS引擎会将JS脚本进行编译和执行\nJavaScript 的设计就是为了处理浏览器网页的交互（DOM操作的处理、UI动画等），决定了它是一门单线程语言。如果有多个线程，它们同时在操作 DOM，那网页将会一团糟。\n执行栈（先进后出，执行栈中存放正在执行的代码）和堆（堆中存放变量的值）\nJS执行栈和渲染线程是相互阻塞的\n事件循环实现异步\n事件循环就是用来做调度的，浏览器和NodeJS中的事件循坏就好像操作系统的调度器一样。")])]),t._v(" "),a("h3",{attrs:{id:"事件循环的流程大致如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环的流程大致如下"}},[t._v("#")]),t._v(" 事件循环的流程大致如下")]),t._v(" "),a("ul",[a("li",[t._v("1、所有任务都在主线程上执行，形成一个执行栈。")]),t._v(" "),a("li",[t._v("2、主线程发现有异步任务，就在“任务队列”之中加入一个任务事件。")]),t._v(" "),a("li",[t._v("3、一旦“执行栈”中的所有同步任务执行完毕，系统就会读取“任务队列”（先进先出原则）。那些对应的异步任务，结束等待状态，进入执行栈并开始执行。")]),t._v(" "),a("li",[t._v("4、主线程不断重复上面的第三步，这样的一个循环称为事件循环。")])]),t._v(" "),a("hr"),t._v(" "),a("ul",[a("li",[a("p",[t._v("执行一个宏任务（栈中没有就从事件队列中获取）")])]),t._v(" "),a("li",[a("p",[t._v("执行过程中如果遇到微任务，就将它添加到微任务的任务队列中")])]),t._v(" "),a("li",[a("p",[t._v("宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）")])]),t._v(" "),a("li",[a("p",[t._v("当前宏任务执行完毕，开始检查渲染，然后GUI线程接管渲染")])]),t._v(" "),a("li",[a("p",[t._v("渲染完毕后，JS引擎线程继续，开始下一个宏任务（从宏任务队列中获取）")])])]),t._v(" "),a("h3",{attrs:{id:"宏任务包括："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#宏任务包括："}},[t._v("#")]),t._v(" 宏任务包括：")]),t._v(" "),a("ul",[a("li",[t._v("script(整体代码)")]),t._v(" "),a("li",[t._v("setTimeout, setInterval, setImmediate,")]),t._v(" "),a("li",[t._v("I/O")]),t._v(" "),a("li",[t._v("UI rendering")])]),t._v(" "),a("h3",{attrs:{id:"微任务包括："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微任务包括："}},[t._v("#")]),t._v(" 微任务包括：")]),t._v(" "),a("ul",[a("li",[t._v("process.nextTick")]),t._v(" "),a("li",[t._v("Promise")]),t._v(" "),a("li",[t._v("MutationObserver(html5新特性)")])]),t._v(" "),a("blockquote",[a("p",[t._v("在node环境下，process.nextTick的优先级高于Promise，也就是说：在宏任务结束后会先执行微任务队列中的nextTickQueue，然后才会执行微任务中的Promise。")])]),t._v(" "),a("h3",{attrs:{id:"执行上下文"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文"}},[t._v("#")]),t._v(" 执行上下文")]),t._v(" "),a("p",[t._v("浏览器执行JS函数其实是分两个过程的。一个是创建阶段Creation Phase,一个是执行阶段Execution Phase。")]),t._v(" "),a("h3",{attrs:{id:"setinterval-http-caibaojian-com-setinterval-html-requestanimationframe代替绘制动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setinterval-http-caibaojian-com-setinterval-html-requestanimationframe代替绘制动画"}},[t._v("#")]),t._v(" setInterval(http://caibaojian.com/setinterval.html),requestAnimationFrame代替绘制动画")]),t._v(" "),a("h3",{attrs:{id:"object-create-方法创建一个新对象，使用现有的对象来提供新创建的对象的-proto-https-developer-mozilla-org-zh-cn-docs-web-javascript-reference-global-objects-object-create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#object-create-方法创建一个新对象，使用现有的对象来提供新创建的对象的-proto-https-developer-mozilla-org-zh-cn-docs-web-javascript-reference-global-objects-object-create"}},[t._v("#")]),t._v(" Object.create()方法创建一个新对象，使用现有的对象来提供新创建的对象的__proto__(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create)")]),t._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 创建一个原型为null的空对象")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pureObj  "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("h3",{attrs:{id:"设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://juejin.im/post/6846687601785585677",target:"_blank",rel:"noopener noreferrer"}},[t._v("设计模式"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"前端模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前端模块化"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://juejin.im/post/6844903744518389768",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端模块化"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=r.exports}}]);