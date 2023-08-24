import { TextInput } from "."

const TextInputWithIcon: React.FC<any> = ({ value, iconSrc, ...rest }: { value: string, iconSrc: string | React.ReactElement }) => {
  
  return (
    <div className="flex items-center gap-x-2">
      { typeof iconSrc === 'string' ? <img src={iconSrc}/> : iconSrc}
      <TextInput 
      value={ value }
      { ...rest }
      />
    </div>
  )
}

export default TextInputWithIcon