var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function(req, res, next) {
  const rawData = fs.readFileSync('public/post.json');
  const posts = JSON.parse(rawData);
  res.send(posts);
});
router.post('/', function(req, res, next) {
  const rawData = fs.readFileSync('public/post.json');
  const posts = JSON.parse(rawData);
  const newPost = {
    id: posts.data.list.length,
    title: 'Ура Ура',
    text: req.body.text,
  }
  posts.data.list.push(newPost); // add some data
  let json = JSON.stringify(posts); // convert it back to json
  fs.writeFile('public/post.json', json, 'utf8'); // write it back
  res.send(json);
});
module.exports = router;
