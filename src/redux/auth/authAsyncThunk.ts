import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginUser, signinWithGoogle, signupUser, verifyUser } from "./authAPI";
import { loginType, signinWithGoogleType, signupType, verifyUserType } from "./authTypes";

export const loginUserAsync = createAsyncThunk(
  "auth/login",
  async (data: loginType) => {
    const response = await loginUser(data);
    return response;
  }
);

export const signupUserAsync = createAsyncThunk(
  "auth/signup",
  async (data: signupType) => {
    const response = await signupUser(data);
    return response;
  }
);

export const verifyUserAsync = createAsyncThunk(
  "auth/verifyUser",
  async (data: verifyUserType) => {
    const response = await verifyUser(data);
    return response;
  }
);

export const signinWithGoogleAsync = createAsyncThunk(
  "auth/signinWithGoogle",
  async (data: signinWithGoogleType) => {
    const response = await signinWithGoogle(data);
    return response;
  }
);