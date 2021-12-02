import { projects } from '../initialState'
import { createSlice } from '@reduxjs/toolkit'

const projectsReducer = createSlice({
  name: 'projects-slice',
  initialState: { top_projects: [], sorted_p: [], select: '', text: '' },
  reducers: {
    top_projects: (state) => {
      state.top_projects = projects.filter((project) => project.top && project)
    },
    sort_projects: (state, action) => {
      state.text = action.payload
      state.sorted_p = projects.filter(
        (p) =>
          (p.sort.includes(state.select) &&
            split_join(p.title).includes(split_join(action.payload))) ||
          split_join(action.payload).includes(split_join(p.title))
      )
    },
    filter_projects: (state, action) => {
      state.text = ''
      state.select = action.payload
      state.sorted_p = projects.filter((p) =>
        action.payload === '' ? p : p.sort === action.payload
      )
    },
    clear_p_sort: (state) => {
      state.text = ''
      state.select = ''
      state.sorted_p = projects
    },
  },
})

const split_join = (string) => {
  return string
    .toLowerCase()
    .split('')
    .filter((s) => s !== ' ')
    .join('')
}
export const { top_projects, sort_projects, filter_projects, clear_p_sort } =
  projectsReducer.actions
export default projectsReducer.reducer
