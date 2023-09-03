const EvaluatedPoint = ({ title, rating }: { title: string, rating: number}) => {
  return (
    <div className='w-4/5 mx-auto'>
        <h6 className='mb-2 text-white text-lg'> { title } </h6>
        <div className='mb-5 gap-x-[0.4rem] flex'>
          { [1, 2, 3, 4, 5].map((value) => (
            <div 
            key={ value }
            className='w-8 h-3 bg-white rounded-lg'
            style={{ backgroundColor: value <= rating ? 'white' : '#242424' }}
            />
          )) }
        </div>
      </div>
  )
}

export default EvaluatedPoint; 