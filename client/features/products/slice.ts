import { createSlice } from '@reduxjs/toolkit';

export interface Product {
    id: string;
    name: string;
    quantity: number;
    price: number;
    colour: string;
    imageUrl: string;
}

export enum LoadingState {
    loaded = 'loaded',
    loading = 'loading',
    error = 'error',
}

export interface ProductsState {
    products: Record<Product['id'], Product>;
    loadingState?: LoadingState;
}

const initialState: ProductsState = {
    products: {},
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export const productsReducer = productsSlice.reducer;
