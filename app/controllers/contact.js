var Contact = require('../models/contact.js');
var _ = require('underscore');

// 客户浏览页面
exports.index = function(req,res){
    Contact.find({
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
            title: '关于我们' ,
            data:data
        });
    });
}

//admin 预览页面
exports.contact =function(req, res){
    Contact.find({
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
            title: '关于我们编辑' ,
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

    Contact.find({
        type:_type
    },function(err, contact) {
        if (err) {
            console.log(err);
        }
        console.log("一共%s条数据。",contact.length);

        if(contact.length === 0){
            _contact = new Contact(req.body);
            _contact.save(function(err,contact){
                if(err) console.log(err);
                console.log("添加一条数据");  
            })
        }else{
            _contact = _.extend(contact, req.body)
            Contact.update({
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
