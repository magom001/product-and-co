import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

export interface FilterState {
    pattern: string;
}

const initialState: FilterState = {
    pattern: '',
};

const filterSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setPattern(state: FilterState, action: PayloadAction<string>) {
            state.pattern = action.payload;
        },
        resetPattern(state: FilterState, action: PayloadAction<string>) {
            state.pattern = '';
        },
    },
});

export const { setPattern, resetPattern } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
