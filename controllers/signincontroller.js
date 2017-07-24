const Models = require('../models');
const genSalt = require('../helpers/generatesalt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

function signin(req, res, next) {
  let username = req.body.username
  let password = req.body.password

  Models.User.find({
    where: {username: username}
  })
  .then(user=> {
    var saltUserLogin = user.salt
    var passwordUserLogin = req.body.password

    var getPasswordUser = genSalt.createHash(passwordUserLogin, saltUserLogin)
    // console.log('ini password dari form    ',getPasswordUser);
    // console.log('ini password dari database',user.password);
    if(user.password == getPasswordUser) {
      var token = jwt.sign({userid: user.id, username: user.username, userrole:user.role}, process.env.SECRET);
      res.send(token);
    } else {
      res.send('Maaf username atau password salah')
    }
  })
  .catch(err => {
    return res.status(400).send({
      message: err.message
    })
  })
}

module.exports = {signin}
