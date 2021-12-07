const express = require ('express');
const router = express.Router();

const controller = require('../controllers/usersApiController');


router.get('/', controller.list);
router.get('/:id', controller.detail);
router.post('/', controller.store);
router.delete('/:id', controller.delete);
router.get('/search', controller.search);


module.exports = router;