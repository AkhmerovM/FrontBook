var express = require('express');
var router = express.Router();
const fs = require('fs');

router.get('/', function(req, res, next) {
  const rawData = fs.readFileSync('public/post.json');
  const posts = JSON.parse(rawData);
  res.send(posts);
});
router.post('/', function(req, res, next) {
  console.log(req.body);
  const rawData = fs.readFileSync('public/post.json');
  const posts = JSON.parse(rawData);
  posts.data.list.push(JSON.parse(req.body)); // add some data
  let json = JSON.stringify(posts); // convert it back to json
  fs.writeFile('public/post.json', json, 'utf8'); // write it back
  res.send(json);
});
module.exports = router;
