import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    },
    incrementByAmount(state, action: PayloadAction<number>) {
      state.count += action.payload
    },
    reset(state) {
      state.count = 0
    },
  },
})

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions
export default counterSlice.reducer
