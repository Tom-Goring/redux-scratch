import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Inner } from "./Subscriber"
import {
  getFooBar,
  incrementGoodbye,
  incrementHello,
  sayGoodbye,
  sayHello,
} from "./valuemapSlice"

export const ValueMap = () => {
  const dispatch = useAppDispatch()

  const bar = useAppSelector(getFooBar)

  return (
    <div>
      <button onClick={() => dispatch(incrementHello())}>
        Increment Hello
      </button>
      <button onClick={() => dispatch(incrementGoodbye())}>
        Increment Goodbye
      </button>
      <button onClick={() => dispatch(sayHello())}>Say Hello</button>
      <button onClick={() => dispatch(sayGoodbye())}>Say Goodbye</button>
      <Inner id="hello" />
      <Inner id="goodbye" />
      <div>{bar}</div>
    </div>
  )
}
