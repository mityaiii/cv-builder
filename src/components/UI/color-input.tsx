const ColorInput = ({ color, setColor }: { color: string, setColor: Function }) => {
  const handleColorInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputData = e.target.value.substring(1);
    let inputColor = /^[0-9A-Fa-f]+$/.test(inputData) || inputData.length === 0 ? '#' + inputData : color;
    setColor(inputColor)
  }

  return (
    <div className="w-32 h-40 bg-white">
      <input 
      onChange={ (e) => handleColorInput(e) }
      value={ color } 
      className='cursor-pointer w-32 h-3/4 bg-inherit' 
      type='color'/>
      <input 
      placeholder="#202020" 
      value={ color }
      className="text-center rounded-md mt-[0.1rem] block mx-auto bg-slate-300 w-[90%]"
      type="text"
      maxLength={7}
      onChange={ (e) => handleColorInput(e) }
      />
    </div>
  )
}

export default ColorInput