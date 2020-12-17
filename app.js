const express=require('express');
const app=new express();
const port=process.env.PORT || 3000;
var ObjectId = require('mongodb').ObjectID;
//const bodyParser=require('body-parser');
const nav =[
    {link:'/books',name:'BOOKS'},
    {link:'/authors',name:'AUTHORS'},  
    
    {link:'/sample',name:'CONTACT US'},
    {link:'/signup',name:'SignUp'},
    {link:'/login',name:'LOGIN'},
    {link:'/logout',name:'LOGOUT'},
    {link:'/admin',name:'ADD BOOK'},
    {link:'/admin/addauthor',name:'ADD AUTHOR'}

];
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const updateRouter=require('./src/routes/updateRoutes')(nav);
const homeRouter=require('./src/routes/homepageRoutes')(nav);


app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
//app.use('/register',signupRouter);
app.use('/admin',adminRouter);
app.use('/delete',booksRouter);
app.use('/delete_author',authorsRouter);
app.use('/update',updateRouter);
app.use('/update_author',updateRouter);

app.use('/proceed',booksRouter);

app.use('/homepage',homeRouter);

//app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','./src/views');


app.get('/',function(req,res){
    res.render("index",
    {
        nav,
        button:'Donate',title:'LibraryApp',heading:'LIBRARY'
    });
});
app.get('/sample',function(req,res){
  res.render("sample",
    {
        nav,
        button:'Donate',title:'LibraryApp',heading:'LIBRARY'
    });
  });
 app.get('/logout',(req,res)=>{
   res.redirect('index');
 });
app.listen(port,()=>{console.log("Server ready at "+port)});