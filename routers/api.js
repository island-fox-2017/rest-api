'use strict'

const express = require('express');
const router = express.Router();
const model = require('../models');
const controller = require('../controller/userController');

router.get('/', function(req,res){
  res.send('welcome')
})

router.post('/signup', controller.signup)

router.post('/signin', controller.signin)

router.get('/users', controller.findAllUser)

router.get('/users/:id', controller.findByIdUser)

router.post('/users', controller.createUser)

router.delete('/users/:id', controller.deleteUser)

router.put('/users/:id', controller.updateUser)




module.exports = router;

// bungkus jd token
//requiere jsonwtoken
//login get toket d jwt sign
//middleware di doc jwt
