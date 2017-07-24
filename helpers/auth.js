var jwt = require('jsonwebtoken');
require('dotenv').config();

const adminOnly = (req, res, next) => {
  let verif = jwt.verify(req.headers.token, process.env.SECRET_KEY)
    if(verif.role == 'admin'){
      next();
    }else {
      res.send(`restricted page, admin only. Pls login as admin`)
  }
};

const adminAuthUser = (req, res, next) => {
  let verif = jwt.verify(req.headers.token, process.env.SECRET);
 if(verif.role == 'admin' || verif.role == 'user') {
   if (verif.role == 'user' && verif.id != req.params.id)
     res.send(`you're not authorized`);
   else
     next();
 }
 else {
   res.send(`restricted page, pls login as admin or user`)
 }
};


module.exports = {
  adminOnly,
  adminAuthUser
}
