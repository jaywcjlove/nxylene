var express = require('express')
var path = require('path')
var port = process.env.PORT || 3001
var app = express()




// app.set("view","./view/pages")
app.set('views', __dirname + '/views/pages');
app.set('view engine','ejs')
//如果不愿意使用默认的layout.ejs，则可以设置layout为false
app.set('view options',{
    "layout":false,
})

//静态资源使用目录
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port)

console.log("==========================");
console.log("开始启动:" + 'http://127.0.0.1:' +port);


var routes = require('./routes/index');
var un404 = require('./routes/404');
app.use('/', routes);
app.use('/*', un404);

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
