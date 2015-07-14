var Modulepage = require('../models/modulepage.js');
var _ = require('underscore');

//admin 预览页面
exports.jobs =function(req, res){
    Modulepage.find({
        type:"jobs"
    },function(err, jobs) {
        var data = {}
        if (err) console.log(err);
        if(jobs.length === 0){
            data = {
                title: '工作机会',
                type: 'jobs',
                contents: '-'
            }
        }else{
            data = jobs[0]
        }
        res.render('admin/jobs_edit', { 
            title: '工作机会编辑' ,
            data:data
        });
    });
}

//admin POST 编辑更新数据
exports.jobs_post=function(req,res){
    var _title = req.body.title,
        _content = req.body.contents,
        _type = req.body.type,
        _jobs;

    Modulepage.find({
        type:_type
    },function(err, jobs) {
        if (err) {
            console.log(err);
        }

        if(jobs.length === 0){
            _jobs = new Modulepage(req.body);
            _jobs.save(function(err,jobs){
                if(err) console.log(err);
            })
        }else{
            _jobs = _.extend(jobs, req.body)
            Modulepage.update({
                type:_type
            },_jobs,{
                upsert : true
            },function(error){
                if(error) console.log(error);
            })

        }
        return res.redirect('jobs');
    });
}
