'use strict'
const jwt = require('jsonwebtoken')
require('dotenv').config()


module.exports = function(req,res,next){
  if(req.header.token){
    jwt.verify(req.header.token, process.env.SECRET, function(err, decode){
      if(decode.access == 'admin' || req.params.id == decode.id){
        next();
      }else {
        res.send('anda bukan admin, atau ini bukan data anda')
      }
      // res.send('anda login sebagai '+ decoded.username)
    })
  }else {
    res.send('anda belum login')
  }
}
