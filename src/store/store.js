import { configureStore } from "@reduxjs/toolkit";
import Counter from "../features/Counter";
import SignIn from "../features/SignIn";

 const store = configureStore({
    reducer: {
        counter: Counter,
        signIn: SignIn,
    }
});

export default store;