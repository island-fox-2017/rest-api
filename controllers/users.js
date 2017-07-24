const db = require('../models')


let getfindAll = (req, res, next) => {
  db.User.findAll()
  .then(users => {
    res.send({users : users});
  })
}

let getfindById = (req, res, next) => {
  let id = req.params.id
  db.User.findById(id)
  .then(user => {
    res.send({user : user})
  })
}

let postcreate = (req, res, next) => {
  db.User.create({
    username : req.body.username,
    password : req.body.password,
    createdAt : new Date(),
    updatedAt : new Date()
  })
  .then(() => {
    res.send('/api/admin post create user')
  })
}

let deletedestroy = (req, res, next) => {
  let id = req.params.id
  db.User.destroy({
    where : { id : id }
  })
  .then(() => {
    res.send('user has been deleted by ID');
  })
}

let putfindById = (req, res, next) => {
  let id = req.params.id
  db.User.findById(id)
  .then(data_user => {
    data_user.update({
      username : req.body.username,
      password : req.body.password
    })
    .then(() => {
      res.send('Data has been updated')
    })
  })
}

module.exports = {
  getfindAll,
  getfindById,
  postcreate,
  deletedestroy,
  putfindById
};
