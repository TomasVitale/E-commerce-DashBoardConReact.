const express= require('express');
const mainController = require('../controllers/main.js')

const router = express.Router();

router.get('/',mainController.home);
router.get('/home',mainController.home);
router.get('/detalleproducto',mainController.detalleproducto);
router.get('/register',mainController.register);
router.get('/login',mainController.login);



module.exports = router;