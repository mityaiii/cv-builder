import { RemoveButton, TextInputWithIcon } from "components/UI"
import { ChildrenType } from "types"
import InputField from "./input-field"

function ShortInformationInputField ({ array, addValue, updateValue, updateIconSrc, removeValue, children }: 
  { array: Array<any>, addValue: Function, updateValue: Function, updateIconSrc: Function, removeValue: Function, children?: ChildrenType  }) {

  return (
    <InputField addValue={ addValue }>
      { children }
      <ul>
        { array.map((el, idx)  => 
          <li key={ el.id } className="flex justify-between">
            <TextInputWithIcon
              idx={ idx } 
              value={ el.title } 
              onChange={ (e: React.ChangeEvent<HTMLInputElement>) => updateValue({ idx: idx, newTitle: e.target.value }) } 
              updateIconSrc={ updateIconSrc }
              iconSrc={ el.iconSrc }
              className='w-[90%]'
              isDeletable={ true }
            />

            <RemoveButton className="w-[28px]" removeValue={ () => removeValue({ idx: idx }) }/>
          </li>
        ) }
      </ul>
    </InputField>
  )
}

export default ShortInformationInputField