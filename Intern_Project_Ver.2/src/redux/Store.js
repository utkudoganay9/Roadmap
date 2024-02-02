import { configureStore } from '@reduxjs/toolkit'
import dataSlice from './dataSlice'
import modalSlice from './modalSlice'
import sidebarSlice from './sidebarSlice'

export const store = configureStore({
  reducer: {
    data:dataSlice,
    modal:modalSlice,
    sidebar:sidebarSlice
  },
})