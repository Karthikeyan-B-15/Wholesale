import { configureStore } from "@reduxjs/toolkit";
import  wholeSlice from "./silce";
export const store=configureStore({
    reducer:{
        text:wholeSlice
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

