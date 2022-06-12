import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface IModalState {
  isOpen: boolean
  dataId: string | null
}

const INITIAL_STATE: IModalState = {
  isOpen: false,
  dataId: null,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {
    openModal: (state: IModalState) => {
      state.isOpen = true
    },
    closeModal: (state: IModalState) => {
      state.isOpen = false
    },
    setDataId: (state: IModalState, action: PayloadAction<string>) => {
      state.dataId = action.payload
    },
  },
})

export const { closeModal, openModal, setDataId } = modalSlice.actions

export default modalSlice.reducer

// Selector =====================

export const getIsOpen = (state: RootState): boolean => state.modal.isOpen
export const getDataId = (state: RootState): string | null => state.modal.dataId
