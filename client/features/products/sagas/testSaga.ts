import { call } from 'redux-saga/effects';

export const testSaga = function* () {
    yield call(console.log, 'test saga');
};
