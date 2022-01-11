const express = require ('express');
const router = express.Router();

const controller = require('../controllers/usersApiController');


router.get('/users', controller.list);
router.get('/users/:id', controller.detail);
router.post('/users', controller.store);
router.delete('/users/:id', controller.delete);
router.get('/search', controller.search);


module.exports = router;