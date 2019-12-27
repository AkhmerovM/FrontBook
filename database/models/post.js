'use strict';
module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
        userId: DataTypes.INTEGER
    }, {});
    Post.associate = function (models) {
    // associations can be defined here
        Post.hasMany(models.Comment, {
            foreignKey: 'postId',
            as: 'comments',
            onDelete: 'CASCADE'
        });
        Post.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'author',
            onDelete: 'CASCADE'
        });
    };
    return Post;
};

