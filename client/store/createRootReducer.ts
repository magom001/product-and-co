import { combineReducers } from 'redux';

import { productsReducer, ProductsState } from '../features/products/slice';
import { NotificationState } from '../features/notification/slice';

import { notificationReducer } from '../features/notification/slice';
import { FilterState } from '../features/filter/slice';
import { filterRootReducer } from '../features/filter';

const bypass = <T extends {}>(state: T = {} as T) => state;

interface Config {
    imagesLocation: string;
}

declare module 'react-redux' {
    interface DefaultRootState {
        config: Config;
        products: ProductsState;
        notification: NotificationState;
        filter: FilterState;
    }
}

const createRootReducer = () =>
    combineReducers({
        config: bypass,
        products: productsReducer,
        notification: notificationReducer,
        filter: filterRootReducer,
    });

export default createRootReducer;
