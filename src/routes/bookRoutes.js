const express=require('express');
const booksRouter=express.Router();
function router(nav)
{
    var books=[
        {
            title:'Empire',
            author:'Devi Yasodharan',
            genre:'Classics',
            img:"book1.jpg"
        },
        {
            title:'Malgudi days',
            author:'R.K Narayanan',
            genre:'Classics',
            img:"book2.jpg"
        },
        {
            title:'Playing it my way',
            author:'Sachin Tendulkar',
            genre:'Autobiography',
            img:"book3.jpg"
        },
        {
            title:'Raavan : Enemy of Aryavarta',
            author:'Amish Tripathi',
            genre:'Mythological Fiction',
            img:"book4.jpg"
        },
        {
            title:'The God of Small Things',
            author:'Arundhathi Roy',
            genre:'Classics',
            img:"book5.jpg"
        },
        {
            title:'The Guide',
            author:'R.K Narayanan',
            genre:'Classics',
            img:"book6.jpg"
        },
        {
            title:'The Room on the Roof',
            author:'Ruskin Bond',
            genre:'Classics',
            img:"book7.jpg"
        },
        {
            title:'The Story of My Experiments with Truth',
            author:'Mahathma Gandhi',
            genre:'Autobiography',
            img:"book8.jpg"
        },
        {
            title:'Wings of Fire',
            author:'APJ Abdul Kalam',
            genre:'Autobiography',
            img:"book9.jpg"
        }
    ]
    booksRouter.get('/',function(req,res){
        res.render("books",
        {
            nav,button:'Donate',title:'LibraryApp',heading:'LIBRARY',books
    
        });
    });
    booksRouter.get('/:id',function(req,res){
        const id=req.params.id;
        res.render("book",{
            nav,button:'Donate',title:'LibraryApp',heading:'LIBRARY',
           book:books[id]
        });
        
    });
    return booksRouter;
}

module.exports = router;