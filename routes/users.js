const express = require('express');
var router = express.Router();

var usersControllers = require('../../controllers/users');

router.get('/', usersControllers.getAllUsers)
router.get('/:id', usersControllers.getUserById)
router.post('/', usersControllers.createUser)
router.delete('/:id', usersControllers.deleteUser)
router.put('/:id', usersControllers.updateUser)

module.exports = router