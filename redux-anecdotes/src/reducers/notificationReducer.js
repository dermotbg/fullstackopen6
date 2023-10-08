import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Welcome',
  reducers: {
    messageChange(state, action) {
      return `You've voted ${action.payload}`
    },
    resetMessage(state, action) {
      return 'Welcome'
    }
  },
})

export const { messageChange, resetMessage } = notificationSlice.actions

export default notificationSlice.reducer