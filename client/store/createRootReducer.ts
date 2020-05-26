import { combineReducers } from 'redux';

import { productsReducer, ProductsState } from '../features/products/slice';

// const bypass = <T extends {}>(state: T = {} as T) => state;

declare module 'react-redux' {
    interface DefaultRootState {
        products: ProductsState;
    }
}

const createRootReducer = () =>
    combineReducers({
        products: productsReducer,
    });

export default createRootReducer;
