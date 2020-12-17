const express=require('express');
const authorsRouter=express.Router();
const Authordata=require('../models/Authordata');
function router(nav)
{
    authorsRouter.get('/',function(req,res){
        Authordata.find()
        .then((authors)=>
        {
        res.render("authors",
        {
            nav,
            title:'LibraryApp',
            authors
   
        });
    });
    });
     //view a single author
     authorsRouter.get('/:id',function(req,res){
        const id=req.params.id;
       
        Authordata.findOne({_id:id})
        .then((author)=>{
            res.render("author",{
                nav,title:'LibraryApp',
               author
            });
        })
    });
    //delete a single author
    authorsRouter.get('/:id/delete_author',(req,res)=>{
        const id=req.params.id;
            
        Authordata.findByIdAndRemove({_id:id},(err,docs)=>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/authors');
            }
        });
    });
    //update a single author details
    authorsRouter.get('/:id/update_author',(req,res)=>{
        res.render('editauthor',{
            nav,
            title:"Library"
        });
    });
    
    
   
    return authorsRouter;
}

module.exports = router;