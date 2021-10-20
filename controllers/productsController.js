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
      return products.id == req.params.id;
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
  let productos = allProducts ();

  let idProducto= products.find(function(producto){
    return products.id == req.params.id;
  
   })

  res.render("/product-edit-form", { products } )

},

update: function(req, res){
  let productos = allProducts ();


  let productosActualizados = productos.map(function(productos){
    if(productos.id == req.params.id){
      productos.name = req.body.name 
      productos.price = req.body.price
      productos.category = req.body.category 
      productos.color = req.body.color
      productos.description = req.body.description
      productos.measure = req.body.measure
      productos.image = req.body.image
    }
    return productos
  })
  
 
  writeJson(productosActualizados);

  res.redirect("/products/detalleProducto/"+req.params.id)

},

destroy: function (req, res){
  let productos = allProducts ();


  let dataNueva = productos.filter(function(producto){
    return producto.id != req.params.id
  })

  //escribo el json
  writeJson(dataNueva);

  //devuelvo una respuesta
  res.redirect("/products/list");
}
}

  

module.exports = productController;