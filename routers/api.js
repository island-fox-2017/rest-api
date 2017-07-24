'use strict'

const express = require('express');
const router = express.Router();
const model = require('../models');
const controller = require('../controller/userController');
const auth = require('../helpers/auth');
const authAdmin = require('../helpers/authAdmin');



router.get('/', function(req,res){
  res.send('welcome')
})

router.post('/signup', controller.signup)

router.post('/signin', controller.signin)

router.get('/users', authAdmin , controller.findAllUser)

router.get('/users/:id', auth, controller.findByIdUser)

router.post('/users', authAdmin, controller.createUser)

router.delete('/users/:id', authAdmin, controller.deleteUser)

router.put('/users/:id', auth, controller.updateUser)




module.exports = router;

// bungkus jd token
//requiere jsonwtoken
//login get toket d jwt sign
//middleware di doc jwt
