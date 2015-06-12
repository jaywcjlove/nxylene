module.exports = function (app) {
    app.get('/tool', function (req, res) {
        //简单爬虫
        //superagent 抓取网页、 cheerio 分析网页
        // superagent.get('https://cnodejs.org/').end(function(err,sres){
        //     console.log("err:",err)
        //     console.log("sres:",sres)

        //     res.send("items");
        // })
        res.render('admin', { 
            title: 'asdf' 
        });
    });
    
    //这个要放到最下面
    app.get('/*', function (req, res) {
        res.render('404', { 
            title: 'No Found' 
        });
    });
}
