module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Velos', [
      {
        nameRoute: 'nameRoute_1',
        lengthRoute: 11,
        crowdedPoint: 'crowdedPoint_1',
        startPoint: 'startPoint_1',
        finishPoint: 'finishPoint_1',
        authorRoute: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameRoute: 'nameRoute_2',
        lengthRoute: 14,
        crowdedPoint: 'crowdedPoint_2',
        startPoint: 'startPoint_2',
        finishPoint: 'finishPoint_2',
        authorRoute: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameRoute: 'nameRoute_3',
        lengthRoute: 14,
        crowdedPoint: 'crowdedPoint_3',
        startPoint: 'startPoint_3',
        finishPoint: 'finishPoint_3',
        authorRoute: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameRoute: 'nameRoute_4',
        lengthRoute: 14,
        crowdedPoint: 'crowdedPoint_4',
        startPoint: 'startPoint_4',
        finishPoint: 'finishPoint_4',
        authorRoute: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nameRoute: 'nameRoute_5',
        lengthRoute: 15,
        crowdedPoint: 'crowdedPoint_5',
        startPoint: 'startPoint_5',
        finishPoint: 'finishPoint_5',
        authorRoute: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Velos', null, { restartIdentity: true, truncate: true });
  },
};
