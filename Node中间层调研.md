# Node中间层调研

标签（空格分隔）： 未分类

---

目的：提升开发效率，降低访问效率、部署效率

原则：职责分清，接口先行

关注点：可用性、稳定性（异常处理）、规模、效率、安全

### Node层职责(View + Controller)

    页面渲染（express ＋ artemplate）、路由控制、SEO、提供数据API、session管理(redis session manager)、sso(单点登录)

### 提供什么服务？

    restful api ＋ html ＋ commet ＋ websocket ＋ jsonp

    目标：解决多终端适配

### 浏览器端

    前后端模板同构、前后端验证规则同构

### 后端职责（Service ＋ model）

    粗粒度的接口，后端无状态（restful api），负责业务/数据接口

### 需要解决的其他问题

    如何高效的调用业务数据接口（Model Proxy 基于json），也与部署结构有关，如果node与java部署在一个局域网内，则http的时延是可忍受的，本地测试3次握手时延<7ms， 局域网只有一跳的时握手时延<15ms。
    是否有依赖注入管理服务接口？

    项目脚手架以及自动化方案

    多线程（cluster）、https、安全lusca（XSS／CSRF）、数据校验(express-validator)、form token、routes管理（约定大于配置）、url规划（rewrite）、 Mock数据、异常（IO/参数边界条件）、日志(tracer 可配合pm2， log monitor flume)、监控、部署（PM2）、测试、持续集成(Travis)


### RPC（falline）

    zookeeper注册、远程服务配置管理（生成代理）、协议选择（涉及时延、CPU、内存、防火墙、非通用协议的解析）、序列化与反序列化方式、非zookeeper的rpc、简化接口调用方式、高效稳定的网络连接

### 参考
http://velocity.oreilly.com.cn/2014/ppts/qingyu.pdf
https://github.com/QianmiOpen/dubbo-node-client
http://stackoverflow.com/questions/7310521/node-js-best-practice-exception-handling/7313005#7313005 ———— nodejs异常处理
https://www.joyent.com/developers/node/design/errors  ———— nodejs异常处理
