const express=require('express');
const loginRouter=express.Router();
const Signupdata=require('../models/Signupdata');
function router(nav)
{
    loginRouter.get('/',function(req,res){
        res.render("login",
        {
            nav,
            button:'Donate',title:'LibraryApp',heading:'LIBRARY'
        });
    });
    
    //check whether the credentials are valid or not
    loginRouter.get('/login',(req,res)=>{
            console.log("Hello");
        Signupdata.find()
                .then((login)=>
                {
                    console.log("now at /login");
                    res.render("homepage",
                    {
                        nav,
                        title:'LibraryApp',
                        login
                    });
                });        
        
    });
    // //route to homepage
    loginRouter.get('/',function(req,res){
        res.redirect("/homepage");
});
    return loginRouter;
}

module.exports = router;
