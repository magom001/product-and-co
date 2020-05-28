import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProduct } from '../dropzone/components/dropzoneContainer/DropzoneContainer';

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
    reducers: {
        addProduct(
            state: ProductsState,
            action: PayloadAction<IProduct & { fileName: string; id: string }>
        ) {
            state.products[action.payload.id] = {
                name: action.payload.name,
                quantity: action.payload.quantity,
                price: action.payload.price,
                colour: action.payload.colour,
                id: action.payload.id,
                imageUrl: `/assets/images/${action.payload.fileName}`,
            };
        },
    },
});

export const { addProduct } = productsSlice.actions;

export const productsReducer = productsSlice.reducer;
