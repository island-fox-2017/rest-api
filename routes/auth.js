const express = require('express');
const router = express.Router();
const controllers = require('../controllers/auth') 
const db = require('../models');

//sign up with new user info
router.post('/signup', controllers.signupcreate);


router.post('/signin', controllers.signinpost);


module.exports = router;
