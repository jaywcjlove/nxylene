module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('index', { title: 'JSLite 官网' });
    });
    app.get('/movie/:id', function (req, res) {
        res.render('detail', { title: '详情页面' });
    });
}
