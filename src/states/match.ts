import store from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from '.'

interface IUser {
  imgSrc: string
  id: string
  name: string
  introduction: string
}

interface IMatch {
  user: IUser
  chats: string[]
}

export interface IMatchState {
  users: IUser[]
  matches: IMatch[]
  rejects: IUser[]
}

const INITIAL_STATE: IMatchState = {
  users: store.get('match-pet-users') || [],
  matches: store.get('match-pet-matches') || [],
  rejects: store.get('match-pet-users') || [],
}

const matchSlice = createSlice({
  name: 'match',
  initialState: INITIAL_STATE,
  reducers: {
    setUsers: (state: IMatchState, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
      store.set('match-pet-users', state.users)
    },
    setMatches: (state: IMatchState, action: PayloadAction<IMatch[]>) => {
      state.matches = action.payload
      store.set('match-pet-matches', state.matches)
    },
    setRejects: (state: IMatchState, action: PayloadAction<IUser[]>) => {
      state.rejects = action.payload
      store.set('match-pet-rejects', state.rejects)
    },
    // setTheme: (state: SystemState, action: PayloadAction<string>) => {
    //   const newColorSet = action.payload
    //   store.set('app.theme', newColorSet)
    //   document.documentElement.setAttribute('color-theme', newColorSet)
    //   state.theme = newColorSet
    // },
    // toggleTheme: (state: SystemState) => {
    //   const newColorSet = state.theme === 'light' ? 'dark' : 'light'
    //   store.set('app.theme', newColorSet)
    //   document.documentElement.setAttribute('color-theme', newColorSet)
    //   state.theme = newColorSet
    // },
  },
})

export const { setUsers, setMatches, setRejects } = matchSlice.actions

export default matchSlice.reducer

// Selector =====================

export const getUsers = (state: RootState): IUser[] => state.match.users
export const getMatches = (state: RootState): IMatch[] => state.match.matches
export const getRejects = (state: RootState): IUser[] => state.match.rejects
