import { configureStore } from "@reduxjs/toolkit";
import { persistedReducer } from "./persist";
import { persistStore } from "redux-persist";

export const store = configureStore({
    reducer:persistedReducer
})

export const persist = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch