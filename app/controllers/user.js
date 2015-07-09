var User = require('../models/user.js');
var _ = require('underscore');


exports.login =function(req, res){
    User.find({},function(err, user){
        if(err) console.log(err);
        if(user.length>0){
            res.render('admin/login',{
                title: '登陆'
            })
        }else{
            res.redirect('init')
        }
    })
}


exports.init = function(req, res){//初始化数据
    User.find({},function(err, user){
        if(err) console.log(err);
        if(user.length>0){
            res.redirect('login')
        }else{
            res.render('admin/signup', { 
                title: '初始化数据' ,
                data:{
                    username:'nxylene'
                }
            });
        }
    })
}

exports.user_init = function(req, res){//创建一个用户
    var _content = req.body.name,
        _user ;
    User.find({},function(err, user){
        if(err) console.log(err);
        if(user.length===0){
            _user = new User(req.body);
            _user.save(function(err,user){
                if(err) console.log(err);
                console.log("添加一条数据",user);  
                res.redirect('login')
            })
        }else{
            console.log("你已经初始化了一个用户");
            res.redirect('login')
        }
    })
}

//登陆验证校验
exports.signin = function(req, res){
    var _user = req.body
    var name =_user.name
    var password = _user.password

    User.findOne({name:name},function(err,user){
        if(err) console.log(err);
        if(!user) return res.redirect('/login');
        user.comparePassword(password,function(err,isMatch){
            if(err) console.log(err);
            if(isMatch){
                req.session.user = user
                console.log("Password is Match！密码比对成功！");
                return res.redirect('/admin');  
            } else console.log("Password is not Match！密码比对失败");
        })
    })

}