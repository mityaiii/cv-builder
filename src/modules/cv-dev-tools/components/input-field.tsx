import { AddButton } from 'components/UI'
import { ChildrenType } from 'types'

function InputField({ children, addValue }: { children: ChildrenType, addValue: Function }) {
  return (
    <div className='rounded-lg bg-sky-950 bg-opacity-50 px-2 mb-1 pb-[2px]'>
      { children }
      <div className='flex'>
        <AddButton addValue={ addValue } className='block mx-auto'/>
      </div>
    </div>
  )
}

export default InputField