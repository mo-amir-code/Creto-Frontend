import { createSlice } from "@reduxjs/toolkit";
import {
  addAddressAsync,
  fetchUserAsync,
  removeAddressAsync,
} from "./userAsyncThunk";
import { AddressType, UserSliceType } from "./userTypes";
import { ActionPayloadType } from "../auth/authTypes";
import { toast } from "react-toastify";
import { RootState } from "../store";

const initialState = {
  userInfo: {
    status: null,
    data: null,
  },
} as UserSliceType;

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
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
          ).filter((address) =>address._id !== _id);
          state.userInfo.data.addresses = filteredAddresses as [AddressType];
        }
      })
      .addCase(removeAddressAsync.rejected, (state, action) => {
        const { message } = action.payload as ActionPayloadType;
        state.userInfo.status = state.userInfo.status;
        toast.error(message);
      });
  },
});

export const {} = userSlice.actions;

export const selectUserInfo = (state: RootState) => state.user.userInfo;

export default userSlice.reducer;
