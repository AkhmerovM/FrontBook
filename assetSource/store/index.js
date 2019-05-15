import { compose, createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';
import { bodyReducer } from 'modules/body/reducers';

export default function initStore () {
    const reduxCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(bodyReducer, reduxCompose(applyMiddleware(thunk)));

    if (module.hot) {
        module.hot.accept('./reducer.js', () => {
            store.replaceReducer(reducer);
        });
    }
    return store;
}
