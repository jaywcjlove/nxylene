exports.index =function(req, res){
    console.log("session:",req.session.user)
    res.render('admin/index', { 
        title: '管理后台' ,
        pic_list:{
            name: "长腿美女精美壁",
            _id: 5,
            url: "http://i.bufan.com/upload/2014-06-24/14035889302261.jpg"
        }
    });
}

