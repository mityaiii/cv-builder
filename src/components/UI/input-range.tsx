import { ChangeEvent } from "react"

const InputRange: React.FC<any> = ({ value, promise, ...rest }: { value: any, promise: (e: ChangeEvent<HTMLInputElement>) => void }) => {
  return (
    <input
    className="block w-full mb-3"
    type="range"
    {...rest}
    value={value}
    onChange={ (e) => promise(e) }
  />
  )
}

export default InputRange

