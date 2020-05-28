import { DefaultRootState } from 'react-redux';
import { Product } from './slice';

export const getProductById = (state: DefaultRootState, id: Product['id']) =>
    state.products.products[id];
