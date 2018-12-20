# 前面的话

## 前端web开发是什么？

> 前端web开发，也被称为客户端开发，它是一种通过 HTML，CSS 和 JavaScript 来创建网站或者网络应用的实践，能够使用户直接看到网站内容并且与之交互。前端开发面临的挑战就是创建网站的工具和技术在持续更新，因此就需要开发者不断地去了解新的开发方式。
> 设计一个网站的目标是确保用户在打开网站的时候他们看到的信息是便于阅读的形式并且与网站主题相关的。这也就是开发的难点所在，因为现在的用户使用大量不同种类的设备，这些设备的屏幕尺寸，分辨率都不一样，于是强迫设计师来考虑这些不同方面的问题。设计师们需要确保网站能够正常运行在不同的浏览器上（跨浏览器兼容），不同的操作系统之上（跨系统兼容），还有不同的设备上（跨设备兼容），这些都要求开发者仔细地做出开发计划。
> [上面的解释引用自维基百科](https://en.wikipedia.org/wiki/Front-end_web_development)

## HTML, CSS 和 javaScript

一个前端开发者通过使用 web 技术（即 HTML, CSS, DOM, javaScript）设计和开发网站和应用，然后会运行在开放式 web 平台上或者作为编译输入到非 web 平台环境中（即　React Native）。

通常，网站会运行在浏览器里，但是也能运行在无界面浏览器中，WebView 中，或者编译后运行在原生运行时环境中。这四种运行环境会在下面解释。

### 网页浏览器（大多数情况下）

一个网页浏览器是用来检索和查看万维网信息的软件。通常浏览器运行在桌面电脑，笔记本电脑，平板电脑或者智能手机上。但是浏览器也开始能够运行在任何地方，比如智能冰箱，汽车等等。

最常用的浏览器如下：

* [Chrome](http://www.google.com/chrome/)
* [Safari](http://www.apple.com/safari/)
* [Internet Explorer](https://en.wikipedia.org/wiki/Internet_Explorer)（注意：不是 Edge 浏览器，而是指 IE 9 到　IE 10版本的浏览器）
* [Firefox](https://www.mozilla.org/firefox/)
* [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)

### 无界面浏览器（又称无头浏览器）

无头浏览器是一种没有用户图形界面的浏览器，它能够通过命令行输入代码指令来操作，通常这种浏览器用来做网页自动化（例如，功能测试，网页爬虫，单元测试等等）。

最常见的无头浏览器如下：

* [Headless Chromium](https://chromium.googlesource.com/chromium/src/+/lkgr/headless/README.md)
* [Zombie](https://github.com/assaf/zombie)
* [slimerjs](http://slimerjs.org/)

### Webview（网络视图）

原生系统通过在原生应用中使用 Webview 来运行网页。可以把 webview 想象成就像 iframe 标签或者浏览器中的一个标签页一样，它被嵌入到原生应用中。

最常见的 webview 解决方案如下：

* [Cordova](https://cordova.apache.org/) （通常开发智能手机和平板电脑的原生应用）
* [NW.js](https://github.com/nwjs/nw.js) (通常开发桌面应用)
* [Electron](http://electron.atom.io/) (通常开发桌面应用)

### 通过网页技术开发原生应用

最终，网页开发技术也能够开发原生环境下的应用了。

这种开发环境的例子如下：

* [Flutter](https://flutter.io/)
* [React Native](https://facebook.github.io/react-native/)

## 前端开发使用到的技术

以下都是前端开发者需要使用到的核心技术：

1. 超文本标记语言（也叫 HTML）
1. 层叠样式表（也叫 CSS）
1. 统一资源定位符（也叫 URL）
1. 超文本传输协议（也叫 HTTP）
1. JavaScript 编程语言（也叫 ECMAScript 262）
1. JavaScript 对象标记法（也叫 JSON）
1. 文档对象模型（也叫 DOM）
1. Web API（也叫 HTML5 接口或者浏览器接口）
1. 可访问网页准则（也叫 WCAG）和 可访问网络富应用（也叫 ARIA）

### 超文本标记语言（也叫 HTML）

> 超文本标记语言，也就是　HTML，是用来创建网页的标准标记语言。浏览器能够读取 HTML 文件并且将它们渲染成可见的或者可听的网页。HTML 通过语义化地展示描述了一个网站的结构，这使得它是一种标记语言，而不是编程语言。[上面的解释引用自维基百科](https://en.wikipedia.org/wiki/HTML)

以下是相关的规范说明和文档：

* [All W3C HTML Spec](http://www.w3.org/standards/techs/html#w3c_all)
* [The elements of HTML from the Living Standard](https://html.spec.whatwg.org/multipage)
* [Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
* [HTML 5.2 from W3C](http://w3c.github.io/html/)
* [HTML attribute reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
* [HTML element reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
* [The HTML Syntax](https://html.spec.whatwg.org/multipage/syntax.html#syntax)

### 层叠样式表（也叫 CSS）

> 层叠样式表是一种样式表语言用来描述标记语言写成的文档的样子和格式。虽然 CSS 经常用来改变 HTML 和 XHTML 网页的风格，但它也可以应用到任何种类的 XML 文档上，包括 XML，SVG 和 XUL。和 HTML 还有 JavaScript 结合起来，CSS 是建立视觉上具有吸引力的页面，网络应用和手机应用用户界面的基石技术。[上面的解释引用自维基百科](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

以下是相关的规范说明和文档：

* [All W3C CSS Specifications](http://www.w3.org/Style/CSS/current-work#roadmap)
* [Cascading Style Sheets Level 2 Revision 2 (CSS 2.2) Specification](https://drafts.csswg.org/css2/)
* [CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
* [Selectors Level 3](http://www.w3.org/TR/css3-selectors/)

### 统一资源定位符（也叫 URL）

> 一个统一资源定位符（URL，也叫网络地址）是一个资源的引用，它指定了资源在计算机网络上的位置和检索资源的机制。一个 URL 是一个确定了类型的统一资源标识符（URI），虽然很多人经常混用这两种术语。一个 URL 意味着获取一个指明的资源，而 URI 并不一定能明确地获取到。URL 通常在需要请求一个网页的时候使用，同样也在文件传输(ftp)，email （mailto），数据库连接（JDBC）或其他很多情况下使用。[上面的解释引用自维基百科](https://en.wikipedia.org/wiki/Uniform_Resource_Locator)

以下是相关的规范说明:

* [Uniform Resource Locators (URL)](http://www.w3.org/Addressing/URL/url-spec.txt)
* [URL Living Standard](https://url.spec.whatwg.org/)

### 超文本传输协议（也叫 HTTP）

> 超文本传输协议（HTTP）是分布式的，协作的超媒体信息系统的应用层协议。HTTP 是整个网络数据交换的基础。[上面的解释引用自维基百科](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)

以下是相关的规范说明:

* [Hypertext Transfer Protocol -- HTTP/1.1](https://tools.ietf.org/html/rfc2616)
* [HTTP/2](http://httpwg.org/specs/rfc7540.html)

### 文档对象模型（也叫 DOM）

> 文档对象模型（DOM）是一个跨平台的与语言无关的规范，用来表示 HTML，XHTML 和 XML 文档中的对象并与之相互作用。每一个文档中的节点都被组织成一个树形结构，称为 DOM 树。DOM 树中的对象也许会通过一些方法被获取和操作。DOM 的公开接口被指定在它的应用编程接口（API）中。[上面的解释引用自维基百科](https://en.wikipedia.org/wiki/Document_Object_Model)

以下是相关的规范说明和文档:

* [Document Object Model (DOM) Level 3 Events Specification](https://www.w3.org/TR/DOM-Level-3-Events/)
* [DOM Living Standard](https://dom.spec.whatwg.org/)
* [W3C DOM4](https://www.w3.org/TR/2015/REC-dom-20151119/)

### JavaScript 编程语言（也叫 ECMAScript 262）

> JsvaScript 是一个高级的，动态的，弱类型的，解释型编程语言。它已经在 ECMAScript 语言规范中被标准化。它和 HTML 还有 CSS 一起是互联网内容产品的三个必需的技术；大量网站都会使用它并且它被所有现代浏览器原生支持。JavaScript是基于原型的并且视函数为一等公民，这使得它成为一种多范式的编程语言，支持面向对象，支持命令式编程，还支持函数式编程风格。它拥有处理文本，数组，日期对象和正则表达式的接口，但是不包含任何 I/O，比如网络，存储和图形设备，这些依赖于嵌入其中的主机环境。[上面的解释引用自维基百科](https://en.wikipedia.org/wiki/JavaScript)

以下是相关的规范说明和文档:

* [ECMAScript® 2017 Language Specification](https://tc39.github.io/ecma262/)

### Web API（也叫 HTML5 接口或者浏览器接口）

> 当使用 JavaScript 编写网页代码的时候，已经有了很多现成的 API。下面的链接列出了所有的浏览器接口。[火狐开发者网络 浏览器API列表](https://developer.mozilla.org/en-US/docs/Web/API)

以下是相关的文档:

* [Web API Interfaces](https://developer.mozilla.org/en-US/docs/Web/API)

### JavaScript 对象标记法（也叫 JSON）

> JSON 格式是浏览器和服务器之间异步通信（AJAJ）的主要数据格式，用来替代 XML 格式。JSON 原本是从 JavaScript 语言衍生出来的格式，它也是一种依赖于语言的数据格式。很多编程语言中解析和生成 JSON 数据都很方便。这种格式是由 Douglas Crockford 提出的。如今它由两种互相竞争的标准描述，RFC 7159 和 ECMA-404。ECMA标准是最简化的，只描述了允许的语法，然而 RFC 规范除了语法还提供了一些语义和安全上的考虑。对于 JSON 格式数据的正式网络媒体类型是 application/json。JSON 文件的扩展名是 .json。[上面的解释引用自维基百科](https://en.wikipedia.org/wiki/JSON)

以下是相关的规范说明:

* [Introducing JSON](http://json.org/)
* [JSON API](http://jsonapi.org/)
* [The JSON Data Interchange Format](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf)

### 可访问网页准则（也叫 WCAG）和 可访问网络富应用（也叫 ARIA）

> 可访问性指的是产品，设备，服务或者环境的设计要考虑到残疾人士的使用。可访问设计的概念要确保可以“直接访问”（即　不需要协助），还有“间接访问”意味着与为残疾人设计的技术的通用性和兼容性（举个例子：电脑屏幕阅读器）。[上面的解释引用自维基百科](https://en.wikipedia.org/wiki/Accessibility)

* [Accessible Rich Internet Applications (WAI-ARIA) Current Status](http://www.w3.org/standards/techs/aria#w3c_all)
* [Web Accessibility Initiative (WAI)](http://www.w3.org/WAI/)
* [Web Content Accessibility Guidelines (WCAG) Current Status](http://www.w3.org/standards/techs/wcag#w3c_all)

