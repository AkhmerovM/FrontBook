import { BaseApi } from './base-api';

class bodyApi extends BaseApi {
    static getPostList () {
        return this.get('http://localhost:9002/post');
    }
    static addPost (post) {
      return this.post('http://localhost:9002/post', {
          data: post
        });
    }
}
export { bodyApi };
