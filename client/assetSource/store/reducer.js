import { bodyReducer } from 'modules/body/reducers';
import { headerReducer } from 'modules/header/reducers';
import { combineReducers } from 'redux';
import { bodyModuleName } from 'modules/body/constants';
import { headerModuleName } from 'modules/header/constants';

export default combineReducers({
    [bodyModuleName]: bodyReducer,
    [headerModuleName]: headerReducer
});
