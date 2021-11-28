module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Velos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nameRoute: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      lengthRoute: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      crowdedPoint: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      startPoint: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      finishPoint: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      authorRoute: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id',
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Velos');
  },
};
