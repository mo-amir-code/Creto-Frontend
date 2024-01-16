import { createSlice } from "@reduxjs/toolkit";
import {
  addAddressAsync,
  addProductToWishlistAsync,
  fetchUserAsync,
  fetchUserWishlistProductsAsync,
  removeAddressAsync,
  removeProductFromWishlistAsync,
} from "./userAsyncThunk";
import { AddressType, UserSliceType } from "./userTypes";
import { ActionPayloadType } from "../auth/authTypes";
import { toast } from "react-toastify";
import { RootState } from "../store";
import { ProductType } from "../../components/componentsTypes";

const initialState = {
  userInfo: {
    status: null,
    data: null,
  },
  userWishlist:{
    status: null,
    data: []
  }
} as UserSliceType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUserState(state) {
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserAsync.pending, (state) => {
        state.userInfo.status = "pending";
      })
      .addCase(fetchUserAsync.fulfilled, (state, action) => {
        const { data } = action.payload as ActionPayloadType;
        state.userInfo.status = "success";
        state.userInfo.data = data;
      })
      .addCase(fetchUserAsync.rejected, (state, action) => {
        const { message } = action.payload as ActionPayloadType;
        state.userInfo.status = "error";
        toast.error(message);
      })
      .addCase(addAddressAsync.fulfilled, (state, action) => {
        const { data } = action.payload as ActionPayloadType;
        state.userInfo.status = "success";
        (state.userInfo.data?.addresses as AddressType[]).push(data);
      })
      .addCase(addAddressAsync.rejected, (state, action) => {
        const { message } = action.payload as ActionPayloadType;
        state.userInfo.status = state.userInfo.status;
        toast.error(message);
      })
      .addCase(removeAddressAsync.fulfilled, (state, action) => {
        const {
          data: { _id },
        } = action.payload as ActionPayloadType;
        state.userInfo.status = "success";
        if (state.userInfo.data) {
          const filteredAddresses = (
            state.userInfo.data?.addresses as AddressType[]
          ).filter((address) => address._id !== _id);
          state.userInfo.data.addresses = filteredAddresses as [AddressType];
        }
      })
      .addCase(removeAddressAsync.rejected, (state, action) => {
        const { message } = action.payload as ActionPayloadType;
        state.userInfo.status = state.userInfo.status;
        toast.error(message);
      })
      .addCase(addProductToWishlistAsync.fulfilled, (state, action) => {
        const {
          data: { _id },
        } = action.payload as ActionPayloadType;
        state.userInfo.status = "success";
        (state.userInfo.data?.wishlist as string[]).push(_id);
      })
      .addCase(addProductToWishlistAsync.rejected, (state, action) => {
        const { message } = action.payload as ActionPayloadType;
        state.userInfo.status = state.userInfo.status;
        toast.error(message);
      })
      .addCase(removeProductFromWishlistAsync.fulfilled, (state, action) => {
        const {
          data: { _id },
        } = action.payload as ActionPayloadType;
        state.userInfo.status = "success";
        if (state.userInfo.data) {
          const filteredWishlist = (
            state.userInfo.data?.wishlist as [string] | []
          ).filter((wish) => wish.toString() !== _id);
          state.userInfo.data.wishlist = filteredWishlist as [string] | [];
        }
      })
      .addCase(removeProductFromWishlistAsync.rejected, (state, action) => {
        const { message } = action.payload as ActionPayloadType;
        state.userInfo.status = state.userInfo.status;
        toast.error(message);
      })
      .addCase(fetchUserWishlistProductsAsync.pending, (state) => {
        state.userWishlist.status = "pending";
      })
      .addCase(fetchUserWishlistProductsAsync.fulfilled, (state, action) => {
        const {data} = action.payload as ActionPayloadType;
        state.userWishlist.status = "success";
        state.userWishlist.data = data as [ProductType] | [];
      })
      .addCase(fetchUserWishlistProductsAsync.rejected, (state, action) => {
        const { message } = action.payload as ActionPayloadType;
        state.userWishlist.status = "error";
        toast.error(message);
      })
  },
});

export const { resetUserState } = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user.userInfo;
export const selectUserWishlist = (state: RootState) => state.user.userWishlist;

export default userSlice.reducer;
