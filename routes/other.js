var cheerio = require('cheerio');
var superagent = require('superagent');


module.exports = function (app) {
    app.get('/tool/reptile', function (req, res) {
        //简单爬虫
        //superagent 抓取网页、 cheerio 分析网页
        superagent.get('https://cnodejs.org/').end(function (err, sres) {
            if (err) return next(err);
            var $ = cheerio.load(sres.text);
            var items = [];
            $('#topic_list .topic_title').each(function (idx, element) {
                var $element = $(element);
                items.push({
                  title: $element.attr('title'),
                  href: $element.attr('href')
                });
            });

            res.send(items);
        });
    });

    //这个要放到最下面
    app.get('/*', function (req, res) {
        res.render('404', { 
            title: 'No Found' 
        });
    });
}
