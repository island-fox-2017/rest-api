var express = require('express');
var router = express.Router();
var userController = require('../controllers/users');
var middleWare = require('../helpers/authorizeAdmin');
var middleWare2 = require('../helpers/authorizeAdminUser');
var model = require('../models');

/* GET users listing. */
router.get('/', middleWare.authorizeAdmin, userController.findAllUsers);

router.get('/:id', middleWare2.authorizeAdminUser, userController.findById);

router.post('/', middleWare.authorizeAdmin, userController.createUser);

router.delete('/:id', middleWare.authorizeAdmin, userController.deleteDataUser);

router.put('/:id', userController.editDataUser);


module.exports = router;
