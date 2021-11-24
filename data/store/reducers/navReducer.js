import { nav } from '../initialState'
import { nav_types } from '../actions'

const navReducer = (state = nav, action) => {
  switch (action.type) {
    case nav_types.THEME:
      return {
        ...state,
        theme: action.payload,
      }
    case nav_types.ACTIVE_LINK:
      return {
        ...state,
        activeLink: action.payload,
      }
    case nav_types.NAV_TOGGLE:
      return {
        ...state,
        nav_open: action.payload,
        menu_open: false,
      }
    case nav_types.MENU_TOGGLE:
      return {
        ...state,
        menu_open: action.payload,
        nav_open: false,
      }
    default:
      return {
        ...state,
      }
  }
}
export default navReducer
