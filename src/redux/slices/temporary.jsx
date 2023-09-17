/** TODO:
 *    這是暫時的，為了消除 console 裡面的錯
 *    誤訊息。
 */
import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const counterSlice = createSlice({
  name: 'temporary',
  initialState,
  reducers: {},
})

export default counterSlice.reducer
