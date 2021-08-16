const express = require("express");
const app = express();
const path = require("path");

app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(3000,() => {
    console.log("La app esta funcionando en la url http://localhost:3000")});

app.get('/', function(req,res){
        res.render('home')
        });

app.get('/home', function(req,res){
       res.render('home')
        });

app.get('/detalleproducto', function(req,res){
        res.render('detalleproducto')
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