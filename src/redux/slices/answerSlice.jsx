import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  showResult: false,
  log: [],
  shouldFinish: false,
  finishTitle: 'well_done',
}

export const answerSlice = createSlice({
  name: 'answer',
  initialState,
  reducers: {
    checkAnswer: (state, { payload }) => {
      const { user, truly, id } = payload
      const r = user === truly
      state.answer = {
        result: r,
        color: r ? 'green' : 'red',
        text: r ? 'correct' : 'wrong',
        user,
        truly,
      }
      state.showResult = true
      state.log = r ? state.log : [...state.log, { id, user }]
    },
    closeAnswerResult: state => {
      state.answer = {}
      state.showResult = false

      const logLen = state.log.length

      if (logLen === 5) {
        state.shouldFinish = true
        state.finishTitle = 'all_fail'
      } else if (logLen && logLen < 5) {
        state.finishTitle = 'keep_going'
      }
    },
    clearAnswerLog: state => {
      return {
        ...state,
        showResult: false,
        log: [],
        shouldFinish: false,
        finishTitle: 'well_done',
      }
    },
  },
})

export const selectById = (state, id) => state.answer[id]

export const { checkAnswer, closeAnswerResult, clearAnswerLog } =
  answerSlice.actions
export default answerSlice.reducer
