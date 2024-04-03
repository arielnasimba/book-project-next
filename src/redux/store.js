import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./slices/userSlice"
import contentSlice from "./slices/contentSlice";
import usersManagementSlice from "./slices/usersManagementSlice";
const store = configureStore({
    reducer: {
        user : useReducer,
        library: contentSlice,
        usersManagement : usersManagementSlice,
    },
});

export default store