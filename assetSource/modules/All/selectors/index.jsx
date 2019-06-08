import { bodyModuleName } from 'modules/body/constants';

function selectBodyModule (state) {
    return state[bodyModuleName];
}
function selectPost (state) {
    return selectBodyModule(state).post;
}
function selectPostData (state) {
    return selectPost(state).data;
}
function selectCurrentPost (state, id) {
    return selectPostData(state)[id];
}
export { selectBodyModule, selectPostData, selectPost, selectCurrentPost };
