import { FaPlus } from "react-icons/fa"
import { twMerge } from "tailwind-merge"

const RemoveButton = ({ className, removeValue }: { className?: string, removeValue: Function }) => {
  return (
    <button
      className={twMerge('w-[48%] h-8 mt-3 mb-3 rounded-md bg-[#bbbbbb] group', className)}
      onClick={ () => removeValue() }
    >  
      <FaPlus className='rotate-45 transition-colors duration-150 ease-in group-hover:fill-[red] mx-auto'/>
    </button>
  )
}

export default RemoveButton