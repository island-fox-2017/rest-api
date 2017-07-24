'use strict'
const jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = function(req,res,next){
  if(req.header.token){
    jwt.verify(req.header.token, process.env.SECRET, function(err, decoded){
      
      next();
      // res.send('anda login sebagai '+ decoded.username)
    })
  }else {
    res.send('anda belum login')
  }
}
