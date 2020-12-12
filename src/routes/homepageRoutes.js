const express=require('express');
const homeRouter=express.Router();
function router(nav)
{
    homeRouter.get('/',function(req,res){
        res.render("homepage",
        {
            nav,
            button:'Donate',title:'LibraryApp',heading:'LIBRARY'
        });
    });
    homeRouter.get('/',function(req,res){
        res.redirect('/login');
    });
    homeRouter.get('/addBooks',function(req,res){
        res.redirect("addBook");
    });
    return homeRouter;

}

module.exports = router;