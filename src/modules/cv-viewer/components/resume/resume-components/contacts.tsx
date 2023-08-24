import { useAppSelector } from "@/hooks/index"
import { FaPhone } from "react-icons/fa"

const Contacts = () => {
  const { contacts } = useAppSelector(state => state.contactsReducer)
  const { phoneNumber } = useAppSelector(state => state.cvReducer)

  return (
    <ul>
      <li className="text-white text-lg tracking-wider items-center flex w-[80%] mx-auto gap-x-2 mb-1">
        { phoneNumber ? <FaPhone size={20} className='rotate-90 fill-white'/> : <></> }
        { phoneNumber }
      </li>
      { contacts.map((el) => 
        <li className="text-white text-lg tracking-wider items-center flex w-[80%] mx-auto gap-x-2 mb-1" key={el.id}>
          { typeof el.iconSrc === 'string' ? <img className="w-[24px] h-[24px]" src={el.iconSrc}/> : <></>}
          { el.contact }
        </li>
      ) }
    </ul>
  )
}

export default Contacts