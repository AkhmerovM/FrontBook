import { bodyModuleName } from 'modules/body/constants';

function selectBodyModule (state) {
    return state[bodyModuleName];
}
function selectData () {
    return selectBodyModule.data;
}
export { selectBodyModule, selectData };
