const express= require('express');
const path = require("path");
const router = express.Router();
const multer = require ('multer');
const {body} = require ('express-validator');

const validations = [
    body("nombre").notEmpty().withMessage ('Tienes que escribir un nombre y apellido'),
    body("email").notEmpty().withMessage ('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage ('Debes escribir un formato de email valido'),
    body("telefono").notEmpty().withMessage ('Tienes que escribir un nombre y apellido'),
    body("password").notEmpty().withMessage('Tienes que escribir una contraseña'),
]

const storage = multer.diskStorage ({
    destination: (req, file, cb)=>{
       cb(null, './public/images/avatar');
    },
    filename: (req, file, cb)=>{
        let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;  
        cb(null, fileName )
    }
})

const uploadFile = multer ({storage})

const mainController = require('../controllers/maincontroller.js');

router.get('/',mainController.home);
router.get('/home',mainController.home);
router.get('/detalleproducto',mainController.detalleproducto);
router.get('/register',mainController.register);
router.post('/register', validations, mainController.processRegister);
router.get('/login',mainController.login);
router.post('/login',mainController.processLogin);




module.exports = router;