(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{552:function(s,n,e){"use strict";e.r(n);var a=e(29),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,e=s._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("blockquote",[e("p",[s._v("项目中经常使用的redis锁写起来十分繁琐, 同样的代码需要编写多次. 于是想到使用注解方式来解决")])]),s._v(" "),e("h2",{attrs:{id:"构思"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构思"}},[s._v("#")]),s._v(" 构思")]),s._v(" "),e("ol",[e("li",[s._v("由于使用注解不能确定返回值, 所以采用自定义异常的方式来解决")]),s._v(" "),e("li",[s._v("redis锁一般需要指定过期时间, 考虑到特殊情况设置默认过期时间为永久")])]),s._v(" "),e("h2",{attrs:{id:"启动类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#启动类"}},[s._v("#")]),s._v(" 启动类")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("// 开启AOP代理自动配置 \n// exposeProxy = true 表示通过aop框架暴露该代理对象，aopContext能够访问\n@EnableAspectJAutoProxy(exposeProxy = true)\npublic class SalesApplication {\n\n    public static void main(String[] args) {\n        SpringApplication.run(SalesApplication.class, args);\n    }\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"自定义注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自定义注解"}},[s._v("#")]),s._v(" 自定义注解")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("/**\n * Classname：RedisLockException\n * Description：自定义redis异常\n * date：2019-12-09 15:49\n * author：yuyu\n */\npublic class RedisLockException extends RuntimeException {\n\n    /**\n     * Constructs a new runtime exception with the specified detail message.\n     * The cause is not initialized, and may subsequently be initialized by a\n     * call to {@link #initCause}.\n     *\n     * @param message the detail message. The detail message is saved for\n     *                later retrieval by the {@link #getMessage()} method.\n     */\n    public RedisLockException(String message) {\n        super(message);\n    }\n}\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])]),e("h2",{attrs:{id:"redis锁注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis锁注解"}},[s._v("#")]),s._v(" redis锁注解")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('\n/**\n *  警示: key 与 enumKey 二选一, 必须设置一个!!!\n *  警示: 如果 key 与 enumKey 都设置, 则使用key加锁\n *  警示: 如果redis加锁失败会抛出 RedisLockException 异常\n *  警示: 类内部方法调用不生效, 如果想生效请重新从redis中获取该对象再进行调用\n *      例: InvTransactionsSendServiceImpl thisBean = SpringContextUtil.getBean(InvTransactionsSendServiceImpl.class);\n *          thisBean.sendINVTransactionLock(beginDate, endDate);\n *  例:\n *  String msg;\n *  try {\n *      // testService.test(a) 该方法添加了 @RedisLock\n *      msg = testService.test(a);\n *  } catch (RedisLockException e) {\n *      msg = e.getMessage();\n *  } catch (Exception e) {\n *      log.error("方法异常", e);\n *      msg = "方法异常";\n *  }\n *   return msg;\n */\n@Documented\n@Retention(RetentionPolicy.RUNTIME)\n@Target(ElementType.METHOD)\npublic @interface RedisLock {\n\n    /**\n     * redis 中的key\n     */\n    String key() default SalesConstant.REDIS_LOCK_DEFAULT_KEY;\n\n    /**\n     * 枚举类redis key\n     */\n    SalesConstant.RedisLockKey enumKey() default SalesConstant.RedisLockKey.DEFAULT_VALUE;\n\n    /**\n     * 秒，key过期时间，如果小于0则永久, 默认永久\n     */\n    long expired() default -1;\n\n}\n\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br")])]),e("h2",{attrs:{id:"aspect解析注解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aspect解析注解"}},[s._v("#")]),s._v(" Aspect解析注解")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('package com.secoo.sales.common.annotation.redis;\n\n\nimport com.secoo.sales.common.constant.SalesConstant;\nimport com.secoo.sales.common.exception.RedisLockException;\nimport com.secooframework.redis.SecooRedisTemplate;\nimport org.aspectj.lang.ProceedingJoinPoint;\nimport org.aspectj.lang.Signature;\nimport org.aspectj.lang.annotation.Around;\nimport org.aspectj.lang.annotation.Aspect;\nimport org.aspectj.lang.annotation.Pointcut;\nimport org.aspectj.lang.reflect.MethodSignature;\nimport org.slf4j.Logger;\nimport org.slf4j.LoggerFactory;\n\nimport javax.annotation.Resource;\nimport java.lang.reflect.Method;\n\n/**\n * Classname：RedisLockAspect\n * Description：redis锁切面\n * date：2019-12-09 15:03\n * author：yuyu\n */\n@Aspect\npublic class RedisLockAspect {\n\n    private Logger logger = LoggerFactory.getLogger(this.getClass());\n\n    @Resource\n    private SecooRedisTemplate secooRedisTemplate;\n\n\n    @Pointcut("@annotation(com.secoo.sales.common.annotation.redis.RedisLock)")\n    private void pointcut() {\n    }\n\n\n    /**\n     * 环绕通知\n     *\n     * @param joinPoint 可用于执行切点的类\n     * @throws Throwable\n     */\n    @Around("pointcut()")\n    public Object around(ProceedingJoinPoint joinPoint) throws Throwable {\n        RedisLock annotation = getMethod(joinPoint).getAnnotation(RedisLock.class);\n        // 获取不是默认实现的key, 优先选择 key()\n        String key = annotation.key();\n        if (key.equals(SalesConstant.RedisLockKey.DEFAULT_VALUE.getCode())) {\n            key = annotation.enumKey().getCode();\n            if (key.equals(SalesConstant.RedisLockKey.DEFAULT_VALUE.getCode())) {\n                // key() 与 enumKey() 必须实现一个, 如果两个都是默认实现则直接抛出异常\n                logger.info("Redis加锁未指定key");\n                throw new RedisLockException("Redis加锁未指定key!");\n            }\n        }\n\n        // 加锁\n        Boolean flag = secooRedisTemplate.setnx(key, "1");\n\n        // 过期时间\n        long expiredTime = annotation.expired();\n\n        if (flag) {\n            logger.info("redis加锁成功-key: " + key);\n            // 如果过期时间大于0 , 则设置过期时间\n            if (expiredTime > 0) {\n                secooRedisTemplate.expire(key, expiredTime);\n            }\n\n            try {\n                return (Object) joinPoint.proceed();\n            } catch (Exception e) {\n                throw e;\n            } finally {\n                // 删除锁\n                secooRedisTemplate.del(key);\n                logger.info("redis删除锁成功-key: " + key);\n            }\n        } else {\n            logger.info("redis加锁失败-key: " + key);\n            throw new RedisLockException("Redis加锁失败");\n        }\n    }\n\n    private Method getMethod(ProceedingJoinPoint joinPoint) throws NoSuchMethodException {\n        Signature signature = joinPoint.getSignature();\n        MethodSignature methodSignature = (MethodSignature) signature;\n        Method agentMethod = methodSignature.getMethod();\n        return joinPoint.getTarget().getClass().getMethod(agentMethod.getName(), agentMethod.getParameterTypes());\n    }\n}\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br"),e("span",{staticClass:"line-number"},[s._v("22")]),e("br"),e("span",{staticClass:"line-number"},[s._v("23")]),e("br"),e("span",{staticClass:"line-number"},[s._v("24")]),e("br"),e("span",{staticClass:"line-number"},[s._v("25")]),e("br"),e("span",{staticClass:"line-number"},[s._v("26")]),e("br"),e("span",{staticClass:"line-number"},[s._v("27")]),e("br"),e("span",{staticClass:"line-number"},[s._v("28")]),e("br"),e("span",{staticClass:"line-number"},[s._v("29")]),e("br"),e("span",{staticClass:"line-number"},[s._v("30")]),e("br"),e("span",{staticClass:"line-number"},[s._v("31")]),e("br"),e("span",{staticClass:"line-number"},[s._v("32")]),e("br"),e("span",{staticClass:"line-number"},[s._v("33")]),e("br"),e("span",{staticClass:"line-number"},[s._v("34")]),e("br"),e("span",{staticClass:"line-number"},[s._v("35")]),e("br"),e("span",{staticClass:"line-number"},[s._v("36")]),e("br"),e("span",{staticClass:"line-number"},[s._v("37")]),e("br"),e("span",{staticClass:"line-number"},[s._v("38")]),e("br"),e("span",{staticClass:"line-number"},[s._v("39")]),e("br"),e("span",{staticClass:"line-number"},[s._v("40")]),e("br"),e("span",{staticClass:"line-number"},[s._v("41")]),e("br"),e("span",{staticClass:"line-number"},[s._v("42")]),e("br"),e("span",{staticClass:"line-number"},[s._v("43")]),e("br"),e("span",{staticClass:"line-number"},[s._v("44")]),e("br"),e("span",{staticClass:"line-number"},[s._v("45")]),e("br"),e("span",{staticClass:"line-number"},[s._v("46")]),e("br"),e("span",{staticClass:"line-number"},[s._v("47")]),e("br"),e("span",{staticClass:"line-number"},[s._v("48")]),e("br"),e("span",{staticClass:"line-number"},[s._v("49")]),e("br"),e("span",{staticClass:"line-number"},[s._v("50")]),e("br"),e("span",{staticClass:"line-number"},[s._v("51")]),e("br"),e("span",{staticClass:"line-number"},[s._v("52")]),e("br"),e("span",{staticClass:"line-number"},[s._v("53")]),e("br"),e("span",{staticClass:"line-number"},[s._v("54")]),e("br"),e("span",{staticClass:"line-number"},[s._v("55")]),e("br"),e("span",{staticClass:"line-number"},[s._v("56")]),e("br"),e("span",{staticClass:"line-number"},[s._v("57")]),e("br"),e("span",{staticClass:"line-number"},[s._v("58")]),e("br"),e("span",{staticClass:"line-number"},[s._v("59")]),e("br"),e("span",{staticClass:"line-number"},[s._v("60")]),e("br"),e("span",{staticClass:"line-number"},[s._v("61")]),e("br"),e("span",{staticClass:"line-number"},[s._v("62")]),e("br"),e("span",{staticClass:"line-number"},[s._v("63")]),e("br"),e("span",{staticClass:"line-number"},[s._v("64")]),e("br"),e("span",{staticClass:"line-number"},[s._v("65")]),e("br"),e("span",{staticClass:"line-number"},[s._v("66")]),e("br"),e("span",{staticClass:"line-number"},[s._v("67")]),e("br"),e("span",{staticClass:"line-number"},[s._v("68")]),e("br"),e("span",{staticClass:"line-number"},[s._v("69")]),e("br"),e("span",{staticClass:"line-number"},[s._v("70")]),e("br"),e("span",{staticClass:"line-number"},[s._v("71")]),e("br"),e("span",{staticClass:"line-number"},[s._v("72")]),e("br"),e("span",{staticClass:"line-number"},[s._v("73")]),e("br"),e("span",{staticClass:"line-number"},[s._v("74")]),e("br"),e("span",{staticClass:"line-number"},[s._v("75")]),e("br"),e("span",{staticClass:"line-number"},[s._v("76")]),e("br"),e("span",{staticClass:"line-number"},[s._v("77")]),e("br"),e("span",{staticClass:"line-number"},[s._v("78")]),e("br"),e("span",{staticClass:"line-number"},[s._v("79")]),e("br"),e("span",{staticClass:"line-number"},[s._v("80")]),e("br"),e("span",{staticClass:"line-number"},[s._v("81")]),e("br"),e("span",{staticClass:"line-number"},[s._v("82")]),e("br"),e("span",{staticClass:"line-number"},[s._v("83")]),e("br"),e("span",{staticClass:"line-number"},[s._v("84")]),e("br"),e("span",{staticClass:"line-number"},[s._v("85")]),e("br"),e("span",{staticClass:"line-number"},[s._v("86")]),e("br"),e("span",{staticClass:"line-number"},[s._v("87")]),e("br"),e("span",{staticClass:"line-number"},[s._v("88")]),e("br"),e("span",{staticClass:"line-number"},[s._v("89")]),e("br"),e("span",{staticClass:"line-number"},[s._v("90")]),e("br"),e("span",{staticClass:"line-number"},[s._v("91")]),e("br"),e("span",{staticClass:"line-number"},[s._v("92")]),e("br"),e("span",{staticClass:"line-number"},[s._v("93")]),e("br")])]),e("h2",{attrs:{id:"注意事项"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[s._v("#")]),s._v(" 注意事项")]),s._v(" "),e("p",[s._v("类内部调用无法触发切面代理, 会导致redis锁无效, 如果想使用需从spring中再次获取该对象并调用")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('@Service\npublic class Demo {\n    private Logger log = LoggerFactory.getLogger(this.getClass());\n    \n    public void method1(){\n        Demo thisBean = SpringContextUtil.getBean(Demo.class);\n        try {\n            thisBean.method2();\n        } catch (RedisLockException e) {\n            log.warn("redis加锁失败，返回值" + e.getMessage());\n        } catch (Exception e) {\n            log.error("操作异常", e);\n        }\n    }\n    \n    @RedisLock(enumKey = SalesConstant.RedisLockKey.MSG_INTEGRATION)\n    public void method2(){\n\n    }\n}\n\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br"),e("span",{staticClass:"line-number"},[s._v("21")]),e("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);