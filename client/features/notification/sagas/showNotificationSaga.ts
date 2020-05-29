import { put, actionChannel, take, delay } from 'redux-saga/effects';

import {
    setMessage,
    clearMessage,
    dispatchNotification,
} from '../../notification/slice';

export const watchNotificationsSaga = function* () {
    const requestChannel = yield actionChannel(dispatchNotification.type);

    while (true) {
        const { payload } = yield take(requestChannel);
        yield put(setMessage(payload));
        yield take(clearMessage);
        yield delay(200);
    }
};
