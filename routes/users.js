var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');
/* GET users listing. */
router.post('/', controller.createUser);
router.get('/', controller.getAllUser);
router.get('/:id', controller.getOneUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

module.exports = router;
