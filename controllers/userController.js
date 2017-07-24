'use strict'

const model = require('../models');
const jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
require('dotenv').config()

let signUpUser = function(req, res) {
  let salt = bcrypt.genSaltSync(10);
  let encryptedPassword = bcrypt.hashSync(req.body.password, salt);
  model.User.create(
  {
    username: req.body.username,
    password: encryptedPassword,
    role: req.body.role,
    salt: salt
  })
  .then(() => {
    res.send('Create Success!');
  })
  .catch(() => {
    res.send('Create Failed!')
  })
}

let signInUser = function(req, res) {
  model.User.findOne(
  {
    where: { username: req.body.username }
  })
  .then(result => {
    if(result.password == bcrypt.hashSync(req.body.password, result.salt)) {
      const token = jwt.sign({
        id: result.id,
        username: req.body.username,
        role: result.role
      }, process.env.SECRET);
      req.headers.token = token;
      res.send(token)
    } else {
      res.send("Password salah")
    }
  })
  .catch(err => {
    res.send(err + " / User Not Found")
  })
}



let findAllUser = function(req, res) {
  model.User.findAll()
  .then(result => {
    res.send(result);
  })
}

let findUserById = function(req, res) {
  model.User.findById(req.params.id)
  .then(result => {
    res.send(result);
  })
}

let createUser = function(req, res) {
  model.User.create(
  {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  })
  .then(() => {
    res.send('Create Success!')
  })
  .catch(err => {
    res.send(err);
  })
}

let deleteUser = function(req, res) {
  model.User.destroy({ where: { id: req.params.id } })
  .then(() => {
    res.send('Delete Success!');
  })
  .catch(err => {
    res.send(err);
  })
}

let updateUser = function(req, res) {
  model.User.update(
  {
    username: req.body.username,
    password: req.body.password,
    role: req.body.role
  },
  {
    where: { id: req.params.id }
  })
  .then(() => {
    res.send('Update Success!');
  })
  .catch(err => {
    res.send(err);
  })
}

module.exports = {
  findAllUser,
  findUserById,
  createUser,
  deleteUser,
  updateUser,
  signUpUser,
  signInUser
};
