import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { addToCart, deleteCart, editCart, fetchCartCount, fetchCartData, getAllProducts, getProductById, getRelatedProducts, getTopSellProducts, searchByQuery, searchQuery } from "./productAPI";
import { CartDataType } from "./productTypes";


export const getAllProductsAsync = createAsyncThunk("product/getAllProducts", async () => {
    try {
        const res = await getAllProducts();
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const getTopSellProductsAsync = createAsyncThunk("product/getTopSellProducts", async () => {
    try {
        const res = await getTopSellProducts();
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const getProductByIdAsync = createAsyncThunk("product/getProductById", async ({productId}:{productId: string}) => {
    try {
        const res = await getProductById({productId});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const getRelatedProductsAsync = createAsyncThunk("product/getRelatedProducts", async ({type}:{type: string}) => {
    try {
        const res = await getRelatedProducts({type});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const addToCartAsync = createAsyncThunk("product/addToCart", async ({data}:{data: CartDataType}) => {
    try {
        const res = await addToCart({data});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const fetchCartCountAsync = createAsyncThunk("product/fetchCartCount", async ({userId}:{userId:string }) => {
    try {
        const res = await fetchCartCount({userId});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const fetchCartDataAsync = createAsyncThunk("product/fetchCartData", async ({userId}:{userId:string }) => {
    try {
        const res = await fetchCartData({userId});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const editCartAsync = createAsyncThunk("product/editCart", async ({quantity, cartId}:{quantity:number, cartId:string }) => {
    try {
        const res = await editCart({quantity, cartId});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const deleteCartAsync = createAsyncThunk("product/deleteCart", async ({cartId}:{cartId:string }) => {
    try {
        const res = await deleteCart({cartId});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const searchByQueryAsync = createAsyncThunk("product/searchByQuery", async ({query}:{query:string }) => {
    try {
        const res = await searchByQuery({query});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})

export const searchQueryAsync = createAsyncThunk("product/searchQuery", async ({type}:{type:string }) => {
    try {
        const res = await searchQuery({type});
        return res;
    } catch (error) {
        console.error(error);
        toast.error("Something went wrong")
    }
})