'use strict'
const model = require('../models');
const jwt = require('jsonwebtoken');
const register = require('../helpers/register')
require('dotenv').config()

const findAllUser = function(req, res){
  model.User.findAll()
  .then(function(rows){
    res.send(rows);
  })
}

const findByIdUser = function(req,res){
  model.User.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(function(row){
    res.send(row);
  })
}
//
const createUser = function(req,res){
  model.User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    access: req.body.access,
    key: req.body.key
  })
  .then(function(){
    res.send('data created')
  })
}

const updateUser = function(req,res){
  model.User.update({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    access: req.body.access
  },{
    where: {
      id: req.params.id
    }
  })
  .then(function(){
    res.send('data updated')
  })
}

const deleteUser = function(req,res){
  model.User.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(function(){
    res.send('data deleted')
  })
  .catch(function(err){
    res.send(err)
  })
}

const signin = function(req,res){
  model.User.findOne({
    where:{
      username: req.body.username
    }
  })
  .then(function(row){
    const pass = register.hashPass(req.body.password, row.key)
    if(row.password == pass)
    {
      const token = jwt.sign({
        username: row.username,
        access: row.access,
        id: row.id
      }, process.env.SECRET);
      req.header.token = token;
      res.send(token)
    }
    else
    {
        res.send('pass salah')
    }
  })
  .catch(function(err){
    res.send(err)
  })
}

const signup = function(req,res){
  const key = register.randomKey()
  const pass = register.hashPass(req.body.password, key)
  model.User.create({
    name: req.body.name,
    username: req.body.username,
    password: pass,
    access: 'admin',
    key: key
  })
  .then(function(){
    res.send('signup berhasil')
  })
}


module.exports = {
  findByIdUser,
  findAllUser,
  deleteUser,
  createUser,
  updateUser,
  signup,
  signin
}
