import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"

export interface State {
  paramValues: { [id: string]: number }
}

const initialState: State = {
  paramValues: { hello: 0, goodbye: 10 },
}

interface Params {
  key: string
  value: number
}

export const valuesSlice = createSlice({
  name: "valueStore",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<Params>) => {
      state.paramValues[action.payload.key] = action.payload.value
    },
    incrementHello: (state) => {
      state.paramValues["hello"]++
    },
    incrementGoodbye: (state) => {
      state.paramValues["goodbye"]++
    },
  },
})

const getValues = (state: RootState) => state.values

const getKey = (_: any, id: string) => id

export const getValueByKey = createSelector(getValues, getKey, (state, key) => {
  return state.paramValues[key]
})

export const { setValue, incrementHello, incrementGoodbye } =
  valuesSlice.actions

export default valuesSlice.reducer
