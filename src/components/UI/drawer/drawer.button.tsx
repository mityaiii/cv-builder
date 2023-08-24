import { bgColors } from '@/constants/colors';
import { FaAngleRight } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';

const DrawerButton = ({ state, promise, className }: { state: boolean, promise: (e: React.MouseEvent<HTMLElement>) => void, className?: string }) => {
  return (
    <button className={`transition liner duration-200 rounded-r-xl w-8 h-20 ${ bgColors.second_bg__color } ${ className } hover:shadow-[3px_0px_5px_2px_rgba(8,_112,_184,_0.2)]`} onClick={ promise }>
      { 
        state ? 
        <FaAngleLeft className="-translate-x-2 w-8 h-8 fill-white"/> :
        <FaAngleRight className="-translate-x-1 w-8 h-8 fill-white"/> 
      }
    </button>
  )
}

export default DrawerButton