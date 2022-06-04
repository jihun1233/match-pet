import store from 'store'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import dayjs, { Dayjs } from 'dayjs'

import type { RootState } from '.'
import { IMatch, IMatchState, IUser } from 'types/match'

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
    addMatch: (state: IMatchState, action: PayloadAction<IUser>) => {
      const matchUser = action.payload
      state.users = state.users.filter((u) => u.id !== matchUser.id)
      state.matches = [...state.matches, { user: matchUser, date: new Dayjs().format('YYYY-MM-DD'), chats: [] }]
    },
    addReject: (state: IMatchState, action: PayloadAction<IUser>) => {
      const rejectUser = action.payload
      state.users = state.users.filter((u) => u.id !== rejectUser.id)
      state.rejects = [...state.rejects, { ...rejectUser }]
    },
    cancelMatch: (state: IMatchState, action: PayloadAction<IMatch>) => {
      const match = action.payload
      state.matches = state.matches.filter((m) => m.user.id !== match.user.id)
    },
  },
})

export const { setUsers, setMatches, setRejects, addMatch, addReject, cancelMatch } = matchSlice.actions

export default matchSlice.reducer

// Selector =====================

export const getUsers = (state: RootState): IUser[] => state.match.users
export const getMatches = (state: RootState): IMatch[] => state.match.matches
export const getRejects = (state: RootState): IUser[] => state.match.rejects
