import { createSlice } from "@reduxjs/toolkit";
import { AppSliceType } from "./appTypes";
import { RootState } from "../store";
import { makePaymentRequestAsync } from "./appAsyncThunk";
import { toast } from "react-toastify";
import {loadStripe} from '@stripe/stripe-js';
import { ActionPayloadType } from "../auth/authTypes";


const initialState = {
   makePayment: false, 
   paymentStatus: null,
   selectedAddress: 0
} as AppSliceType


const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setMakePayment: (state, action) => {
            state.makePayment = action.payload;
        },
        setPaymentStatus: (state, action) => {
            state.paymentStatus = action.payload;
        },
        setSelectedAddress: (state, action) => {
            state.selectedAddress = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(makePaymentRequestAsync.fulfilled, (state, action) => {
            const {data} = action.payload as ActionPayloadType;
            state.makePayment = true;
            makePayment({id:data.id});
          })
          .addCase(makePaymentRequestAsync.rejected, (state) => {
            state.makePayment = false;
            toast.error("Something went wrong!");
          })
    }
})

export const {setMakePayment, setPaymentStatus, setSelectedAddress} = appSlice.actions;
export const selectMakePayment = (state: RootState) => state.app.makePayment;
export const selectPaymentStatus = (state: RootState) => state.app.paymentStatus;
export const selectSelectedAddress = (state: RootState) => state.app.selectedAddress;

export default appSlice.reducer;

const makePayment = async ({id}:{id:string}) => {
    try {
        const stripe = await loadStripe(import.meta.env.VITE_STRIPE_PUBLISH_KEY);
        const result = await stripe?.redirectToCheckout({
            sessionId: id
        });
        if(result?.error){
            toast.error(result.error.message);
        }
    } catch (error) {
        console.error(error);
    }
}