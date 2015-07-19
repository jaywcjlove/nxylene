var mongoose = require('mongoose')
var NewsSchema = new mongoose.Schema({
    id: Number,
    title: String,//新闻标题
    reprint_source: String,//转载来源
    contents:String,//新闻内容
    tags: [String],//新闻tags
    meta:{
        creatAt:{
            type:Date,
            default:Date.now()
        },
        updateAt:{
            type:Date,
            default:Date.now()
        }
    }
})

NewsSchema.pre('save',function(next){
    if(this.isNew){
        this.meta.creatAt = this.meta.updateAt = Date.now();
    }else{
        this.meta.updateAt = Date.now()
    }
    next()
})

NewsSchema.statics = {
    fetch:function(cb){
        return this.find({}).sort('meta.updateAt').exec(cb)
    }
}

module.exports = NewsSchema