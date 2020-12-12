//access mongoose package
const mongoose=require('mongoose');
//db connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema creation
//step1: access schema from mongoose package
const schema=mongoose.Schema;

//create a structure for a single document/book
const AuthorSchema=new schema(
{
    //define schema
    name:String,
    role:String,
    awards:String,
    image:String,
    desc:String
}
);

//model creation - mongoose.model(collection-name,schema)
var Authordata=mongoose.model('authordata',AuthorSchema);
//Export module 
module.exports=Authordata;