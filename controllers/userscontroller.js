const Models = require('../models');
const Sequelize = require('sequelize')

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

function getsingleuserbyid(req, res, next) {
  Models.User.findById(req.params.id)
  .then(dataUser => {
    console.log(dataUser);
    res.send(dataUser)
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
  .then((data) => {
    res.status(200).json({message: 'Success create'})
  })
  .catch((err) => {
    return res.status(400).send({
      message: err.message
    })
  })
}

function updatedatauser(req, res, next) {
  Models.User.update(req.body, {
    where: {
      id: req.params.id
    }
  })
  .then((data) =>{
    res.status(200).json({message: 'Data updated'})
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
    res.status(200).json({message: 'Data deleted'})
  })
}

module.exports = {
  getallusers,
  getsingleuserbyid,
  createnewuser,
  updatedatauser,
  deletedatauser
}
