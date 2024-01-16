/// <reference types="redux-persist" />
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; 
import {persistReducer } from "redux-persist";
import authSlice from "./auth/authSlice";
import productSlice from "./product/productSlice";
import promotionSlice from "./promotion/promotionSlice";
import userSlice from "./user/userSlice";


// Persisting storage
const authPersistConfige = {
  key: "auth",
  storage,
};

const appPersistConfige = {
  key: "user",
  storage,
  whitelist: ["userInfo"],
};

const persistedAuthReducer = persistReducer(authPersistConfige, authSlice);
const persistedUserReducer = persistReducer(appPersistConfige, userSlice);


const rootReducer = combineReducers({
    auth: persistedAuthReducer,
    product: productSlice,
    promotion: promotionSlice,
    user: persistedUserReducer,
})


  const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "user"],
}
  



const persistedReducer = persistReducer(persistConfig, rootReducer);

export {persistedReducer}

