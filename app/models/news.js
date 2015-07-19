var mongoose=require('mongoose');
var NewsSchema=require('../schemas/news')
var News=mongoose.model('News',NewsSchema);
module.exports=News;