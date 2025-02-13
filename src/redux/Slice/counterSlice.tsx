import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  total:any
}

const initialvalues: CounterState = {
  value: 0,
  total:"sivasasasaaaaaa"
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState:initialvalues,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    }
  },
})

export const { increment, decrement, setValue } = counterSlice.actions

export default counterSlice.reducer