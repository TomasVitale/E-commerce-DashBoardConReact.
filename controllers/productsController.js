const fs = require("fs");
const path = require("path");
const db = require('../database/models');
const { findAll } = require("../models/User");


const productController = {

    list: (req, res) => {
      
    db.Product.findAll()
    .then(function ( Products ){
     return res.render("list", {Products} )})

},

  store: (req, res) => {
    const product = {
      name: req.body.name,
      price: req.body.price,
      category_id: req.body.category,
      color:req.body.color,
      description: req.body.description,
      image: req.body.image,
      measure: req.body.measure,
    }
    db.Product.create(product).then(_=> 
      res.redirect('list')
      );
   
    },
    

    detail: async (req,res) =>{
      let productos = await db.Product.findAll(); 

     let producto = await db.Product.findByPk(req.params.id);

     res.render('detail',{ producto:producto, productos:productos});

    },

create: function (req, res){

  db.Category.findAll()
  .then((categories)=>{
    res.render('productCreate',{categories:categories})

  })

 
},


edit: async (req, res) =>{
  
  let categories = await db.Category.findAll(); 

 let producto = await db.Product.findByPk(req.params.id);

    res.render('product-edit-form',{categories:categories, producto:producto});
  

},

update: async (req, res)=> {

 await db.Product.update({
    name: req.body.name,
    price: req.body.price,
    category_id: req.body.category,
    color:req.body.color,
    description: req.body.description,
    image: req.body.image,
    measure: req.body.measure,
},
  {
    where: {
      id: req.params.id
    }
   });
   res.redirect('/products/list');

  

},

destroy: (req, res) =>{
  db.Product.destroy({
    where: {
      id: req.params.id
    }
  });
  res.redirect("/products/list");
}};


module.exports = productController;