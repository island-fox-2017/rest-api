'use strict'

const jwt = require('jsonwebtoken');
require('dotenv').config()

module.exports = function(req, res, next){
    if(req.header.token){
      const decode = jwt.verify(req.header.token, process.env.SECRET)
      if(decode.access == 'admin'){
        next()
      }else {
        res.send('anda bukan admin')
      }
    }else {
      res.send('anda belum login')
    }
}
