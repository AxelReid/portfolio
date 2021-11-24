import { projects } from '../initialState'
import { project_types } from '../actions'

const projectsReducer = (state = projects, action) => {
  switch (action.type) {
    case project_types.GET_TOP:
      return projects.filter((project) => project.top && project)
    default:
      return state
  }
}
export default projectsReducer
