const db = require('../models');
const bcrypt = require('bcrypt');
const garam = bcrypt.genSaltSync(10);

const findAll = (req, res) => {
    db.User.findAll()
    .then( data => {
      res.send(data);
    })
}

const findById =  (req,res)=>{
  db.User.findById(req.params.id)
  .then( data =>{
    res.send(data)
  })
}

const addUser = (req, res) =>{
  let hash = bcrypt.hashSync(req.body.password, garam);
  db.User.create(
    {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hash
    }
  )
  .then( data => {
    res.send(data)
  })
  .catch( err =>{
    res.status(400).send(err)
  })
}

const deleteUser = (req, res) =>{
  db.User.destroy({
    where: {id:req.params.id}
  })
  .then( () =>{
    res.send(`Anda mendelete user dengan id ${req.params.id}`)
  })
}

const updateUser =  (req, res) => {
  let hash = bcrypt.hashSync(req.body.password, garam)
  db.User.update(
    {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: hash
    },{
      where: {id:req.params.id}
    }
  )
  .then(data =>{
    res.send(`data dengan id ${req.params.id} sudah di update`)
  })
}

module.exports = {
  findAll,
  findById,
  addUser,
  deleteUser,
  updateUser
}
