import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { threeDigitState } from './types'



const initialvalues: threeDigitState = {
  singleDigitA: null,
  singleDigitB: null,
  singleDigitC: null,
  singleACount: 3,
  singleBCount: 3,
  singleCCount: 3,
}
export const threeDigitSlice = createSlice({
  name: 'threeDigit',
  initialState:initialvalues,
  reducers: {
    setSingleDigitA: (state, action: PayloadAction<number>) => {
      state.singleDigitA = action.payload
    },
    setSingleDigitB: (state, action: PayloadAction<number>) => {
        state.singleDigitB = action.payload
      },
      setSingleDigitC: (state, action: PayloadAction<number>) => {
        state.singleDigitC = action.payload
      },
      setSingleACount: (state, action: PayloadAction<number>) => {
        state.singleACount = action.payload
      },
      setSingleBCount: (state, action: PayloadAction<number>) => {
        state.singleBCount = action.payload 
      },
      setSingleCCount : (state, action: PayloadAction<number>) => {
        state.singleCCount = action.payload
      },
  },
})

export const {  setSingleDigitA,setSingleDigitB,setSingleDigitC, setSingleACount, setSingleBCount, setSingleCCount  } = threeDigitSlice.actions

export default threeDigitSlice.reducer