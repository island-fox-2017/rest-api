var express = require('express');
var router = express.Router();
var db = require('../models')
var controllers = require('../controllers/users')

router.get('/', controllers.getfindAll);

router.get('/:id', controllers.getfindById);

router.post('/', controllers.postcreate)

router.delete('/:id', controllers.deletedestroy)

router.put('/:id', controllers.putfindById)

module.exports = router;
