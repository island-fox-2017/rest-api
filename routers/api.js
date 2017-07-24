'use strict'

const express = require('express');
const router = express.Router();
const model = require('../models');
const controller = require('../controllers/userController');
const authAdmin = require('../helpers/authAdmin');
const authAdminOrAuthenticated = require('../helpers/authAdminOrAuthenticated');

router.post('/signup', controller.signUpUser);

router.post('/signin', controller.signInUser);


router.get('/users', authAdmin, controller.findAllUser);

router.get('/users/:id', authAdminOrAuthenticated, controller.findUserById);

router.post('/users', authAdmin, controller.createUser);

router.delete('/users/:id', authAdmin, controller.deleteUser)

router.put('/users/:id', authAdminOrAuthenticated, controller.updateUser)

module.exports = router;
