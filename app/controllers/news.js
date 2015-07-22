var News = require('../models/news.js');
var _ = require('underscore');

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

//添加新闻 和 编辑页面 操作 -  编辑展示页面
exports.editorView = function(req, res){
    var _id = req.params.id
    if(_id){
        News.findById(_id,function(err,news){
            if(err) console.log(err);
            if(!news) res.redirect('./');
            else res.render('admin/news_edit', { 
                title: '编辑新闻页面',
                data:news
            });
        })
    }else{
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
}

//添加新闻 添加一条新闻数据
exports.add = function(req,res){
    var _news,
        _tags = req.body.tags.split(','),
        _id = req.body._id

    req.body.tags = _tags;
    if(!_id){
        _news = new News(req.body);
        _news.save(function(err,news){
            if(err) console.log(err);
            res.redirect('news/'+news._id)
        })
    }else{
        News.findById(_id,function(err,news){
            if(err) console.log(err);
            _news = _.extend(news, req.body)
            News.update({
                _id:_id
            },_news,{
                upsert : true
            },function(error){
                if(error) console.log(error);
                res.redirect('news/'+news._id)
            })
        })
    }
}

exports.deletes =function(req,res){
    var _id = req.params.id
    News.findById(_id,function(err,news){
        if(err) console.log(err);
        if(news) news.remove();
        res.redirect('../../news_list')
    })
}