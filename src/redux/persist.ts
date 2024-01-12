/// <reference types="redux-persist" />
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; 
import { persistReducer } from "redux-persist";
import authSlice from "./auth/authSlice";
import productSlice from "./product/productSlice";
import promotionSlice from "./promotion/promotionSlice";

const rootReducer = combineReducers({
    auth: authSlice,
    product: productSlice,
    promotion: promotionSlice
})


const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth"],
    // transforms
}
// userTransform.ts
// export const userTransform = {
//     in: (rawUser) => {
//       // Transform raw user data, keeping only the 'username' property
//       return { username: rawUser.username };
//     },
//     out: (persistedUser) => {
//       // If you need to perform any additional transformation when rehydrating the state
//       return persistedUser;
//     },
//   };
// transforms: [createTransform(userTransform.in, userTransform.out, { whitelist: ['user'] })]


const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistedReducer}

