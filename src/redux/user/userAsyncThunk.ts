import { createAsyncThunk } from "@reduxjs/toolkit";
import { addAddress, fetchUser, removeAddress } from "./userAPI";
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