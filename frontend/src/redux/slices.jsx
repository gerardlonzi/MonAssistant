import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

const initialState ={
    currentCv : null
}
const cvSlice = createSlice({
    name: 'cv',
    initialState,
    reducers: {
      createOrUpdateCv: (state, action) => {
        if (!state.currentCv) {
          state.currentCv = {
            id: uuidv4(),
            experience: action.payload.experience,
            ...action.payload
          };
        } else {
          state.currentCv = {
            ...state.currentCv,
            ...action.payload
          };
        }
      },
      resetCv: (state) => {
        state.currentCv = null
      }
    }
  })
  
  export const { createOrUpdateCv, resetCv } = cvSlice.actions
  export default cvSlice.reducer