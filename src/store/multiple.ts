import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
    value: any
}

const initialState: InitialState = {
    value: 0
}

export const multipleMath = createSlice({
    name: "multiple",
    initialState,
    reducers: {
        setAdd: (state, action) => {
            state.value += action.payload;
        },
        setReduced: (state, action) => {
            state.value -= action.payload;
        }
    }
});

export const {setAdd, setReduced} = multipleMath.actions;
export default multipleMath.reducer;