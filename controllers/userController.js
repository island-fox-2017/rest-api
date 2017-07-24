var db = require('../models');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

var createUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  db.user.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hash,
    role: 'user'
  })
  .then(data => {
    res.send(data)
    console.log(data);
  })
  .catch(err => {
    res.send(err)
    console.log(err);
  })
}

var getAllUser = (req,res) => {
  db.user.findAll({
    where: {role: 'user'}
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
    console.log(err);
  })
}

var updateUser = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  db.user.update({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hash,
    role: req.body.role
  },{where: {id:req.params.id}})
  .then(data => {
    res.send(data)
    console.log(data);
  })
}

var deleteUser = (req,res) => {
  db.user.destroy({where: {id:req.params.id}})
  .then(() => {
    res.send('delete user success')
  })
}

var getOneUser = (req,res) => {
  db.user.findOne({
    where: {id:req.params.id}
  })
  .then(data => {
    res.send(data)
  })
}

var signin = (req,res) => {
  db.user.findOne({
    where: {username: req.body.username}
  })
  .then(data => {
    if(bcrypt.compareSync(req.body.password, data.password)){
      var token = jwt.sign({username: data.username, role:data.role}, 'secret-key')
      res.send('login sukses '+ token)
    }else {
      res.send('invalid username & password')
    }
  })
}

var signup = (req,res) => {
  var hash = bcrypt.hashSync(req.body.password, salt);
  db.user.create({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: hash,
    role: req.body.role
  })
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
    console.log(err);
  })
}

module.exports = {
  createUser,
  getAllUser,
  updateUser,
  deleteUser,
  getOneUser,
  signin,
  signup
}