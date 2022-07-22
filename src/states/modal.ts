import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IModalState } from 'types/modal'

import type { RootState } from '.'

const INITIAL_STATE: IModalState = {
  confirmModal: { dataId: null, isOpen: false },
  messageModal: { isOpen: false, messages: [], hasUnreadMessage: false },
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: INITIAL_STATE,
  reducers: {
    openConfirmModal: (state: IModalState) => {
      state.confirmModal.isOpen = true
    },
    closeConfirmModal: (state: IModalState) => {
      state.confirmModal.isOpen = false
    },
    setConfirmModalDataId: (state: IModalState, action: PayloadAction<string>) => {
      state.confirmModal.dataId = action.payload
    },
    openMessageModal: (state: IModalState) => {
      state.messageModal.isOpen = true
    },
    closeMessageModal: (state: IModalState) => {
      state.messageModal.isOpen = false
    },
    addMessageModalMessage: (state: IModalState, action: PayloadAction<string>) => {
      const { payload: message } = action
      const lastId = state.messageModal.messages[state.messageModal.messages.length - 1]?.id ?? 0
      const id = lastId + 1
      state.messageModal.messages.push({ id, message, hasRead: false })
    },
    removeMessageModalMessage: (state: IModalState, action: PayloadAction<number>) => {
      const { payload: targetId } = action
      state.messageModal.messages = state.messageModal.messages.filter((message) => message.id !== targetId)
    },
    readMessage: (state: IModalState, action: PayloadAction<number>) => {
      const { payload: targetId } = action
      const target = state.messageModal.messages.findIndex((message) => message.id === targetId)
      state.messageModal.messages[target].hasRead = true
    },
  },
})

export const {
  closeConfirmModal,
  closeMessageModal,
  openConfirmModal,
  openMessageModal,
  setConfirmModalDataId,
  addMessageModalMessage,
  removeMessageModalMessage,
  readMessage,
} = modalSlice.actions

export default modalSlice.reducer

// Selector =====================

export const getConfirmModalIsOpen = (state: RootState): boolean => state.modal.confirmModal.isOpen
export const getConfirmModalDataId = (state: RootState): string | null => state.modal.confirmModal.dataId

export const getMessageModalIsOpen = (state: RootState) => state.modal.messageModal.isOpen
export const getMessageModalMessages = (state: RootState) => state.modal.messageModal.messages
