var db = require('../models');
var idxCtrl = require('../controller/idxCtrl');
var jwt = require('jsonwebtoken')
var router = require('express').Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', idxCtrl.create)

router.post('/signin', idxCtrl.findOne)


module.exports = router;
