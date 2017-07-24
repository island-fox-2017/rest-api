var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');
var auth = require('../helpers/helper')

/* GET users listing. */
router.post('/',auth, controller.createUser);
router.get('/',auth, controller.getAllUser);
router.get('/:id', controller.getOneUser);
router.put('/:id', controller.updateUser);
router.delete('/:id',auth, controller.deleteUser);

module.exports = router;
