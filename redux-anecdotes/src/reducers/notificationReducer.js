import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'Welcome',
  reducers: {
    messageChange: (state, action) => action.payload,
  },
})

export const messageChange = notificationSlice.actions

export default notificationSlice.reducer