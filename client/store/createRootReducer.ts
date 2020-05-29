import { combineReducers } from 'redux';

import { productsReducer, ProductsState } from '../features/products/slice';
import { NotificationState } from '../features/notification/slice';

import { notificationReducer } from '../features/notification/slice';

const bypass = <T extends {}>(state: T = {} as T) => state;

interface Config {
    imagesLocation: string;
}

declare module 'react-redux' {
    interface DefaultRootState {
        config: Config;
        products: ProductsState;
        notification: NotificationState;
    }
}

const createRootReducer = () =>
    combineReducers({
        config: bypass,
        products: productsReducer,
        notification: notificationReducer,
    });

export default createRootReducer;
