import { configureStore } from "@reduxjs/toolkit";
import buttonReducer from "../Slice/Slice.js"

export const store=configureStore({
    reducer:{
        button:buttonReducer
    }
});