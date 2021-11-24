export const nav_types = {
  THEME: 'THEME',
  ACTIVE_LINK: 'ACTIVE_LINK',
  NAV_TOGGLE: 'NAV_TOGGLE',
  MENU_TOGGLE: 'MENU_TOGGLE',
}
export const project_types = {
  GET_TOP: 'GET_TOP',
}

// -------------- action -------
const action = (type, payload) => {
  return { type: type, payload: payload }
}
export default action
