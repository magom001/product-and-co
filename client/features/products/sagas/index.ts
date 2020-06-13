import { all, spawn, setContext } from 'redux-saga/effects';
import { watchDeleteProductRequests } from './deleteProductSaga';
import { deleteProduct as deleteProductApi } from '../../../api';

export const productsRootSaga = function* () {
    yield setContext({
        api: deleteProductApi
    });

    yield all([spawn(watchDeleteProductRequests)]);
};
