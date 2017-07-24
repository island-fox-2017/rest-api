'use strict';

const generate = require('../helpers/generateKey');
const hash = require('../helpers/crypto');

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    role: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
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
