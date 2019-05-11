import { createStore } from 'redux';
import { actionTypes } from 'modules/body/constants';

const reducer = (state = initialState, action) => {
    switch (action.type) {
    case (actionTypes.setPostList):
        return {
            ...state,
            postList: action.payload
        };
    default:
        return { state };
    }
};

const initialState = {
    data: []
};

const store = createStore(reducer, initialState);

const actionGet = {
    type: actionTypes.setPostList,
    payload: [1, 2, 3, 4, 5, 5, 6, 7]
};

console.log(store.getState());
store.dispatch(actionGet);
console.log(store.getState());
