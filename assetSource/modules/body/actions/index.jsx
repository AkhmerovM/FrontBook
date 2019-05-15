import { actionTypes } from 'modules/body/constants';
import { bodyApi } from 'api/body-api';

const actionSetPostList = (data) => {
    return {
        type: actionTypes.setPostList,
        payload: data
    };
};
const loadPostList = () => {
    return async function (dispatch, getState) {
      const { data, errors } = await bodyApi.getPostList();
        console.log(data);
        console.log(actionSetPostList(data));
        if (!errors) {
            dispatch(actionSetPostList(data));
        }
    };
};
export { loadPostList };
