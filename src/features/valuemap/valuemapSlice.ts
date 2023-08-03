import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { immerable } from "immer"

class Foo {
  [immerable] = true // Option 1
  bar: string

  constructor() {
    this.bar = "hello"
  }

  hello() {
    this.bar = "hello"
  }

  goodbye() {
    this.bar = "goodbye"
  }
}

export interface State {
  paramValues: { [id: string]: number }
  foo: Foo
}

const initialState: State = {
  paramValues: { hello: 0, goodbye: 10 },
  foo: new Foo(),
}

interface Param {
  key: string
  value: number
}

export const valuesSlice = createSlice({
  name: "AppState",
  initialState,
  reducers: {
    setValue: (state: State, action: PayloadAction<Param>) => {
      state.paramValues[action.payload.key] = action.payload.value
    },
    incrementHello: (state: State) => {
      state.paramValues["hello"]++
    },
    incrementGoodbye: (state: State) => {
      state.paramValues["goodbye"]++
    },
    sayHello: (state: State) => {
      state.foo.hello()
    },
    sayGoodbye: (state: State) => {
      state.foo.goodbye()
    },
  },
})

const getValues = (state: RootState) => state.values

const getKey = (_: any, id: string) => id

export const getValueByKey = createSelector(
  getValues,
  getKey,
  (state: State, key: string) => {
    return state.paramValues[key]
  },
)

export const getFooBar = (state: RootState) => state.values.foo.bar

export const {
  setValue,
  incrementHello,
  incrementGoodbye,
  sayHello,
  sayGoodbye,
} = valuesSlice.actions

export default valuesSlice.reducer
