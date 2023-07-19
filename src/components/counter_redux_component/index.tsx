'use client'

import { useSelector, useDispatch } from 'react-redux'
import {
  increment,
  decrement,
  incrementByAmount,
  reset,
} from '@/redux/slices/counterSlice'
import { RootState } from '@/redux/store'

export function CounterReduxComponent() {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(10))}>
        Increment by 10
      </button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  )
}
