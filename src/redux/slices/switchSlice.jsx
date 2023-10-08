import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isModalOpen: false,
}

export const switchSlice = createSlice({
  name: 'switch',
  initialState,
  reducers: {
    openModal: state => {
      state.isModalOpen = true
    },
    closeModal: state => {
      state.isModalOpen = false
    },
  },
})

export const selectSwitchById = (state, id) => state.switch[id]

export const { openModal, closeModal } = switchSlice.actions
export default switchSlice.reducer
