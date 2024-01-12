import { createAsyncThunk } from "@reduxjs/toolkit";
import { createPromotion, fetchPromotion } from "./promotionAPI";
import { PromotionDataType } from "./promotionTypes";


export const createPromotionAsync = createAsyncThunk("promotion/create", async ({data}:{data:PromotionDataType}) => {
    try {
        const res = await createPromotion({data});    
        return res;
    } catch (error) {
        console.error(error);
    }
});


export const fetchPromotionAsync = createAsyncThunk("promotion/fetch", async () => {
    try {
        const res = await fetchPromotion();    
        return res;
    } catch (error) {
        console.error(error);
    }
});