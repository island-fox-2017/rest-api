var express = require('express');
var router = express.Router();
var db = require('../models');
var controller = require('../controller/userController');
//var signin = require('../helpers/signin')
var userauth = require('../helpers/userauth')
var adminauth = require('../helpers/adminauth')

//var jwt = require('jsonwebtoken')
//require('dotenv').config()




// yg get utk signup - tp ga pake
// router.get('/signup', function(req, res){
//   res.render('signup')
// })

// yg post utk sign up
// Ok sip,, sign up cuma butuh = username, pass, email
// 1. !!
router.post('/signup', controller.signupFunction)
// router.post('/signup', function(req,res){
//   let salt = signin.random()
//   let encryptedPassword = signin.cryptoPass(req.body.password, salt)
//   db.User.create({
//     username: req.body.username,
//     password: encryptedPassword,
//     email: req.body.email,
//     role: 'admin',
//     salt: salt
//   })
//   .then(function(user) {
//     res.send(user)
//   })
// })


// post utk sign in
// blm test ,, v 1
// router.post('/signin', function(req,res){
//   let username = req.body.username
//   let password = req.body.password
//   db.User.find({
//     where: { username: username, password: password}
//   })
//   .then(users => {
//     res.send(users)
//   })
// })

// post sign in v2
// OK dah sukses.. login( isi username + pass )
// 2.
router.post('/signin', controller.signinFunction)
// router.post('/signin', function(req,res){
//   let username = req.body.username
//   db.User.findOne({
//     where: {username: username}
//   })
//   .then (user => {
//     let encryptedPassword = signin.cryptoPass(req.body.password, user.salt)
//     if(user.password == encryptedPassword) {
//       let token = jwt.sign({
//         username: user.username,
//         role: user.role
//       }, 'abcd')
//       res.send({
//         msg: 'login sukses',
//         token: token
//       })
//     }
//     })
//   })

// disini baru klo mo di test.. di postman
// token yg kita kirim masukin di form utk di test




// utk jwt verify nya
// sementara kt bikin di setiap yg mau di authorize ...
// router.get('/protected', function(req,res){
//   jwt.verify(req.headers.token, 'abcd', (err,data)=> {
//     if(!err){
//       console.log(data);
//       req.username = data.username
//       next()
//     } else {
//       res.send(err)
//     } (req,res) => {
//       res.send(`Hi User ${req.username}`)
//     }
//   })
// })


// get api/users    (admin only)
// ok
// 3.
router.get('/users', adminauth, controller.getAll)
// router.get('/users', function(req,res){
//   db.User.findAll()
//   .then (users => {
//     res.send(users)
//   })
// })
//dah msk controller

// get single user info ( admin + authencticated user)
// router.get('/users/:id', function(req,res){
//   db.User.find({
//     where: {id: req.params.id}
//   })
//   res.render('userbyid')
// })
          // menggunakan send: users..
// 4.
router.get('/users/:id', userauth, controller.getById)
// router.get('/users/:id', function(req,res){
//   // ok dah test isaa..
//   db.User.find({
//     where: {id: req.params.id}
//   })
//   .then(users => {
//     res.send(users)
//   })
// })
//dah msk controller



//  post /api/users => create a user(admin only)
// ok dah isa, blm admin doank..
// 5.
router.post('/users', adminauth, controller.createOne)
// router.post('/users', function(req,res){
//   db.User.create({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//     role: req.body.role,
//     salt: req.body.salt
//   })
// .then(function(users) {
//   // res.redirect('/api/users')
//   res.send(users)
//   })
// })
//dah msk controller




//    delete /api/users/:id     delete a user(admin only)
// 6.
router.delete('/users/:id', adminauth, controller.deleteOne)
// router.delete('/users/:id', function(req,res){
//   db.User.destroy({
//     where: {id: req.params.id}
//   })
//   .then (function() {
//     // delete yg di send apa? => kirim string aja ckp..
//     res.send("deleted")
//   })
// })

//  put api/users/:id update a user with new info ( admin + authencticated user)
// 7.
router.put('/users/:id', userauth, controller.updateOne)
// router.put('/users/:id', function(req,res){
//   db.User.update({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//     role: req.body.role
//   }, {  where: {id: req.params.id}
//   })
//   .then (function (user) {
//     res.send(user)
//   })
// })
// ok dah jg.. tapi user = [1]
// klo sukses dia kirim [1], klo gagal biasane [0]
// klo mo kirim datanya.. bisa findone, or pake req.body. yg kt mau kirim..


// - OK done..
// table User = username, password, role, email

module.exports = router;
