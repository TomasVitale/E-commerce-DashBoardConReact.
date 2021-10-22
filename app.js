const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(methodOverride("_method"));

app.listen(3000,() => {
    console.log("La app esta funcionando en la url http://localhost:3000")});


const mainRoutes = require ('./routers/main');
const productsRouter = require('./routers/products');


app.use('/', mainRoutes);
app.use('/products', productsRouter);
app.use('/list', productsRouter);



app.get('/', function(req,res){
        res.render('home')
        });

app.get('/home', function(req,res){
       res.render('home')
        });

app.get('/detail', function(req,res){
        res.render('detail')
        });
    
app.get('/register', function(req,res){
        res.render('register')
        });
    
app.get('/login', function(req,res){
        res.render('login')
        });  
app.get('/productCreate',function(req,res){
        res.render('productCreate')
        });







app.use (express.static('public')) 