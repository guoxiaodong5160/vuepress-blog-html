(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{544:function(e,a,t){"use strict";t.r(a);var s=t(29),r=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"第一种方案"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一种方案"}},[e._v("#")]),e._v(" 第一种方案")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@RequestMapping(value = "/contact", method = RequestMethod.POST)\npublic void contact( HttpServletRequest request) {\n    MultipartHttpServletRequest multipartRequest = (MultipartHttpServletRequest) request;\n    MultipartFile partFile = multipartRequest.getFile("partFile");\n     String savePath = getSavePath();\n    //下载文件\n    String pictureName = UUID.randomUUID().toString() + "." + lastName;\n    file = new File(savePath + File.separator + pictureName);\n    partFile.transferTo(file);\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br")])]),e._v(" "),t("h2",{attrs:{id:"第二种方案-spring3-0以上"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二种方案-spring3-0以上"}},[e._v("#")]),e._v(" 第二种方案(spring3.0以上)")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('@RequestMapping(value = "/contact", method = RequestMethod.POST)\npublic void contact( @RequestPart ("filename") Part file) {\n    file.write("");//参数为文件在服务器上的路径\n}\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br")])]),t("p",[e._v("Part方法的名称与MultipartFile方法的名称是完全相同的.有一些比较类似,但是稍有差异,比如getSubmittedFileName()对应于getOriginalFilename.类似的write()对应于transferTo(),借助该方法我们能够上传文件写入文件系统")]),e._v(" "),t("blockquote",[t("p",[e._v("值得一提的是,如果在编写控制器方法的时候,通过Part参数的形式接受文件上传,那么久没有必要配置MultipartResolver了.只有使用MultipartFile的时候,我们才需要MultipartResolver.")])]),e._v(" "),t("hr"),e._v(" "),t("h2",{attrs:{id:"file-separator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-separator"}},[e._v("#")]),e._v(" File.separator")]),e._v(" "),t("p",[e._v("在Windows下的路径分隔符和Linux下的路径分隔符是不一样的，当直接使用绝对路径时，跨平台会暴出“No such file or diretory”的异常。")]),e._v(" "),t("p",[e._v("比如说要在temp目录下建立一个test.txt文件，在Windows下应该这么写：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('File file1 = new File ("C:\\tmp\\test.txt"); \n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("在Linux下则是这样的：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('File file2 = new File ("/tmp/test.txt");\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("如果要考虑跨平台，则最好是这么写：")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('File myFile = new File("C:" + File.separator + "tmp" + File.separator, "test.txt");\n')])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("File类有几个类似separator的静态字段，都是与系统相关的，在编程时应尽量使用。")]),e._v(" "),t("ol",[t("li",[e._v("separatorChar")])]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public static final char separatorChar\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("与系统有关的默认名称分隔符。此字段被初始化为包含系统属性 file.separator 值的第一个字符。在 UNIX 系统上，此字段的值为 '/'；在 Microsoft Windows 系统上，它为 ''。\n2. separator")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public static final String separator\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("与系统有关的默认名称分隔符，为了方便，它被表示为一个字符串。此字符串只包含一个字符，即 separatorChar。\n3. pathSeparatorChar")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public static final char pathSeparatorChar\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("与系统有关的路径分隔符。此字段被初始为包含系统属性 path.separator 值的第一个字符。此字符用于分隔以路径列表 形式给定的文件序列中的文件名。在 UNIX 系统上，此字段为 ':'；在 Microsoft Windows 系统上，它为 ';'。\n4. pathSeparator")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("public static final String pathSeparator\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("与系统有关的路径分隔符，为了方便，它被表示为一个字符串。此字符串只包含一个字符，即 pathSeparatorChar。")])])}),[],!1,null,null,null);a.default=r.exports}}]);