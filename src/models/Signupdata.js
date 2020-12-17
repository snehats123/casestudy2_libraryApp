//access mongoose package
const mongoose=require('mongoose');
//db connection
mongoose.connect('mongodb+srv://user_sneha:user123@csfsd.kuni0.mongodb.net/library?retryWrites=true&w=majority');

//Schema creation
//step1: access schema from mongoose package
const Schema=mongoose.Schema;

//create a structure for signup collection
const SignupSchema=new Schema(
{
    //define schema
    fname: String,
    lname: String,
    mobno: Number,
    email: String,
    username: String,
    password: String,
    repassword:String
});


//model creation - mongoose.model(collection-name,schema)
var Signupdata = mongoose.model('signupdata',SignupSchema);
//Export module 
module.exports = Signupdata;