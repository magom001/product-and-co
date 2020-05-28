import { put, actionChannel, take } from 'redux-saga/effects';
import { deleteProduct, removeProduct } from '../slice';

export const watchDeleteProductRequests = function* () {
    const requestChannel = yield actionChannel(deleteProduct.type);

    while (true) {
        const { payload } = yield take(requestChannel);
        // TODO: handle deletion
        yield put(removeProduct(payload));
    }
};
