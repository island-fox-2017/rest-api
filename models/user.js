'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    password: {
      type:DataTypes.STRING,
      validate: {
        notEmpty: true
      }
    },
    access: DataTypes.STRING,
    key: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
