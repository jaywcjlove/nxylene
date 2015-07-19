var News = require('../models/news.js');

exports.list = function(req,res){
    News.fetch(function(err,news){
        var _news_data = []
        if(news && news.length>0) _news_data = news;
        res.render('admin/news_list', { 
            title: '新闻列表页面',
            data:news
        });
    })
}

//添加新闻 -  编辑展示页面
exports.addView = function(req, res){
    res.render('admin/news_edit', { 
        title: '添加新闻页面',
        data:{
            title:"",
            contents:"",
            reprint_source: "",
            contents:"",
            tags: []
        }
    });
}

//添加新闻 添加一条新闻数据
exports.add = function(req,res){
    var _news,
        _tags = req.body.tags.split(',');

    req.body.tags = _tags;
    console.log("req.body:",req.body);

    _news = new News(req.body);
    _news.save(function(err,news){
        if(err) console.log(err);
        res.redirect('news/'+news._id)
    })
}

//编辑新闻页面 
exports.change = function(req,res){
    var _id = req.params.id
    News.find({
        _id : _id
    },function(err,news){
        if(err) console.log(err);
        if(!news || news.length===0) res.redirect('./');
        else res.render('admin/news_edit', { 
            title: '编辑新闻页面',
            data:news[0]
        });
        console.log("news_id::",news);
    })
}