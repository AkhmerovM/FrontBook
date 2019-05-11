import React from 'react';
import ReactDOM from 'react-dom';
import { MainContainer } from './modules/main/containers/MainContainer/index.jsx';
import { BrowserRouter } from 'react-router-dom';
import './store';

const root = document.querySelector('#root');

ReactDOM.render(<BrowserRouter>
    <MainContainer />
</BrowserRouter>, root);
