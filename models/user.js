'use strict';

const generate = require('../helpers/generateKey');
const hash = require('../helpers/crypto');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    key: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: user => {
        let key = generate();
        user.password = hash(user.password, key);
        user.key = key;
      }
    }
  });
  return User;
};
