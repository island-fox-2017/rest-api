var express = require('express');
var router = express.Router();
var controller = require('../controllers/userController');

router.post('/signup', controller.signup);
router.post('/signin', controller.signin);

module.exports = router;
