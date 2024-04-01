import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice"
import contentSlice from "./slices/contentSlice";
const store = configureStore({
    reducer: {
        user : useReducer,
        library: contentSlice,
    },
});

export default store