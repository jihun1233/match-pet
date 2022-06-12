import store from 'store'
import dayjs from 'dayjs'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IMatch, IMatchState, IUser } from 'types/match'

import type { RootState } from '.'

const INITIAL_STATE: IMatchState = {
  page: Number(store.get('match-pet-page')) || 1,
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
    addMatch: (state: IMatchState, action: PayloadAction<string>) => {
      const matchId = action.payload
      const matchUser = state.users.find((u) => u.id === matchId)
      if (!matchUser) return

      state.users = state.users.filter((u) => u.id !== matchId)
      state.matches = [...state.matches, { user: matchUser, date: dayjs().format('YYYY-MM-DD') }]

      store.set('match-pet-users', state.users)
      store.set('match-pet-matches', state.matches)
    },
    addReject: (state: IMatchState, action: PayloadAction<string>) => {
      const rejectId = action.payload
      const rejectUser = state.users.find((u) => u.id === rejectId)
      if (!rejectUser) return

      state.users = state.users.filter((u) => u.id !== rejectId)
      state.rejects = [...state.rejects, { ...rejectUser }]

      store.set('match-pet-users', state.users)
      store.set('match-pet-rejects', state.rejects)
    },
    cancelMatch: (state: IMatchState, action: PayloadAction<string>) => {
      const matchId = action.payload
      const match = state.matches.find((m) => m.user.id === matchId)
      if (!match) return

      state.matches = state.matches.filter((m) => m.user.id !== matchId)
      store.set('match-pet-matches', state.matches)
    },
    revertReject: (state: IMatchState, action: PayloadAction<string>) => {
      const rejectId = action.payload
      const rejectUser = state.rejects.find((r) => r.id === rejectId)
      if (!rejectUser) return

      state.rejects = state.rejects.filter((r) => r.id !== rejectId)
      state.users = [...state.users, rejectUser]

      store.set('match-pet-users', state.users)
      store.set('match-pet-rejects', state.rejects)
    },
    increasePage: (state: IMatchState) => {
      state.page += 1
      store.set('match-pet-page', state.page)
    },
  },
})

export const { setUsers, addMatch, addReject, cancelMatch, increasePage, revertReject } = matchSlice.actions

export default matchSlice.reducer

// Selector =====================

export const getUsers = (state: RootState): IUser[] => state.match.users
export const getMatches = (state: RootState): IMatch[] => state.match.matches
export const getRejects = (state: RootState): IUser[] => state.match.rejects
export const getPage = (state: RootState): number => state.match.page
