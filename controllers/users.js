const db = require('../models');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(7);
var jwt = require('jsonwebtoken');

function getAllUsers(req, res, next) {
  db.User.findAll({
    order: ['id']
  })
  .then(allUsers => {
    if (allUsers.length < 1) {
      res.send('No Data User')
    } else {
      res.send(allUsers)
    }
  })
  .catch(err => res.send(err.message))
}

function getUserById(req, res, next) {
  db.User.findById(req.params.id)
  .then(userById => res.send(userById))
  .catch(err => res.send(err.message))
}

function createUser(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, salt)
  db.User.create({
    username : req.body.username,
    password : hash,
    email : req.body.email,
    role : req.body.role
  })
  .then(userCreated => res.send(userCreated))
  .catch(err => res.send(err.message))
}

function deleteUser(req, res, next) {
  db.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.send('Delete User Successfully'))
  .catch(err => res.send(err.message))
}

function updateUser(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, salt)
  db.User.findById(req.params.id)
    .then(userById => {
      db.User.update({
        username : req.body.username,
        password : hash,
        email : req.body.email,
        role : req.body.role
      },{
        where: {id : req.params.id}
      })
      .then(() => res.send('Update User Successfully'))
      .catch(err => res.send(err.message))
    })
}

function signUp(req, res, next) {
  var hash = bcrypt.hashSync(req.body.password, salt)
  db.User.create({
    username : req.body.username,
    password : hash,
    email : req.body.email,
    role : req.body.role
  })
  .then(data => res.send(data))
  .catch(err => res.send(err.message))
}

function signIn(req, res, next) {
  db.User.findOne({
    where: {username : req.body.username}
  })
  .then(data => {
    if (bcrypt.compareSync(req.body.password, data.password)) {
      var token = jwt.sign({username: data.username, role: data.role}, 'biliman')
      res.send(`Selamat Datang ${data.username}, Anda Login sebagai ${data.role}`)
    } else {
      res.send(`Invalid username or password`)
    }
  }) 
  .catch(err => res.send(err.message))
}

module.exports = {getAllUsers, getUserById, createUser, deleteUser, updateUser, signUp, signIn}