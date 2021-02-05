'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'Aisyah',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Budi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Cemara',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
