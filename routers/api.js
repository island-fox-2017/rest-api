const express = require('express');
const controller = require('../controllers/usersControllers')
const auth = require('../helpers/auth')

var router = express.Router()

router.post('/signup', controller.signUp)

router.post('/signin', controller.signIn)

router.get('/users', auth.adminOnly, controller.findAll)

router.get('/users/:id', auth.adminAuthUser, controller.findById)

router.post('/users', auth.adminOnly, controller.addUser)

router.delete('/users/:id', auth.adminOnly, controller.deleteUser)

router.put('/users/:id', auth.adminAuthUser, controller.updateUser)


module.exports = router;
