import React from 'react';
import ReactDom from 'react-dom';
import { DefaultRootState, Provider } from 'react-redux';

import createStore from './store/createStore';

import MainPage from './pages/main';

// global styles
import './style/index.css';

const store = createStore({} as DefaultRootState);

ReactDom.render(
    <Provider store={store}>
        <MainPage />
    </Provider>,
    document.getElementById('root')
);
