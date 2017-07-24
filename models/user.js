'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    // username: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    // email: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    // password: DataTypes.STRING
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
