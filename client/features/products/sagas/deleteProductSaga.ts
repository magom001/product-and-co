import {
    put,
    actionChannel,
    take,
    select,
    fork,
    call,
    getContext,
} from 'redux-saga/effects';
import { deleteProduct, removeProduct, Product, addProduct } from '../slice';
import { getProductById } from '../selectors';
import { dispatchNotification } from '../../notification/slice';

const deleteProductWorker = function* (product: Product) {
    try {
        yield put(removeProduct(product.id));
        const api = yield getContext('api');
        const { error } = yield call(api, product.id);

        if (error) {
            yield put(
                dispatchNotification(
                    `Failed to delete product '${product.name}'`
                )
            );
            yield put(addProduct(product));
        }
    } catch (error) {
        // TODO: log to external service
        console.error('Failed to delete', error);
    }
};

export const watchDeleteProductRequests = function* () {
    const requestChannel = yield actionChannel(deleteProduct.type);

    while (true) {
        const { payload } = yield take(requestChannel);
        const product: Product = yield select(getProductById, payload);

        yield fork(deleteProductWorker, product);
    }
};
