const TextArea: React.FC<any> = ({ value, onChange, ...rest }: { value: string, onChange: () => void }) => {
  return (
    <textarea 
    value={value}
    onChange={ onChange }
    className="w-full resize-none h-40 px-2 rounded-md"
    { ...rest }
    />
  )
}

export default TextArea