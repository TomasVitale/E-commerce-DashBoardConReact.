const express = require("express");
const app = express();
const path = require("path");

app.get("/",(req,res) => {
    res.send("Hola")})  

app.get('/home', (request,response)=>{
        response.sendFile(path.join(__dirname,'views/home.html'))
    })

app.listen(3000,() => {
console.log("La app esta funcionando en la url http://localhost:3000")});

app.use (express.static('public')) 