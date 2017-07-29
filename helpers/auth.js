const crypto = require('crypto');
const hash = require('../helpers/hash');
const jwt = require('jsonwebtoken');
require('dotenv').config()

let authorizeAdmin = (req, res, next) => {
  let token = req.headers.token
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if(decoded.role === 'admin'){
      next()
    } else {
      res.send('You are not ADMINISTRATOR');
    }
  })
}

let authorizeUser = (req, res, next) => {
  let token = req.headers.token
  let id = req.params.id
  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if(decoded.role === 'admin' || decoded.id == id){
      next()
    } else {
      res.send('You are not authorized.')
    }
  })
}

module.exports = {
  authorizeAdmin,
  authorizeUser
};
