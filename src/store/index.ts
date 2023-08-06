import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducer";
import accountSlice from "./slice";

export const store = configureStore({
    reducer: {
        account: accountSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
