import { useActions, useAppSelector } from '@/hooks/index'
import { AddButton, PhoneInput, TextInputWithIcon } from 'components/UI'

const ContactsWithIcon = () => {
  const { contacts } = useAppSelector(state => state.contactsReducer)
  const { phoneNumber } = useAppSelector(state => state.cvReducer)
  const { addContact, updateIconSrc, updateContact } = useActions()

  return (
    <div className='rounded-lg bg-sky-950 bg-opacity-50 px-2 mb-1 pb-[2px]'>
      <h2 className='pt-3 text-sm text-white text-center uppercase'> contacts </h2>
      <PhoneInput
      value={ phoneNumber }
      placeholder='+7(123)456-78-90'
      />
      
      { contacts.map((el, idx) => <TextInputWithIcon
      key={el.id}
      idx={idx} 
      value={el.contact}
      iconSrc={el.iconSrc}
      updateIconSrc={ updateIconSrc }
      onChange={ (e: React.ChangeEvent<HTMLInputElement>) => updateContact({idx: idx, contact: e.target.value}) }
      />
      ) }

      <AddButton addValue={ addContact } className='block mx-auto'></AddButton>
    </div>
  )
}

export default ContactsWithIcon