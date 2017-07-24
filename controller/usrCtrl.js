const db = require('../models');
const idxCtrl = require('../controller/idxCtrl');


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
  })
  .catch(err => {
    // res.send(err)
    return res.status(400).send({
      message: err.message
    })
  })
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


exports.update = (req, res, next) => {
  db.User.update(req.body, {
    where : {
      id : req.params.id
    }
  })
  .then(() => {
    res.send('updated');
  });
};
