# HTML介绍

> HTML - 超文本标记语言（Hyper Markup Language），通常指的就是 HTML，是用来编写网页的标准标记语言。浏览器可以读取 HTML 文件并且将它们渲染成可见或可听的网页。HTML 和展示的提示一起语义地描述了一个网站的结构，这使得它成为一门标记语言而不是编程语言。[以上解释引用自维基百科](https://en.wikipedia.org/wiki/HTML)

# HTML是什么？

HTML 是用来描述网页结构的语言。HTML给予了开发者下面这些方法：

* 发布包含标题，文本，表格，列表，图片等等元素的线文档。
* 凭借点击按钮后的超文本链接去检索在线信息。
* 为了使用远程服务来实施事务处理而设计表单，用来搜索信息，预约，或者下订单等等。
* 网页文档中可以直接包含电子表格，视频片段，声音片段，和其他应用。

使用 HTML，开发者使用标记来描述页面的结构。语言中的元素标记了内容片段例如段落是 p 标签，列表是 ul ol dl 标签，表格是 table 标签等等。

一个基础网页长下面这个样子：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Sample page</title>
  </head>
  <body>
    <h1>Sample page</h1>
    <p>This is a <a href="demo.html">simple</a> sample.</p>
    <!-- 这里是注释 -->
  </body>
</html>
```

HTML 文档包含了 HTML 元素和文本组成的一棵“树”。每一个 HTML 元素都由一个起始标签（例如`<body>`）和一个结束标签（`</body>`）组成。（某些开始标签和结束标签在某些情况下可以省略，由其他标签来暗示。）

标签必须像下面这样嵌套，而不能重叠：

```html
<p>This is <em>very <strong>wrong</em>!</strong></p> <!-- 这是错误的写法 -->

<p>This <em>is <strong>correct</strong>.</em></p> <!-- 这是正确的写法 -->
```

HTML 元素能够拥有属性，这些属性可以控制元素如何工作。下面的例子中，有一个超链接，由一个 a 元素和它的 href 属性构成：

```html
<a href="demo.html">simple</a>
```

我们可以看到，属性是写在开始标签之内的，并且它由一个名字和一个值组成，被一个等号分隔开。如果属性值中不包含空格符或者 " ' = < > 中的任何字符那么就可以不需要引号包裹。另外，如果使用引号包裹，那么引号必须是对应的，要么都是单引号或者都是双引号。属性值，也就是在等号另外一边的字符，如果是空字符串那么可以省略。

```html
<!-- empty attributes -->
<input name=address disabled>
<input name=address disabled="">

<!-- attributes with a value -->
<input name=address maxlength=200>
<input name=address maxlength='200'>
<input name=address maxlength="200">
```

HTML 用户代理（也就是网页浏览器）随后会解析这些标记，将它们转换成一棵 DOM 树（文档对象模型）。一棵 DOM 树是一个文档在内存中的表示。

DOM 树包含多种元素节点，特别常见的是 DocumentType 节点（文档类型节点），Element 节点（元素类型节点），Text 节点（文本），Comment 节点（注释），还有某些情况下的 ProcessingInstruction 节点（处理指令）。

上面的一个完整页面的标记片段被浏览器解析后就会变成下面的 DOM 树：

```
DOCTYPE: html
  <html>
    <head>
      #text: ⏎
    <title>
      #text: Sample page
    #text: ⏎
  #text: ⏎
  body
    #text: ⏎
    <h1>
      #text: Sample page
  #text: ⏎
  <p>
    #text: This is a
    <a href="demo.html">
      #text: simple
  #text: sample.
  #text: ⏎
  #comment: this is a comment
  #text: ⏎ ⏎
```

这棵树的文档元素是 html 元素，它在一个 HTML 文档的位置总是在一开头，它包含两个元素，head 和 body，在它们之间还穿插着文本节点。

DOM 树中的文本节点比一开始想象的要多得多，因为源代码中会包含很多空格符和换行符，它们都是 DOM 中的文本节点。然而，因为一些历史原因并不是所有的原始标记中的空格和换行符会出现在 DOM 中。尤其是，所有在 head 起始标签之前的空格都会被静默移除，所有在 body 结束标签之后的空格都会被放置在 body 的结尾处。

head 元素包含了一个 title 元素，它包含了一个“Sample page”的文本节点。类似地，body 元素包含了一个 h1 元素，一个 p 元素，和一个注释。
