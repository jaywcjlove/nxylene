exports.index = function(req, res){
        // Pic.fetch(function(err,pic_list){
        //     console.log("message:JSLite:002:");
        //     if(err) console.log(err);
        //     res.render('index', { 
        //         title: 'JSLite 官网',
        //         pic_list: pic_list
        //     });
        // })
        res.render('index', { 
            title: 'JSLite 官网',
            pic_list: [{
                name: "长腿美女精美壁",
                _id: 1,
                url: "http://img2.tgbusdata.cn/v2/thumb/jpg/MTlGRCw1ODAsMTAwLDQsMywxLC0xLDAscms1MCw2MS4xNTIuMjQyLjEx/u/iphone.tgbus.com/UploadFiles/201506/2015061017310130.png"
            },{
                name: "长腿美女精美壁",
                _id: 2,
                url: "http://img.51ztzj.com/upload/image/20140925/sj201409251005_279x419.jpg"
            },{
                name: "长腿美女精美壁",
                _id: 3,
                url: "http://iphone.tgbus.com/UploadFiles/201506/2015060217560183.png"
            },{
                name: "长腿美女精美壁",
                _id: 4,
                url: "http://i.bufan.com/upload/2014-07-09/14048768403033.jpg"
            },{
                name: "长腿美女精美壁",
                _id: 5,
                url: "http://i.bufan.com/upload/2014-06-24/14035889302261.jpg"
            },{
                name: "长腿美女精美壁",
                _id: 3,
                url: "http://iphone.tgbus.com/UploadFiles/201506/2015060217560183.png"
            },{
                name: "长腿美女精美壁",
                _id: 4,
                url: "http://i.bufan.com/upload/2014-07-09/14048768403033.jpg"
            },{
                name: "长腿美女精美壁",
                _id: 5,
                url: "http://i.bufan.com/upload/2014-06-24/14035889302261.jpg"
            }]
        });
    
}


// 404 页面
exports.undefineds = function(req,res){
    res.render('404', { 
        title: 'No Found' 
    });
}