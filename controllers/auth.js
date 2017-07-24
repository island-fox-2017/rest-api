const db = require('../models')

let signupcreate = function(req, res, next) {
  db.User.create({
    username : req.body.username,
    password : req.body.password,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(() => {
    res.send('/api/signup post create user');
  })
}


let signinpost = (req, res, next) => {
  if(!req.body.username || !req.body.password){
    res.send('Please input username and password')
  } else {
  db.User.findOne({
    where : { username : req.body.username }
  })
  .then(user => {
    const password = req.body.password
    if(password == user.password){
      username : user.username
    } else {
      res.send('Wrong Password')
    }
    res.send('Welcome to FirstApp')
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
