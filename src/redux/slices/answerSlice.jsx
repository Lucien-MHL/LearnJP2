import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showResult: false,
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    checkAnswer: (state, { payload }) => {
      state.answer = {
        result: payload,
        color: payload ? 'green' : 'red',
        text: payload ? 'correct' : 'wrong',
      }
      state.showResult = true
    },
  },
})

export const selectById = (state, id) => state.answer[id]

export const { checkAnswer } = answerSlice.actions
export default answerSlice.reducer
