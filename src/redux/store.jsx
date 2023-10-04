import { configureStore } from '@reduxjs/toolkit'
import questionSlice from './slices/questionSlice'
import answerSlice from './slices/answerSlice'

const reducer = {
  question: questionSlice,
  answer: answerSlice,
}

export const store = configureStore({
  reducer,
})
