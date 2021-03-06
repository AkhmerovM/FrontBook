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
    static updatePost (post) {
        return this.put('http://localhost:9002/post', {
            data: post
        });
    }
    static removePost (id) {
        return this.delete('http://localhost:9002/post', {
            data: id
        });
    }
}
export { bodyApi };
