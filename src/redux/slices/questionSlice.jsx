import { createSlice } from '@reduxjs/toolkit'

const initialState = {}
const randomNumber = n => Math.floor(Math.random() * (n.length || n))
const getRandomOpts = (data, specify) => {
  const arr = [...data]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = randomNumber(i + 1)
    ;[arr[i], arr[j]] = [arr[j], arr[i]] // 隨機交換
  }
  const shuffled = arr
    .filter(e => e.id !== specify.id)
    .slice(0, 5)
    .map(e => ({ id: e.id, sound: e.sound }))
  shuffled.splice(randomNumber(6), 0, { id: specify.id, sound: specify.sound })
  return shuffled
}

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    setSubject: (state, { payload }) => {
      const data = payload
      const list = payload.map(e => e.id)
      const current = payload[randomNumber(payload)]
      const total = payload.length
      const s = []
      const count = s.push(current.id)
      const opts = getRandomOpts(data, current)
      return { ...state, list, current, total, data, count, s, opts }
    },
    nextSubject: (state, { payload }) => {
      const removeSameId = (arr, id) => arr.filter(i => i !== id)
      const { list, data, s } = state
      const newList = removeSameId(list, payload)
      if (newList.length) {
        const newId = newList[randomNumber(newList)]
        const current = data.find(e => e.id === newId)
        const ns = [...s, newId]
        const count = ns.length
        const opts = getRandomOpts(data, current)
        return { ...state, list: newList, current, count, s: ns, opts }
      } else {
        return { ...state, list: newList }
      }
    },
  },
})

export const selectById = (state, id) => state.question[id]

export const { setSubject, nextSubject } = questionSlice.actions
export default questionSlice.reducer
