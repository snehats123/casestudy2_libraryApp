const express=require('express');
const loginRouter=express.Router();

function router(nav)
{
    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            nav,
            button:'Donate',title:'LibraryApp',heading:'LIBRARY'
        });
    });
    //route to homepage
    loginRouter.get('/',function(req,res){
        res.redirect("/homepage");
});
    return loginRouter;
}

module.exports = router;
