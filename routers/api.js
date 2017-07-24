'use strict'


const express = require('express');
const router = express.Router();
const model = require('../models')


router.get('/', function(req,res){
  res.send('welcome')
})

router.get('/users', function(req,res){
  model.User.findAll()
  .then(function(rows){
    res.send(rows);
  })
})

router.get('/users/:id', function(req,res){
  model.User.findById(req.params.id)
  .then(function(row){
    res.send(row);
  })
})

router.post('/users', function(req,res){
  model.User.create({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    access: req.body.access,
    key: req.body.key
  })
  .then(function(){
    res.send('data masuk')
  })
})

router.delete('/users/:id', function(req,res){
  model.User.delete({
    where:{
      id: req.params.id
    }
  })
  .then(function(){
    res.send('data deleted')
  })
})

router.put('/users/:id', function(req,res){
  model.User.update({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password,
    access: req.body.access,
    key: req.body.key
  },{
    where:
    {
      id:id
    }
  })
  .then(function(){
    res.send('data updated')
  })
})




module.exports = router;
