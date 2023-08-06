import { configureStore } from "@reduxjs/toolkit";
import multipleMath from "./multiple";


export const store = configureStore({
    reducer: {
        multiple: multipleMath
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
