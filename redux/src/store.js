import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../src/components/other/counterSlice'


export const store = configureStore({
    reducer:{
        counter:counterReducer
        }
})