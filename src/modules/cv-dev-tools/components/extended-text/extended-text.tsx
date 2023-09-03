import { RemoveButton, TextArea, TextInputWithIcon } from 'components/UI'
import { useActions } from '@/hooks/index'
import { ChangeEvent } from 'react'

const ExtendedTextInput = ({ idx, title, content, iconSrc }: { idx: number, title: string, content: string, iconSrc: string | null }) => {
  const { updateExtendedTextTitle, updateExtendedTextContent, updateExtendedTextIcon, removeExtendedText} = useActions()

  return (
    <li className='relative'>
      <div className='flex justify-between'>
        <TextInputWithIcon
          idx={idx}
          value={ title }
          iconSrc={ iconSrc }
          updateIconSrc={ updateExtendedTextIcon }
          onChange={ (e: React.ChangeEvent<HTMLInputElement>) => updateExtendedTextTitle({ idx: idx, newTitle: e.target.value }) } 
          isDeletable={ true }
          className='w-[90%]'
        />
        <RemoveButton removeValue={ () => removeExtendedText({ idx: idx }) } className='w-[28px]'/>
      </div>
      <TextArea
        value={ content }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => updateExtendedTextContent({ content: e.target.value, idx: idx }) }
      />
    </li>
  )
}

export default ExtendedTextInput