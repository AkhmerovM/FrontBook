import { BaseApi } from './base-api';

class bodyApi extends BaseApi {
    static getPostList () {
        return BaseApi.get('/api/v1/post.json');
    }
}
export { bodyApi };
