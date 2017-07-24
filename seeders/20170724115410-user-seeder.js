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
      username  : 'user1',
      password  : 'pass1',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username  : 'user2',
      password  : 'pass2',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username  : 'user3',
      password  : 'pass3',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {})
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
