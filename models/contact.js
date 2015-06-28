var mongoose=require('mongoose');
var ContactSchema=require('../schemas/contact');
var Contact=mongoose.model('Contact',ContactSchema);
module.exports=Contact;
    