const express=require('express');
const admin1Router=express.Router();
 //access Authordata.js to pass the item object
 const Authordata=require('../models/Authordata');

function router(nav)
{
    admin1Router.get('/',function(req,res){
        res.render('addAuthor',{
            nav,
            title:"Library"
        });
    });
    
admin1Router.post('/add',function(req,res){
        //access query parameters from url
        var data={
            name:req.body.title,
            role:req.body.author,
            awards:req.body.genre,
            image:req.body.image,
            desc:req.body.desc
        }
    
        //passing item obj to bookdata.js and returns back the data to the variable book
        var author=Authordata(data);
        
        //save to db
        author.save();

        //redirect to authors.ejs to view the newly added book in the list
        res.redirect('/authors');

    });
    return admin1Router;
}
module.exports=router;
