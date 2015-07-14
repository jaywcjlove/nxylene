var Index = require('../app/controllers/index')
var Detail = require('../app/controllers/detail')
var Admin = require('../app/controllers/admin')
var Contact = require('../app/controllers/contact')
var Aboutus = require('../app/controllers/aboutus')
var Jobs = require('../app/controllers/jobs')
var User = require('../app/controllers/user')

module.exports = function (app) {

    // app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，
    // 在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
    // 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
    // request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。
    // res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容

    //对用户的预处理
    app.use(function(req,res,next){
        var _user,reg = new RegExp(/^\/admin.*/);
        //存储用户登陆信息 session
        _user = req.session.user;
        res.locals.user = _user;
        //判断是否登陆如果登陆直接跳转后台【管理界面】
        if(_user && req.url === '/login') return res.redirect('/admin');
        //针对所后台页面判断是否登陆，未登陆的跳转到登陆页面
        if(reg.test(req.url)&&!_user) return res.redirect('/login');
        return next()
    })

    //首页
    app.get('/', Index.index);

    //详细页面
    app.get('/detail/:id', Detail.index);

    //联系我们
    app.get('/contact', Contact.index);

    //后台页面 ========
    app.get('/init', User.init);//初始化数据
    app.post('/user_init', User.user_init);//提交-初始化数据

    app.get('/login', User.login);//页面登陆 
    app.post('/login', User.signin);//登录校验

    app.get('/logout', User.logout);//登出页面 = 注销页面

    app.get('/admin', Admin.index);//后台框架页面

    app.get('/admin/contact', Contact.contact);//后台管理 - 联系我们
    app.post('/admin/contact', Contact.contact_post);//后台管理 - 联系我们 - 提交数据

    app.get('/admin/aboutus', Aboutus.aboutus);//后台管理 - 联系我们
    app.post('/admin/aboutus', Aboutus.aboutus_post);//后台管理 - 联系我们 - 提交数据

    app.get('/admin/jobs', Jobs.jobs);//后台管理 - 工作机会
    app.post('/admin/jobs', Jobs.jobs_post);//后台管理 - 联系我们 - 工作机会

    //404页面  - 这个要放到最后面
    app.get('/*', Index.undefineds);

}
