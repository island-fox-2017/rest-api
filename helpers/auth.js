// const db = require('../models');
const crypto = require('crypto');
const hash = require('../helpers/hash');
const jwt = require('jsonwebtoken');

let authorizeAdmin = (req, res, next) => {
  let token = req.headers.token
  jwt.verify(token, 'Ve6a', (err, decoded) => {
    // console.log(decoded);
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
  jwt.verify(token, 'Ve6a', (err, decoded) => {
    console.log(decoded);
    if(decoded.role === 'admin' || decoded.id == id){
      next()
    } else {
      res.send('Please login')
    }
  })
}

module.exports = {
  authorizeAdmin,
  authorizeUser
};
