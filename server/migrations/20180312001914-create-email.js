'use strict';
module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Emails', {
      email: {
        type: Sequelize.TEXT,
        primaryKey: true,
        allowNull: false
      },
      verified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      portfolio: {
        type: Sequelize.JSON,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Emails'),
};