import { createSlice } from "@reduxjs/toolkit";
import { getSignin } from "../Services";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    user: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getSignin.fulfilled, (state, action) => {
        console.log('in getSignin fulfilled state with state', state, ' user', state.user);
        state.user = action.payload;
        console.log('in getSignin fulfilled state with action', action, 'payload', action.payload);
    });
    builder.addCase(getSignin.rejected, (state, action) => {
        state.user = [];
    })
  }
});


export default signInSlice.reducer;
