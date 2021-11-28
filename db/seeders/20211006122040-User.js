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
    await queryInterface.bulkInsert('Users', [
      {
        username: 'username_1',
        email: 'email_1@mail.ru',
        password: 'password_1',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'username_2',
        email: 'email_2@mail.ru',
        password: 'password_2',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'username_3',
        email: 'email_3@mail.ru',
        password: 'password_3',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'username_4',
        email: 'email_4@mail.ru',
        password: 'password_4',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'username_5',
        email: 'email_5@mail.ru',
        password: 'password_5',
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
    await queryInterface.bulkDelete('Users', null, { restartIdentity: true, truncate: true });
  },
};
