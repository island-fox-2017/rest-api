const jwt = require('jsonwebtoken');
require('dotenv').config()

let verifytokenforadmin = (req, res, next) => {
  let roleauth = jwt.verify(req.headers.token, process.env.SECRET)
  console.log(roleauth);
  if (roleauth.userrole === 'admin') {
    next()
  } else {
    res.send('Maaf anda tidak memiliki akses ke halaman ini')
  }
}

let verifytokenforadminuser = (req, res, next) => {
  let roleauth = jwt.verify(req.headers.token, process.env.SECRET)
  console.log(roleauth);
  if ((roleauth.userrole === 'admin') || (roleauth.userrole != 'admin' && roleauth.userid == req.params.id)) {
    next()
  } else {
    res.send('Maaf anda tidak memiliki akses ke halaman ini')
  }
}

module.exports = {verifytokenforadmin,verifytokenforadminuser}
