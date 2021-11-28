const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController.js");
const mainController = require('../controllers/maincontroller.js')


router.get("/list", productsController.list);
router.get("/detail/:id", productsController.detail);
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", productsController.update);
router.delete("/delete/:id" , productsController.destroy);
router.get('/shopCart', mainController.carrito);
router.get ("/create", productsController.create );
router.post ("/create", productsController.store );

module.exports = router;