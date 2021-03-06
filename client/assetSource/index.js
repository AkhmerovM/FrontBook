import React from 'react';
import ReactDOM from 'react-dom';
import './store';
import { App } from 'App';

const root = document.querySelector('#root');

ReactDOM.render(<App />, root);

if (module.hot) {
    module.hot.accept('App', () => {
        ReactDOM.render(<App />, root);
    });
}
