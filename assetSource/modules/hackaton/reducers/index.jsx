import { actionBodyTypes } from 'modules/hackaton/constants';

const initialState = {
    post: {
        data: {}
    }
};

const bodyReducer = (state = initialState, action) => {
    switch (action.type) {
    case (actionBodyTypes.setPostList):
        return {
            ...state,
            post: {
                ...state.post,
                data: {
                    ...action.payload
                }
            }
        };
    default: return { ...state };
    }
};
export { bodyReducer };
