var mongoose=require('mongoose');
var ModulepageSchema=require('../schemas/modulepage');
var Modulepage=mongoose.model('Modulepage',ModulepageSchema);
module.exports=Modulepage;
    