import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CommonSliceState } from './types'

const initialValues: CommonSliceState = {
  howToPlayVisible: false,
}

export const CommonSlice = createSlice({
  name: 'CommonSlice',
  initialState:initialValues,
  reducers: {
    showHowToPlay: state => {
      state.howToPlayVisible = true;
    },
    hideHowToPlay: state => {
      state.howToPlayVisible = false;
    },
   
  },
})

export const { showHowToPlay, hideHowToPlay } = CommonSlice.actions

export default CommonSlice.reducer