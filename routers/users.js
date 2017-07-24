const express = require('express');
const controller = require('../controllers/usersControllers')

var router = express.Router()

router.get('/', controller.findAll)

router.get('/:id', controller.findById)

router.post('/', controller.addUser)

router.delete('/:id', controller.deleteUser)

router.put('/:id', controller.updateUser)


module.exports = router;
