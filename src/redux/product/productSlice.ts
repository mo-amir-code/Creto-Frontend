import { createSlice } from "@reduxjs/toolkit";
import { CartDataType, ProductSliceType } from "./productTypes";
import { addToCartAsync, deleteCartAsync, editCartAsync, fetchCartCountAsync, fetchCartDataAsync, getAllProductsAsync, getProductByIdAsync, getTopSellProductsAsync, searchByQueryAsync } from "./productAsyncThunk";
import { ActionPayloadType } from "../auth/authTypes";
import { toast } from "react-toastify";
import { RootState } from "../store";

const initialState = {
  products: {
    status: null,
    data: [],
  },
  topSellProducts: {
    status: null,
    data: [],
  },
  filteredProducts: {
    status: null,
    data: [],
    totalCount: 0,
  },
  product: {
    status: null,
    data: null,
  },
  cart:{
    status:null,
    data:[] as CartDataType[],
    count:0
  },
} as ProductSliceType;

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProductsAsync.pending, (state) => {
        state.products.status = "pending";
      })
      .addCase(getAllProductsAsync.fulfilled, (state, action) => {
        const { data } = action.payload as ActionPayloadType;
        state.products.status = "success";
        state.products.data = data;
      })
      .addCase(getAllProductsAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.products.status = "error";
        toast.error(message);
      })
      .addCase(getTopSellProductsAsync.pending, (state) => {
        state.topSellProducts.status = "pending";
      })
      .addCase(getTopSellProductsAsync.fulfilled, (state, action) => {
        const { data } = action.payload as ActionPayloadType;
        state.topSellProducts.status = "success";
        state.topSellProducts.data = data;
      })
      .addCase(getTopSellProductsAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.topSellProducts.status = "error";
        toast.error(message);
      })
      .addCase(getProductByIdAsync.pending, (state) => {
        state.product.status = "pending";
      })
      .addCase(getProductByIdAsync.fulfilled, (state, action) => {
        const { data } = action.payload as ActionPayloadType;
        state.product.status = "success";
        state.product.data = data;
      })
      .addCase(getProductByIdAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.product.status = "error";
        toast.error(message);
      })
      .addCase(addToCartAsync.pending, (state) => {
        state.cart.status = "pending";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        const {status, message} = action.payload as ActionPayloadType  
        state.cart.status = "success";
        if(status.toString() === "success"){
          state.cart.count = state.cart.count + 1;
          toast.success(message);
        }else{
          toast.warning(message);
        }
      })
      .addCase(addToCartAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.cart.status = "error";
        toast.error(message);
      })
      .addCase(fetchCartCountAsync.pending, (state) => {
        state.cart.status = "pending";
      })
      .addCase(fetchCartCountAsync.fulfilled, (state, action) => {
        const {data} = action.payload as ActionPayloadType  
        state.cart.status = "success";
        state.cart.count = data.count;
      })
      .addCase(fetchCartCountAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.cart.status = "error";
        toast.error(message);
      })
      .addCase(fetchCartDataAsync.pending, (state) => {
        state.cart.status = "pending";
      })
      .addCase(fetchCartDataAsync.fulfilled, (state, action) => {
        const {data} = action.payload as ActionPayloadType  
        state.cart.status = "success";
        state.cart.data = data;
      })
      .addCase(fetchCartDataAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.cart.status = "error";
        toast.error(message);
      })
      .addCase(editCartAsync.fulfilled, (state, action) => {
        const {data} = action.payload as ActionPayloadType;
        const cartIndex = (state.cart.data as [CartDataType])?.findIndex((cart) => cart?._id === data?.id.toString())
        if(cartIndex !== -1 && state.cart.data){
          state.cart.data[cartIndex].quantity = data.quantity;
        }
      })
      .addCase(editCartAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.cart.status = state.cart.status;
        toast.error(message);
      })
      .addCase(deleteCartAsync.fulfilled, (state, action) => {
        const {data} = action.payload as ActionPayloadType;
        const cartItems = (state.cart.data as [CartDataType])?.filter((cart) => cart?._id !== data?.cartId.toString())
        if(state && state.cart && state.cart.data){
          state.cart.data = cartItems as [CartDataType];
        }
      })
      .addCase(deleteCartAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.cart.status = state.cart.status;
        toast.error(message);
      })
      .addCase(searchByQueryAsync.pending, (state) => {
        state.filteredProducts.status = "pending";
      })
      .addCase(searchByQueryAsync.fulfilled, (state, action) => {
        const {data, totalCount} = action.payload as ActionPayloadType;
        state.filteredProducts.status = "success";
        state.filteredProducts.data = data;
        state.filteredProducts.totalCount = totalCount;
      })
      .addCase(searchByQueryAsync.rejected, (state, action) => {
        const { message } = action.error as ActionPayloadType;
        state.filteredProducts.status = "error";
        toast.error(message);
      })
      
  },
});

export const selectProducts = (state: RootState) => state.product.products;
export const selectTopSellProducts = (state: RootState) => state.product.topSellProducts;
export const selectFilterProducts = (state: RootState) => state.product.filteredProducts;
export const selectProduct = (state: RootState) => state.product.product;
export const selectCart = (state: RootState) => state.product.cart;

export default productSlice.reducer;
