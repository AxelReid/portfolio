import { projects } from '../initialState'
import { createSlice } from '@reduxjs/toolkit'

const projectsReducer = createSlice({
  name: 'projects-slice',
  initialState: [...projects],
  reducers: {
    all_projects: (state) => {
      state
    },
  },
})

export const { all_projects } = projectsReducer.actions
export default projectsReducer.reducer
