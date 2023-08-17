type TextType = {
  "normal": "normal-case",
  "uppercase": "uppercase"
} 

const TextInput: React.FC<any> = ({ value, textType, className, ...rest }: { value: string, textType: TextType, className?: string }) => {
  return (
    <input 
    value={ value }
    className={`${textType} w-full h-8 my-3 text-center rounded-md ${className}`} 
    type="text" 
    { ...rest }/>
  )
}

export default TextInput;