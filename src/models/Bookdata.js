//access mongoose package
const mongoose=require('mongoose');
//db connection
mongoose.connect('mongodb://localhost:27017/library');

//Schema creation
//step1: access schema from mongoose package
const schema=mongoose.Schema;

//create a structure for a single document/book
const BookSchema=new schema(
{
    //define schema
    title:String,
    author:String,
    genre:String,
    image:String
}
);

//model creation - mongoose.model(collection-name,schema)
var Bookdata=mongoose.model('bookdata',BookSchema);
//Export module 
module.exports=Bookdata;