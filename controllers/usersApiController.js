const db = require ('../database/models');
const Op = db.sequelize.Op;

module.exports = {

        // Lista de Usuarios totales en la base + la informacion de cada uno.
        list: (req,res) => {
            db.Usuario.findAll()
                .then(usuarios => {
                    return res.json({
                        total: usuarios.length,
                        data: usuarios,
                        status: 200
        
                })
            })
        },
        // Detalle de Usuario unico por ID en formato JSON ( objeto literal)
        detail: (req,res)=> {
            db.Usuario.FindByPk(req.params.id)
                .then(usuario => {
                    return res.json({
                        data: usuario,
                        status: 200
        
                })
            })
        },
        
        // Creacion de nuevo Usuarios
        store: (req,res) => {
            db.Usuario.create(req.body)
                .then(usuario => {
                    return res.json({
                        data: usuario,
                        status: 200
                })
            })
        },
        // Elimina el Usuario de la base por ID
        delete: (req,res) => {
            db.Usuario.destroy({
                where: {
                        id: req.params.id
                }
            })
                .then(response =>{
                    return res.json(response)
                })
        },
        // Encuentra elementos relacionados con la query realizada por el usuario y los presenta en formato de Array de Objetos Literales con su detalle
        search:  (req,res) => {
            db.Usuario.findAll({
                where: {
                        title: { [Op.like]: '%' + req.query.keyword + '%'}
                }
            })
                .then(usuarios =>{
                    return res.json({
                        total: usuarios.length,
                        data: usuarios,
                        status: 200})
                })
        },
        


};