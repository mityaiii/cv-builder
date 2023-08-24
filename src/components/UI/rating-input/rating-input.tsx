import { TextInput } from ".."
import RatingPoint from "./rating-point";

const InputRating = ({ id, title, rating, idx, handleTextValue, handleRating }: {id: number, title: string, rating: number, idx?: number, handleTextValue: Function, handleRating: Function}) => {
  return (
    <div className='w-[48%]'>
      <TextInput
      value={ title }
      onChange={ (e: React.ChangeEvent<HTMLInputElement>) => { handleTextValue({ id: id, idx: idx, title: e.target.value }) } }
      className='w-full mb-2'
      />

      <RatingPoint skillIdx={ idx } id={id} rating={ rating } handleRating={ handleRating }/>
    </div>
  )
}

export default InputRating;