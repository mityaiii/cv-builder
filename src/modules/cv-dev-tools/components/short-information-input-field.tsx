import { TextInputWithIcon } from "components/UI"
import { ChildrenType } from "types"
import InputField from "./input-field"

function ShortInformationInputField ({ array, addValue, updateValue, updateIconSrc, removeValue, children }: 
  { array: Array<any>, addValue: Function, updateValue: Function, updateIconSrc: Function, removeValue: Function, children?: ChildrenType  }) {

  return (
    <InputField addValue={ addValue }>
      { children }
      <ul>
        { array.map((el, idx)  => 
          <li key={ el.id }>
            <TextInputWithIcon
              idx={ idx } 
              value={ el.title } 
              onChange={ (e: React.ChangeEvent<HTMLInputElement>) => updateValue({ idx: idx, newTitle: e.target.value }) } 
              updateIconSrc={ updateIconSrc }
              iconSrc={ el.iconSrc }/>
          </li>
        ) }
      </ul>
    </InputField>
  )
}

export default ShortInformationInputField