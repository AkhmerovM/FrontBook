import { actionHeaderTypes } from 'modules/header/constants';

const headerReducer = (state = {}, action) => {
    switch (action.type) {
    case (actionHeaderTypes.setPostList):
        return {
            ...state,
            postList: action.payload
        };
    default: return { state };
    }
};
export { headerReducer };
