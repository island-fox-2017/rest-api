const Models = require('../models');

function signupnewuser(req,res){
  Models.User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  })
  .then((data) => {
    res.status(200).json({message: 'Success create'})
  })
  .catch((err) => {
    return res.status(400).send({
      message: err.message
    })
  })
}

module.exports = {signupnewuser}
