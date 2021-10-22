const bcryptjs = require ('bcryptjs');
const {validationResult} = require ('express-validator');
const User = require ('../models/User')
const multer = require ('multer');

let mainController= {
    home:function (req,res){
          res.render("home")
      },
    detalleproducto:function (req,res){
        res.render("detail")
    },
    
    
    register:function (req,res){
        res.render("register")
    },

    processRegister: function (req,res){
        const resultValidation = validationResult (req);
    
    if (resultValidation.errors.length > 0){
        return res.render("register", {
            errors: resultValidation.mapped(),
            oldData: req.body

        });
      }
     let userInDb = User.findByField ("email", req.body.email);

      if (userInDb) {
          return res.render("register", {
            errors: {
                email: {
                    msg: "este email ya esta registrado"
                }

            },
            oldData: req.body

        });
      }

    
      let userToCreate = {
         ...req.body,
        password: bcryptjs.hashSync(req.body.password,10)
        //avatar: req.file.filename
      }
      let userCreate = User.create (userToCreate);

      return res.redirect ('/login')
    },

    login:function (req,res){
        res.render("login")
    },

    processLogin: function (req, res){
        let userToLogin = User.findByField('email', req.body.email);

                           
        if (userToLogin){
            let correctPassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
            if (correctPassword){
                return res.send( 'ok puedes ingresar')
            }
            return res.render('login', {
                errors: {
                    email: {
                        msg: "las credenciales son invalidas"
                    }

        }
    });
}
        return res.render('login', {
            errors: {
                email: {
                    msg: "No se encuentra este email"
                }

            },
            
        })
    }

    }
    
  


  
  module.exports = mainController;