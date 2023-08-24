import { useAppSelector } from "@/hooks/store.hooks"
import { FaPhone } from "react-icons/fa"

const PhoneNumberDisplay = () => {
  const { phoneNumber } = useAppSelector(state => state.cvReducer)

  return (
    <div className="flex items-center justify-center gap-x-3">
      { phoneNumber ? <FaPhone size={20} className='rotate-90 fill-white'/> : <></> }
      <h2 className="text-white text-lg tracking-wider">{ phoneNumber }</h2>
    </div>
  )
}

export default PhoneNumberDisplay