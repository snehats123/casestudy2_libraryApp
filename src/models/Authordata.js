//access mongoose package
const mongoose=require('mongoose');
//db connection
mongoose.connect('mongodb+srv://user_sneha:user123@csfsd.kuni0.mongodb.net/library?retryWrites=true&w=majority');

//Schema creation
//step1: access schema from mongoose package
const Schema=mongoose.Schema;

//create a structure for a single document/book
const AuthorSchema=new Schema(
{
    //define schema
    name: String,
    role: String,
    awards: String,
    image: String,
    desc: String
}
);

//model creation - mongoose.model(collection-name,schema)
var Authordata=mongoose.model('authordata',AuthorSchema);
//Export module 
module.exports=Authordata;