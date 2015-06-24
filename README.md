# nodejs例子

练习nodejs 和搜集的一些资料

## 安装依赖 & 启动

```shell
# 进入nodeexample目录安装依赖
$ npm install

# 如果修改样式进入 nodeexample/public 目录运行
$ npm install # 安装依赖
$ grunt   #静态资源管理

# 启动项目
$ npm start

```


## 文件夹结构说明

- routes/ 文件夹负责路由订制
- controllers/ 文件夹负责业务逻辑处理
- schemas/ 文件夹负责存放数据模式
- models/ 文件夹负责存放数据结构模型
- lib/ 存放工具模块
- themes
    + default/默认皮肤
        * source/ 前端静态资源文件存放目录
        * views/ 存在静态模版文件


## 相关依赖

### 依赖说明

- ejs:模板引擎选择ejs，我只想要一个简单的帮我填充数据的模板。[github](https://github.com/tj/ejs) [文档](http://www.embeddedjs.com/) [ejs.co](http://ejs.co/)
- express:一个服务器端的基于 Node.js 的 JavaScript 开发框架。 [官方文档](http://expressjs.com/) [中文文档](http://expressjs.jser.us/)  
- mongoose:让NodeJS更容易操作Mongodb数据库 [官网](http://mongoosejs.com/)

- Node.js [官方文档](http://nodejs.org/api/)
- Node.js [中文文档](http://nodejs.jsbin.cn/api/)
- jade 模板引擎 [官方文档](http://jade-lang.com/) 
- superagent 是个 http 方面的库，可以发起 get 或 post 请求。[github](http://visionmedia.github.io/superagent/)
- cheerio 大家可以理解成一个 Node.js 版的 jquery，用来从网页中以 css selector 取数据，使用方式跟 jquery 一样一样的。[github](https://github.com/cheeriojs/cheerio )

### 安装依赖

```bash
npm install PACKAGE_NAME --save 

$ npm install #安装 package.json 中的依赖
```

## 包管理工具

NPM：https://www.npmjs.org/ (官方)  
CNPM：http://cnpmjs.org/ 、 http://npm.taobao.org/ (淘宝)


## 数据库

- MongoDB：https://www.mongodb.com/
    - Mongoose：http://mongoosejs.com/
    - Mongoskin：node-mongoskin、Mongoskin Tutorial with Examples
    - Mongolab(500MB免费数据库)：https://mongolab.com/
- MySQL：https://github.com/felixge/node-mysql

## 热门包

- Grunt：http://gruntjs.com/ （英文）、 http://gruntjs.cn/ （中文）
- stylus：http://learnboost.github.io/stylus/
- Yeoman：http://yeoman.io/
- Socket.io：http://socket.io/
- mocha：http://visionmedia.github.io/mocha/
- uglifyjs：https://github.com/mishoo/UglifyJS2
- shelljs：http://documentup.com/arturadib/shelljs

## 开发调试

- debug：https://github.com/visionmedia/debug
- node-inspector：https://github.com/node-inspector/node-inspector

## 社区

- cnodejs：http://cnodejs.org/
- nodejsbbs：http://nodejsbbs.com/forum.php
