import { useAppDispatch } from "../../app/hooks"
import { Inner } from "./Subscriber"
import { incrementGoodbye, incrementHello } from "./valuemapSlice"

export const ValueMap = () => {
  const dispatch = useAppDispatch()

  return (
    <div>
      <button onClick={() => dispatch(incrementHello())}>
        Increment Hello
      </button>
      <button onClick={() => dispatch(incrementGoodbye())}>
        Increment Goodbye
      </button>
      <Inner id="hello" />
      <Inner id="goodbye" />
    </div>
  )
}
