const db = require('../models');

exports.create = (req, res) => {
  db.User.create(req.body)
  .then(() => {
    res.send('signed up');
  });
};


exports.findOne = (req, res) => {
  db.User.findOne({
    where : {
      username : req.body.username
    }
  })
  .then(() => {
    res.send('signed in')
  });
};