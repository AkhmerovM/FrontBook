import { BaseApi } from './base-api';
const fs = require('fs');

class bodyApi extends BaseApi {
    static getPostList () {
        return this.get('/api/v1/post.json');
    }
    static addPost (post) {
      console.log(fs);
      fs.readFile('/api/v1/post.json', 'utf8', function readFileCallback (err, data) {
            if (err) {
                console.log(err);
            } else {
                let obj = JSON.parse(data); // now it an object
                obj.table.push(post); // add some data
                let json = JSON.stringify(obj); // convert it back to json
                fs.writeFile('/api/v1/post.json', json, 'utf8'); // write it back
            }
        });
        return this.get('/api/v1/post.json');
    }
}
export { bodyApi };
