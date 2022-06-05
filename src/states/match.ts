import store from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

import type { RootState } from '.'
import { IMatch, IMatchState, IUser } from 'types/match'

const INITIAL_STATE: IMatchState = {
  page: Number(store.get('match-pet-page')) || 0,
  users: store.get('match-pet-users') || [],
  matches: store.get('match-pet-matches') || [],
  rejects: store.get('match-pet-rejects') || [],
}

const matchSlice = createSlice({
  name: 'match',
  initialState: INITIAL_STATE,
  reducers: {
    setUsers: (state: IMatchState, action: PayloadAction<IUser[]>) => {
      state.users = action.payload
      store.set('match-pet-users', state.users)
    },
    addMatch: (state: IMatchState, action: PayloadAction<IUser>) => {
      const matchUser = action.payload
      state.users = state.users.filter((u) => u.id !== matchUser.id)
      state.matches = [...state.matches, { user: matchUser, date: dayjs().format('YYYY-MM-DD'), chats: [] }]
      store.set('match-pet-users', state.users)
      store.set('match-pet-matches', state.matches)
    },
    addReject: (state: IMatchState, action: PayloadAction<IUser>) => {
      const rejectUser = action.payload
      state.users = state.users.filter((u) => u.id !== rejectUser.id)
      state.rejects = [...state.rejects, { ...rejectUser }]
      store.set('match-pet-users', state.users)
      store.set('match-pet-rejects', state.rejects)
    },
    cancelMatch: (state: IMatchState, action: PayloadAction<IMatch>) => {
      const match = action.payload
      state.matches = state.matches.filter((m) => m.user.id !== match.user.id)
    },
    increasePage: (state: IMatchState) => {
      state.page += 1
      store.set('match-pet-page', state.page)
    },
  },
})

export const { setUsers, addMatch, addReject, cancelMatch, increasePage } = matchSlice.actions

export default matchSlice.reducer

// Selector =====================

export const getUsers = (state: RootState): IUser[] => state.match.users
export const getMatches = (state: RootState): IMatch[] => state.match.matches
export const getRejects = (state: RootState): IUser[] => state.match.rejects
export const getPage = (state: RootState): number => state.match.page
