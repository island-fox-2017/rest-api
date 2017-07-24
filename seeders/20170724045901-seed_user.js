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
      name: 'Patrict',
      username: 'Pat',
      password: 'pat',
      access: 'admin',
      key: 'melon',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'adit',
      username: 'Pat',
      password: 'pat',
      access: 'admin',
      key: 'melon',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Anto',
      username: 'Pat',
      password: 'pat',
      access: 'admin',
      key: 'melon',
      createdAt: new Date(),
      updatedAt: new Date()
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
