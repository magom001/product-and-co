import React from 'react';
import ReactDom from 'react-dom';
import { DefaultRootState, Provider } from 'react-redux';

import createStore from './store/createStore';

import MainPage from './pages/main';

// global styles
import './style/index.css';

let preloadedState = {} as DefaultRootState;
const json = document.querySelector('#preloaded-state');
if (json?.textContent) {
    preloadedState = JSON.parse(json.textContent);
}

const store = createStore(preloadedState);

ReactDom.render(
    <Provider store={store}>
        <MainPage />
    </Provider>,
    document.getElementById('root')
);
