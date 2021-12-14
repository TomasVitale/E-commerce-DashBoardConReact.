const express = require ('express');
const router = express.Router();

const controller = require('../controllers/apiController');

router.get('/products', controller.list);
router.get('/products/:id', controller.detail);
router.post('/', controller.store);
router.delete('/products/:id', controller.delete);
router.get('/products/search', controller.search);
router.get('/categories', controller.categories)








module.exports = router;