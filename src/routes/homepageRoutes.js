const express=require('express');
const homeRouter=express.Router();
function router(nav)
{
    homeRouter.get('/',function(req,res){
        res.render("homepage",
        {
            nav,
            title:'LibraryApp'
        });
    });
    homeRouter.get('/',function(req,res){
        res.redirect('/login');
    });
    homeRouter.get('/addBooks',function(req,res){
        res.redirect("addBook");
    });
    homeRouter.get('addauthor',(req,res)=>{
        res.redirect("addAuthor");
    });
    return homeRouter;

}

module.exports = router;