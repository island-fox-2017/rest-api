const express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/users');
var helper = require('../helpers/authorization')

router.get('/', helper.admin, usersControllers.getAllUsers)
router.get('/:id', helper.authenticated, usersControllers.getUserById)
router.post('/', helper.admin, usersControllers.createUser)
router.delete('/:id', helper.admin, usersControllers.deleteUser)
router.put('/:id', helper.authenticated, usersControllers.updateUser)

module.exports = router