(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{257:function(t,a,s){"use strict";s.r(a);var n=s(0),r=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"原型链"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),s("h3",{attrs:{id:"创建对象的几种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建对象的几种方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 创建对象的几种方法")]),t._v(" "),s("p",[t._v("通常三种")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//======1")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'jack'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//======2")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("B")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"love"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" b1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("B")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//======3")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'petter'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" c1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[s("img",{attrs:{src:"http://book.52react.cn/20190324141429.png",alt:""}}),t._v("\n构造函数--使用new运算符->生成一个实例。\n函数都有一个"),s("code",[t._v("prototype")]),t._v("属性，创建函数的时候js自动生成的，这个属性会"),s("code",[t._v("创建一个 空对象")]),t._v("就"),s("code",[t._v("是原型对象")]),t._v("。\n"),s("img",{attrs:{src:"http://book.52react.cn/20190324143532.png",alt:""}}),t._v("\n原型对象如何"),s("code",[t._v("区分")]),t._v("我是被"),s("code",[t._v("哪个构造函数所引用")]),t._v("，原型对象中有一个"),s("code",[t._v("(构造器)constructor")]),t._v("会默认你声明(或者指向)的那个函数。")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://book.52react.cn/20190324143151.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"原型链-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原型链-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 原型链")]),t._v(" "),s("p",[t._v("我从我的原型对象向上找"),s("code",[t._v("构造这个实例")]),t._v("的相关联的对象；这个关联的对象再往上找它又有"),s("code",[t._v("创造它的的原型对象")]),t._v("，以此类推一直到Object.prototype为止.原型链的顶端Object.prototype，")]),t._v(" "),s("p",[t._v("原型链靠什么向上找的过程：向上找主要靠prototype和——proto-这二个")]),t._v(" "),s("p",[t._v("原型对象与原型链起了什么作业\n当我构造函数中有很多属性和方法，我的实例就可以共用这些东西\n当我创建很多实例，要去共用这些方法和属性。我不能每个实例都拷贝这些属性和方法；他们之间其实可以共同存在一个地方（原型对象）")]),t._v(" "),s("p",[t._v("任何一个实例对象通过原型链找到它上面的原型对象的"),s("code",[t._v("属性和方法")]),t._v("这个是被实例所共享的；")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://book.52react.cn/20190324145426.png",alt:""}})]),t._v(" "),s("blockquote",[s("p",[t._v("一个实例没有找到属性或方法它就向原型对象上找，如果上级原型对象找不到则会根据原型对象的——proto-的原型对象上去找")])]),t._v(" "),s("p",[t._v("注意：")]),t._v(" "),s("ol",[s("li",[t._v("构造函数才会有prototype，对象没有prototype。")]),t._v(" "),s("li",[t._v("实例对象才会有——proto-，如果发现函数也有-proto-。")]),t._v(" "),s("li",[t._v("函数也是对象,")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_proto_ "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//true")]),t._v("\n")])])]),s("p",[t._v("A的原型对象就是Function的原型对象")]),t._v(" "),s("h3",{attrs:{id:"instanceof的原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#instanceof的原理","aria-hidden":"true"}},[t._v("#")]),t._v(" instanceof的原理")]),t._v(" "),s("p",[s("img",{attrs:{src:"http://book.52react.cn/20190324151128.png",alt:""}}),t._v(" "),s("strong",[t._v("实例对象的（-proto-）和构造函数的prototype 是不是引用同一个地址")]),t._v(" "),s("img",{attrs:{src:"http://book.52react.cn/20190324151805.png",alt:""}}),t._v("\na继承b，b继承c\na继承的对象用instanceof判断b或者c 都返回 true，怎么区分是b的实例还是c的实例呢？\n这就用到constructor的属性是哪个构造函数\n"),s("img",{attrs:{src:"http://book.52react.cn/20190324152232.png",alt:""}})]),t._v(" "),s("h3",{attrs:{id:"new运算符背后原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#new运算符背后原理","aria-hidden":"true"}},[t._v("#")]),t._v(" new运算符背后原理")]),t._v(" "),s("ol",[s("li",[t._v("new运算符后面跟的构造函数，一个新对象被创建，继承这个构造函数的原型对象(foo.prototype)")]),t._v(" "),s("li",[t._v("构造函数foo被执行，执行的时候相应的传参，同时上下文this被指定这个新实例，newfoo 等同于 new foo();只能用在不传参的情况下")]),t._v(" "),s("li",[t._v("如果构造函数返回了一个新’对象‘，那么这个对象会取代new出来的结果，如果构造函数没有返回对象，那么new出来的结果为步骤1创建的对象")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("new2")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" o "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Object"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("func"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("func")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("typeof")]),t._v(" k "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"object"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" k"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t\t "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" o"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\t\t\t \n")])])])])}],!1,null,null,null);a.default=r.exports}}]);