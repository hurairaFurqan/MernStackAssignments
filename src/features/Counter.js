import { createSlice } from "@reduxjs/toolkit";


export const Counter = createSlice({
    name: "counter",
    initialState: {
        count : 0
    },
    reducers: {
        increment : (state, action) => {
            console.log('increment reducer');
            state.count += 1;
        },
        decrement: (state, action) => {
            console.log('decrement reducer');
            state.count -= 1;
        }
    }
});

export const {increment, decrement} = Counter.actions;

export default Counter.reducer;