'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(
      'Rsvps', // name of source model
      'EventId', // name of key we are adding
      {
      type: Sequelize.INTEGER,
      references: { //Required field
        model: 'Events',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
      }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Rsvps', 'EventId');
  }
};
