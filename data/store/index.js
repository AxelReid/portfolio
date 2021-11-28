import { configureStore } from '@reduxjs/toolkit'
import navReducer from './reducers/navReducer'
import techReducer from './reducers/techReducer'
import homeReducer from './reducers/homeReducer'
import projectsReducer from './reducers/projectsReducer'

export default configureStore({
  reducer: {
    nav: navReducer,
    tech: techReducer,
    home: homeReducer,
    projects: projectsReducer,
  },
})
