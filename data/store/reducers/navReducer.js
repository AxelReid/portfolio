import { createSlice } from '@reduxjs/toolkit'
import { nav } from '../initialState'

const navReducer = createSlice({
  name: 'nav-slice',
  initialState: {
    ...nav,
  },
  reducers: {
    theme: (state, action) => {
      state.theme = action.payload
    },
    active_link: (state, action) => {
      state.activeLink = action.payload
    },
    menu_toggle: (state, action) => {
      state.menu_open = action.payload
    },
  },
})

export const { theme, active_link, menu_toggle } = navReducer.actions
export default navReducer.reducer
