var Modulepage = require('../models/modulepage.js');
var _ = require('underscore');

// 客户浏览页面
exports.index = function(req,res){
    Modulepage.find({
        type:"contact"
    },function(err, contact) {
        var data = {}
        if (err) console.log(err);
        if(contact.length === 0){
            data = {
                title: '联系我们',
                type: 'contact',
                contents: '-'
            }
        }else{
            data = contact[0]
        }
        res.render('admin/contact_edit', { 
            title: '联系我们' ,
            data:data
        });
    });
}

//admin 预览页面
exports.contact =function(req, res){
    Modulepage.find({
        type:"contact"
    },function(err, contact) {
        var data = {}
        if (err) console.log(err);
        if(contact.length === 0){
            data = {
                title: '联系我们',
                type: 'contact',
                contents: '-'
            }
        }else{
            data = contact[0]
        }
        res.render('admin/contact_edit', { 
            title: '联系我们编辑' ,
            data:data
        });
    });
}

//admin POST 编辑更新数据
exports.contact_post=function(req,res){
    var _title = req.body.title,
        _content = req.body.contents,
        _type = req.body.type,
        _contact;

    Modulepage.find({
        type:_type
    },function(err, contact) {
        if (err) {
            console.log(err);
        }

        if(contact.length === 0){
            _contact = new Modulepage(req.body);
            _contact.save(function(err,contact){
                if(err) console.log(err);
                console.log("添加一条数据");  
            })
        }else{
            _contact = _.extend(contact, req.body)
            Modulepage.update({
                type:_type
            },_contact,{
                upsert : true
            },function(error){
                if(error) console.log(error);
            })

        }
        return res.redirect('contact');
    });
}
