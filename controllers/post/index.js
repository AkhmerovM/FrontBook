const models = require('../../database/models');
const Response = require('../../routes/response');

class PostController {
    static async getPosts (req, res) {
        try {
            const posts = await models.Post.findAll({
                include: [
                    {
                        model: models.Comment,
                        as: 'comments'
                    },
                    {
                        model: models.User,
                        as: 'author'
                    }
                ]
            });
            return Response(res.status(200).json(Response(posts)));
        } catch (error) {
            return res.status(500).send(error.message);
        }
    }
    static async createPost (req, res) {
        try {
            const post = await models.Post.create(req.body.data);
            return res.status(201).json({
                post
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    static async updatePost (req, res) {
        try {
            const post = await models.Post.create(req.body);
            return res.status(201).json({
                post
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
    static async removePost (req, res) {
        try {
            const post = await models.Post.create(req.body);
            return res.status(201).json({
                post
            });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    };
}

module.exports = PostController;
