const fs = require("fs");
const path = require("path");

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

    list: function (req, res){
      
    let products = allProducts ();
    res.render("products", { products } )
  },

  create: function (req, res){
        
    res.render("/productCreate")

  },

 

  detail: function (req, res){
    let products = allProducts ();
    let productoEncontrado= products.find(function(producto){
      return producto.id == req.params.id;
    })

    res.render ("detalleproducto", {product : productoEncontrado})
  
},

store: function (req, res){
  let products = allProducts ();

    let nuevoProducto = {
      id: productos.length + 1 ,
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

    
    res.redirect("/products/list");
},


edit: function (req, res){
  let products = allProducts ();

  let idProducto= products.find(function(producto){
    return producto.id == req.params.id;
  
   })

  res.render("product-edit-form", { products : idProducto } )

},

update: function(req, res){
  let products = allProducts ();


  let productosActualizados = products.map(function(producto){
    if(producto.id == req.params.id){
      producto.name = req.body.name 
      producto.price = req.body.price
      producto.category = req.body.category 
      producto.color = req.body.color
      producto.description = req.body.description
      producto.measure = req.body.measure
      producto.image = req.body.image
    }
    return producto
  })
  
 
  writeJson(productosActualizados);

  res.redirect("/products/detalleProducto/"+req.params.id)

},

destroy: function (req, res){
  let products = allProducts ();


  let dataNueva = products.filter(function(producto){
    return producto.id != req.params.id
  })

  writeJson(dataNueva);

  
  res.redirect("/products/list");
}
}

  

module.exports = productController;