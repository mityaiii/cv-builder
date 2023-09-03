import { TextInput } from ".."
import RatingPoint from "./rating-point";
import { RemoveButton } from "..";

const InputRating = ({ id, title, rating, idx, handleTextValue, handleRating, removeRating }: 
  {id: number, title: string, rating: number, idx?: number, handleTextValue: Function, handleRating: Function, removeRating: Function}) => {
  
  
  return (
    <div className='w-[48%]'>
      <div className='flex justify-between'>
        <TextInput
        value={ title }
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { handleTextValue({ id: id, idx: idx, title: e.target.value }) } }
        className='w-[77%] mb-2'
        />
        <RemoveButton className='w-[20%]' removeValue={ removeRating }/>
      </div>

      <RatingPoint skillIdx={ idx } id={id} rating={ rating } handleRating={ handleRating }/>
    </div>
  )
}

export default InputRating;