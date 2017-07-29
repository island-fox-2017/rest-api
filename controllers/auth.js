const db = require('../models');
const crypto = require('crypto');
const hash = require('../helpers/hash');
const jwt = require('jsonwebtoken');
require('dotenv').config()

let signupcreate = function(req, res, next) {
  db.User.create({
    username : req.body.username,
    password : req.body.password,
    role : req.body.role,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(() => {
    res.send(`Create User Success : 
      username : ${req.body.username}
      role : ${req.body.role}`);
  })
}


let signinpost = (req, res, next) => {
  if(!req.body.username || !req.body.password){
    res.send('Please input your username and password')
  } else {
  db.User.findOne({
    where : { username : req.body.username }
  })
  .then(user => {
    const salt =  user.secret;
    const hashData = hash(salt, req.body.password)
    if(hashData == user.password){
      username: user.username
    } else {
      res.send('Wrong Password')
    }
    var token = jwt.sign({id: user.id, username: user.username, role: user.role}, process.env.TOKEN_KEY)
    res.send({
      msg : 'Welcome to FirstApp! :',
      token : token
    })
  })
  .catch(err => {
      res.send('User not found')
    })
  }
}

module.exports = {
  signupcreate,
  signinpost
};
