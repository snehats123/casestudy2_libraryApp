const express=require('express');
const updateRouter=express.Router();
const Bookdata=require('../models/Bookdata');
function router(nav)
{
    
    //update a single book
    updateRouter.get('/:id/update',(req,res)=>{
        var id=req.params.id;
        Bookdata.findOne({_id:id})
        .then((editbook)=>{
        console.log("Book id : "+id);
        res.render('editbook',{
            nav,
            title:"Library",editbook
        });
    })
    });
    //update a single author
    updateRouter.get('/:id/update_author',(req,res)=>{
        var id=req.params.id;
        Authordata.findOne({_id:id})
        .then((editauthor)=>{
        console.log("Book id : "+id);
        res.render('editauthor',{
            nav,
            title:"Library",editauthor
        });
    })
    });
    return updateRouter;
}

module.exports = router;