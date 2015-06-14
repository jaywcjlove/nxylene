module.exports = function (app) {
    // app 本身有很多方法，其中包括最常用的 get、post、put/patch、delete，
    // 在这里我们调用其中的 get 方法，为我们的 `/` 路径指定一个 handler 函数。
    // 这个 handler 函数会接收 req 和 res 两个对象，他们分别是请求的 request 和 response。
    // request 中包含了浏览器传来的各种信息，比如 query 啊，body 啊，headers 啊之类的，都可以通过 req 对象访问到。
    // res 对象，我们一般不从里面取信息，而是通过它来定制我们向浏览器输出的信息，比如 header 信息，比如想要向浏览器输出的内容
    app.get('/', function (req, res) {
        res.render('index', { 
            title: 'JSLite 官网',
            pic_list: [{
                name: "长腿美女精美壁",
                _id: 1,
                url: "http://img2.tgbusdata.cn/v2/thumb/jpg/MTlGRCw1ODAsMTAwLDQsMywxLC0xLDAscms1MCw2MS4xNTIuMjQyLjEx/u/iphone.tgbus.com/UploadFiles/201506/2015061017310130.png"
            },{
                name: "长腿美女精美壁",
                _id: 2,
                url: "http://www.tgbus.com/image.html?url=http://iphone.tgbus.com/UploadFiles/201406/2014061911370889.jpg"
            },{
                name: "长腿美女精美壁",
                _id: 3,
                url: "http://iphone.tgbus.com/UploadFiles/201506/2015060217560183.png"
            },{
                name: "长腿美女精美壁",
                _id: 4,
                url: "http://i.bufan.com/upload/2014-07-09/14048768403033.jpg"
            },{
                name: "长腿美女精美壁",
                _id: 5,
                url: "http://i.bufan.com/upload/2014-06-24/14035889302261.jpg"
            }]
        });
    });
    app.get('/pic/:id', function (req, res) {
        res.render('detail', { title: '详情页面' });
    });
}
