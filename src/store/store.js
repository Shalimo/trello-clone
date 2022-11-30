import { configureStore } from '@reduxjs/toolkit'
import deskReducer from './deskSlice'

export const store = configureStore({
  reducer: {
    desk: deskReducer,
  },
})