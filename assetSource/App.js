import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MainContainer } from './modules/main/containers/MainContainer/index.jsx';
import { Provider } from 'react-redux';
import initStore from 'store';

const store = initStore();
class App extends Component {
    render () {
        return (<>
      <BrowserRouter>
          <Provider store={store}>
              <MainContainer />
          </Provider>
      </BrowserRouter>
      </>);
    }
}
export { App };
