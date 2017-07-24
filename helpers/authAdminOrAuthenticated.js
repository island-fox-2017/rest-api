'use strict'

const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function(req, res, next) {
  const decoded = jwt.verify(req.headers.token, process.env.SECRET);
  if(decoded.role == 'admin' || decoded.role == 'user') {
    if (decoded.role == 'user' && decoded.id != req.params.id)
      res.send('This is not your username');
    else
      next();
  }
  else {
    res.send('Please Sign-In First!')
  }
};
