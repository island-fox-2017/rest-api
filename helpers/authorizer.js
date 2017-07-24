'use strict'


const jwt = require('jsonwebtoken');
const salt = process.env.SALT;

let isAdmin = (req, res, next) => {
  let token = req.headers.token;

  if (token == undefined) return res.send('login dulu om..')

  jwt.verify(token, salt, (err, decrypted) => {
    // console.log(decrypted);
    if(decrypted.role === 'admin') {
      next();
    } else {
      res.send('Insufficient right');
    }
  });
};


let isCurrentUser = (req, res, next) => {
  let token = req.headers.token;

  if (token == undefined) return res.send('login dulu om..');

  jwt.verify(token, salt, (err, decrypted) => {
    if(decrypted.role === 'user') {
      if(decrypted.id == req.params.id) next();
    } else {
      res.send('Not your account');
    }
  });
  // console.log('bukan user');
};


let isBoth = (req, res, next) => {
  let admin = isAdmin(req, res, next);
  console.log('admin');
  console.log(admin);
  let currentUser = isCurrentUser(req, res, next);
  if(admin || currentUser) {
    // console.log('isBoth');
    next();
  } else {
    res.send('Not user');
  }
};




module.exports = {
  isAdmin,
  isCurrentUser,
  isBoth
}