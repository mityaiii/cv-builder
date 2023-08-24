import { FaPlus } from 'react-icons/fa'

const AddButton = ({ className, addValue }: { className?: string, addValue: Function }) => {
  return (
    <button 
    className={`w-[48%] h-8 mt-3 mb-3 rounded-md bg-[#bbbbbb] group ${className}`}
    onClick={ () => addValue() }
    >
      <FaPlus className='transition-colors duration-150 ease-in group-hover:fill-[#ffffff] mx-auto'/>
    </button>
  )
}

export default AddButton