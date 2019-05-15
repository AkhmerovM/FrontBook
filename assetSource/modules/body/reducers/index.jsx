import { actionTypes } from 'modules/body/constants';

const bodyReducer = (state, action) => {
    console.log(action.type);
    switch (action.type) {
    case (actionTypes.setPostList):
        console.log('asd');
        return {
            ...state,
            postList: action.payload
        };
    default: return { state };
    }
};
export { bodyReducer };
