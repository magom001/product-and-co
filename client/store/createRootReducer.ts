import { combineReducers } from 'redux';

// const bypass = <T extends {}>(state: T = {} as T) => state;

declare module 'react-redux' {
    interface DefaultRootState {}
}

const createRootReducer = () =>
    combineReducers({
        test: (state = 'ok') => state,
    });

export default createRootReducer;
