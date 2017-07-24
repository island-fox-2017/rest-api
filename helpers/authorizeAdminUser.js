"use strict"

var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

let authorizeAdminUser = (req, res, next) => {
  var token = req.headers.token;
  jwt.verify(token, SECRET, (err, decoded) => {
    console.log(decoded);
    if ((decoded.role === 'admin') || (decoded.role != 'admin' && decoded.id == req.params.id)) {
      next()
    } else {
      res.send('Ini bukan ID Kamu')
    }
  })
}

module.exports = {
  authorizeAdminUser
};
