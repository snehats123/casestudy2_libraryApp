const express=require('express');
const app=new express();
const port=process.env.PORT || 2000;
//const bodyParser=require('body-parser');
const nav =[
    {link:'/books',name:'BOOKS'},
    {link:'/authors',name:'AUTHORS'},  
    
    {link:'/sample',name:'CONTACT US'},
    {link:'/signup',name:'SignUp'},
    {link:'/login',name:'Login'},
    {link:'/admin',name:'ADD BOOK'},
    {link:'/admin1',name:'ADD AUTHOR'}

];
const booksRouter=require('./src/routes/bookRoutes')(nav);
const authorsRouter=require('./src/routes/authorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signupRouter=require('./src/routes/signupRoutes')(nav);
const adminRouter=require('./src/routes/adminRoutes')(nav);
const admin1Router=require('./src/routes/admin1Routes')(nav);
const homeRouter=require('./src/routes/homepageRoutes')(nav);

app.use(express.static('./public'));
app.use(express.urlencoded({extended:true}));
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/admin',adminRouter);
app.use('/admin1',admin1Router);
app.use('/homepage',homeRouter);

//app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','./src/views');



// //Route to Login Page
// app.get('/login', (req, res) => {
//     res.sendFile(__dirname + '/src/views/login');
//   });
// // app.post('/login', (req, res) => {
// //     // Insert Login Code Here
// //     let username = req.body.username;
// //     let password = req.body.password;
// //     res.send(`Username: ${username} Password: ${password}`);
// //   });

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
  app.get('/sample',function(req,res){
    res.render("sample",
      {
          nav,
          button:'Donate',title:'LibraryApp',heading:'LIBRARY'
      });
    });
app.listen(port,()=>{console.log("Server ready at "+port)});