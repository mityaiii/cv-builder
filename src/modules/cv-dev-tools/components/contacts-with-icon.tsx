import { useActions, useAppSelector } from '@/hooks/index'
import { PhoneInput } from 'components/UI'
import ShortInformationInputField from './short-information-input-field'

const ContactsWithIcon = () => {
  const { contacts } = useAppSelector(state => state.contactsReducer)
  const { phoneNumber } = useAppSelector(state => state.cvReducer)
  const { addContact, updateIconSrc, updateContact, removeContact } = useActions()

  return (
      <ShortInformationInputField
        array={ contacts }
        addValue={ addContact }
        updateIconSrc={ updateIconSrc }
        updateValue={ updateContact }
        removeValue={ removeContact }
      >
      <h2 className='pt-3 text-sm text-white text-center uppercase'> Contacts </h2>
      <PhoneInput
        value={ phoneNumber }
        placeholder='+7(123)456-78-90'
      />
    </ShortInformationInputField>
  )
}

export default ContactsWithIcon