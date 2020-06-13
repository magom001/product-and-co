import { all, spawn } from 'redux-saga/effects';

/** IMPORT SAGAS */
import { productsRootSaga } from '../features/products';
import { notificatitonsRootSaga } from '../features/notification/';
/** END IMPORT SAGAS */

type SagaType = () => Generator<any>;

const sagas: SagaType[] = [
    // Add feature sagas here
    productsRootSaga,
    notificatitonsRootSaga,
];

/**
 * @generator
 * @function rootSaga
 */
export default function* rootSaga() {
    yield all(sagas.map(spawn));
}
