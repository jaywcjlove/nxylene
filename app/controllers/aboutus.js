var Modulepage = require('../models/modulepage.js');
var _ = require('underscore');

//admin 预览页面
exports.aboutus =function(req, res){
    Modulepage.find({
        type:"aboutus"
    },function(err, aboutus) {
        var data = {}
        if (err) console.log(err);
        if(aboutus.length === 0){
            data = {
                title: '关于我们',
                type: 'aboutus',
                contents: '-'
            }
        }else{
            data = aboutus[0]
        }
        res.render('admin/aboutus_edit', { 
            title: '关于我们编辑' ,
            data:data
        });
    });
}

//admin POST 编辑更新数据
exports.aboutus_post=function(req,res){
    var _title = req.body.title,
        _content = req.body.contents,
        _type = req.body.type,
        _aboutus;

    Modulepage.find({
        type:_type
    },function(err, aboutus) {
        if (err) {
            console.log(err);
        }

        if(aboutus.length === 0){
            _aboutus = new Modulepage(req.body);
            _aboutus.save(function(err,aboutus){
                if(err) console.log(err);
            })
        }else{
            _aboutus = _.extend(aboutus, req.body)
            Modulepage.update({
                type:_type
            },_aboutus,{
                upsert : true
            },function(error){
                if(error) console.log(error);
            })

        }
        return res.redirect('aboutus');
    });
}
