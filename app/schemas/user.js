var mongoose = require("mongoose")
var bcrypt = require('bcrypt') //密码加密
var SALT_WORK_FACTOR = 10 //计算强度
var UserSchema = new mongoose.Schema({
    name:{
        type: String,
        unique: true
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
    // generate a salt 加盐 - 混淆密码进行加密
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        // 使用新的加盐哈希密码
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            // 设置密码为新的哈希密码存到mongodb中。
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods = {
    comparePassword:function(_password,cb){
        bcrypt.compare(_password,this.password,function(err,isMacth){
            if(err) return cb(err);
            cb(null,isMacth)
        })
    }
}

UserSchema.statics = {
    fetch:function(cb){
        return this.find({}).sort('meta.updateAt').exec(cd)
    },
    findByType:function(_type,cb){
        return this.findOne({type:_type}).exec(cb)
    }
}

module.exports = UserSchema
    