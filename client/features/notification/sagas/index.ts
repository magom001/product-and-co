import { all, spawn } from 'redux-saga/effects';
import { watchNotificationsSaga } from './showNotificationSaga';

export const notificatitonsRootSaga = function* () {
    yield all([spawn(watchNotificationsSaga)]);
};
