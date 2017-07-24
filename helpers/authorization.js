require('dotenv').config();
var jwt = require('jsonwebtoken');
const secret = process.env.SECRET;

function admin(req, res, next) {
  let token = req.headers.token
  if (token) {
    jwt.verify(token, secret, (err, data) => {
      // console.log(data);
      if (data.role == "admin") {
        next()
      } else {
        res.send('Only Admin Can Access')
      }
    })
  } else {
    res.send('Please Sign In To Access')
  }
}

function authenticated(req, res, next) {
  let token = req.headers.token
  if (token) {
    jwt.verify(token, secret, (err, data) => {
      if (data.role == "admin" || data.id == req.params.id) {
        next()
      } else {
        res.send('Only Admin and Authenticated User Can Access')
      }
    })
  } else {
    res.send('Please Sign In to Access')
  }
}

module.exports = {admin, authenticated}
