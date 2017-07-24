const db = require('../models');


exports.findAll = (req, res) => {
  db.User.findAll()
  .then(data => {
    res.json(data);
  });
};


exports.findById = (req, res) => {
  db.User.findById(req.params.id)
  .then(data => {
    res.json(data);
  });
};


exports.create = (req, res) => {
  db.User.create(req.body)
  .then(() => {
    res.send('create a user');
  });
};


exports.delete = (req, res) => {
  db.User.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(() => {
    res.send(`user ${req.params.id} deleted`);
  });
};


exports.update= (req, res) => {
  db.User.update({
    username : req.body.username,
    password : req.body.password
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(() => {
    res.send('updated');
  });
};
