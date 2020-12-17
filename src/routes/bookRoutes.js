const express=require('express');
const booksRouter=express.Router();
const Bookdata=require('../models/Bookdata');

function router(nav)
{
    // view all books in bookdata collection
    booksRouter.get('/',function(req,res){
        Bookdata.find()
            .then((books)=>
            {
                
                res.render("books",
                {
                    nav,
                    title:'LibraryApp',
                    books
                });
            });        
    });
    //view a single book
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
       
        Bookdata.findOne({_id:id})
        .then((book)=>{
            res.render("book",{
                nav,title:'LibraryApp',
               book
            });
        })
    });
    //delete a single book
    booksRouter.get('/:id/delete',(req,res)=>{
        const id=req.params.id;
            
        Bookdata.findByIdAndRemove({_id:id},(err,docs)=>{
            if(err){
                console.log(err);
            }
            else{
                res.redirect('/books');
            }
        });
    });
    //prefill editbook form
    booksRouter.get('/:id/update',(req, res) => {    
        var id = req.params.id;
     
        Bookdata.find({_id:id}) .then((book)=>{
            res.render('editbook',{
            nav,
            title:"Library",
               book
            });  
        });
     
    });
    //update db
    booksRouter.get('/proceed',(req, res) => {
      var id=req.params.id;
      console.log("in /proceed");
        var newitem={
            name: req.query.name,
            role: req.query.role,
            awards: req.query.awards,
            image: req.query.image,
            desc: req.query.desc
        }
        console.log(newitem);
        //var data=Bookdata(item);
        Bookdata.findByIdAndUpdate(id,newitem).then(()=>{
            res.redirect("/books");
        });
        
      
    });
   
   
    return booksRouter;
}

module.exports = router;