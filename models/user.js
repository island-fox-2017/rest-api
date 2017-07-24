'use strict';

const generate = require('../helpers/generateSalt');
const hash = require('../helpers/hash');


module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
  },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
  },
    role: DataTypes.STRING,
    secret: DataTypes.STRING
  },{
    hooks: {
      beforeCreate : models => {
        const salt = generate();
        const hashData = hash(salt, models.password);
        models.password = hashData;
        models.secret = salt; 
      }
    }
  });
  return User;
};
