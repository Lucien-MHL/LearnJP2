import { configureStore } from '@reduxjs/toolkit'
import temporary from './slices/temporary'

export const store = configureStore({
  reducer: {
    temporary,
  },
})
