const db = require('../models');
const crypt = require('../helpers/crypt.js')
const idxCtrl = require('../controller/idxCtrl');
const jwt = require('jsonwebtoken')
require('dotenv').config();

const salt = process.env.SALT

exports.create = (req, res) => {
  db.User.create(req.body)
  .then(() => {
    res.send('signed up');
  })
  .catch(err => {
    res.send(err);
  });
};


exports.findOne = (req, res) => {
  db.User.findOne({
    where : {
      username : req.body.username
    }
  })
  .then(data => {
    // res.json(data)
    let pass = crypt(req.body.password, data.salt);
    if (pass === data.password) {
      let token = jwt.sign({id: data.id, name: data.name, username: data.username, role: data.role}, salt);
      // console.log(token);
      res.send(token)
    }
  })
  .catch(err => {
    res.send(err);
  });
};
