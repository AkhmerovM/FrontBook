var express = require('express');
var router = express.Router();
const fs = require('fs');
const userQuery = require('../db/user');

router.get('/', function (req, res, next) {
    // const rawData = fs.readFileSync('public/post.json');
    // const posts = JSON.parse(rawData);
    // console.log(posts);
    // res.send(posts);
  console.log(userQuery.getUsers());
});
router.post('/', function (req, res, next) {
    const rawData = fs.readFileSync('public/post.json');
    const posts = JSON.parse(rawData);
    const newPost = {
        id: posts.data.list.length,
        title: req.body.data.title,
        content: req.body.data.content
    };
    posts.data.list.push(newPost); // add some data
    let json = JSON.stringify(posts); // convert it back to json
    fs.writeFile('public/post.json', json, 'utf8'); // write it back
    res.send(json);
});
router.put('/', function (req, res, next) {
    const rawData = fs.readFileSync('public/post.json');
    const posts = JSON.parse(rawData);
    let response = posts;
    const id = req.body.data.id;
    const newPosts = posts.data.list.map((post) => {
        if (post.id === id) {
            return {
                id: id,
                title: req.body.data.title,
                content: req.body.data.content
            };
        }
        return post;
    });
    response.data.list = newPosts;
    let json = JSON.stringify(response); // convert it back to json
    fs.writeFile('public/post.json', json, 'utf8'); // write it back
    res.send(json);
});
router.delete('/', function (req, res, next) {
    const rawData = fs.readFileSync('public/post.json');
    const posts = JSON.parse(rawData);
    let response = posts;
    const id = +req.body.data;
    response.data.list = posts.data.list.filter((post) => {
        console.log(post.id !== id);
        return post.id !== id;
    });
    let json = JSON.stringify(response); // convert it back to json
    fs.writeFile('public/post.json', json, 'utf8'); // write it back
    res.send(json);
});
module.exports = router;
