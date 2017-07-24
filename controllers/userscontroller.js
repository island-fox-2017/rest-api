const Models = require('../models');

function getallusers(req, res, next) {
  Models.User.findAll()
  .then(dataAllUser => {
    res.send(dataAllUser)
    // res.status(200)
    //   .json({
    //     status: 'success',
    //     data: dataAllUser,
    //     message: 'Retrieved All Users'
    //   });
  })
  .catch(err => {
    return next(err)
  });
}

function createnewuser(req,res){
  Models.User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  })
  .then(function(){
    res.redirect('/users')
  })
}

function updatedatauser(req, res, next) {
  Models.User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then(function(data){
    // res.redirect('/users')
    res.send(data)
  })
  .catch(err => {
    console.log(err);
  })
}

function deletedatauser(req, res, next) {
  Models.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    res.redirect('/users')
  })
}

module.exports = {getallusers, createnewuser, updatedatauser, deletedatauser}
