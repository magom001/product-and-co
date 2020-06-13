import { expectSaga } from 'redux-saga-test-plan';
import { select, call, getContext } from 'redux-saga/effects';

import { watchDeleteProductRequests } from './deleteProductSaga';
import { getProductById } from '../selectors';
import { deleteProduct, removeProduct, addProduct, Product } from '../slice';
import { deleteProduct as deleteProductApi } from '../../../api';

describe('Products > sagas > deleteProductSaga', () => {
    const productId = 'xyz';
    const product = { id: productId } as Product;

    it('should delete the product', () => {
        const deleteProductApiMock = jest.fn(() => Promise.resolve({}));

        return expectSaga(watchDeleteProductRequests)
            .provide([
                [select(getProductById, productId), product],
                [call(deleteProductApi, productId), deleteProductApiMock],
                [getContext('api'), deleteProductApiMock],
            ])
            .dispatch(deleteProduct(productId))
            .put(removeProduct(productId))
            .not.put(addProduct(product))
            .run();
    });

    it('should revert optimistic ui update if api fails', () => {
        const deleteProductApiMock = jest.fn(() =>
            Promise.resolve({ error: new Error() })
        );
        return expectSaga(watchDeleteProductRequests)
            .provide([
                [select(getProductById, productId), product],
                [call(deleteProductApi, productId), deleteProductApiMock],
                [getContext('api'), deleteProductApiMock],
            ])
            .dispatch(deleteProduct(productId))
            .put(removeProduct(productId))
            .put(addProduct(product))
            .run();
    });
});
