module.exports = function (app) {
    app.get('/admin/movie', function (req, res) {
        res.render('admin', { 
            title: '后台首页' 
        });
    });
    app.get('/admin/list', function (req, res) {
        res.render('admin', { 
            title: '后台列表页面' 
        });
    });
}

