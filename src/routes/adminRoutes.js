const express=require('express');
const adminRouter=express.Router();
 //access bookdata.js to pass the item object
 const Bookdata=require('../models/Bookdata');

function router(nav)
{
    adminRouter.get('/',function(req,res){
        res.render('addBook',{
            nav,
            title:"Library"
        });
    });
    
adminRouter.post('/add',function(req,res){
        //access query parameters from url
        var item={
            title:req.body.title,
            author:req.body.author,
            genre:req.body.genre,
            image:req.body.image
        }
    
        //passing item obj to bookdata.js and returns back the data to the variable book
        var book=Bookdata(item);
        
        //save to db
        book.save();

        //redirect to books.ejs to view the newly added book in the list
        res.redirect('/books');

    });
    return adminRouter;
}
module.exports=router;
