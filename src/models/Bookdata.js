//access mongoose package
const mongoose=require('mongoose');
//db connection
mongoose.connect('mongodb+srv://user_sneha:user123@csfsd.kuni0.mongodb.net/library?retryWrites=true&w=majority');

//Schema creation
//step1: access schema from mongoose package
const Schema=mongoose.Schema;

//create a structure for a single document/book
const BookSchema=new Schema(
{
    //define schema
    title: String,
    author: String,
    genre: String,
    image: String,
    desc: String
});


//model creation - mongoose.model(collection-name,schema)
var Bookdata = mongoose.model('bookdata',BookSchema);
//Export module 
module.exports = Bookdata;