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
    nav_toggle: (state, action) => {
      state.nav_open = action.payload
      state.menu_open = false
    },
    menu_toggle: (state, action) => {
      state.menu_open = action.payload
      state.nav_open = false
    },
  },
})

export const { theme, active_link, nav_toggle, menu_toggle } =
  navReducer.actions
export default navReducer.reducer
