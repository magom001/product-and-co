import { all, spawn } from 'redux-saga/effects';
import { watchDeleteProductRequests } from './deleteProductSaga';

export const productsRootSaga = function* () {
    yield all([spawn(watchDeleteProductRequests)]);
};
