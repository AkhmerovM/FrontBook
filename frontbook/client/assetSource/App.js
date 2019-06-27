import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import initStore from '/imports/frontbook/client/store';
import { MainContainer } from 'modules/main/containers/MainContainer';

const store = initStore();
class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <Provider store={store}>
                    <MainContainer />
                </Provider>
            </BrowserRouter>
        );
    }
}
export { App };
