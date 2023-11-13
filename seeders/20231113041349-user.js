'use strict';

const bcrypt = require('bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      name: 'diqi',
      email: 'diqi@example.com',
      password: bcrypt.hashSync("diqi123", 10),
      address: "jalan tropodo",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'clone',
      email: 'clone@example.com',
      password: bcrypt.hashSync("clone123", 10),
      address: "jalan clone",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
