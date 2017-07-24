const express = require('express');
var router = express.Router();
var usersControllers = require('../controllers/users');

router.post('/signup', usersControllers.signUp)
router.post('/signin', usersControllers.signIn)

module.exports = router