const db = require('../models');

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
  db.User.create(
    {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    }
  )
  .then( data => {
    res.send(data)
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
  db.User.update(
    {
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
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
