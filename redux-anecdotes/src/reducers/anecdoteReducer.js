import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from "../services/anecdotes"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    vote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdoteToChange,
        votes: anecdoteToChange.votes + 1
      }
      return state.map(a => a.id !== id ? a : changedAnecdote)
    },
    setAnecdotes(state, action) {
      return action.payload
    },
    appendAnecdote(state, action){
      state.push(action.payload)
    }
  }
})

export const { vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecs = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecs))
  }
}

export const createAnec = content => {
  return async dispatch => {
    const newAnec = await anecdoteService.newAnec(content)
    dispatch(appendAnecdote(newAnec))
  }
}

export const voteAnec = anecdote => {
  return async dispatch => {
    const votedAnec = await anecdoteService.votingAnec(anecdote)
    dispatch(vote(votedAnec.id))
  }
}

export default anecdoteSlice.reducer