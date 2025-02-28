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
      increaseSingleACount: (state, action: PayloadAction<number>) => {
        state.singleACount += 1
      },
      increaseSingleBCount: (state, action: PayloadAction<number>) => {
        state.singleBCount += 1
      },
      increaseSingleCCount: (state, action: PayloadAction<number>) => {
        state.singleCCount += 1
      },
      decreaseSingleACount: (state, action: PayloadAction<number>) => {
        state.singleACount -= 1
      },
      decreaseSingleBCount: (state, action: PayloadAction<number>) => {
        state.singleBCount -= 1
      },
      decreaseSingleCCount: (state, action: PayloadAction<number>) => {
        state.singleCCount -= 1
      }
  },
})

export const {  setSingleDigitA,setSingleDigitB,setSingleDigitC,increaseSingleACount,increaseSingleBCount,increaseSingleCCount,
  decreaseSingleACount,decreaseSingleBCount,decreaseSingleCCount  } = threeDigitSlice.actions

export default threeDigitSlice.reducer