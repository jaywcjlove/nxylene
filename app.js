//引入 `express` 模块，并将它赋予 `express` 这个变量等待使用。
var express = require('express')
var path = require('path')
var port = process.env.PORT || 3001
// 调用 express 实例，它是一个函数，不带参数调用时，会返回一个 express 实例，将这个变量赋予 app 变量。
var app = express()

var themes = 'default'

// app.set("view","./view/pages")
app.set('views', __dirname + '/themes/' + themes + '/views/pages');
app.set('view engine','ejs')
//如果不愿意使用默认的layout.ejs，则可以设置layout为false
app.set('view options',{
    "layout":false,
})

//静态资源使用目录
app.use(express.static(__dirname + '/themes/' + themes + '/source'));

// 定义好我们 app 的行为之后，让它监听本地的 3000 端口。
// 这里的第二个函数是个回调函数，会在 listen 动作成功后执行，我们这里执行了一个命令行输出操作，告诉我们监听动作已完成。
// 端口的作用：通过端口来区分出同一电脑内不同应用或者进程，从而实现一条物理网线(通过分组交换技术-比如internet)同时链接多个程序 
// [Port_(computer_networking)](http://en.wikipedia.org/wiki/Port_(computer_networking))
// 端口号是一个 16位的 uint, 所以其范围为 1 to 65535 (对TCP来说, port 0 被保留，不能被使用. 
// 对于UDP来说, source端的端口号是可选的， 为0时表示无端口).
app.listen(port,function(){
    console.log("==========================");
    console.log("开始启动:" + 'http://127.0.0.1:' +port);
})



var index = require('./routes/index'),
    admin = require('./routes/admin'),
    other = require('./routes/other');

    index(app);//预览页面
    admin(app);//管理平台
    other(app);//放其它内容 比如 404

// 简单路由
// app.use('/', routes.index);
// app.use('/*', routes.undefined);
// app.use('/detail',detail);

// // 404
// app.get('/*', function(request, response){
//     response.render('404', {
//         title: 'No Found'
//     })
// });

// //首页
// app.get('/',function(request,response){
//     response.render('index',{
//         "title":"JSLite首页"
//     })
// })

// // 详情页面
// app.get('/movie/:id',function(request,response){
//     response.render('detail',{
//         title:"JSLite 详情页"
//     })
// })

// // 后台录入页面
// app.get('/admin/movie',function(request,response){
//     response.render('admin',{
//         title:"JSLite 后台首页"
//     })
// })

// // 列表页面
// app.get('/admin/list',function(request,response){
//     response.render('list',{
//         title:"JSLite 后台列表页面"
//     })
// })

module.exports = app
