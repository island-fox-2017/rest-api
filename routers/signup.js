const express = require('express');
const router = express.Router();
const signupcont = require('../controllers/signupcontroller')

router.post('/', signupcont.signupnewuser);

module.exports = router;
