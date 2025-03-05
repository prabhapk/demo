import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { threeDigitState } from './types'



const initialvalues: threeDigitState = {
  singleDigitA: "",
  singleDigitB: "",
  singleDigitC: "",
  singleACount: 3,
  singleBCount: 3,
  singleCCount: 3,
}
export const threeDigitSlice = createSlice({
  name: 'threeDigit',
  initialState:initialvalues,
  reducers: {
    setSingleDigitA: (state, action: PayloadAction<any>) => {
      state.singleDigitA = action.payload;
      if (action.payload !== null) state.singleACount = 3;
    },
    setSingleDigitB: (state, action: PayloadAction<any>) => {
      state.singleDigitB = action.payload;
      if (action.payload !== null) state.singleBCount = 3;
    },
    setSingleDigitC: (state, action: PayloadAction<any>) => {
      state.singleDigitC = action.payload;
      if (action.payload !== null) state.singleCCount = 3;
    },
    setSingleACount: (state, action: PayloadAction<number>) => {
      state.singleACount = action.payload === 0 ? 3 : action.payload;
    },
    setSingleBCount: (state, action: PayloadAction<number>) => {
      state.singleBCount = action.payload === 0 ? 3 : action.payload;
    },
    setSingleCCount: (state, action: PayloadAction<number>) => {
      state.singleCCount = action.payload === 0 ? 3 : action.payload;
    },
},

})

export const {  setSingleDigitA,setSingleDigitB,setSingleDigitC, setSingleACount, setSingleBCount, setSingleCCount  } = threeDigitSlice.actions

export default threeDigitSlice.reducer