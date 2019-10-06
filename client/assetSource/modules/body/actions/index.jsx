import { actionBodyTypes } from 'modules/body/constants';
import { bodyApi } from 'api/body-api';
import { normPostList } from 'modules/body/normalizers';

const actionSetPostList = (data) => {
    return {
        type: actionBodyTypes.setPostList,
        payload: data
    };
};
const loadPostList = () => {
    return async function (dispatch, getState) {
        const { data, errors } = await bodyApi.getPostList();
        if (!errors.length) {
            dispatch(actionSetPostList(normPostList(data.list)));
        }
    };
};
const addPost = (post) => {
    return async function (dispatch) {
      const { data, errors } = await bodyApi.addPost(post);
        if (!errors.length) {
            dispatch(actionSetPostList(normPostList(data.list)));
        }
    };
};

export { loadPostList, addPost};
