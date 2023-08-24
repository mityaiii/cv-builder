const TextArea: React.FC<any> = ({ value, onChange, ...rest }: { value: string, onChange: (val: string) => void }) => {
  return (
    <textarea 
    value={value}
    onChange={ (e) => onChange(e.target.value) }
    className="w-full resize-none h-40 px-2 rounded-md"
    { ...rest }
    />
  )
}

export default TextArea