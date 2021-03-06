import { certifications, timeline } from '../initialState'
import { createSlice } from '@reduxjs/toolkit'

const homeReducer = createSlice({
  name: 'home-slice',
  initialState: {
    certifications,
    timeline,
  },
  reducers: {
    default: (state) => {
      state
    },
  },
})
export default homeReducer.reducer
