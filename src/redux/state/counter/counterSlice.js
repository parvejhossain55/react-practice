import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        setCustom: (state, action) => {
            state.value = parseInt(action.payload);
            // console.log(action);
        },
    },
});

export const { increment, decrement, setCustom } = counterSlice.actions;
export default counterSlice.reducer;
