import InputField from '../input-field'
import { useActions, useAppSelector } from '@/hooks/index'
import ExtendedTextInput from './extended-text';

function ExtendedTextFieldInput() {
  const { addExtendedText } = useActions()

  const { extendedTexts } = useAppSelector(state => state.extendedTextReducer);

  return (
    <InputField addValue={ addExtendedText }>
      <ul>
        { extendedTexts.map((el, idx) =>
          <ExtendedTextInput
            key={ el.id }
            idx={ idx }
            title={ el.title }
            content={ el.content }
            iconSrc={ el.iconSrc }
          />
        ) }

      </ul>
    </InputField>
  )
}

export default ExtendedTextFieldInput