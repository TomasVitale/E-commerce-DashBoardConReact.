const fs = require("fs");
const path = require("path");
const db = require('../database/models')
//llamar a todos los productos del Json
function allProducts(){
  
  let productsJson= fs.readFileSync(path.join(__dirname, "../data/products.json"))

  
  let productos = JSON.parse(productsJson)
  return productos
}

function writeJson(array){
  
  let arrayJson = JSON.stringify(array);
  
  
  return fs.writeFileSync(path.join(__dirname, "../data/products.json"), arrayJson);

}

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
      image: "prueba",
      measure: req.body.measure,
    }
    db.Product.create(product).then(_=> 
      res.redirect('list')
      );
   
    },
    

   detail:(req, res) => {
    let products = allProducts ();
    let productoEncontrado= products.find(function(producto){
      return producto.id == req.params.id;
    })

    res.render ("detail", {producto : productoEncontrado})
  
},

create: function (req, res){

  db.Category.findAll()
  .then((categories)=>{
    res.render('productCreate',{categories:categories})

  })

 /* let products = allProducts ();

    let nuevoProducto = {
      id: products.length + 1 ,
      name: req.body.name ,
      price: req.body.price,
      category: req.body.category ,
      color: req.body.color,
      description : req.body.description,
      measure : req.body.measure,
      image : req.body.image
    }
    
    let productosActualizados = [...products, nuevoProducto]

    
    writeJson(productosActualizados);

    
    res.redirect("/products/list");*/
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
    image: "prueba",
    measure: req.body.measure,
},
  {
    where: {
      id: req.params.id
    }
   });
   res.redirect('/products/list');

  // let productosActualizados = products.map(function(producto){
  //   if(producto.id == req.params.id){
  //     producto.name = req.body.name 
  //     producto.price = req.body.price
  //     producto.category = req.body.category 
  //     producto.color = req.body.color
  //     producto.description = req.body.description
  //     producto.measure = req.body.measure
  //     producto.image = req.body.image
  //   }
  //   return producto
  // })
  
 
  writeJson(productosActualizados);
  

 res.redirect("/products/detail/"+req.params.id)

},

destroy: (req, res) =>{
  let products = allProducts ();


  let dataNueva = products.filter(function(producto){
    return producto.id != req.params.id
  })

  writeJson(dataNueva);

  
  res.redirect("/products/list");
}};


module.exports = productController;