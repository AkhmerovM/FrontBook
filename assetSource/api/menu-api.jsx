import { BaseApi } from './base-api';

class menuApi extends BaseApi() {
    getMenu () {
        return this.get('post.json');
    }
}
export { menuApi };
