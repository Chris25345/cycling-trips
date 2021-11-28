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
    await queryInterface.bulkInsert('Reviews', [
      {
        userId: 1,
        review: 'Очень хороший маршрут_1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        review: 'Очень хороший маршрут_2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 3,
        review: 'Очень хороший маршрут_3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 5,
        review: 'Очень хороший маршрут_4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        userId: 2,
        review: 'Очень хороший маршрут_5',
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
    await queryInterface.bulkDelete('Reviews', null, { restartIdentity: true, truncate: true });
  },
};
