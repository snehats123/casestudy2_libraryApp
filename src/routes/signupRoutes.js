const express=require('express');
const signupRouter=express.Router();
function router(nav)
{
    signupRouter.get('/',function(req,res){
        res.render("signup",
        {
            nav,
            button:'Donate',title:'LibraryApp',heading:'LIBRARY'
        });
    });
    signupRouter.get('/',function(req,res){
        res.redirect('/login');
    });
    return signupRouter;
}

module.exports = router;
