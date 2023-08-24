import { configureStore, combineReducers } from "@reduxjs/toolkit"
import { reducer as cvReducer } from "./cv/index"
import { evaluatedPointsReducer } from "./cv/index"
import { contactsReducer } from "./cv/index"

const reducers = combineReducers({cvReducer, evaluatedPointsReducer, contactsReducer })

export const store = configureStore({
  reducer: reducers
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch