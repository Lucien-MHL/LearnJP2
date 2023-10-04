import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showResult: false,
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    checkAnswer: (state, { payload }) => {
      const { user, truly } = payload
      const r = user === truly
      state.answer = {
        result: r,
        color: r ? 'green' : 'red',
        text: r ? 'correct' : 'wrong',
        user,
        truly,
      }
      state.showResult = true
    },
    closeAnswerResult: state => {
      state.answer = {}
      state.showResult = false
    },
  },
})

export const selectById = (state, id) => state.answer[id]

export const { checkAnswer, closeAnswerResult } = answerSlice.actions
export default answerSlice.reducer
