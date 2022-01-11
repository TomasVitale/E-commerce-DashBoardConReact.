const db = require ('../database/models');
const Op = db.sequelize.Op;


module.exports = {

// Lista de productos totales en la base + detalle de producto.


list: (req,res) => {
    db.Product.findAll()
        .then(productos => {
            return res.json({
            total: productos.length,
            data: productos,
            status: 200,
            
        })
    })
},
// Detalle de producto unico por ID en formato JSON.
detail: (req,res)=> {
    db.Product.findByPk(req.params.id)
        .then(producto => {
            return res.json({
                data: producto,
                status: 200

        })
    })
},

// Creacion de nuevo Producto.
store: (req,res) => {
    db.Product.create(req.body)
        .then(producto => {
            return res.json({
                data: producto,
                status: 200
        })
    })
},
// Elimina Producto de la base por ID.
delete: (req,res) => {
    db.Product.destroy({
        where: {
                id: req.params.id
        }
    })
        .then(response =>{
            return res.json(response)
        })
},
// Encuentra elementos relacionados con la query realizada  y muestra en formato de Array de Objetos Literales con su detalle + cant. de productos encontrados.
search:  (req,res) => {
    db.Product.findAll({
        where: {
                title: { [Op.like]: '%' + req.query.keyword + '%'}
        }
    })
        .then(productos =>{
            return res.json({
                total: productos.length,
                data: productos,
                status: 200})
        })
},
categories: (req,res) => {
    db.Category.findAll()
    .then(categories => {
        return res.json({
            total: categories.length,
            data: categories,
            status: 200

    })
})
},

};