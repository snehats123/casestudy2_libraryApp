const express=require('express');
const adminRouter=express.Router();
 //access bookdata.js to pass the item object
 const Bookdata=require('../models/Bookdata');
 const Authordata=require('../models/Authordata');
 const Signupdata=require('../models/Signupdata');
 

function router(nav)
{
    adminRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title:"Library"
        });
    });
    adminRouter.get('/addauthor',function(req,res){
        res.render('addAuthor',{
            nav,
            title:"Library"
        });
    });
    
adminRouter.post('/add',function(req,res){
   
        // access query parameters from url
        var item={
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            image: req.body.image,
            desc: req.body.desc
        }
        console.log(item);
        //passing item obj to bookdata.js and returns back the data to the variable book
        var book=Bookdata(item);
        
        //save to db
        book.save();

        //redirect to books.ejs to view the newly added book in the list
        res.redirect('/books');

    });
    
adminRouter.post('/add_data',(req,res)=>{
    console.log("in /addauthor");
        var item={
            name: req.body.name,
            role: req.body.role,
            awards: req.body.awards,
            image: req.body.image,
            desc: req.body.desc
        }
        console.log(item);
        var data=Authordata(item);
        
        data.save();
        console.log(data);
        res.redirect('/authors');
});
adminRouter.post('/register',function(req,res){
   
    console.log('im at /register');
    // access query parameters from url
    var item={
        fname: req.body.fname,
        lname: req.body.lname,
        mobno: req.body.mobno,
        email: req.body.email,
        username: req.body.username,
        password:req.body.password,
        repassword:req.body.repassword
    }
    console.log(item);
    //passing item obj to bookdata.js and returns back the data to the variable book
    var data=Signupdata(item);
    
    //save to db
    data.save();

    //redirect to books.ejs to view the newly added book in the list
    res.redirect('/login');

});
    return adminRouter;
}
module.exports=router;
