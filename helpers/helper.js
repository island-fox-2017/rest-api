var jwt = require('jsonwebtoken');
require('dotenv').config()

let validation = (req,res,next) =>{
  let roleType = jwt.verify(req.headers.token, process.env.SECRET_KEY)
  if (roleType.role == 'admin') {  
    next()
  }else {
    res.send('you not authorized')
  }
};

module.exports = validation;