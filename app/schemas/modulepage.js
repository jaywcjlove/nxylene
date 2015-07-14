var mongoose = require("mongoose")
var ModulepageSchema = new mongoose.Schema({
    title:String,
    type:String,
    contents:String,
    meta:{
        createAt:{
            type :Date,
            default:Date.now()
        },
        updateAt: {
            type:Date,
            default: Date.now()
        }
    }
})

ModulepageSchema.pre('save', function(next) {
    if (this.isNew) {
        this.meta.createAt = Date.now();
        this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    next();
});


ModulepageSchema.statics = {
    fetch:function(cb){
        return this.find({}).sort('meta.updateAt').exec(cd)
    },
    findByType:function(_type,cb){
        return this.findOne({type:_type}).exec(cb)
    }
}

module.exports = ModulepageSchema
    