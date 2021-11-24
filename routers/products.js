const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController.js");
const mainController = require('../controllers/maincontroller.js')


router.get("/list", productsController.list);
//router.get("/create", productsController.create);
router.get("/detail/:id", productsController.detail);
//router.post("/create", productsController.store);
router.get("/edit/:id", productsController.edit);
router.put("/edit/:id", productsController.update);
router.delete("/delete/:id" , productsController.destroy);
router.get('/shopCart', mainController.carrito);
router.get ("/crear", productsController.crear );
router.post ("/crear", productsController.crear )

module.exports = router