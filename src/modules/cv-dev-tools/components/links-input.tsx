import { useActions, useAppSelector } from '@/hooks/index'
import ShortInformationInputField from './short-information-input-field'

const LinksInput = () => {
  const { links } = useAppSelector(state => state.linksReducer)
  const { addLink, updateIconLinkSrc, updateLink, removeLink } = useActions()

  return (
    <ShortInformationInputField
      array={ links }
      addValue={ addLink }
      updateIconSrc={ updateIconLinkSrc }
      updateValue={ updateLink }
      removeValue={ removeLink }
    >
      <h2 className='pt-3 text-sm text-white text-center uppercase'> Hrefs to messengers </h2>
    </ShortInformationInputField>
  )
}

export default LinksInput