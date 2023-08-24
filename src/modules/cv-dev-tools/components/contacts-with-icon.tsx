import { useAppSelector } from '@/hooks/store.hooks'

const ContactsWithIcon = () => {
  const { contacts } = useAppSelector(state => state.contactsReducer)

  return (
    <div>
      <p>aad</p>
    </div>
  )
}

export default ContactsWithIcon