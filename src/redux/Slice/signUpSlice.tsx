import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {signUpSliceState } from './types'
import axios from 'axios';
import { serviceUrls, BaseURL} from '../../Utils/serviceUrls';
import { RootState } from '../store';
import { Alert } from 'react-native';
import axiosInstance from '../../Utils/axiosClient';

const initialValues: signUpSliceState = {
    mobileNumber: '',
    otp: '',
    password: '',
    confirmPassword: '',
    referralCode:  '',
    isLoading: false,
    error: '',
    isEighteenPlus: false,
    isNotify: false,
    ipAddress: '173.191.40.28',
    registrationType: 'mobile',
    deviceInfo: '',
}


export const GetOtp = createAsyncThunk(
    'auth/getOtp',
    async (_, thunkAPI) => {
      const state = thunkAPI.getState() as RootState;
      const mobileNumber = state.signUpSlice.mobileNumber;
      const data = {
        mobileNumber: mobileNumber,
      };
      try {
        const response = await axiosInstance.post(serviceUrls.Auth.getOtp,
          data,
        );

        console.log('getOtpResponse', response.data);
        return response.data;
      } catch (error: any) {
        console.log('getOtpResponseApiError', error);
        return thunkAPI.rejectWithValue(
          error?.response?.data || error.message || error.toString()
        );
      }
    }
  );

export const VerifyOtp = createAsyncThunk <
  any,
  signUpSliceState,
  { rejectValue: string }
  >(
    'auth/VerifyOtp',
    async ({
        mobileNumber,
        otp,
        referralCode,
        navigation,
    }, thunkAPI) => {
       const state = thunkAPI.getState() as RootState;
       const ipAddress = state.signUpSlice.ipAddress;
       const deviceInfo = state.signUpSlice.deviceInfo;
       const registrationType = state.signUpSlice.registrationType;
       const paramsData = {
        ipAddress,
        deviceInfo,
        registrationType,
       }
      const data = {
        mobileNumber,
        otp,
        referralCode,
      }
      try {
        const response = await axiosInstance.post(serviceUrls.Auth.register,
          data,
          {
            params: paramsData,
          },
        );
        if (response.status === 200) {
          Alert.alert(response.data.message);
          thunkAPI.dispatch(navigation.navigate('SignUpSetPassword'));
        }
        console.log('VerifyOtpResponse', response.data);
        return response.data;
      } catch (error: any) {
        console.log('VerifyOtpResponseApiError', error);
        return thunkAPI.rejectWithValue(
          error?.response?.data || error.message || error.toString()
        );
      }
    }
  );

  export const SignUpComplete = createAsyncThunk <
  any,
  signUpSliceState,
  { rejectValue: string }
  >(
    'auth/SignUPComplete',
    async ({
        mobileNumber,
        password,
        referralCode,
    }, thunkAPI) => {
      const data = {
        mobileNumber,
        password,
        referralCode,
      }
      try {
        const response = await axios.post(
          `${BaseURL}${serviceUrls.Auth.getOtp}`,
          data
        );
        if (response.status === 200) {
          Alert.alert(response.data.message);
        }
        console.log('signUpCompleteResponse', response.data);
        return response.data;
      } catch (error: any) {
        console.log('signUpCompleteResponseApiError', error);
        return thunkAPI.rejectWithValue(
          error?.response?.data || error.message || error.toString()
        );
      }
    }
  );

export const signUpSlice = createSlice({
  name: 'signUpSlice',
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
    setConfirmPassword: (state, action: PayloadAction<string>) => {
      state.confirmPassword = action.payload;
    },
    setReferralCode: (state, action: PayloadAction<string>) => {
      state.referralCode = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    setIsEighteenPlus: (state, action: PayloadAction<boolean>) => {
      state.isEighteenPlus = action.payload;
    },
    setIsNotify: (state, action: PayloadAction<boolean>) => {
      state.isNotify = action.payload;
    },
    setIpAddress: (state, action: PayloadAction<string>) => {
      state.ipAddress = action.payload;
    },
    setDeviceInfo: (state, action: PayloadAction<string>) => {
      state.deviceInfo = action.payload;
    },
    setRegistrationType: (state, action: PayloadAction<string>) => {
      state.registrationType = action.payload;
    },
  },
})

export const {
    setMobileNumber,
    setOtp,
    setPassword,
    setReferralCode,
    setIsLoading,
    setError,
    setIsEighteenPlus,
    setIsNotify,
    setIpAddress,
    setConfirmPassword,
    setDeviceInfo,
    setRegistrationType,
 } = signUpSlice.actions

export default signUpSlice.reducer