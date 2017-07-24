"use-strict"

var jwt =require('jsonwebtoken');
require('dotenv').config();
var signin = require('../controller/user')


function authAdmin(req,res,next) {
    var token = req.headers.token
    jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=> {
      if (decoded.role == 'admin') {
        return next()
      }else {
        res.send('not authorized')
      }
    })
 }

module.exports ={authAdmin} ;
