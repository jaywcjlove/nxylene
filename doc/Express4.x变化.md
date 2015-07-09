从 Express 3 到Express 4 是一个巨大的变化，这意味着现存的 Express 3 应用在不更新依赖的情况下将不能工作。 [转载](http://www.cnblogs.com/haogj/p/3985438.html)

----


# Express 4.x中的变化

1. 对 Connect 和内建中间件的依赖被移除了
Express 的核心和中间件系统：对 Connect 和内建中间件的依赖被移除了。所以你必须自己添加中间件。  
Express 4 不再依赖 Connect，并且从核心中移除了所有内建的中间件，除了 express.static 之外。这意味着 Express 现在是一个不依赖路由和中间件的 Web 框架。这样 Express 的版本化和发布就不再受到中间件的影响。  

2. 路由系统
3. 其它


| Express 3               | Express 4 |
| -----  | ----- |
| express.bodyParser      | [body-parser](https://github.com/expressjs/body-parser) + [multer](https://github.com/expressjs/multer) |
| express.compress        | [compression](https://github.com/expressjs/compression) |
| express.cookieSession   | [cookie-session](https://github.com/expressjs/cookie-session) |
| express.cookieParser    | [cookie-parser](https://github.com/expressjs/cookie-parser) |
| express.logger          | [morgan](https://github.com/expressjs/morgan) |
| express.session         | [express-session](https://github.com/expressjs/session) |
| express.favicon         | [serve-favicon](https://github.com/expressjs/serve-favicon) |
| express.responseTime    | [response-time](https://github.com/expressjs/response-time) |
| express.errorHandler    | [errorhandler](https://github.com/expressjs/errorhandler) |
| express.methodOverride  | [method-override](https://github.com/expressjs/method-override) |
| express.timeout         | [connect-timeout](https://github.com/expressjs/timeout) |
| express.vhost           | [vhost](https://github.com/expressjs/vhost) |
| express.csrf            | [csurf](https://github.com/expressjs/csurf) |
| express.directory       | [serve-index](https://github.com/expressjs/serve-index) |
| express.static          | [serve-static](https://github.com/expressjs/serve-static) |

完整的列表见这里:  https://github.com/senchalabs/connect#middleware




# 报错

## 使用session中间件报错

代码中使用session中间件的代码：
```js
app.use(express.session({
    //...
}));

//=>报错信息： Most middleware (like session) is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.
```

大多数中间件（像session）不再随express一起安装。所以我们需要安装 `express-session` 中间件

```js
var expressSession = require('express-session')//简单的基于会话中间件。
var mongoStore = require('connect-mongo')(expressSession) //将connect的session持久化到mongodb中的

//....
app.use(expressSession({
    secret: 'nxylene',
    store: new mongoStore({
        url:dbUrl,
        collection:'sessions'
    })
}))
```
