"use strict"

var jwt = require('jsonwebtoken');
var SECRET = process.env.SECRET;

let authorizeAdmin = (req, res, next) => {
  var token = req.headers.token;
  jwt.verify(token, SECRET, (err, decoded) => {
    console.log(decoded);
    if (decoded.role === 'admin') {
      next()
    } else {
      res.send('Kamu bukan admin atau ini bukan id Kamu')
    }
  })
}

module.exports = {
  authorizeAdmin
};
