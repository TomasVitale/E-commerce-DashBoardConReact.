const express= require('express');
const mainController = require('../controllers/main.js')

const router = express.Router();

router.get('/',mainController);
router.get('/home',mainController);
router.get('/detalleproducto',mainController);
router.get('/register',mainController);
router.get('/login',mainController);
router.get('/productCreate',mainController);



module.exports = router;