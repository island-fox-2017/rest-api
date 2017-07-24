var express = require('express');
var router = express.Router();
var db = require('../models')


/* GET users listing. */

router.get('/', (req, res, next) => {
  db.User.findAll()
  .then(data => {
    res.json(data)
  })
})


router.get('/:id', (req, res, next) => {
  db.User.findById(req.params.id)
  .then(data => {
    res.json(data)
  })
})
router.delete('/:id', (req, res, next) => {
  db.User.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(() => {
    res.send(`user ${req.params.id} deleted`)
  })
})


router.put('/:id', (req, res, next) => {
  db.User.update({
    username : req.body.username,
    password : req.body.password
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.send('updated')
  })
})


module.exports = router;
