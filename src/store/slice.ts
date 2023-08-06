import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    value: any
}

const initialState: InitialState = {
    value: 0
}

export const accountSlice = createSlice({
    name: "account",
    initialState,
    reducers: {
        setDeposit: (state, action) => {
            state.value += action.payload;
        },
        setWithdraw: (state, action) => {
            state.value -= action.payload;
        }
    }
});

export const {setDeposit, setWithdraw} = accountSlice.actions;
export default accountSlice.reducer;