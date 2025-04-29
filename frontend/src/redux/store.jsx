import { configureStore } from "@reduxjs/toolkit"; 
import cvReducer from "./slices"

export const store = configureStore({
  reducer: {
    cv: cvReducer
  }
})