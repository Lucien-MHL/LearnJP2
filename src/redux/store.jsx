import { configureStore } from '@reduxjs/toolkit'
import questionSlice from './slices/questionSlice'

const reducer = {
  question: questionSlice,
}

export const store = configureStore({
  reducer,
})
