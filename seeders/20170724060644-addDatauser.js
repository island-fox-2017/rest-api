'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: "admin ",
      password :"12345",
      role :"admin",
      createdAt : new Date(),
      updatedAt :new Date()
    },{
      username: "adnin ",
      password :"12345",
      role :"user",
      createdAt : new Date(),
      updatedAt :new Date()
    },{
      username: "sukmo ",
      password :"12345",
      role :"user",
      createdAt : new Date(),
      updatedAt :new Date()
    }], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
