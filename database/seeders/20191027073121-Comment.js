'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'Comments',
        [
            {
                userId: 1,
                postId: 2,
                comment:
          'Лучшая статья, которую я видел',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                userId: 2,
                postId: 1,
                comment:
          'Блестяще',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ],
        {}
    ),

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    }
};
