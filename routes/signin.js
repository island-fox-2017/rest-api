var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();
var model = require('../models');
const hash = require('../helpers/crypto');


router.post('/', (req, res, next) => {
  model.User.findOne({
    where: {
      username: req.body.username
    }
  })
  .then(user => {
    // console.log(user);
    let passwordEncrypted = hash(req.body.password, user.key);
    if (user.password === passwordEncrypted) {
      var token = jwt.sign({id: user.id, username: user.username, email: user.email, role: user.role}, process.env.SECRET)
      // console.log(user);
      res.send(token)
    }
  })
})

module.exports = router;
