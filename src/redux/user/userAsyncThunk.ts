import { createAsyncThunk } from "@reduxjs/toolkit";
import { addAddress, addProductToWishlist, fetchUser, fetchUserWishlistProducts, removeAddress, removeProductFromWishlist } from "./userAPI";
import { AddAddressType } from "./userTypes";


export const fetchUserAsync = createAsyncThunk("user/fetchuser", async ({userId}:{userId:string}) => {
    const respone = await fetchUser({userId})
    return respone;
})

export const addAddressAsync = createAsyncThunk("user/addAddress", async ({address}:{address:AddAddressType}) => {
    const respone = await addAddress({address})
    return respone;
})

export const removeAddressAsync = createAsyncThunk("user/removeAddress", async ({userId, _id}:{userId:string, _id:string}) => {
    const respone = await removeAddress({userId, _id})
    return respone;
})

export const addProductToWishlistAsync = createAsyncThunk("user/addProductToWishlist", async ({userId, _id}:{userId:string, _id:string}) => {
    const respone = await addProductToWishlist({userId, _id})
    return respone;
})

export const removeProductFromWishlistAsync = createAsyncThunk("user/removeProductFromWishlist", async ({userId, _id}:{userId:string, _id:string}) => {
    const respone = await removeProductFromWishlist({userId, _id})
    return respone;
})

export const fetchUserWishlistProductsAsync = createAsyncThunk("user/fetchUserWishlistProducts", async ({userId}:{userId:string}) => {
    const respone = await fetchUserWishlistProducts({userId})
    return respone;
})