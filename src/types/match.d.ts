export interface IUser {
  id: string
  name: string
  info: string[]
  imgSrc: string
  previewSrc: string
}

export interface IMatch {
  user: IUser
  date: string
  chats: string[]
}

export interface IMatchState {
  users: IUser[]
  matches: IMatch[]
  rejects: IUser[]
  page: number
}
