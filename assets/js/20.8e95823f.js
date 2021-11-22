(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{429:function(a,t,s){"use strict";s.r(t);var n=s(54),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"附录-文档注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#附录-文档注释"}},[a._v("#")]),a._v(" 附录:文档注释")]),a._v(" "),s("p",[a._v("编写代码文档的最大问题可能是维护该文档。如果文档和代码是分开的，那么每次更改代码时更改文档都会变得很繁琐。解决方案似乎很简单：将代码链接到文档。最简单的方法是将所有内容放在同一个文件中。然而，要完成这完整的画面，您需要一个特殊的注释语法来标记文档，以及一个工具来将这些注释提取为有用的表单中。这就是 Java 所做的。")]),a._v(" "),s("p",[a._v("提取注释的工具称为 Javadoc，它是 JDK 安装的一部分。它使用 Java 编译器中的一些技术来寻找特殊的注释标记。它不仅提取由这些标记所标记的信息，还提取与注释相邻的类名或方法名。通过这种方式，您就可以用最少的工作量来生成合适的程序文档。")]),a._v(" "),s("p",[a._v("Javadoc 输出为一个 html 文件，您可以使用 web 浏览器查看它。对于 Javadoc，您有一个简单的标准来创建文档，因此您可以期望所有 Java libraries 都有文档。")]),a._v(" "),s("p",[a._v("此外，您可以编写自己的 Javadoc 处理程序 doclet，对于 Javadoc（例如，以不同的格式生成输出）。")]),a._v(" "),s("p",[a._v("以下是对 Javadoc 基础知识的介绍和概述。在 JDK 文档中可以找到完整的描述。")]),a._v(" "),s("h2",{attrs:{id:"句法规则"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#句法规则"}},[a._v("#")]),a._v(" 句法规则")]),a._v(" "),s("p",[a._v("所有 Javadoc 指令都发生在以 "),s("strong",[a._v("/**")]),a._v(" 开头(但仍然以 "),s("strong",[a._v("*/")]),a._v(" 结尾)的注释中。")]),a._v(" "),s("p",[a._v("使用 Javadoc 有两种主要方法:")]),a._v(" "),s("p",[a._v("嵌入 HTML 或使用“doc 标签”。独立的 doc 标签是指令它以 "),s("strong",[a._v("@")]),a._v(" 开头，放在注释行的开头。(然而，前面的 "),s("strong",[a._v("*")]),a._v(" 将被忽略。)可能会出现内联 doc 标签")]),a._v(" "),s("p",[a._v("Javadoc 注释中的任何位置，也可以，以一个 "),s("strong",[a._v("@")]),a._v(" 开头，但是被花括号包围。")]),a._v(" "),s("p",[a._v("有三种类型的注释文档，它们对应于注释前面的元素:类、字段或方法。也就是说，类注释出现在类定义之前，字段注释出现在字段定义之前，方法注释出现在方法定义之前。举个简单的例子:")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// javadoc/Documentation1.java")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 一个类注释 */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Documentation1")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 一个属性注释 */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** 一个方法注释 */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),s("p",[a._v("Javadoc 处理注释文档仅适用于 "),s("strong",[a._v("公共")]),a._v(" 和 "),s("strong",[a._v("受保护")]),a._v(" 的成员。")]),a._v(" "),s("p",[a._v("默认情况下，将忽略对 "),s("strong",[a._v("私有成员")]),a._v(" 和包访问成员的注释（请参阅"),s("RouterLink",{attrs:{to:"/docs/book/07-Implementation-Hiding.html"}},[a._v('"隐藏实现"')]),a._v("一章），并且您将看不到任何输出。")],1),a._v(" "),s("p",[a._v("这是有道理的，因为仅客户端程序员的观点是，在文件外部可以使用 "),s("strong",[a._v("公共成员")]),a._v(" 和 "),s("strong",[a._v("受保护成员")]),a._v(" 。 您可以使用 "),s("strong",[a._v("-private")]),a._v(" 标志和包含 "),s("strong",[a._v("私人")]),a._v(" 成员。")]),a._v(" "),s("p",[a._v("要通过 Javadoc 处理前面的代码，命令是：")]),a._v(" "),s("div",{staticClass:"language-cmd extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("javadoc Documentation1.java\n")])])]),s("p",[a._v("这将产生一组 HTML 文件。 如果您在浏览器中打开 index.html，您将看到结果与所有其他 Java 文档具有相同的标准格式，因此用户对这种格式很熟悉，并可以轻松地浏览你的类。")]),a._v(" "),s("h2",{attrs:{id:"内嵌-html"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内嵌-html"}},[a._v("#")]),a._v(" 内嵌 HTML")]),a._v(" "),s("p",[a._v("Javadoc 传递未修改的 HTML 代码，用以生成的 HTML 文档。这使你可以充分利用 HTML。但是，这样做的主要目的是让你格式化代码，例如：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// javadoc/Documentation2.java")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** <pre>\n* System.out.println(new Date());\n* </pre>\n*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Documentation2")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("您你也可以像在其他任何 Web 文档中一样使用 HTML 来格式化说明中的文字：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// javadoc/Documentation3.java")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** You can <em>even</em> insert a list:\n* <ol>\n* <li> Item one\n* <li> Item two\n* <li> Item three\n* </ol>\n*/")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Documentation3")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("请注意，在文档注释中，Javadoc 删除了行首的星号以及前导空格。 Javadoc 重新格式化了所有内容，使其符合标准文档的外观。不要将诸如 <h1>或 <hr>之类的标题用作嵌入式 HTML，因为 Javadoc 会插入自己的标题，后插入的标题将对其生成的文档产生干扰。")]),a._v(" "),s("p",[a._v("所有类型的注释文档（类，字段和方法）都可以支持嵌入式 HTML。")]),a._v(" "),s("h2",{attrs:{id:"示例标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例标签"}},[a._v("#")]),a._v(" 示例标签")]),a._v(" "),s("p",[a._v("以下是一些可用于代码文档的 Javadoc 标记。在尝试使用 Javadoc 进行任何认真的操作之前，请查阅 JDK 文档中的 Javadoc 参考，以了解使用 Javadoc 的所有不同方法。")]),a._v(" "),s("h3",{attrs:{id:"see"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#see"}},[a._v("#")]),a._v(" @see")]),a._v(" "),s("p",[a._v("这个标签可以将其他的类连接到文档中，Javadoc 将使用 @see 标记超链接到其他文档中，形式为：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@see")]),a._v(" classname\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@see")]),a._v(" fully"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("qualified"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("classname\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@see")]),a._v(" fully"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("qualified"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("classname#method"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("name\n")])])]),s("p",[a._v("每个都向生成的文档中添加超链接的“另请参阅”条目。 Javadoc 不会检查超链接的有效性。")]),a._v(" "),s("h3",{attrs:{id:"link-package-class-member-label"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#link-package-class-member-label"}},[a._v("#")]),a._v(" {@link package.class#member label}")]),a._v(" "),s("p",[a._v("和 @see 非常相似，不同之处在于它可以内联使用，并使用标签作为超链接文本，而不是“另请参阅”。")]),a._v(" "),s("h3",{attrs:{id:"docroot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docroot"}},[a._v("#")]),a._v(" {@docRoot}")]),a._v(" "),s("p",[a._v("生成文档根目录的相对路径。对于显式超链接到文档树中的页面很有用。")]),a._v(" "),s("h3",{attrs:{id:"inheritdoc"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#inheritdoc"}},[a._v("#")]),a._v(" {@inheritDoc}")]),a._v(" "),s("p",[a._v("将文档从此类的最近基类继承到当前文档注释中。")]),a._v(" "),s("h3",{attrs:{id:"version"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#version"}},[a._v("#")]),a._v(" @version")]),a._v(" "),s("p",[a._v("其形式为：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@version")]),a._v(" version"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("information\n")])])]),s("p",[a._v("其中 version-information 是你认为适合包含的任何重要信息。当在 Javadoc 命令行上放置 -version 标志时，特别在生成的 HTML 文档中用于生成 version 信息。")]),a._v(" "),s("h3",{attrs:{id:"author"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#author"}},[a._v("#")]),a._v(" @author")]),a._v(" "),s("p",[a._v("其形式为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@author author-information\n")])])]),s("p",[a._v("author-information 大概率是你的名字，但是一样可以包含你的 email 地址或者其他合适的信息。当在 Javadoc 命令行上放置 -author 标志的时候，在生成的 HTML 文档中特别注明了作者信息。")]),a._v(" "),s("p",[a._v("你可以对作者列表使用多个作者标签，但是必须连续放置它们。所有作者信息都集中在生成的 HTML 中的单个段落中。")]),a._v(" "),s("h3",{attrs:{id:"since"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#since"}},[a._v("#")]),a._v(" @since")]),a._v(" "),s("p",[a._v("此标记指示此代码的版本开始使用特定功能。例如，它出现在 HTML Java 文档中，以指示功能首次出现的 JDK 版本。")]),a._v(" "),s("h3",{attrs:{id:"param"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#param"}},[a._v("#")]),a._v(" @param")]),a._v(" "),s("p",[a._v("这将生成有关方法参数的文档：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@param")]),a._v(" parameter"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("name description\n")])])]),s("p",[a._v("其中 parameter-name 是方法参数列表中的标识符，description 是可以在后续行中继续的文本。当遇到新的文档标签时，说明被视为完成。@param 标签的可以任意使用，大概每个参数一个。")]),a._v(" "),s("h3",{attrs:{id:"return"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#return"}},[a._v("#")]),a._v(" @return")]),a._v(" "),s("p",[a._v("这记录了返回值：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@return")]),a._v(" description\n")])])]),s("p",[a._v("其中 description 给出了返回值的含义。它可延续到后面的行内。")]),a._v(" "),s("h3",{attrs:{id:"throws"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#throws"}},[a._v("#")]),a._v(" @throws")]),a._v(" "),s("p",[a._v("一个方法可以产生许多不同类型的异常，所有这些异常都需要描述。异常标记的形式为：")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@throws")]),a._v(" fully"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("qualified"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v("name description\n")])])]),s("p",[a._v("fully-qualified-class-name 给出明确的异常分类名称，并且 description （可延续到后面的行内）告诉你为什么这特定类型的异常会在方法调用后出现。")]),a._v(" "),s("h3",{attrs:{id:"deprecated"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#deprecated"}},[a._v("#")]),a._v(" @deprecated")]),a._v(" "),s("p",[a._v("这表示已被改进的功能取代的功能。deprecated 标记表明你不再使用此特定功能，因为将来有可能将其删除。标记为@不赞成使用的方法会导致编译器在使用时发出警告。在 Java 5 中，@deprecated Javadoc 标记已被 @Deprecated 注解取代（在"),s("a",{attrs:{href:""}},[a._v("注解")]),a._v("一章中进行了描述）。")]),a._v(" "),s("h2",{attrs:{id:"文档示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档示例"}},[a._v("#")]),a._v(" 文档示例")]),a._v(" "),s("p",[s("strong",[a._v("objects/HelloDate.java")]),a._v(" 是带有文档注释的例子。")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// javadoc/HelloDateDoc.java")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("import")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token namespace"}},[a._v("java"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("util"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")])]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("*")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** The first On Java 8 example program.\n * Displays a String and today's date.\n * @author Bruce Eckel\n * @author www.MindviewInc.com\n * @version 5.0\n */")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloDateDoc")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/** Entry point to class & application.\n     * @param args array of String arguments\n     * @throws exceptions No exceptions thrown\n     */")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Hello, it\'s: "')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("/* Output:\nHello, it's:\nTue May 09 06:07:27 MDT 2017\n*/")]),a._v("\n")])])]),s("p",[a._v("你可以在 Java 标准库的源代码中找到许多 Javadoc 注释文档的示例。")])])}),[],!1,null,null,null);t.default=e.exports}}]);