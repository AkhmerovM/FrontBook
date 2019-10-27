'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
        'Users',
        [
            {
                firstname: 'Maxim',
                lastname: 'Akhmerov',
                email: 'akhmerov@mail.ru',
                passwd: '12321',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                firstname: 'Ivan',
                lastname: 'Ivanov',
                email: 'ivan@mail.ru',
                passwd: '12321',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ],
        {}
    ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete('Users', null, {})
};
