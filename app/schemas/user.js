var mongoose = require("mongoose")
var bcrypt = require('bcrypt') //密码加密
var SALT_WORK_FACTOR = 10 //计算强度
var UserSchema = new mongoose.Schema({
    name:{
        unique: true,
        type: String
    },
    password: String, 
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

UserSchema.pre('save', function(next) {
    var user = this
    if (this.isNew) {
        this.meta.createAt = this.meta.updateAt = Date.now();
    } else {
        this.meta.updateAt = Date.now();
    }
    //加盐 - 混淆密码进行加密？
    bcrypt.genSalt(SALT_WORK_FACTOR,function(err,salt){
        if(err) return next(err)
        bcrypt.hash(user.password,salt,function(err,hash){
            if(err) return next(err)
            user.password = hash
            next()
        })
    })
    next();
});


UserSchema.statics = {
    fetch:function(cb){
        return this.find({}).sort('meta.updateAt').exec(cd)
    },
    findByType:function(_type,cb){
        return this.findOne({type:_type}).exec(cb)
    }
}

module.exports = UserSchema
    