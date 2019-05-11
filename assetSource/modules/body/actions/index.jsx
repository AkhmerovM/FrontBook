import { actionTypes } from 'modules/body/constants';
import { bodyApi } from 'api/body-api';

const actionSetPostList = (data) => {
    return {
        type: actionTypes.setPostList,
        payload: data
    };
};
const setPostList = () => {
    const { data } = bodyApi.getPostList();
    dispatch(actionSetPostList(data));
};
