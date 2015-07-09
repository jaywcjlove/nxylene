var Index = require('../app/controllers/index')
var Detail = require('../app/controllers/detail')
var Admin = require('../app/controllers/admin')
var Contact = require('../app/controllers/contact')
var User = require('../app/controllers/user')

module.exports = function (app) {

    // app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，
    // 在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
    // 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
    // request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。
    // res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容

    //首页
    app.get('/', Index.index);

    //详细页面
    app.get('/detail/:id', Detail.index);

    //联系我们
    app.get('/contact', Contact.index);

    //后台页面
    app.get('/init', User.init);//初始化数据
    app.post('/user_init', User.user_init);//提交-初始化数据
    app.get('/login', User.login);//页面登陆
    app.post('/admin/login', User.signin);//登录校验
    app.get('/admin', Admin.index);
    app.get('/admin/contact', Contact.contact);
    app.post('/admin/contact', Contact.contact_post);

    //404页面  - 这个要放到最后面
    app.get('/*', Index.undefineds);

}
