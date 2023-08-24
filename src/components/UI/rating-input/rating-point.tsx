const InputRatingPoints = ({ rating, id, skillIdx, handleRating }: { rating: number, id?: number, skillIdx?: number, handleRating?: Function }) => {
  return (
    <div className='flex gap-x-1 justify-center mb-2 w-full'>
      { [1, 2, 3, 4, 5].map((value) => (
        <div 
        key={ value }
        placeholder='value'
        className='w-12 h-3 bg-white rounded-lg hover:cursor-pointer transition-colors duration-200 ease-in'
        onClick={ handleRating ? () => handleRating({ newRating: value, id: id, idx: skillIdx }) : undefined }
        style={{ backgroundColor: value <= rating ? 'white' : '#242424' }}
        />
      )) }
    </div>
  )
}

export default InputRatingPoints