const express = require('express');
const db = require('../models')

var router = express.Router()

router.get('/', (req, res) => {
  db.User.findAll()
  .then( data => {
    res.send(data);
  })
})

router.get('/:id', (req,res)=>{
  db.User.findById(req.params.id)
  .then( data =>{
    res.send(data)
  })
})

router.post('/', (req, res) =>{
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
})

router.delete('/:id', (req, res) =>{
  db.User.destroy({
    where: {id:req.params.id}
  })
  .then( () =>{
    res.send(`Anda mendelete user dengan id ${req.params.id}`)
  })
})

router.put('/:id', (req, res) => {
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
})




module.exports = router;
