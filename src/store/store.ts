import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { reducer as cvReducer } from "./cv/index"

const reducers = combineReducers({cvReducer})

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch