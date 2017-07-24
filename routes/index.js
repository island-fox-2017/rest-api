var express = require('express');
var router = express.Router();
var db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signup', (req, res, next) => {
  db.User.create({
    username : req.body.username,
    password : req.body.password
  })
  .then(() => {
    res.send('signed up')
  })
})

router.post('/signin', (req, res, next) => {
  db.User.findOne({
    where : {
      username : req.body.username
    }
  })
  .then(() => {
    res.send('signed in')
  })
})


module.exports = router;
