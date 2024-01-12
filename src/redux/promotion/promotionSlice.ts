import { createSlice } from "@reduxjs/toolkit";
import { PromotionInitialStateType } from "./promotionTypes";
import { RootState } from "../store";
import { createPromotionAsync, fetchPromotionAsync } from "./promotionAsyncThunk";
import { ActionPayloadType } from "../auth/authTypes";
import { toast } from "react-toastify";

const initialState = {
    promotions:{
        status: null,
        data: []
    }
    
} as PromotionInitialStateType;

const promotionSlice = createSlice({
    name: "promotion",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(createPromotionAsync.pending, (state) => {
            state.promotions.status = "pending";
        })
        .addCase(createPromotionAsync.fulfilled, (state, action) => {
            const {message} = action.payload as ActionPayloadType
            state.promotions.status = "success";
            toast.success(message);
        })
        .addCase(createPromotionAsync.rejected, (state, action) => {
          const {message} = action.error as ActionPayloadType
          state.promotions.status = "error";
          toast.error(message);
        })
        .addCase(fetchPromotionAsync.pending, (state) => {
            state.promotions.status = "pending";
        })
        .addCase(fetchPromotionAsync.fulfilled, (state, action) => {
            const {data} = action.payload as ActionPayloadType
            state.promotions.status = "success";
            state.promotions.data = data;
        })
        .addCase(fetchPromotionAsync.rejected, (state, action) => {
          const {message} = action.error as ActionPayloadType
          state.promotions.status = "error";
          toast.error(message);
        })

    }    
})


export const {} = promotionSlice.actions;

export const selectPromotions = (state: RootState) => state.promotion.promotions;


export default promotionSlice.reducer;