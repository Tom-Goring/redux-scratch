import { useAppSelector } from "../../app/hooks"
import { getValueByKey } from "./valuemapSlice"

export const Inner = (props: { id: string }) => {
  const value = useAppSelector((state) => getValueByKey(state, props.id))

  return (
    <div>
      <span>{props.id}: </span>
      <span>{value}</span>
    </div>
  )
}
