import { projects } from '../initialState'
import { project_types } from '../actions'

const projectsReducer = (state = projects, action) => {
  switch (action.type) {
    case project_types.GET_TOP:
      const top_projects = [projects[0], projects[1], projects[2]]
      return top_projects
    default:
      return state
  }
}
export default projectsReducer
