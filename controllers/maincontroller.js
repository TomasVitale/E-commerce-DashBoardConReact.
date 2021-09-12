const {validationResult} = require ('express-validator');
//const bcrypt = require ('bcrypt')
const User = require ('../models/User')

let mainController= {
    home:function (req,res){
          res.render("home")
      },
    detalleproducto:function (req,res){
        res.render("detalleproducto")
    },
    login:function (req,res){
        res.render("login")
    },
    
    register:function (req,res){
        res.render("register")
    },

    processRegister: function (req,res){
        const resultValidation = validationResult (req);
    
    if (resultValidation.errors.length > 0){
        return res.render("register", {
            errors: resultValidation.mapped()

        })
      }

      /*let userToCreate = {
          ...req.body,
          avatar: req.file.filename
      }*/
      User.create (req.body);
      return res.send ('ok, se guardo el usuario')
    },
    
  }


  
  module.exports = mainController;