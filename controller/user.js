var models = require("../models")
const encrypt = require("../helper/encryptPassword")
const newKey = require("../helper/key")
var jwt = require('jsonwebtoken');
require('dotenv').config();
// const auth = require('../helper/auth')




function getAllUser(req,res){
  models.User.findAll().then(dataUsers =>{
    return res.send(dataUsers)
  })
}

function getByid(req,res){
  models.User.findById(req.params.id).then(dataId=>{
    return res.send(dataId)
  })
}

function postUser(req,res){
    if(req.body.username != '' && req.body.password != '' && req.body.role != ''){
      models.User.create(req.body).then(()=>(res.send('berhasil input')))
    }else {
      res.send('mohon isi field yang kosong')
    }

}

function deleteUser(req,res) {
  models.User.destroy({
    where :{id :req.params.id}
  }).then(()=>res.redirect("/users"))
}

function updateUser(req,res){
  models.User.update(
      {
        username :req.body.username,
        password :req.body.password,
        role:req.body.role
      },{where : {id : req.params.id}}
  ).then(()=>(res.redirect('/users')))
}

function signin(req,res){
  models.User.findOne({
    where : {username : req.body.username}
  }).then(data =>{
    if (data.password == encrypt(req.body.password,data.key)) {

      var token = jwt.sign({
        id :data.id,
        username : data.username,
        role : data.role
      },process.env.SECRET_KEY);
      res.send(token)

    }
  })
}
module.exports = {getAllUser , getByid, postUser , deleteUser,updateUser,signin};
