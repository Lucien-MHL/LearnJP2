import { configureStore } from '@reduxjs/toolkit'
import questionSlice from './slices/questionSlice'
import answerSlice from './slices/answerSlice'
import switchSlice from './slices/switchSlice'

const reducer = {
  question: questionSlice,
  answer: answerSlice,
  switch: switchSlice,
}

export const store = configureStore({
  reducer,
})
