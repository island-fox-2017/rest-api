var express = require('express');
var router = express.Router();
var Controller = require('../controllers/users');
var model = require('../models');

router.post('/', Controller.createUser);

module.exports = router;
