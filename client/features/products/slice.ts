import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

export interface Product {
    id: string;
    name: string;
    quantity: number;
    price: number;
    colour: string;
    fileName: string;
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
    reducers: {
        addProduct(state: ProductsState, action: PayloadAction<Product>) {
            state.products[action.payload.id] = {
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price,
                colour: action.payload.colour,
                id: action.payload.id,
                fileName: action.payload.fileName,
            };
        },
        removeProduct(state: ProductsState, action: PayloadAction<string>) {
            state.products = Object.keys(state.products).reduce(
                (prev, current) => {
                    if (current !== action.payload) {
                        prev[current] = state.products[current];
                    }

                    return prev;
                },
                {} as Record<Product['id'], Product>
            );
        },
    },
});

export const deleteProduct = createAction<string>('@PRODUCT/DELETE');

export const { addProduct, removeProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
