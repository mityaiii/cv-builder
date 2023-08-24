const EvaluatedPoint = ({ title, rating }: { title: string, rating: number}) => {
  return (
    <div className='mt-1'>
        <h6 className='ml-5 mb-2 text-white text-[1.8rem]'> { title } </h6>
        <div className='ml-5 mb-5 gap-x-[0.4rem] flex'>
          { [1, 2, 3, 4, 5].map((value) => (
            <div 
            key={ value }
            className='w-10 h-3 bg-white rounded-lg'
            style={{ backgroundColor: value <= rating ? 'white' : '#242424' }}
            />
          )) }
        </div>
      </div>
  )
}

export default EvaluatedPoint; 