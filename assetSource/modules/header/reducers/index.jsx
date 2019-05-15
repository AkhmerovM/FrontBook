import { actionTypes } from 'modules/body/constants';

const headerReducer = (state, action) => {
    switch (action.type) {
    case (actionTypes.setPostList):
        return {
            ...state,
            postList: action.payload
        };
    default: return {state};
    }
};
export { headerReducer };
