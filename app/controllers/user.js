var User = require('../models/user.js');
var _ = require('underscore');

//页面登陆
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

//初始化数据
exports.init = function(req, res){
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
//创建一个用户
exports.user_init = function(req, res){
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

    console.log("req.body --- :",req.body);

    User.findOne({name:name},function(err,user){
        if(err) console.log(err);
        if(!user) return res.redirect('/login');
        user.comparePassword(password,function(err,isMatch){
            if(err) console.log(err);
            if(isMatch){
                req.session.user = user
                console.log("Password is Match！密码比对成功！");
                return res.send({
                    code:0,
                    data:{}
                });
            } else console.log("Password is not Match！密码比对失败");
            return res.send({
                code:-1,
                massege:"用户名或密码错误！"
            });
        })
    })

}

//登出页面 = 注销页面
exports.logout = function(req,res){
    delete req.session.user;
    res.redirect('/login')
}