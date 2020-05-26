import { all, spawn, ForkEffect, AllEffect } from 'redux-saga/effects';

/** IMPORT SAGAS */
import { productsRootSaga } from '../features/products/index';
/** END IMPORT SAGAS */

type SagaType = () => Generator<AllEffect<ForkEffect<never>>, void, unknown>;

const sagas: SagaType[] = [
    // Add feature sagas here
    productsRootSaga,
];

/**
 * @generator
 * @function rootSaga
 */
export default function* rootSaga() {
    yield all(sagas.map(spawn));
}
