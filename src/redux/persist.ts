/// <reference types="redux-persist" />
import { combineReducers } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'; 
import {persistReducer } from "redux-persist";
import authSlice from "./auth/authSlice";
import productSlice from "./product/productSlice";
import promotionSlice from "./promotion/promotionSlice";
import userSlice from "./user/userSlice";
import appSlice from "./app/appSlice"

// Persisting storage
const appPersistConfige = {
  key: "app",
  storage,
  whitelist: ["makePayment", "paymentStatus"]
};

const authPersistConfige = {
  key: "auth",
  storage,
};

const userPersistConfige = {
  key: "user",
  storage,
  whitelist: ["userInfo"],
};

const persistedAppReducer = persistReducer(appPersistConfige, appSlice);
const persistedAuthReducer = persistReducer(authPersistConfige, authSlice);
const persistedUserReducer = persistReducer(userPersistConfige, userSlice);


const rootReducer = combineReducers({
    app: persistedAppReducer,
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

