import { createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

export interface NotificationState {
    message: string | null;
}

const initialState: NotificationState = {
    message: null,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setMessage(state: NotificationState, action: PayloadAction<string>) {
            state.message = action.payload;
        },
        clearMessage(state: NotificationState) {
            state.message = null;
        },
    },
});

export const dispatchNotification = createAction<string>(
    '@NOTIFICATION/DISPATCH'
);
export const { clearMessage, setMessage } = notificationSlice.actions;

export const notificationReducer = notificationSlice.reducer;
