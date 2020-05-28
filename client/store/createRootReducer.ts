import { combineReducers } from 'redux';

import { productsReducer, ProductsState } from '../features/products/slice';

const bypass = <T extends {}>(state: T = {} as T) => state;

interface Config {
    imagesLocation: string;
}

declare module 'react-redux' {
    interface DefaultRootState {
        config: Config;
        products: ProductsState;
    }
}

const createRootReducer = () =>
    combineReducers({
        config: bypass,
        products: productsReducer,
    });

export default createRootReducer;
