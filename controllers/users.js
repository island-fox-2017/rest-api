"use strict"

var model = require('../models');

let findAllUsers = (req, res) => {
  model.User.findAll()
  .then(data_users => {
    res.send(data_users);
  })
}

let findById = (req, res) => {
  model.User.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data_user => {
    res.send(data_user);
  })
}

let createUser = (req, res) => {
  model.User.create({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role
  })
  .then(data_create => {
    res.send(data_create);
  })
}

let editDataUser = (req, res) => {
  console.log(req.body);
  model.User.update({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    role: req.body.role,
    key: req.body.key
  }, {
    where: {
      id: req.params.id
    }
  })
  .then(data_update => {
    res.send('Data update success!');
  })
}

let deleteDataUser = (req, res) => {
  model.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data_deleted => {
    res.send('delete success')
  })
}


module.exports = {
  findAllUsers,
  findById,
  createUser,
  editDataUser,
  deleteDataUser
}
