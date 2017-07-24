'use strict';
const encrypt = require("../helper/encryptPassword")
const newKey = require("../helper/key")
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    key:DataTypes.STRING
  }, {
    hooks :{
    beforeCreate: (models) => {
      
      let key = newKey()
      models.password = encrypt(models.password,key);
      models.key = key
    }
  }
  });
  return User;
};
