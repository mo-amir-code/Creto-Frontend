import { createAsyncThunk } from "@reduxjs/toolkit";
import { makePaymentRequest } from "./appAPI";
import { OrderType } from "./appTypes";


export const makePaymentRequestAsync = createAsyncThunk("app/makePaymentRequest", async ({data}:{data:OrderType}) => {
    const response = await makePaymentRequest({data});
    return response;
})