import { TextArea, TextInputWithIcon } from 'components/UI'
import { useActions, useAppSelector } from '@/hooks/index'
import { ChangeEvent } from 'react'

const ExtendedTextInput = ({ idx, title, content, iconSrc }: { idx: number, title: string, content: string, iconSrc: string | null }) => {
  const { updateExtendedTextTitle, updateExtendedTextContent, updateExtendedTextIcon} = useActions()

  return (
    <li>
      <TextInputWithIcon
        idx={idx}
        value={ title }
        iconSrc={ iconSrc }
        updateIconSrc={ updateExtendedTextIcon }
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => updateExtendedTextTitle({ idx: idx, newTitle: e.target.value }) } 
      />
      <TextArea
        value={ content }
        onChange={ (e: ChangeEvent<HTMLInputElement>) => updateExtendedTextContent({ content: e.target.value, idx: idx }) }
      />
    </li>
  )
}

export default ExtendedTextInput