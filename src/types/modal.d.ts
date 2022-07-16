export interface IModalState {
  confirmModal: IConfirmModal
  messageModal: IMessageModal
}

export interface IConfirmModal {
  isOpen: boolean
  dataId: string | null
}

export interface IMessageModal {
  isOpen: boolean
  messages: IMessage[]
}

export interface IMessage {
  id: number
  message: string
}
