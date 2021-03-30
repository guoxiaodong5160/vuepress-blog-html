(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{554:function(_,v,t){"use strict";t.r(v);var e=t(29),r=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[_._v("#")]),_._v(" 前言")]),_._v(" "),t("blockquote",[t("p",[_._v("使用"),t("code",[_._v("redis")]),_._v("做缓存一般使用如下方式:")]),_._v(" "),t("ol",[t("li",[_._v("后台接受到请求")]),_._v(" "),t("li",[_._v("查询"),t("code",[_._v("redis")]),_._v("看是否存在,存在则直接返回")]),_._v(" "),t("li",[_._v("查询数据库,如果查询到则插入"),t("code",[_._v("redis")]),_._v("后返回, 否则返回null")])]),_._v(" "),t("p",[_._v("但是, 在大数据量请求的情况下往往存在以下问题")])]),_._v(" "),t("h2",{attrs:{id:"缓存穿透"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存穿透"}},[_._v("#")]),_._v(" 缓存穿透")]),_._v(" "),t("blockquote",[t("p",[_._v("查询一条不存在的数据")]),_._v(" "),t("p",[_._v("举例: 黑客攻击")]),_._v(" "),t("p",[_._v("黑客以一个不存在的订单号不停的对数据进行查询, 这会造成我们查询redis后查询不到结果,然后不停的查询数据库")])]),_._v(" "),t("h3",{attrs:{id:"规则校验"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规则校验"}},[_._v("#")]),_._v(" 规则校验")]),_._v(" "),t("p",[_._v("订单号中添加几位用于校验的值,在请求过来后先进性校验, 如果不存在则直接返回")]),_._v(" "),t("blockquote",[t("p",[_._v("摸到规律后非常容易破解")])]),_._v(" "),t("h3",{attrs:{id:"设置返回空对象"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置返回空对象"}},[_._v("#")]),_._v(" 设置返回空对象")]),_._v(" "),t("p",[_._v("在查询数据库后, 如果数据不存在, 则插入一条过期时间为2秒的空对象, 这样2秒内过来的请求就不会进行数据查询")]),_._v(" "),t("blockquote",[t("ol",[t("li",[_._v("如果黑客进行了并发查询呢? 这会造成同一毫秒内大批量数据进行查询数据库")]),_._v(" "),t("li",[_._v("如果黑客每次查询的时候将订单号+1 呢?")])])]),_._v(" "),t("h3",{attrs:{id:"设置返回空对象-redis锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置返回空对象-redis锁"}},[_._v("#")]),_._v(" 设置返回空对象+redis锁")]),_._v(" "),t("ol",[t("li",[_._v("查询"),t("code",[_._v("redis")]),_._v(" 存在则返回")]),_._v(" "),t("li",[_._v("加锁, 没有获取锁则等待")]),_._v(" "),t("li",[_._v("查询"),t("code",[_._v("redis")]),_._v(" 存在则返回")]),_._v(" "),t("li",[_._v("查询数据库\n"),t("ol",[t("li",[_._v("存在则加入"),t("code",[_._v("redis")]),_._v("并返回")]),_._v(" "),t("li",[_._v("不存在则加入空对象,时间2s")])])]),_._v(" "),t("li",[_._v("解锁")])]),_._v(" "),t("p",[t("strong",[_._v("说明:")])]),_._v(" "),t("ol",[t("li",[t("strong",[_._v("逻辑2")]),_._v(" 中使用的是"),t("code",[_._v("redis")]),_._v("锁, 而不是声明一个"),t("code",[_._v("ReentrantLock")]),_._v(", "),t("code",[_._v("ReentrantLock")]),_._v("需要放在成员变量中, 这会导致锁的颗粒度过大, 会影响到正常的业务逻辑")]),_._v(" "),t("li",[t("strong",[_._v("逻辑4.1")]),_._v(" 中再次查询了一次redis是因为当第一个线程获取锁后, 后续线程处于等待状态 , 当第一个线程释放锁时, 数据已经被放在"),t("code",[_._v("redis")]),_._v("中了")])]),_._v(" "),t("blockquote",[t("p",[_._v("黑客每次查询的时候将订单号+1 这种情况仍然没有解决")])]),_._v(" "),t("h3",{attrs:{id:"使用布隆过滤器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用布隆过滤器"}},[_._v("#")]),_._v(" 使用布隆过滤器")]),_._v(" "),t("p",[_._v("见"),t("a",{attrs:{href:"https://www.chenguanting.top/2020/%E5%B8%83%E9%9A%86%E8%BF%87%E6%BB%A4%E5%99%A8",target:"_blank",rel:"noopener noreferrer"}},[_._v("布隆过滤器"),t("OutboundLink")],1)]),_._v(" "),t("blockquote",[t("p",[_._v("360度无死角")])]),_._v(" "),t("h2",{attrs:{id:"缓存击穿"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存击穿"}},[_._v("#")]),_._v(" 缓存击穿")]),_._v(" "),t("blockquote",[t("p",[_._v("一条数据"),t("code",[_._v("redis")]),_._v("中没有, 数据库中有. 并发情况下瞬间所有的请求都去查询了数据库")]),_._v(" "),t("p",[_._v("举例:")]),_._v(" "),t("p",[_._v("商品设置了过期时间为2秒, 在失效的瞬间, 大量请求过来, 查询"),t("code",[_._v("redis")]),_._v("没有,全部查询了数据量")])]),_._v(" "),t("h3",{attrs:{id:"设置热点数据永不过期"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#设置热点数据永不过期"}},[_._v("#")]),_._v(" 设置热点数据永不过期")]),_._v(" "),t("blockquote",[t("p",[_._v("会给redis造成一定压力")])]),_._v(" "),t("h3",{attrs:{id:"redis锁"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis锁"}},[_._v("#")]),_._v(" redis锁")]),_._v(" "),t("p",[_._v("具体实现和"),t("code",[_._v("缓存穿透-设置返回空对象+redis锁")]),_._v("差不多")]),_._v(" "),t("blockquote",[t("p",[_._v("线程等待可能会比较多, 可能会出现问题")])]),_._v(" "),t("h3",{attrs:{id:"查询时刷新时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查询时刷新时间"}},[_._v("#")]),_._v(" 查询时刷新时间")]),_._v(" "),t("p",[_._v("每次进行查询时刷新下时间, 保证该数据为热点数据")]),_._v(" "),t("h2",{attrs:{id:"缓存雪崩"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#缓存雪崩"}},[_._v("#")]),_._v(" 缓存雪崩")]),_._v(" "),t("blockquote",[t("p",[_._v("添加缓存时设置了相同的过期时间，导致大批量数据缓存在某一时刻同时失效，全部请求数据库.造成数据库压力过大雪崩")])]),_._v(" "),t("h3",{attrs:{id:"随机数过期时间"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#随机数过期时间"}},[_._v("#")]),_._v(" 随机数过期时间")]),_._v(" "),t("p",[_._v("在添加缓存时使用一个范围内的随机数的过期时间")]),_._v(" "),t("h3",{attrs:{id:"高可用集群"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#高可用集群"}},[_._v("#")]),_._v(" 高可用集群")]),_._v(" "),t("p",[_._v("没有什么事情不是加一台服务器不能解决的, 如果不能,就加两台!")])])}),[],!1,null,null,null);v.default=r.exports}}]);