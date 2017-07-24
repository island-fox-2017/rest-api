'use strict'

const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function(req, res, next) {
  jwt.verify(req.headers.token, process.env.SECRET, function(err, data) {
    if(data.role == 'admin')
      next();
    else
      res.send('Sorry, You are not admin')
  })
};
