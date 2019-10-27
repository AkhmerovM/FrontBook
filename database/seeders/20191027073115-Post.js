'use strict';

module.exports = {
    up: (queryInterface, Sequelize) =>
        queryInterface.bulkInsert(
            'Posts',
            [
                {
                    userId: 1,
                    title: 'Frontbook',
                    content:
            '<p>На данном стайте будет представлена информация об основных направлениях front-end разработки.</p><p>Например,</p><ul><li>типизации</li><li>интеграция с back-end\'ом</li><li>тестирование</li><li>необходимые инструменты</li><li>популярные библиотеки</li><li>верстка</li><li>дизайн</li></ul><p>С каждым разом статьи будут пополнять на данном сайте. После появления аутентификации у каждого пользователя будет возможность написать свою статью. После успешной модерации статья будет общедоступна.</p><p>Скоро официальное открытие сайта, мы рады вас приветствовать!</p>',
                    createdAt: new Date(),
                    updatedAt: new Date()
                },
                {
                    userId: 2,
                    title: 'Что еще надо сделать',
                    content:
            '<p>Базу данных добавить с юзерами и ролями + круд для статей</p><p>Добавление картинок в статьи</p><p>регистрацию через oauth</p><p><strong>подобрать дизайн</strong></p><p>перейти на editor js</p>',
                    createdAt: new Date(),
                    updatedAt: new Date()
                }
            ],

            {}
        ),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete("Posts", null, {})
};
