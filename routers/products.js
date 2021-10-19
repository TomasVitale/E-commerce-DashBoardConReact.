const express = require("express");
const router = express.Router();
const productController = require("../controllers/productsController.js");


router.get("/products", productsController.products);
router.get("/products/create", productsController.create);
router.get("/products/:id", productsController.detail);
router.post("/products", productsController.store);
router.get("/products/:id/edit", productsController.edit);
router.put("/products/:id", productsController.update);
router.delete("/products/:id" , productsController.destroy);

module.exports = router