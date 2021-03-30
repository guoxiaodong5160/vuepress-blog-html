(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{582:function(s,a,e){"use strict";e.r(a);var t=e(29),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"hexo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#hexo"}},[s._v("#")]),s._v(" Hexo")]),s._v(" "),e("blockquote",[e("p",[s._v("优势: 部署方便, 第三方主体非常漂亮, 可以在git上直接运行生产网页(免费)")])]),s._v(" "),e("p",[e("a",{attrs:{href:"https://hexo.io/zh-cn/docs/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方文档"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"安装"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" 安装")]),s._v(" "),e("p",[s._v("首先需要本地安装npm , git(此处略过)\n安装hexo")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("mkdir hexo\ncd hexo\nnpm install hexo-cli -g\nhexo init blog\ncd blog\nnpm install\n-- 启动\nhexo server\n-----启动成功控制台会打印以下内容----\nINFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("p",[s._v("将项目提交到git , 依次点击服务 -> gitee pages -> 选择分支 -> 部署\n"),e("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/guoxiaodong5160/cdn-images@latest/blog-images/20210214154140.png",alt:"image.png"}}),s._v("\n操作完成后就点击网站地址就可以看到我们的项目了")]),s._v(" "),e("hr"),s._v(" "),e("h2",{attrs:{id:"修改配置-blog-config-yml"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修改配置-blog-config-yml"}},[s._v("#")]),s._v(" 修改配置 blog/_config.yml")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("-- 一下为修改项 未修改的没有展示出来,请勿删除\n-- 博客基础信息\ntitle: blog\nsubtitle: yuyu\ndescription: 个人博客\nkeywords:\nauthor: yuyu\nlanguage: zh-Hans\ntimezone: Asia/Shanghai\n\n## URL\n### If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'\nurl: https://reverselight.gitee.io/blog/\nroot: /blog\n\n-- 此项为将主题设置Wie下面要讲到的next主题\ntheme: hexo-theme-next-master\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("hr"),s._v(" "),e("h2",{attrs:{id:"配置next主题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#配置next主题"}},[s._v("#")]),s._v(" 配置next主题")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://github.com/iissnan/hexo-theme-next",target:"_blank",rel:"noopener noreferrer"}},[s._v("git链接"),e("OutboundLink")],1),s._v("\n将下载下来的文件复制到 blog/themes/\n修改 themes/hexo-theme-next-master/_config.yml\n打开themes/next下的_config.yml文件")]),s._v(" "),e("h3",{attrs:{id:"是否覆盖外部的全局设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#是否覆盖外部的全局设置"}},[s._v("#")]),s._v(" 是否覆盖外部的全局设置")]),s._v(" "),e("blockquote",[e("p",[s._v("如果你要在主题里面设置建议这里设为true.")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## Set to true, if you want to fully override the default configuration.\n## Useful if you don't want to inherit the theme _config.yml configurations.\noverride: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"网页关键字和图标的设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#网页关键字和图标的设置"}},[s._v("#")]),s._v(" 网页关键字和图标的设置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('favicon:\n  small: /images/favicon-16x16-next.png\n  medium: /images/favicon-32x32-next.png\n  apple_touch_icon: /images/apple-touch-icon-next.png\n  safari_pinned_tab: /images/logo.svg\n  #android_manifest: /images/manifest.json\n  #ms_browserconfig: /images/browserconfig.xml\n\n## Set default keywords (Use a comma to separate)\nkeywords: "java, mysql,CSDN,git,gitee"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h3",{attrs:{id:"整个版面样式的设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#整个版面样式的设置"}},[s._v("#")]),s._v(" 整个版面样式的设置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## Schemes\n## scheme: Muse\n## scheme: Mist\n## scheme: Pisces\nscheme: Gemini\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:"社交平台"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#社交平台"}},[s._v("#")]),s._v(" 社交平台")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("menu:\n  home: / || home\n  tags: /tags/ || tags\n  categories: /categories/ || th\n  archives: /archives/ || archive\n  #schedule: /schedule/ || calendar\n  about: /about/ || user\n  sitemap: /sitemap.xml || sitemap\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"设置链接"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置链接"}},[s._v("#")]),s._v(" 设置链接")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("social:\n  GitHub: https://gitee.com/reverseLight || github\n  E-Mail: yuy9501@126.com.com || envelope\n  #Google: https://plus.google.com/yourname || google\n  #Twitter: https://twitter.com/yourname || twitter\n  #FB Page: https://www.facebook.com/yourname || facebook\n  #VK Group: https://vk.com/yourname || vk\n  #StackOverflow: https://stackoverflow.com/yourname || stack-overflow\n  #YouTube: https://youtube.com/yourname || youtube\n  #Instagram: https://instagram.com/yourname || instagram\n  #Skype: skype:yourname?call|chat || skype\n  blog: http://www.chenguanting.top || stack-overflow\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br")])]),e("h3",{attrs:{id:"字数统计"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#字数统计"}},[s._v("#")]),s._v(" 字数统计")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## Post wordcount display settings\n## Dependencies: https://github.com/willin/hexo-wordcount\npost_wordcount:\n  item_text: true\n  wordcount: true\n  min2read: true\n  totalcount: true\n  separated_meta: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h3",{attrs:{id:"设置打赏"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#设置打赏"}},[s._v("#")]),s._v(" 设置打赏")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("#Reward\nreward_comment: 您的支持是我创作源源不断的动力\nwechatpay: /images/reward_weixin.png\nalipay: /images/reward_alipay.jpg\n#bitcoin: /images/logo_width.png\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h3",{attrs:{id:""}},[e("a",{staticClass:"header-anchor",attrs:{href:"#"}},[s._v("#")])]),s._v(" "),e("h3",{attrs:{id:"gitalk评论插件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gitalk评论插件"}},[s._v("#")]),s._v(" gitalk评论插件")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("## Gitalk\ngitalk: \n  enable: true    #用来做启用判断可以不用\n  clientID: 'xxxxxxxx'    #上面生成的往这里怼\n  clientSecret: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx'   #同上\n  repo: xxxxx.github.com    #仓库名称\n  owner: xxxxxx    #github用户名\n  admin: xxxxxxx\n  distractionFreeMode: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("hr"),s._v(" "),e("h2",{attrs:{id:"其他设置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#其他设置"}},[s._v("#")]),s._v(" 其他设置")]),s._v(" "),e("h3",{attrs:{id:"next主题设置首页不显示全文-只显示预览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next主题设置首页不显示全文-只显示预览"}},[s._v("#")]),s._v(" next主题设置首页不显示全文(只显示预览)")]),s._v(" "),e("p",[s._v("修改 themes/hexo-theme-next-master/_config.yml")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("auto_excerpt:\n  enable: true\n  length: 150\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"本地部署页面正常-git部署页面排版错乱"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本地部署页面正常-git部署页面排版错乱"}},[s._v("#")]),s._v(" 本地部署页面正常, git部署页面排版错乱")]),s._v(" "),e("p",[s._v("修改 themes/hexo-theme-next-master/_config.yml")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("url: https://reverselight.gitee.io/blog/\nroot: /blog\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"next主题设置文章目录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next主题设置文章目录"}},[s._v("#")]),s._v(" next主题设置文章目录")]),s._v(" "),e("p",[s._v("在此文件追加 themes/hexo-theme-next-master/source/css/_custom/custom.styl")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("//文章目录默认展开\n.post-toc .nav .nav-child { display: block; }\n// 文章目录字体大小调整\n.post-toc ol {\n  font-size : 13px;\n}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("修改 themes/hexo-theme-next-master/_config.yml")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("toc:\n  enable: true\n\n  ## Automatically add list number to toc.\n  number: true\n\n  ## If true, all words will placed on next lines if header width longer then sidebar width.\n  wrap: true\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);