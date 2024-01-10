import { createSlice } from "@reduxjs/toolkit";
import { loginUserAsync, signinWithGoogleAsync, signupUserAsync, verifyUserAsync } from "./authAsyncThunk";
import { RootState } from "../store";
import { ActionPayloadType, AuthStateType, LoggedInUserType } from "./authTypes";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

const initialState = {
  isLoggedIn: false,
  authStatus: null, // pending, success, error
  loggedInUser: null
} as AuthStateType;

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleIsLoggedIn: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    },
    checkUser(state, action){
      state.authStatus = action.payload.status;
      state.loggedInUser = action.payload.data;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    resetAuthState(state){
      Object.assign(state, initialState);
    }
  },
  extraReducers: (builder) => {
    builder
       .addCase(loginUserAsync.pending, (state) => {
          state.authStatus = "pending";
       })
       .addCase(loginUserAsync.fulfilled, (state, actions) => {
          const {message, data} = actions.payload as ActionPayloadType
          state.authStatus = "success";
          state.isLoggedIn = true;
          state.loggedInUser = data; 
          localStorage.setItem("user", JSON.stringify({role:data.role, userId:data.userId}));
          toast.success(message)
          state.loggedInUser = data as LoggedInUserType;
       })
       .addCase(loginUserAsync.rejected, (state, action) => {
          state.authStatus = "error";
          state.isLoggedIn = false;
          toast.error(action.error.message)
          signOut(auth)
          localStorage.removeItem("user")
       })
       .addCase(signupUserAsync.pending, (state) => {
          state.authStatus = "pending";
       })
       .addCase(signupUserAsync.fulfilled, (state, action) => {
          const {message} = action.payload as ActionPayloadType 
          state.authStatus = "success";
          toast.success(message)
       })
       .addCase(signupUserAsync.rejected, (state, action) => {
          const {message} = action.error as ActionPayloadType
          state.authStatus = "error";
          toast.error(message);
          signOut(auth);
          localStorage.removeItem("user");
       })
       .addCase(verifyUserAsync.pending, (state) => {
          state.authStatus = "pending";
       })
       .addCase(verifyUserAsync.fulfilled, (state, action) => {
          const {message, data} = action.payload as ActionPayloadType;
          state.authStatus = "success";
          state.isLoggedIn = true;
          state.loggedInUser = data;
          localStorage.setItem("user", JSON.stringify({role:data.role, userId:data.userId}));
          toast.success(message);
       })
       .addCase(verifyUserAsync.rejected, (state, action) => {
          const {message} = action.error as ActionPayloadType;
          state.authStatus = "error";
          state.isLoggedIn = false;
          toast.error(message);
          signOut(auth);
          localStorage.removeItem("user");
       })
       .addCase(signinWithGoogleAsync.pending, (state) => {
          state.authStatus = "pending";
       })
       .addCase(signinWithGoogleAsync.fulfilled, (state, action) => {
          const {message, data} = action.payload as ActionPayloadType;
          localStorage.setItem("user", JSON.stringify({role:data.role, userId:data.userId}));
          state.authStatus = "success";
          state.isLoggedIn = true;
          state.loggedInUser = data;
          toast.success(message);
       })
       .addCase(signinWithGoogleAsync.rejected, (state, action) => {
          const {message} = action.error as ActionPayloadType;
          state.authStatus = "error";
          state.isLoggedIn = false;
          toast.error(message);
          signOut(auth)
          localStorage.removeItem("user");
       })
  },
});

export const { toggleIsLoggedIn, checkUser, resetAuthState } = authSlice.actions;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectAuthStatus = (state: RootState) => state.auth.authStatus;
export const selectLoggedInUser = (state: RootState) => state.auth.loggedInUser;

export default authSlice.reducer;
