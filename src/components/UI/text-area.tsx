const TextArea: React.FC<any> = ({ value, onChange }: { value: string, onChange: (val: string) => void }) => {
  return (
    <textarea 
    value={value}
    onChange={ (e) => onChange(e.target.value) }
    className="w-full resize-none h-40 px-2 rounded-md"
    />
  )
}

export default TextArea