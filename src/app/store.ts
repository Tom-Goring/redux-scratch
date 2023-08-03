import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import setValueReducer from "../features/valuemap/valuemapSlice"

export const store = configureStore({
  reducer: {
    values: setValueReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
