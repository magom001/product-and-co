import { all, takeEvery } from 'redux-saga/effects';
import { testSaga } from './testSaga';

export const productsRootSaga = function* () {
    yield all([takeEvery('TEST', testSaga)]);
};
