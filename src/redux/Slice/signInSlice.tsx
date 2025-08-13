import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { signInSliceState } from './types'
import axios from 'axios';
import { BaseURL, serviceUrls } from '../../Utils/serviceUrls';

const initialValues: signInSliceState = {
  email: '',
  password: '',
  isLoading: false,
  error: '',
  mobileNumber: '',
  otp: '',
  newPassword: '',
  token: '',
  refreshAccessToken: '',
}


export const ForgetPassword = createAsyncThunk <
any,
{otp: string; mobileNumber: string; newPassword: string},
{ rejectValue: string }
>(
  'auth/ForgetPassword',
  async ({
    otp,
    mobileNumber,
    newPassword,
  }, thunkAPI) => {
    const data = {
      otp,
      mobileNumber,
      newPassword,
    }
    try {
      const response = await axios.post(
        `${BaseURL}${serviceUrls.Auth.ForgetPassword}`,
        data
      );
      console.log('ForgetPasswordResponse', response.data);
      return response.data;
    } catch (error: any) {
      console.log('ForgetPasswordApiError', error);
      return thunkAPI.rejectWithValue(
        error?.response?.data || error.message || error.toString()
      );
    }
  }
);
export const signInSlice = createSlice({
  name: 'signInSlice',
  initialState:initialValues,
  reducers: {
   setMobileNumber: (state, action: PayloadAction<string>) => {
      state.mobileNumber = action.payload;
    },
    setOtp: (state, action: PayloadAction<string>) => {
      state.otp = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setNewPassword: (state, action: PayloadAction<string>) => {
      state.newPassword = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    setRefreshToken: (state, action: PayloadAction<string>) => {
      state.refreshAccessToken = action.payload;
    },
  },
})

export const { 
  setMobileNumber,
  setOtp,
  setPassword,
  setNewPassword,
  setToken,
  setRefreshToken,
} = signInSlice.actions

export default signInSlice.reducer