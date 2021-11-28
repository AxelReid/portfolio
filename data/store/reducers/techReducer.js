import { technologies } from '../initialState'
import { createSlice } from '@reduxjs/toolkit'

const techReducer = createSlice({
  name: 'tech-slice',
  initialState: [...technologies],
  reducers: {
    default: (state) => {
      state
    },
  },
})
export default techReducer.reducer
