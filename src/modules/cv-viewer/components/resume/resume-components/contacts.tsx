import { useAppSelector } from "@/hooks/index"
import phoneSrc from '@/assets/phone.svg'

const Contacts = () => {
  const { contacts } = useAppSelector(state => state.contactsReducer)
  const { phoneNumber } = useAppSelector(state => state.cvReducer)

  return (
    <ul className='mb-3'>
      <li className="text-white text-[0.9rem] items-center tracking-wider flex w-[80%] mx-auto gap-x-2 mb-1">
        { phoneNumber ? <img className='mt-[16px] w-[24px] h-[24px]' src={ phoneSrc }/> : <></> }
        { phoneNumber }
      </li>
      { contacts.map((el) => 
        <li className="text-white text-[0.9rem] tracking-wider items-center flex w-[80%] mx-auto gap-x-2 mb-1" key={el.id}>
          { typeof el.iconSrc === 'string' ? <img className="mt-[16px] w-[24px] h-[24px]" src={el.iconSrc}/> : <></>}
          <h4 className='text-white'>{ el.title }</h4>
        </li>
      ) }
    </ul>
  )
}

export default Contacts
