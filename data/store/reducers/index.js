import { combineReducers } from 'redux'
import navReducer from './navReducer'
import techReducer from './techReducer'
import homeReducer from './homeReducer'
import projectsReducer from './projectsReducer'

const allReducers = combineReducers({
  nav: navReducer,
  tech: techReducer,
  home: homeReducer,
  projects: projectsReducer,
})
export default allReducers
