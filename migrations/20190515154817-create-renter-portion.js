'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('renterPortions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      month: {
        type: Sequelize.STRING
      },
      amount: {
        type: Sequelize.FLOAT
      },
      billID: {
        type: Sequelize.INTEGER
      },
      renterID: {
        type: Sequelize.INTEGER,
        foreignKey: true,
      },
      renterName: {
        type: Sequelize.STRING
      },
      billName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      paid: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('renterPortions');
  }
};