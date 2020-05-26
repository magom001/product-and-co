import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import createRootReducer from './createRootReducer';
import rootSaga from './rootSaga';

import { DefaultRootState } from 'react-redux';

export default (preloadedState: DefaultRootState) => {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
        reducer: createRootReducer(),
        preloadedState,
        devTools: __DEV__,
        middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
    });

    sagaMiddleware.run(rootSaga);

    return store;
};
