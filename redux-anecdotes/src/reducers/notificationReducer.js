import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Welcome',
  reducers: {
    messageChange(state, action) {
      return action.payload
    },
    resetMessage(state, action) {
      return 'Welcome'
    }
  },
})

export const { messageChange, resetMessage } = notificationSlice.actions

export const setNotification = (anecdote, timer) => {
  return async dispatch => {
    dispatch(messageChange(anecdote))
    setTimeout(() => {
      dispatch(resetMessage())
    }, timer * 1000)
  }
}

export default notificationSlice.reducer